// AI disclosure (NASA Space Apps SI rules): written by Team 3M with AI coding assistance from Claude (Anthropic).
// "Before we start": 3 quick questions (the same as the first 3 of the final quiz), so each child can see
// how much they learned. With a one-tap opt-in, we also send the age group and the answers, anonymously,
// to the team's Google Sheet. No names, no accounts, nothing that identifies a child.
import { FINAL_QUIZ } from './content.js';
import { T } from './ui.js';

// Google Apps Script web app (writes only to the team's own sheet). Empty = send nothing.
const ENDPOINT = window.__tlfTestEndpoint || 'https://script.google.com/macros/s/AKfycbx7W25ft4s0DyyvrDveFYW-Tfjfm_gSlRbrE-LdjniFFARYehlQlxXaL1nKkIWaYXMF/exec';
export const VERSION = '2026.11.18';
const AGES = ['Under 10', '10–11', '12–13', '14–15', 'Over 15'];
const PRE_N = 3;
const QKEY = 'tlf_queue';
// team trials: ?test, our private preview and local runs are flagged so the analysis leaves them out
const TEST = /[?&]test\b/.test(location.search) || /claude|localhost|127\.0\.0\.1/.test(location.hostname);

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const digits = (n, L) => (L === 'ar' ? String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]) : String(n));
function shuffled(a) { const r = a.map((x, i) => [x, i]); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; }

// ---------- sending (only with consent) ----------
const store = {
  get() { try { return JSON.parse(localStorage.getItem(QKEY) || '[]'); } catch { return []; } },
  set(q) { try { if (q.length) localStorage.setItem(QKEY, JSON.stringify(q.slice(-20))); else localStorage.removeItem(QKEY); } catch { /* storage off: just drop */ } },
};
async function post(msg) {
  await fetch(ENDPOINT, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(msg), keepalive: true });
}
async function flush() {
  if (!ENDPOINT) return;
  const q = store.get(); if (!q.length || !navigator.onLine) return;
  const left = [];
  for (const m of q) { try { await post(m); } catch { left.push(m); } }
  store.set(left);
}
function send(msg) {
  if (!ENDPOINT) return;
  store.set([...store.get(), msg]);
  flush();
}
window.addEventListener('online', flush);
flush();

export function createLearn({ getLang, audio, onOpen, onClose, onQuestions }) {
  const S = { consent: false, age: null, path: '', session: null, pre: null, post: null, t0: 0, done: false, shown: false };

  // ---------- the "before we start" dialog ----------
  const root = document.createElement('div');
  root.id = 'pre'; root.className = 'modal'; root.hidden = true;
  root.innerHTML = `<div class="modal-card glass" role="dialog" aria-modal="true" aria-labelledby="pre-title">
    <header class="sheet-head"><div><span class="eyebrow-sm" id="pre-eye"></span><h2 id="pre-title"></h2></div></header>
    <div id="pre-body"></div></div>`;
  document.body.appendChild(root);
  const body = root.querySelector('#pre-body');
  let step = 'intro', q = 0, order = [], answers = [], then = null;

  function render() {
    const L = getLang();
    root.querySelector('#pre-eye').textContent = T('preEyebrow', L);
    root.querySelector('#pre-title').textContent = T('preTitle', L);
    if (step === 'intro') {
      body.innerHTML = `<p class="pre-p">${T('preIntro', L)}</p>
        <div class="consent">
          <label class="c-check"><input type="checkbox" id="pre-ok" ${S.consent ? 'checked' : ''}><span>${T('consentLabel', L)}</span></label>
          <fieldset class="ages" ${S.consent ? '' : 'hidden'}><legend>${T('ageQ', L)}</legend>
            <div class="age-row">${AGES.map((a, i) => `<label class="age"><input type="radio" name="pre-age" value="${i}" ${S.age === a ? 'checked' : ''}><span>${T('age' + i, L)}</span></label>`).join('')}</div>
          </fieldset>
          <p class="pre-err" id="pre-err" role="alert"></p>
        </div>
        <div class="pre-acts"><button type="button" class="primary" data-act="start">${T('preStart', L)}</button><button type="button" class="ghost" data-act="skip">${T('preSkip', L)}</button></div>`;
      return;
    }
    if (step === 'q') {
      const it = FINAL_QUIZ[q];
      order = shuffled(it.options);
      body.innerHTML = `
        <div class="g-steps" aria-hidden="true">${Array.from({ length: PRE_N }, (_, i) => `<i class="${i < q ? 'done' : i === q ? 'now' : ''}"></i>`).join('')}</div>
        <p class="fq-n">${T('qOf', L).replace('{n}', digits(q + 1, L)).replace('{t}', digits(PRE_N, L))}</p>
        <p class="g-s" id="pre-s">${esc(it.s[L])}</p>
        <div class="g-opts" role="group" aria-labelledby="pre-s">${order.map(([o], i) => `<button type="button" data-o="${i}">${esc(o.t[L])}</button>`).join('')}</div>
        <p class="small">${T('preNoAnswer', L)}</p>`;
      return;
    }
    body.innerHTML = `<div class="g-done"><div class="badge" aria-hidden="true">✓</div><h3>${T('preDoneTitle', L)}</h3><p>${T('preDone', L)}</p>
      <button type="button" class="primary" data-act="go">${T('preGo', L)}</button></div>`;
  }
  const focusFirst = () => (body.querySelector('.g-opts button, [data-act="go"], #pre-ok'))?.focus({ preventScroll: true });

  function finishIntro(skip) {
    const ok = body.querySelector('#pre-ok').checked;
    const ageI = body.querySelector('input[name="pre-age"]:checked')?.value;
    if (ok && ageI == null) {
      body.querySelector('#pre-err').textContent = T('ageNeeded', getLang());
      body.querySelector('.age input')?.focus({ preventScroll: true });
      return;
    }
    S.consent = ok; S.age = ok ? AGES[+ageI] : null;
    if (S.consent && !S.session) S.session = Array.from(crypto.getRandomValues(new Uint8Array(12)), (b) => (b % 36).toString(36)).join('');
    if (skip) { report(); close(); return; }
    step = 'q'; q = 0; answers = []; render(); focusFirst();
    onQuestions?.(); // SOL stops talking once the child is on the questions
  }

  body.addEventListener('change', (e) => {
    if (e.target.id === 'pre-ok') { body.querySelector('.ages').hidden = !e.target.checked; body.querySelector('#pre-err').textContent = ''; }
    if (e.target.name === 'pre-age') body.querySelector('#pre-err').textContent = '';
  });
  body.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.act === 'start') finishIntro(false);
    if (b.dataset.act === 'skip') finishIntro(true);
    if (b.dataset.act === 'go') close();
    if (b.dataset.o != null) {
      answers.push(order[+b.dataset.o][0].ok ? 1 : 0);
      audio?.beep(1);
      if (++q < PRE_N) { render(); focusFirst(); return; }
      S.pre = answers.slice();
      report();
      step = 'done'; render(); focusFirst();
    }
  });
  // Esc = skip (never traps a child here)
  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || root.hidden) return;
    e.stopImmediatePropagation();
    if (step === 'intro') { S.consent = false; S.age = null; }
    close();
  }, true);

  function open(path, next) {
    S.path = path; then = next;
    if (S.shown) { next(); return; }
    S.shown = true; S.t0 = performance.now();
    step = 'intro'; render();
    root.hidden = false; void root.offsetWidth; root.classList.add('open');
    focusFirst();
    onOpen?.();
  }
  function close() {
    if (root.hidden) return;
    root.classList.remove('open');
    setTimeout(() => { if (!root.classList.contains('open')) root.hidden = true; }, 200);
    onClose?.();
    const n = then; then = null; n?.();
  }

  // one message per moment; the sheet merges them into one row by session id
  function report(extra = {}) {
    if (!S.consent || !S.session) return;
    send({ session: S.session, lang: getLang(), age: S.age, path: S.path, pre: S.pre, post: S.post, minutes: S.t0 ? (performance.now() - S.t0) / 60000 : null, test: TEST, version: VERSION, ...extra });
  }

  return {
    open,
    get isOpen() { return !root.hidden; },
    refresh() { if (!root.hidden && step !== 'q') render(); },
    // the final quiz: bits in FINAL_QUIZ order
    quizDone(bits) {
      if (!bits || S.post) return;
      S.post = bits.slice(); report();
    },
    finished() { if (S.done) return; S.done = true; report({ finished: true }); },
    // "before 1/3 → after 3/3" for the score screen (null if the child skipped the questions)
    compare(bits) { return S.pre && bits ? { before: S.pre.reduce((a, b) => a + b, 0), after: bits.slice(0, PRE_N).reduce((a, b) => a + b, 0), n: PRE_N } : null; },
    get consent() { return S.consent; },
  };
}
