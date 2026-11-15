import { TIMELINES, SOL18, QUIZ, CARDS, SOURCES, COMPARE } from './content.js';
import { T } from './ui.js';

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const num = (n, L) => (L === 'ar' ? Number(n).toLocaleString('ar-EG') : Number(n).toLocaleString('en-US'));

// unhide, force a style flush, then add .open so the CSS transition actually runs
function reveal(el) { el.hidden = false; void el.offsetWidth; el.classList.add('open'); }
function conceal(el, ms) { el.classList.remove('open'); setTimeout(() => { if (!el.classList.contains('open')) el.hidden = true; }, ms); }

export function createExplore({ getLang, onBadge, audio, onClose }) {
  const sheet = $('#explore'), body = $('#explore-body'), title = $('#explore-title');
  const game = $('#game'), gameBody = $('#game-body');
  const about = $('#about'), aboutBody = $('#about-body');
  const cmp = $('#compare'), cmpBody = $('#compare-body');
  let current = null, lastFocus = null;

  // ---------- explore sheet ----------
  function timelineHTML(id, L) {
    const tl = TIMELINES[id];
    const ratio = tl.actual / tl.planned;
    const times = Math.floor(ratio);
    const planPct = Math.max(1.2, (tl.planned / tl.actual) * 100);
    const items = tl.items.map((it) => `
      <li class="${it.plan ? 'plan' : ''} ${it.end ? 'end' : ''}">
        <span class="d">${esc(it.date[L])}</span>
        <span class="t">${esc(it.t[L])}</span>
        ${it.game ? `<button type="button" class="mini" data-act="game">${T('playGame', L)}</button>` : ''}
        ${it.photo ? `<button type="button" class="mini" data-act="photo">${T('seePhoto', L)}</button>` : ''}
      </li>`).join('');
    return `
      <section class="ex-sec">
        <h3>${T('myLife', L)}</h3>
        <div class="life" role="img" aria-label="${esc(T('lifeAria', L).replace('{a}', num(tl.actual, L)).replace('{p}', num(tl.planned, L)))}">
          <div class="life-track"><div class="life-fill"></div><div class="life-plan" style="inset-inline-start:${planPct}%"><i></i><span>${T('plannedStop', L)}</span></div></div>
          <div class="life-legend"><span>${T('planned', L)}: <b>${num(tl.planned, L)}</b> ${tl.unit[L]}</span><span>${T('actual', L)}: <b>${num(tl.actual, L)}</b> ${tl.unit[L]}</span></div>
          <p class="life-x">${T('timesLonger', L).replace('{n}', num(times, L))}</p>
        </div>
        <ol class="tl">${items}</ol>
      </section>`;
  }

  function cardsHTML(id, L) {
    return (CARDS[id] || []).map((c) => `
      <section class="ex-sec card" id="card-${c.k}">
        <h3>${esc(c.title[L])}</h3>
        ${c.img ? `<figure><img src="${c.img}" width="${c.w}" height="${c.h}" alt="${esc(T('photoAlt', L))}" loading="lazy" decoding="async"><figcaption>${esc(c.credit)}</figcaption></figure>` : ''}
        <p>${esc(c.body[L])}</p>
      </section>`).join('');
  }

  function quizHTML(L) {
    return `<section class="ex-sec quiz"><h3>${T('mythOrFact', L)}</h3>${QUIZ.map((q, i) => `
      <div class="q" data-q="${i}">
        <p class="qs">${esc(q.s[L])}</p>
        <div class="qa"><button type="button" data-ans="1">${T('fact', L)}</button><button type="button" data-ans="0">${T('myth', L)}</button></div>
        <p class="qw" aria-live="polite"></p>
      </div>`).join('')}</section>`;
  }

  function render() {
    if (!current) return;
    const L = getLang();
    title.textContent = current.name;
    body.innerHTML = timelineHTML(current.id, L) + cardsHTML(current.id, L)
      + (current.id === 'opportunity' ? quizHTML(L) : '')
      + (current.id === 'spirit' ? `<section class="ex-sec"><h3>${T('gameTitle', L)}</h3><p>${T('gameIntro', L)}</p><button type="button" class="primary" data-act="game">${T('playGame', L)}</button></section>` : '')
      + `<section class="ex-sec"><h3>${T('compareTitle', L)}</h3><p>${T('compareIntro', L)}</p><button type="button" class="primary" data-act="compare">${T('compareBtn', L)}</button></section>`;
    requestAnimationFrame(() => sheet.querySelector('.life-fill')?.classList.add('go'));
  }

  function open(rover) {
    current = { id: rover.id, name: rover.data.name };
    lastFocus = document.activeElement;
    render();
    reveal(sheet);
    body.scrollTop = 0;
    sheet.querySelector('.ex-close').focus({ preventScroll: true });
  }
  function close() {
    if (sheet.hidden) return;
    conceal(sheet, 220);
    lastFocus?.focus?.({ preventScroll: true });
    onClose?.();
  }

  body.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.act === 'game') openGame();
    if (b.dataset.act === 'compare') openCompare();
    if (b.dataset.act === 'photo') document.getElementById('card-photo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (b.dataset.ans != null) {
      const box = b.closest('.q'); const q = QUIZ[+box.dataset.q]; const L = getLang();
      const right = (b.dataset.ans === '1') === q.answer;
      box.querySelectorAll('button').forEach((x) => { x.disabled = true; });
      b.classList.add(right ? 'right' : 'wrong');
      const w = box.querySelector('.qw');
      w.textContent = `${right ? T('correct', L) : T('notQuite', L)} ${q.why[L]}`;
      audio.beep(right ? 2 : 0);
    }
  });
  sheet.querySelector('.ex-close').addEventListener('click', close);

  // ---------- Sol 18 game ----------
  let step = 0;
  function renderGame() {
    const L = getLang();
    if (step >= SOL18.length) {
      gameBody.innerHTML = `<div class="g-done"><div class="badge" aria-hidden="true">★</div><h3>${T('savedSpirit', L)}</h3><p>${esc(SOL18[SOL18.length - 1].done[L])}</p><button type="button" class="primary" data-act="close">${T('back', L)}</button></div>`;
      onBadge?.('sol18');
      return;
    }
    const st = SOL18[step];
    gameBody.innerHTML = `
      <div class="g-steps" aria-hidden="true">${SOL18.map((_, i) => `<i class="${i < step ? 'done' : i === step ? 'now' : ''}"></i>`).join('')}</div>
      <p class="g-s">${esc(st.s[L])}</p>
      <div class="g-opts">${st.options.map((o, i) => `<button type="button" data-o="${i}">${esc(o.t[L])}</button>`).join('')}</div>
      <p class="g-fb" aria-live="polite"></p>`;
  }
  function openGame() {
    step = 0; renderGame();
    reveal(game);
    game.querySelector('.g-close').focus({ preventScroll: true });
  }
  function closeGame() { conceal(game, 200); sheet.querySelector('[data-act="game"]')?.focus({ preventScroll: true }); }
  gameBody.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.act === 'close') { closeGame(); return; }
    if (b.dataset.o == null) return;
    const L = getLang(); const st = SOL18[step]; const o = st.options[+b.dataset.o];
    const fb = gameBody.querySelector('.g-fb');
    if (o.ok) {
      b.classList.add('right'); gameBody.querySelectorAll('.g-opts button').forEach((x) => { x.disabled = true; });
      fb.textContent = st.done[L]; audio.beep(2);
      setTimeout(() => { step++; renderGame(); }, 2300);
    } else {
      b.classList.add('wrong'); b.disabled = true; fb.textContent = o.why[L]; audio.beep(0);
    }
  });
  game.querySelector('.g-close').addEventListener('click', closeGame);

  // ---------- side-by-side comparison ----------
  function renderCompare() {
    const L = getLang(); const me = current ? COMPARE.rovers.indexOf(current.id) : -1;
    cmpBody.innerHTML = `<div class="cmp-wrap"><table class="cmp"><caption class="sr-only">${T('compareTitle', L)}</caption>
      <thead><tr><td></td>${COMPARE.names.map((n, i) => `<th scope="col" class="${i === me ? 'me' : ''}" translate="no">${n}</th>`).join('')}</tr></thead>
      <tbody>${COMPARE.rows.map((r) => `<tr><th scope="row">${T(r.k, L)}</th>${r.v.map((v, i) => `<td class="${i === me ? 'me' : ''}">${esc(v[L])}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
      <p class="small">${T('compareNote', L)}</p>`;
  }
  function openCompare() { renderCompare(); reveal(cmp); cmp.querySelector('.cmp-close').focus({ preventScroll: true }); }
  function closeCompare() { conceal(cmp, 200); sheet.querySelector('[data-act="compare"]')?.focus({ preventScroll: true }); }
  cmp.querySelector('.cmp-close').addEventListener('click', closeCompare);
  cmp.addEventListener('click', (e) => { if (e.target === cmp) closeCompare(); });

  // ---------- About / sources / teachers / AI ----------
  let aboutTab = 'project';
  function renderAbout() {
    const L = getLang();
    const tabs = ['project', 'teacher', 'sources', 'ai'];
    const content = {
      project: `<p>${T('aboutP1', L)}</p><p>${T('aboutP2', L)}</p><ul>${['aboutL1', 'aboutL5', 'aboutL2', 'aboutL3', 'aboutL4'].map((k) => `<li>${T(k, L)}</li>`).join('')}</ul><p class="team">${T('teamLine', L)}</p>`,
      teacher: `<p>${T('teachP1', L)}</p><ol>${['teach1', 'teach2', 'teach3', 'teach4'].map((k) => `<li>${T(k, L)}</li>`).join('')}</ol><p>${T('teachQ', L)}</p><ul>${['teachQ1', 'teachQ2', 'teachQ3'].map((k) => `<li>${T(k, L)}</li>`).join('')}</ul>`,
      sources: `<ul class="src">${SOURCES.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join('')}</ul><p class="small">${T('factNote', L)}</p>`,
      ai: `<p>${T('aiP1', L)}</p><ul>${['ai1', 'ai2', 'ai3', 'ai4'].map((k) => `<li>${T(k, L)}</li>`).join('')}</ul>`,
    };
    aboutBody.innerHTML = `<div class="tabs" role="tablist">${tabs.map((t) => `<button type="button" role="tab" id="tab-${t}" aria-controls="tabpanel" aria-selected="${t === aboutTab}" tabindex="${t === aboutTab ? 0 : -1}" data-tab="${t}">${T('tab_' + t, L)}</button>`).join('')}</div><div class="tabpanel" id="tabpanel" role="tabpanel" aria-labelledby="tab-${aboutTab}" tabindex="0">${content[aboutTab]}</div>`;
  }
  let aboutFocus = null;
  function openAbout() { aboutFocus = document.activeElement; renderAbout(); reveal(about); about.querySelector('.ab-close').focus({ preventScroll: true }); }
  function closeAbout() { conceal(about, 200); aboutFocus?.focus?.({ preventScroll: true }); }
  aboutBody.addEventListener('click', (e) => { const b = e.target.closest('[data-tab]'); if (b) { aboutTab = b.dataset.tab; renderAbout(); aboutBody.querySelector(`[data-tab="${aboutTab}"]`)?.focus({ preventScroll: true }); } });
  // arrow keys move between the tabs (WAI-ARIA tabs pattern)
  aboutBody.addEventListener('keydown', (e) => {
    if (!e.target.closest('[role=tab]') || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return;
    const tabs = ['project', 'teacher', 'sources', 'ai']; const rtl = document.documentElement.dir === 'rtl';
    const step = (e.key === 'ArrowRight') !== rtl ? 1 : -1;
    aboutTab = tabs[(tabs.indexOf(aboutTab) + step + tabs.length) % tabs.length]; renderAbout();
    aboutBody.querySelector(`[data-tab="${aboutTab}"]`)?.focus(); e.preventDefault();
  });
  about.querySelector('.ab-close').addEventListener('click', closeAbout);
  about.addEventListener('click', (e) => { if (e.target === about) closeAbout(); });
  game.addEventListener('click', (e) => { if (e.target === game) closeGame(); });

  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!game.hidden) closeGame(); else if (!cmp.hidden) closeCompare(); else if (!about.hidden) closeAbout(); else if (!sheet.hidden) close();
  });

  return {
    open, close, openAbout, closeAbout,
    refresh() { if (!sheet.hidden) render(); if (!about.hidden) renderAbout(); if (!game.hidden) renderGame(); if (!cmp.hidden) renderCompare(); },
    get isOpen() { return !sheet.hidden || !game.hidden || !about.hidden || !cmp.hidden; },
  };
}
