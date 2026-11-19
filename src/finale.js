// AI disclosure (NASA Space Apps SI rules): written by Team 3M with AI coding assistance from Claude (Anthropic).
// "From footprint to footprint" (what each mission passed on to the next) and the final "What did you learn?" quiz.
import { LEGACY, FINAL_QUIZ } from './content.js';
import { T } from './ui.js';
import { srcButton } from './sources.js';

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const digits = (n, L) => (L === 'ar' ? String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]) : String(n));

function reveal(el) { el.hidden = false; void el.offsetWidth; el.classList.add('open'); }
function conceal(el, ms) { el.classList.remove('open'); setTimeout(() => { if (!el.classList.contains('open')) el.hidden = true; }, ms); }

// in the order the options were written, the right answer would always sit in the same place: shuffle once per quiz
function shuffled(a) { const b = a.map((x, i) => [x, i]); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }

export function createFinale({ getLang, audio, onQuizDone, onQuizOpen, onLegacyClosed, compare }) {
  const lg = $('#legacy'), lgBody = $('#legacy-body');
  const fq = $('#fquiz'), fqBody = $('#fquiz-body');
  const N = LEGACY.length; // + one more step: "you"
  let at = 0, mode = 'ending', back = null, finished = false;

  // ---------- the chain ----------
  function renderLegacy(focusNode) {
    const L = getLang();
    const you = at === N;
    const nodes = [...LEGACY.map((m) => ({ year: m.year, name: m.name })), { year: '', name: T('youNode', L) }];
    const chain = `<ol class="chain">${nodes.map((n, i) => `
      <li class="${i < at ? 'done' : ''} ${i === at ? 'now' : ''} ${i === N ? 'you' : ''}"><button type="button" class="node" data-go="${i}" ${i === at ? 'aria-current="step"' : ''}>
        <svg viewBox="0 0 20 26" aria-hidden="true"><use href="#fp"/></svg><span class="y">${n.year ? digits(n.year, L) : esc(n.name)}</span>${n.year ? `<span class="nm" translate="no"> ${esc(n.name)}</span>` : ''}</button></li>`).join('')}</ol>`;
    let card;
    if (!you) {
      const m = LEGACY[at], nxt = LEGACY[at + 1];
      const tag = m.ended ? `${T('missionEnded', L)} · ${digits(m.year, L)}` : `${T('active', L)} · ${T('since', L)} ${digits(m.year, L)}`;
      card = `<div class="lg-card" data-k="${at}">
        <div class="lg-head"><h3 translate="no">${m.name}</h3><span class="lg-tag ${m.ended ? '' : 'live'}">${tag}</span></div>
        <div class="lg-block"><h4>${T('legacyFound', L)}</h4><p>${esc(m.found[L])}</p></div>
        <div class="lg-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg></div>
        <div class="lg-block gave"><h4>${T('legacyGave', L)}${nxt ? ` <span class="to" translate="no">→ ${nxt.name}</span>` : ''}</h4><p>${esc(m.gave[L])}</p></div>
        <p class="lg-fact src-line"><span class="pill">${T('factLabel', L)}</span> ${srcButton(m.src, L)}</p>
      </div>`;
    } else {
      card = `<div class="lg-card you" data-k="you">
        <svg class="lg-you" viewBox="0 0 20 26" aria-hidden="true"><use href="#fp"/></svg>
        <h3>${T('youTitle', L)}</h3><p>${T('youBody', L)}</p></div>`;
    }
    const last = you ? (mode === 'ending' ? `<button type="button" class="primary" data-act="quiz">${T('toQuiz', L)}</button>` : `<button type="button" class="primary" data-act="close">${T('back', L)}</button>`)
      : `<button type="button" class="primary" data-act="next">${T('next', L)}</button>`;
    lgBody.innerHTML = `${chain}<div class="lg-stage" aria-live="polite">${card}</div>
      <div class="lg-nav"><button type="button" class="ghost" data-act="prev" ${at === 0 ? 'disabled' : ''}>${T('prev', L)}</button>${last}</div>`;
    if (focusNode) lgBody.querySelector(`[data-go="${at}"]`)?.focus({ preventScroll: true });
  }
  function go(i, focusNode) {
    at = Math.max(0, Math.min(N, i));
    renderLegacy(focusNode);
    audio.beep(1);
  }
  lgBody.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.go != null) { go(+b.dataset.go, true); return; }
    if (b.dataset.act === 'next') { go(at + 1); lgBody.querySelector('[data-act="next"],[data-act="quiz"],[data-act="close"]')?.focus({ preventScroll: true }); }
    if (b.dataset.act === 'prev') { go(at - 1); (lgBody.querySelector('[data-act="prev"]:not([disabled])') || lgBody.querySelector('[data-act="next"]'))?.focus({ preventScroll: true }); }
    if (b.dataset.act === 'quiz') { conceal(lg, 200); openQuiz(); }
    if (b.dataset.act === 'close') closeLegacy();
  });
  // arrow keys move along the chain (mirrored in Arabic)
  lgBody.addEventListener('keydown', (e) => {
    if (!e.target.closest('.chain') || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return;
    const rtl = document.documentElement.dir === 'rtl';
    go(at + ((e.key === 'ArrowRight') !== rtl ? 1 : -1), true); e.preventDefault();
  });
  function openLegacy(opts = {}) {
    mode = opts.mode || 'ending'; at = opts.at ?? 0;
    back = document.activeElement;
    renderLegacy();
    reveal(lg);
    lg.querySelector('.lg-close').focus({ preventScroll: true });
  }
  function closeLegacy() {
    if (lg.hidden) return;
    conceal(lg, 200);
    back?.focus?.({ preventScroll: true });
    onLegacyClosed?.(mode);
  }
  lg.querySelector('.lg-close').addEventListener('click', closeLegacy);
  lg.addEventListener('click', (e) => { if (e.target === lg) closeLegacy(); });

  // ---------- the final quiz ----------
  let q = 0, score = 0, order = [], bits = [];
  function renderQuiz() {
    const L = getLang(), total = FINAL_QUIZ.length;
    if (q >= total) {
      const pct = score / total;
      const msg = pct === 1 ? 'scoreAll' : pct >= 0.6 ? 'scoreGood' : 'scoreTry';
      fqBody.innerHTML = `<div class="g-done fq-done">
        <div class="fq-ring" style="--p:${pct}" aria-hidden="true"><b>${digits(score, L)}</b><span>/ ${digits(total, L)}</span></div>
        <h3>${T('scoreLine', L).replace('{n}', digits(score, L)).replace('{t}', digits(total, L))}</h3>
        <p>${T(msg, L)}</p>
        ${(() => { const c = compare?.(bits); if (!c) return ''; const f = (k) => `${digits(k, L)} / ${digits(c.n, L)}`;
          return `<div class="fq-cmp" role="group" aria-label="${T('beforeAfter', L).replace('{b}', digits(c.before, L)).replace('{a}', digits(c.after, L)).replace(/\{n\}/g, digits(c.n, L))}">
            <span class="cap" aria-hidden="true">${T('cmpCap', L)}</span>
            <div class="row" aria-hidden="true"><span class="col"><b>${f(c.before)}</b>${T('cmpBefore', L)}</span><span class="arr">${L === 'ar' ? '←' : '→'}</span><span class="col after"><b>${f(c.after)}</b>${T('cmpAfter', L)}</span></div></div>`; })()}
        <div class="fq-acts"><button type="button" class="primary" data-act="finish">${T('leaveFootprint', L)}</button><button type="button" class="ghost" data-act="again">${T('quizAgain', L)}</button></div></div>`;
      if (!finished) { finished = true; onQuizDone?.(score, total, bits.slice()); }
      fqBody.querySelector('[data-act="finish"]').focus({ preventScroll: true });
      return;
    }
    const it = FINAL_QUIZ[q];
    order = shuffled(it.options);
    fqBody.innerHTML = `
      <div class="g-steps" aria-hidden="true">${FINAL_QUIZ.map((_, i) => `<i class="${i < q ? 'done' : i === q ? 'now' : ''}"></i>`).join('')}</div>
      <p class="fq-n">${T('qOf', L).replace('{n}', digits(q + 1, L)).replace('{t}', digits(total, L))}</p>
      <p class="g-s" id="fq-s">${esc(it.s[L])}</p>
      <div class="g-opts" role="group" aria-labelledby="fq-s">${order.map(([o], i) => `<button type="button" data-o="${i}">${esc(o.t[L])}</button>`).join('')}</div>
      <p class="g-fb" aria-live="polite"></p>
      <div class="fq-next"></div>`;
  }
  function openQuiz() {
    q = 0; score = 0; bits = []; finished = false; onQuizOpen?.();
    renderQuiz();
    reveal(fq);
    fq.querySelector('.g-opts button')?.focus({ preventScroll: true });
  }
  function closeQuiz() {
    if (fq.hidden) return;
    conceal(fq, 200);
    // leaving before the end still lets the student go on to the certificate
    if (!finished) { finished = true; onQuizDone?.(null, FINAL_QUIZ.length); }
  }
  fqBody.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    const L = getLang();
    if (b.dataset.act === 'finish') { conceal(fq, 200); return; }
    if (b.dataset.act === 'again') { finished = true; q = 0; score = 0; bits = []; renderQuiz(); fq.querySelector('.g-opts button')?.focus({ preventScroll: true }); return; }
    if (b.dataset.act === 'nextq') { q++; renderQuiz(); (fq.querySelector('.g-opts button') || fq.querySelector('[data-act="finish"]'))?.focus({ preventScroll: true }); return; }
    if (b.dataset.o == null) return;
    const it = FINAL_QUIZ[q], [o] = order[+b.dataset.o];
    const right = !!o.ok;
    if (right) score++;
    bits[q] = right ? 1 : 0;
    fqBody.querySelectorAll('.g-opts button').forEach((x, i) => { x.disabled = true; if (order[i][0].ok) x.classList.add('right'); });
    if (!right) b.classList.add('wrong');
    fqBody.querySelector('.g-fb').innerHTML = `<b>${right ? T('correct', L) : T('notQuite', L)}</b> ${esc(it.why[L])}`;
    const last = q === FINAL_QUIZ.length - 1;
    fqBody.querySelector('.fq-next').innerHTML = `<button type="button" class="primary" data-act="nextq">${T(last ? 'seeScore' : 'nextQ', L)}</button>`;
    fqBody.querySelector('[data-act="nextq"]').focus({ preventScroll: true });
    audio.beep(right ? 2 : 0);
  });
  fq.querySelector('.fq-close').addEventListener('click', closeQuiz);

  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!fq.hidden) closeQuiz(); else if (!lg.hidden) closeLegacy();
  });

  return {
    openLegacy, closeLegacy, openQuiz,
    close() { if (!fq.hidden) conceal(fq, 200); if (!lg.hidden) conceal(lg, 200); },
    refresh() { if (!lg.hidden) renderLegacy(); if (!fq.hidden && q < FINAL_QUIZ.length && !fqBody.querySelector('.g-opts button:disabled')) renderQuiz(); },
    get isOpen() { return !lg.hidden || !fq.hidden; },
  };
}
