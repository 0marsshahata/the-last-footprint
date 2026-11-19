// AI disclosure (NASA Space Apps SI rules): written by Team 3M with AI coding assistance from Claude (Anthropic).
// Ghost Hardware Atlas: the first choice after the signal. Mars (the three rovers) opens the full
// experience; the Moon and deeper space are "coming soon" pages that list the real hardware left there,
// each with one checked line and its NSSDCA source.
import { ATLAS } from './content.js';
import { T } from './ui.js';
import { srcButton } from './sources.js';

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const digits = (s, L) => (L === 'ar' ? String(s).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]) : String(s));

export function createAtlas({ getLang, onMars, onOpen, onClose }) {
  const root = document.getElementById('atlas');
  const dlg = document.getElementById('atlas-dlg');
  const body = dlg.querySelector('.atlas-list');
  let lastFocus = null, world = null;

  function renderCards() {
    const L = getLang();
    root.querySelector('.atlas-cards').innerHTML = ATLAS.worlds.map((w) => {
      const n = (ATLAS[w.id] || []).length;
      const meta = w.ready ? T('w_mars_meta', L) : T('w_count', L).replace('{n}', digits(n, L));
      return `<button type="button" class="atlas-card${w.ready ? ' ready' : ''}" data-world="${w.id}">
        <span class="ac-img"><img src="${w.img}" alt="" width="480" height="480" decoding="async"></span>
        <span class="ac-txt"><b>${T('w_' + w.id, L)}</b><small>${meta}</small></span>
        <span class="ac-tag">${T(w.ready ? 'tagStart' : 'tagSoon', L)}</span></button>`;
    }).join('');
    root.querySelector('.atlas-credit').innerHTML = `${T('imgCredit', L)} NASA (Galileo · Viking · Dawn) ${srcButton(ATLAS.worlds.flatMap((w) => w.imgSrc), L)}`;
  }

  function renderList(focusId) {
    const L = getLang(), w = ATLAS.worlds.find((x) => x.id === world);
    dlg.querySelector('#atlas-title').textContent = T('w_' + world, L);
    dlg.querySelector('#atlas-eye').textContent = T('atlasEyebrow', L);
    dlg.querySelector('.atlas-hero img').src = w.img;
    dlg.querySelector('.atlas-intro').textContent = T('atlasIntro_' + world, L);
    body.innerHTML = ATLAS[world].map((it) => `<li id="ag-${it.id}" class="${it.id === focusId ? 'hl' : ''}">
        <div class="ag-head"><b translate="no">${esc(it.name)}</b><span class="ag-year">${digits(it.year, L)}</span><span class="soon">${T('tagSoon', L)}</span></div>
        <p>${esc(digits(it[L], L))}</p>
        <p class="src-line"><span class="pill">${T('factLabel', L)}</span> ${srcButton(it.src, L)}</p></li>`).join('');
  }

  function open(id, focusId) {
    world = id; lastFocus = document.activeElement;
    renderList(focusId);
    dlg.hidden = false; void dlg.offsetWidth; dlg.classList.add('open');
    const target = focusId && body.querySelector('#ag-' + focusId);
    if (target) target.scrollIntoView({ block: 'center' });
    dlg.querySelector('.close').focus({ preventScroll: true });
    onOpen?.(id);
  }
  function close() {
    if (dlg.hidden) return;
    dlg.classList.remove('open');
    setTimeout(() => { if (!dlg.classList.contains('open')) dlg.hidden = true; }, 200);
    lastFocus?.focus?.({ preventScroll: true });
    onClose?.();
  }

  root.addEventListener('click', (e) => {
    const b = e.target.closest('.atlas-card'); if (!b) return;
    if (b.dataset.world === 'mars') onMars(); else open(b.dataset.world);
  });
  dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target.closest('.close')) close(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !dlg.hidden && document.getElementById('srcpop')?.hidden !== false) { e.stopImmediatePropagation(); close(); } }, true);

  renderCards();
  return {
    open, close,
    get isOpen() { return !dlg.hidden; },
    refresh() { renderCards(); if (!dlg.hidden) renderList(); },
  };
}
