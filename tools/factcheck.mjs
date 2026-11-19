// Builds FACT-CHECK.md: every Fact the site states, with the source(s) it was checked against.
// Run: node tools/factcheck.mjs > FACT-CHECK.md
import { ROVERS } from '../src/data.js';
import { CARDS, LEGACY, LAST, ATLAS } from '../src/content.js';
import { SRC } from '../src/sources.js';

const used = new Set();
const link = (keys = []) => keys.map((k) => { if (!SRC[k]) throw new Error('unknown source key ' + k); used.add(k); return `[${SRC[k][0]}](${SRC[k][1]})`; }).join('<br>');
const cell = (t) => String(t).replace(/\|/g, '\\|').replace(/\n/g, ' ');
const out = [];
const p = (s = '') => out.push(s);
let n = 0;

p('# Fact check — The Last Footprint');
p();
p('Every line the site marks **Fact**, every Explore card, the "Last footprint" cards and the mission chain, with the source each one was checked against.');
p('In the site, tap **Source** next to any Fact to open the same links.');
p();
p('Lines marked **Story** are the rovers speaking in their own imagined voice. They are not listed here, and the site never presents them as facts.');
p();
p('_This file is generated from the site’s own data (`node tools/factcheck.mjs`), so it always matches what the site says._');
p();

for (const r of ROVERS) {
  p(`## ${r.name}`);
  p();
  p('### Fact lines (spoken by the rover)');
  p();
  p('| # | What the site says | Checked against |');
  p('|---|---|---|');
  r.lines.forEach((l, i) => { if (l.kind !== 'fact') return; n++; p(`| ${i + 1} | ${cell(l.en)} | ${link(l.src)} |`); });
  p();
  const cards = (CARDS[r.id] || []).filter((c) => c.src);
  if (cards.length) {
    p('### Explore cards');
    p();
    p('| Card | What the site says | Checked against |');
    p('|---|---|---|');
    cards.forEach((c) => { n++; p(`| ${cell(c.title.en)} | ${cell(c.body.en)} | ${link(c.src)} |`); });
    p();
  }
  const last = LAST[r.id];
  if (last) {
    p('### Last footprint');
    p();
    p('| Part | What the site says | Checked against |');
    p('|---|---|---|');
    for (const [k, v] of [['Last place, image and signal', last.last], ['Where it is now', last.now]]) { n++; p(`| ${k}${v.credit ? ` (image: ${v.credit})` : ''} | ${cell(v.en)} | ${link(v.src)} |`); }
    p();
  }
}

p('## From footprint to footprint (mission chain)');
p();
p('| Mission | What it found | What it passed on | Checked against |');
p('|---|---|---|---|');
LEGACY.forEach((m) => { n++; p(`| ${m.name} (${m.year}) | ${cell(m.found.en)} | ${cell(m.gave.en)} | ${link(m.src)} |`); });
p();

p('## Ghost Hardware Atlas (other machines left behind — “coming soon” pages)');
p();
p('The home screen opens on the Atlas. Mars is the full story; the Moon and deep space are short preview lists, each line checked here.');
p();
for (const [w, title] of [['moon', 'Moon'], ['mars', 'Mars (besides the three rovers)'], ['space', 'Deeper in space']]) {
  p(`### ${title}`);
  p();
  p('| Machine | What the site says | Checked against |');
  p('|---|---|---|');
  ATLAS[w].forEach((m) => { n++; p(`| ${cell(m.name)} (${m.year}) | ${cell(m.en)} | ${link(m.src)} |`); });
  p();
}
const wsrc = ATLAS.worlds.map((w) => `${w.credit}`).join(' · ');
p(`Atlas card images: ${wsrc}.`);
p();

p('## All sources');
p();
Object.entries(SRC).forEach(([k, [t, u]]) => p(`- [${t}](${u})${used.has(k) ? '' : ' — used for the journey and landing scenes, 3D models, textures or background'}`));
p();
p(`_${n} checked items, ${Object.keys(SRC).length} sources._`);
console.log(out.join('\n'));
