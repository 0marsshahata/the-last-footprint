// AI disclosure (NASA Space Apps SI rules): written by Team 3M with AI coding assistance from Claude (Anthropic).
import { TIMELINES, SOL18, QUIZ, CARDS, SOURCES, COMPARE, LAST } from './content.js';
import { T } from './ui.js';
import { srcButton } from './sources.js';

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const num = (n, L) => (L === 'ar' ? Number(n).toLocaleString('ar-EG') : Number(n).toLocaleString('en-US'));

// unhide, force a style flush, then add .open so the CSS transition actually runs
function reveal(el) { el.hidden = false; void el.offsetWidth; el.classList.add('open'); }
function conceal(el, ms) { el.classList.remove('open'); setTimeout(() => { if (!el.classList.contains('open')) el.hidden = true; }, ms); }

export function createExplore({ getLang, onBadge, audio, onClose, onLegacy, say, stopSay }) {
  const sheet = $('#explore'), body = $('#explore-body'), title = $('#explore-title');
  const game = $('#game'), gameBody = $('#game-body');
  const about = $('#about'), aboutBody = $('#about-body');
  const cmp = $('#compare'), cmpBody = $('#compare-body');
  let current = null, lastFocus = null, tab = 'life';
  const visible = (q) => [...sheet.querySelectorAll(q)].find((b) => b.offsetParent !== null);
  const TABS = ['life', 'finds', 'last', 'play'];

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
      <section class="ex-sec card ${c.legacy != null ? 'legacy' : ''}" id="card-${c.k}">
        <h3>${esc(c.title[L])}</h3>
        ${c.img ? `<figure><img src="${c.img}" width="${c.w}" height="${c.h}" alt="${esc(T('photoAlt', L))}" loading="lazy" decoding="async"><figcaption>${esc(c.credit)}</figcaption></figure>` : ''}
        <p>${esc(c.body[L])}</p>
        ${c.src ? `<p class="src-line"><span class="pill">${T('factLabel', L)}</span> ${srcButton(c.src, L)}</p>` : ''}
        ${c.legacy != null ? `<button type="button" class="primary" data-act="legacy" data-at="${c.legacy}">${T('seeChain', L)}</button>` : ''}
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

  // ---------- the last footprint: last place / where it is now ----------
  function lastHTML(id, L) {
    const d = LAST[id]; if (!d) return '';
    const fig = (v, alt) => v.img ? `<figure class="${v.mark ? 'marked' : ''}"><div class="fig-wrap"><img src="${v.img}" width="${v.w}" height="${v.h}" alt="${esc(alt)}" loading="lazy" decoding="async">${v.mark ? `<span class="pin" style="left:${v.mark[0]}%;top:${v.mark[1]}%" aria-hidden="true"></span>` : ''}</div><figcaption>${esc(v.credit)}</figcaption></figure>` : '';
    const part = (v, h, alt, k) => `<section class="ex-sec card">
        <h3>${T(h, L)}</h3>${fig(v, T(alt, L))}<p>${esc(v[L])}</p>
        <button type="button" class="mini say" data-act="say" data-part="${k}"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z"/></svg>${T('listen', L)}</button>
        <p class="src-line"><span class="pill">${T('factLabel', L)}</span> ${srcButton(v.src, L)}</p></section>`;
    return part(d.last, 'lastTitle', 'lastImgAlt', 'last') + part(d.now, 'nowTitle', 'nowImgAlt', 'now');
  }

  function playHTML(id, L) {
    return (id === 'spirit' ? `<section class="ex-sec"><h3>${T('gameTitle', L)}</h3><p>${T('gameIntro', L)}</p><button type="button" class="primary" data-act="game">${T('playGame', L)}</button></section>` : '')
      + (id === 'opportunity' ? quizHTML(L) : '')
      + `<section class="ex-sec"><h3>${T('compareTitle', L)}</h3><p>${T('compareIntro', L)}</p><button type="button" class="primary" data-act="compare">${T('compareBtn', L)}</button></section>`;
  }

  function render() {
    if (!current) return;
    const L = getLang(), id = current.id;
    title.textContent = current.name;
    const panes = { life: timelineHTML(id, L), finds: cardsHTML(id, L), last: lastHTML(id, L), play: playHTML(id, L) };
    body.innerHTML = `<div class="ex-tabs" role="tablist" aria-label="${T('exploreBtn', L)}">${TABS.map((k) => `<button type="button" role="tab" id="ext-${k}" aria-controls="exp-${k}" aria-selected="${k === tab}" tabindex="${k === tab ? 0 : -1}">${T('tab_' + k, L)}</button>`).join('')}</div>`
      + TABS.map((k) => `<div class="ex-pane" role="tabpanel" id="exp-${k}" aria-labelledby="ext-${k}" ${k === tab ? '' : 'hidden'}>${panes[k]}</div>`).join('');
    if (tab === 'life') requestAnimationFrame(() => sheet.querySelector('.life-fill')?.classList.add('go'));
  }

  function setTab(k, focus) {
    if (!TABS.includes(k)) return;
    if (k !== tab) stopSay?.();
    tab = k;
    body.querySelectorAll('[role=tab]').forEach((b) => { const on = b.id === 'ext-' + k; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; if (on && focus) b.focus({ preventScroll: true }); });
    body.querySelectorAll('.ex-pane').forEach((p) => { p.hidden = p.id !== 'exp-' + k; });
    body.scrollTop = 0;
    if (k === 'life') requestAnimationFrame(() => sheet.querySelector('.life-fill')?.classList.add('go'));
  }
  body.addEventListener('keydown', (e) => {
    const b = e.target.closest('[role=tab]'); if (!b) return;
    const rtl = document.documentElement.dir === 'rtl';
    let i = TABS.indexOf(b.id.slice(4));
    if (e.key === 'ArrowRight') i += rtl ? -1 : 1; else if (e.key === 'ArrowLeft') i += rtl ? 1 : -1;
    else if (e.key === 'Home') i = 0; else if (e.key === 'End') i = TABS.length - 1; else return;
    e.preventDefault(); setTab(TABS[(i + TABS.length) % TABS.length], true);
  });

  function open(rover, startTab = 'life') {
    if (current?.id !== rover.id || startTab !== 'life') tab = startTab;
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
    if (b.getAttribute('role') === 'tab') { setTab(b.id.slice(4)); return; }
    if (b.dataset.act === 'say') { const v = LAST[current.id]?.[b.dataset.part]; if (v) say?.(current.id, b.dataset.part, v[getLang()]); return; }
    if (b.dataset.act === 'game') openGame();
    if (b.dataset.act === 'compare') openCompare();
    if (b.dataset.act === 'legacy') onLegacy?.(+b.dataset.at);
    if (b.dataset.act === 'photo') { setTab('finds'); document.getElementById('card-photo')?.scrollIntoView({ block: 'start' }); }
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
  function closeGame() { conceal(game, 200); visible('[data-act="game"]')?.focus({ preventScroll: true }); }
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
  function closeCompare() { conceal(cmp, 200); visible('[data-act="compare"]')?.focus({ preventScroll: true }); }
  cmp.querySelector('.cmp-close').addEventListener('click', closeCompare);
  cmp.addEventListener('click', (e) => { if (e.target === cmp) closeCompare(); });

  // ---------- About / sources / teachers / AI ----------
  let aboutTab = 'project';
  function renderAbout() {
    const L = getLang();
    const tabs = ['project', 'teacher', 'sources', 'ai'];
    const content = {
      project: `<p>${T('aboutP1', L)}</p><p>${T('aboutP2', L)}</p><ul>${['aboutL8', 'aboutL1', 'aboutL5', 'aboutL6', 'aboutL2', 'aboutL3', 'aboutL7', 'aboutL4'].map((k) => `<li>${T(k, L)}</li>`).join('')}</ul><p class="team">${T('teamLine', L)}</p>`,
      teacher: `<p>${T('teachP1', L)}</p><ol>${['teach1', 'teach2', 'teach3', 'teach4'].map((k) => `<li>${T(k, L)}</li>`).join('')}</ol><p>${T('teachQ', L)}</p><ul>${['teachQ1', 'teachQ2', 'teachQ3', 'teachQ4'].map((k) => `<li>${T(k, L)}</li>`).join('')}</ul>`,
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
    if (document.querySelector('#legacy:not([hidden]), #fquiz:not([hidden])')) return; // those close first
    if (!game.hidden) closeGame(); else if (!cmp.hidden) closeCompare(); else if (!about.hidden) closeAbout(); else if (!sheet.hidden) close();
  });

  return {
    open, close, openAbout, closeAbout,
    refresh() { if (!sheet.hidden) render(); if (!about.hidden) renderAbout(); if (!game.hidden) renderGame(); if (!cmp.hidden) renderCompare(); },
    get isOpen() { return !sheet.hidden || !game.hidden || !about.hidden || !cmp.hidden; },
  };
}
