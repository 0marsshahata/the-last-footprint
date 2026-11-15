// The Mars Explorer certificate, drawn on a canvas so it can be downloaded as a PNG.
import { T } from './ui.js';

const DISPLAY = '"Chakra Petch", "Chakra", "Segoe UI", sans-serif';
const ARABIC = '"IBM Plex Sans Arabic", "Plex Arabic", "Segoe UI", Tahoma, sans-serif';
const ARABIC_DISPLAY = '"Lalezar", "IBM Plex Sans Arabic", "Plex Arabic", Tahoma, sans-serif';

function footprint(g, x, y, s, rot, color) {
  // a simple boot print: sole + heel with tread lines
  g.save(); g.translate(x, y); g.rotate(rot); g.scale(s, s); g.fillStyle = color;
  g.beginPath(); g.ellipse(0, -18, 15, 24, 0, 0, Math.PI * 2); g.fill();
  g.beginPath(); g.ellipse(0, 26, 12, 14, 0, 0, Math.PI * 2); g.fill();
  g.globalCompositeOperation = 'destination-out'; g.lineWidth = 2.4;
  for (let i = -30; i <= -6; i += 7) { g.beginPath(); g.moveTo(-12, i); g.lineTo(12, i); g.stroke(); }
  for (let i = 20; i <= 34; i += 6) { g.beginPath(); g.moveTo(-9, i); g.lineTo(9, i); g.stroke(); }
  g.restore();
}

export function drawCertificate(name, lang, date = new Date(), badges = []) {
  const W = 1600, H = 1100;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  const ar = lang === 'ar';
  g.direction = ar ? 'rtl' : 'ltr';

  // background: deep space with the curve of Mars at the bottom
  const bg = g.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, '#0b0707'); bg.addColorStop(1, '#1a0d09'); g.fillStyle = bg; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(255,240,225,${Math.random() * 0.7})`; g.fillRect(Math.random() * W, Math.random() * H * 0.75, Math.random() * 2 + 0.5, Math.random() * 2 + 0.5); }
  const mars = g.createRadialGradient(W / 2, H + 1500, 1500, W / 2, H + 1500, 1820);
  mars.addColorStop(0, '#b4552f'); mars.addColorStop(0.82, '#7a3018'); mars.addColorStop(0.9, 'rgba(255,170,120,0.55)'); mars.addColorStop(1, 'rgba(255,170,120,0)');
  g.fillStyle = mars; g.beginPath(); g.arc(W / 2, H + 1500, 1820, 0, Math.PI * 2); g.fill();

  // frame
  g.strokeStyle = 'rgba(255,214,180,0.55)'; g.lineWidth = 3; g.strokeRect(46, 46, W - 92, H - 92);
  g.strokeStyle = 'rgba(255,214,180,0.18)'; g.lineWidth = 1.5; g.strokeRect(62, 62, W - 124, H - 124);

  g.textAlign = 'center'; g.fillStyle = '#f6eee6';
  g.font = `600 30px ${DISPLAY}`; g.fillStyle = 'rgba(246,238,230,0.7)';
  g.fillText('NASA SPACE APPS 2026 · KAFR EL SHEIKH · TEAM 3M', W / 2, 140);
  g.font = ar ? `68px ${ARABIC_DISPLAY}` : `600 70px ${DISPLAY}`; g.fillStyle = '#ffe2c8';
  g.fillText(T('certTitle', lang), W / 2, 250);

  // the name
  let size = 112; g.font = `600 ${size}px ${ar ? ARABIC : DISPLAY}`;
  while (g.measureText(name).width > W - 360 && size > 50) { size -= 6; g.font = `600 ${size}px ${ar ? ARABIC : DISPLAY}`; }
  const grad = g.createLinearGradient(0, 330, 0, 450); grad.addColorStop(0, '#ffffff'); grad.addColorStop(1, '#ffc49a');
  g.fillStyle = grad; g.shadowColor = 'rgba(255,150,90,0.45)'; g.shadowBlur = 30;
  g.fillText(name, W / 2, 430); g.shadowBlur = 0;
  g.strokeStyle = 'rgba(255,214,180,0.45)'; g.lineWidth = 2; g.beginPath(); g.moveTo(W / 2 - 360, 470); g.lineTo(W / 2 + 360, 470); g.stroke();

  // the line, wrapped
  g.font = `400 36px ${ar ? ARABIC : '"IBM Plex Sans Arabic", "Plex Arabic", "Segoe UI", sans-serif'}`; g.fillStyle = 'rgba(246,238,230,0.9)';
  // balanced wrap: same number of lines as a greedy wrap, but evenly long (no lonely last word)
  const text = T('certLine', lang), words = text.split(' ');
  const maxW = W - 420, nLines = Math.max(1, Math.ceil(g.measureText(text).width / maxW));
  const target = g.measureText(text).width / nLines + 40;
  const lines = []; let cur = '';
  for (const w of words) { const t = cur ? cur + ' ' + w : w; if (cur && g.measureText(t).width > target && lines.length < nLines - 1) { lines.push(cur); cur = w; } else cur = t; }
  if (cur) lines.push(cur);
  lines.forEach((ln, i) => g.fillText(ln, W / 2, 545 + i * 56));

  // three footprints for the three rovers, then a glowing one: yours
  const fy = 715;
  [['Sojourner', 1997], ['Spirit', 2004], ['Opportunity', 2004]].forEach(([n, y], i) => {
    const x = W / 2 - 420 + i * 230;
    footprint(g, x, fy, 1.15, -0.25 + i * 0.12, 'rgba(255,214,180,0.75)');
    g.font = `600 24px ${DISPLAY}`; g.fillStyle = 'rgba(246,238,230,0.8)'; g.fillText(n, x, fy + 80); g.font = `500 20px ${DISPLAY}`; g.fillStyle = 'rgba(246,238,230,0.5)'; g.fillText(String(y), x, fy + 108);
  });
  g.save(); g.shadowColor = '#7fe6ff'; g.shadowBlur = 40; footprint(g, W / 2 + 270, fy - 10, 1.45, 0.2, '#bff4ff'); g.restore();
  g.font = `600 24px ${DISPLAY}`; g.fillStyle = '#bff4ff'; g.fillText(ar ? 'أثرك' : 'YOU', W / 2 + 270, fy + 80);

  if (badges.includes('sol18')) {
    g.font = `600 24px ${ar ? ARABIC : DISPLAY}`; g.fillStyle = '#ffb36b';
    g.fillText(ar ? '★ أنقذ Spirit في يوم ١٨' : '★ SAVED SPIRIT ON SOL 18', W / 2, fy + 172);
  }

  // footer
  const d = date.toLocaleDateString(ar ? 'ar-EG' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  g.font = `400 26px ${ar ? ARABIC : DISPLAY}`; g.fillStyle = 'rgba(246,238,230,0.75)';
  g.fillText(`${d}  ·  THE LAST FOOTPRINT`, W / 2, H - 132);
  g.font = `600 30px ${DISPLAY}`; g.fillStyle = '#ffb36b';
  g.fillText(ar ? 'الأثر الجاي… بتاعك' : 'THE NEXT FOOTPRINT IS YOURS', W / 2, H - 86);
  return c;
}
