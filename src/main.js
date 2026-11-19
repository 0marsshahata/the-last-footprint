// AI disclosure (NASA Space Apps SI rules): written by Team 3M with AI coding assistance from Claude (Anthropic).
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { buildWorld, sunDirection } from './world.js';
import { buildSojourner, buildMER, parseMER } from './rovers.js';
import { buildGlove } from './glove.js';
import { buildFX } from './fx.js';
import { createAudio } from './audio.js';
import { ROVERS } from './data.js';
import { T, applyLang } from './ui.js';
import { buildOpening, SITES, ACTIVE_SITES } from './opening.js';
import { createExplore } from './explore.js';
import { createFinale } from './finale.js';
import { srcButton, initSourcePopover } from './sources.js';
import { createLearn } from './learn.js';
import { createAtlas } from './atlas.js';
import { ATLAS } from './content.js';
import { drawCertificate } from './cert.js';
import { buildExpedition } from './expedition.js';
import { buildEDL } from './edl.js';
import { buildGuide } from './robot.js';
import { createSpeech } from './speech.js';

const $ = (s) => document.querySelector(s);
const params = new URLSearchParams(location.search);
const DT_MAX = Number(params.get('dtmax')) || 1 / 20;
const DEBUG = params.has('debug') || location.hash.includes('debug');
const VOICE_FILES = !params.has('nofiles'); // ?nofiles tests the device-voice fallback
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches || params.has('reduced');
const isMobile = Math.min(window.innerWidth, window.innerHeight) < 600 || /Android|iPhone|iPad/i.test(navigator.userAgent);

const S = {
  // ?lang=en / ?lang=ar wins (handy for sharing an English link with judges), then the saved choice, then English
  lang: (() => { const q = params.get('lang'); if (q === 'ar' || q === 'en') return q; try { return localStorage.getItem('tlf-lang') || 'en'; } catch (e) { return 'en'; } })(), // English first (international judges); Arabic is one tap away
  stage: 'loading', surfaceReady: false, fade: 1, fadeTarget: 1, fadeSpeed: 1,
  focus: 1, mode: 'loading', charge: 0, holding: false,
  awake: [false, false, false], line: [0, 0, 0], badges: new Set(), done: false, quiz: null,
  fps: 0, pr: 1, started: false, timeScale: 1,
};
const audio = createAudio();
const speech = createSpeech(audio);
// "before we start" questions + the anonymous, opt-in learning data
// Ghost Hardware Atlas: the first choice on the home screen (Mars opens the experience)
document.body.classList.add('atlas-on');
const atlas = createAtlas({
  getLang: () => S.lang,
  onMars: () => {
    if (VOICE_FILES) speech.preload(['solPre', 'guideHello', 'guideChoose'].map((k) => `audio/v/sol_${k}_${S.lang}.mp3`));
    document.body.classList.remove('atlas-on'); audio.beep(1); requestAnimationFrame(() => $('#go-warp').focus({ preventScroll: true })); },
});
$('#atlas-back').addEventListener('click', () => { document.body.classList.add('atlas-on'); requestAnimationFrame(() => $('#atlas .atlas-card')?.focus({ preventScroll: true })); });
const learn = createLearn({ getLang: () => S.lang, audio,
  onOpen: () => speech.speak({ file: VOICE_FILES ? `audio/v/sol_solPre_${S.lang}.mp3` : null, lang: S.lang, role: 'sol', text: ttsText(T('solPre', S.lang), S.lang) }),
  onQuestions: () => speech.stop(),
  onClose: () => speech.stop() });

// what the voice engine should read: Arabic spellings for the rover names, plain digits, no quote marks
const SAY_NAMES = { Sojourner: 'سوجورنر', Spirit: 'سبيريت', Opportunity: 'أوبورتشونيتي', Oppy: 'أوبي', NASA: 'ناسا', Curiosity: 'كيوريوسيتي', Perseverance: 'بيرسيفيرانس' };
function ttsText(text, lang) {
  let t = text.replace(/[«»“”"]/g, '').replace(/…/g, '، ');
  if (lang === 'ar') {
    t = t.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
    for (const [k, v] of Object.entries(SAY_NAMES)) t = t.split(k).join(v);
  }
  return t;
}
// a typewriter that follows the voice when there is one, and chatters like a robot when there is not
function makeTyping(full, voiced, lang, rate = 1) {
  return { full, shown: reduceMotion ? 1e9 : 0, acc: 0, voiced, progress: 0, dur: Math.max(1.2, full.length / (lang === 'ar' ? 12.5 : 15) / rate) };
}
function stepTyping(ty, dt, pitch) {
  if (ty.shown >= ty.full.length) return false;
  ty.acc += dt;
  if (ty.voiced) {
    const byTime = Math.floor(ty.full.length * Math.min(1, ty.acc / ty.dur));
    ty.shown = Math.min(ty.full.length, Math.max(byTime, Math.floor(ty.full.length * ty.progress)));
  } else {
    const step = 0.03;
    while (ty.acc > step && ty.shown < ty.full.length) { ty.acc -= step; ty.shown++; if (ty.shown % 3 === 0) audio.blip(pitch); }
  }
  return true;
}
// timers that run on scene time (they pause and slow down with the scene)
const jobs = [];
const later = (sec, fn) => jobs.push({ t: sec, fn });

// ---------- renderer ----------
const canvas = $('#scene');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
} catch (e) {
  $('#signal').classList.add('error');
  $('#loader-text').textContent = T('noWebGL', S.lang);
  throw e;
}
// if the graphics driver resets, say so and reload instead of showing a frozen canvas
canvas.addEventListener('webglcontextlost', (e) => {
  e.preventDefault();
  console.warn('WebGL context lost');
  const t = document.createElement('div'); t.className = 'glass'; t.id = 'gl-lost';
  t.textContent = S.lang === 'ar' ? 'كارت الشاشة اتعمله إعادة تشغيل… بنرجّع المشهد' : 'The graphics card reset… restoring the scene';
  document.body.appendChild(t);
});
canvas.addEventListener('webglcontextrestored', () => location.reload());
const PR_CAP = isMobile ? 1.5 : 1.75;
S.pr = Math.min(window.devicePixelRatio || 1, PR_CAP);
renderer.setPixelRatio(S.pr);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.shadowMap.autoUpdate = false;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(isMobile && innerWidth < innerHeight ? 48 : 35, innerWidth / innerHeight, 0.05, 1000);
scene.add(camera);

const quality = { mobile: isMobile, pixelRatio: S.pr };
const world = buildWorld(scene, quality);

// environment for metals: a soft Mars-coloured gradient baked to PMREM
{
  const envScene = new THREE.Scene();
  const sun = sunDirection();
  envScene.add(new THREE.Mesh(new THREE.SphereGeometry(10, 32, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: { uSun: { value: sun } },
    vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: `uniform vec3 uSun; varying vec3 vD;
      void main(){ float y = vD.y;
        vec3 ground = vec3(0.30,0.15,0.08); vec3 hor = vec3(0.85,0.58,0.40); vec3 zen = vec3(0.30,0.20,0.17);
        vec3 c = y < 0.0 ? mix(hor*0.7, ground, smoothstep(0.0,-0.5,y)) : mix(hor, zen, smoothstep(0.0,0.7,y));
        float s = max(dot(vD, uSun), 0.0); c += vec3(0.55,0.70,0.95)*pow(s,10.0)*1.2 + vec3(4.0,3.4,2.8)*pow(s,300.0);
        gl_FragColor = vec4(c,1.0); }`,
  })));
  const pmrem = new THREE.PMREMGenerator(renderer);
  // only metals need reflections: the env map goes on the rovers and the glove, not on the terrain
  // (the ground covers most pixels, so skipping it there saves a lot of GPU time)
  var envTex = pmrem.fromScene(envScene, 0.03).texture;
  pmrem.dispose();
}

// ---------- post ----------
const rt = new THREE.WebGLRenderTarget(innerWidth, innerHeight, { type: THREE.HalfFloatType, samples: 2 });
const composer = new EffectComposer(renderer, rt);
composer.setPixelRatio(S.pr);
composer.setSize(innerWidth, innerHeight);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.6, 0.6, 0.92);
// bloom is soft anyway: run it at half the usual resolution (a quarter of the pixels)
{ const set = bloom.setSize.bind(bloom); bloom.setSize = (w, h) => set(Math.max(2, w * 0.5), Math.max(2, h * 0.5)); }
composer.addPass(bloom);
composer.addPass(new OutputPass());
const grade = new ShaderPass({
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uRes: { value: new THREE.Vector2(innerWidth, innerHeight) }, uFlash: { value: 0 }, uFade: { value: 1 }, uFadeColor: { value: new THREE.Color(0.86, 0.56, 0.4) }, uCA: { value: 0.001 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse; uniform float uTime, uFlash, uFade, uCA; uniform vec3 uFadeColor; uniform vec2 uRes; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 d = vUv - 0.5;
      float ca = uCA * (1.0 + uFlash*1.5);
      vec3 c;
      c.r = texture2D(tDiffuse, vUv + d*ca*2.0).r;
      c.g = texture2D(tDiffuse, vUv).g;
      c.b = texture2D(tDiffuse, vUv - d*ca*2.0).b;
      float l = dot(c, vec3(0.299,0.587,0.114));
      c += vec3(-0.004, 0.006, 0.018) * (1.0 - smoothstep(0.0, 0.35, l));   // cool the shadows a touch
      c *= mix(vec3(1.0), vec3(1.03, 0.995, 0.96), smoothstep(0.3, 1.0, l)); // warm the highlights
      float v = smoothstep(0.95, 0.28, length(d * vec2(uRes.x/uRes.y, 1.0) * 0.82));
      c *= mix(0.58, 1.0, v);
      c += (hash(vUv*uRes + fract(uTime)*91.7) - 0.5) * 0.04;
      c += vec3(0.55, 0.85, 1.0) * uFlash * 0.16;
      gl_FragColor = vec4(mix(uFadeColor, c, uFade), 1.0);
    }`,
});
composer.addPass(grade);

// ---------- actors ----------
const glove = buildGlove();
camera.add(glove.root);
glove.layout(innerWidth / innerHeight);
const fx = buildFX(scene);
const rovers = [];
const opening = buildOpening(renderer, quality);
const guide = buildGuide(renderer);
opening.camera.add(guide.root);

// ---------- stages: signal → opening → home → warp → surface ----------
const SPACE = new Set(['loading', 'signal', 'opening', 'home', 'pick', 'warp', 'ending']);
function setStage(stage) {
  S.stage = stage;
  document.body.dataset.stage = stage;
  const space = SPACE.has(stage);
  renderPass.scene = stage === 'exp' ? expd.scene : space ? opening.scene : scene;
  renderPass.camera = stage === 'exp' ? expd.camera : space ? opening.camera : camera;
  if (stage !== 'surface') { S.mode = 'away'; S.holding = false; S.charge = 0; document.body.classList.remove('hall-live'); glove.state.raiseTarget = 0; glove.state.raise = 0; }
}
function fadeTo(v, sec) { S.fadeTarget = v; S.fadeSpeed = 1 / Math.max(0.001, sec); }

let earthP = null; // the Earth texture for the Expedition: fetched quietly once the surface is ready
function loadEarth() { if (window.EARTH_DAY_B64) return Promise.resolve(); return (earthP ||= loadScript('models/earth-tex.js').catch((e) => { earthP = null; throw e; })); }
function loadScript(src) {
  return new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = src; s.async = true;
    s.onload = () => res(); s.onerror = () => rej(new Error('failed ' + src));
    document.head.appendChild(s);
  });
}

let merTpl = null; // the raw rover model, reused for Spirit on the landing petals
// on a web server the compressed model starts downloading at once, in parallel with everything else;
// from a double-clicked file (no server) it comes from models/mer-model.js instead
const HTTP = /^https?:$/.test(location.protocol);
const merBuf = HTTP ? fetch('models/MER.glb').then((r) => (r.ok ? r.arrayBuffer() : null)).catch(() => null) : Promise.resolve(null);
async function loadRovers() {
  let tpl;
  try { const buf = await merBuf; if (buf) tpl = await parseMER(buf); } catch (err) { console.warn('MER.glb failed, trying the embedded copy', err); }
  if (!tpl) {
    if (!window.MER_GLB_B64) { try { await loadScript('models/mer-model.js'); } catch (e) { console.warn(e); } }
    try {
      if (window.MER_GLB_B64) {
        const bin = Uint8Array.from(atob(window.MER_GLB_B64), (c) => c.charCodeAt(0));
        tpl = await parseMER(bin.buffer);
      }
    } catch (err) { console.warn('MER model failed, using fallback', err); }
  }
  merTpl = tpl || null;
  const soj = buildSojourner();
  const spi = tpl ? buildMER('spirit', tpl) : buildSojourner();
  const opp = tpl ? buildMER('opportunity', tpl) : buildSojourner();
  if (!tpl) { spi.id = 'spirit'; opp.id = 'opportunity'; }
  [soj, spi, opp].forEach((r, i) => {
    r.data = ROVERS[i];
    r.pivot.rotation.y = r.baseYaw = [0.32, -0.15, -0.55][i];
    r.yaw = r.pivot.rotation.y; r.yawVel = 0;
    r.wakeT = -1; r.baseY = r.pivot.position.y;
    scene.add(r.pivot); rovers.push(r);
  });
  // slight differences so the twins are not identical
  rovers[2].model.scale.setScalar(0.995);
  const withEnv = (root) => root.traverse((o) => { if (o.isMesh) [o.material].flat().forEach((m) => { if (m.isMeshStandardMaterial) { m.envMap = envTex; m.envMapIntensity = 0.4; m.needsUpdate = true; } }); });
  rovers.forEach((r) => withEnv(r.model));
  withEnv(glove.root);
}

// ---------- camera choreography ----------
const cam = { pos: new THREE.Vector3(0, 9, 28), look: new THREE.Vector3(0, 1, 0) };
const tween = { active: false, t: 0, dur: 1, fromPos: new THREE.Vector3(), fromLook: new THREE.Vector3(), lift: 0 };
const shotPos = new THREE.Vector3(), shotLook = new THREE.Vector3();
const pointer = new THREE.Vector2(), pointerS = new THREE.Vector2();

function shotFor(i, out, look) {
  const r = rovers[i];
  const isSoj = r.id === 'sojourner';
  const portrait = innerWidth < innerHeight;
  let D = isSoj ? 1.9 : 5.4;
  if (portrait) D *= 1.35;
  const push = r.push ?? 1;
  const lift = D * 0.075; // look a little below the rover so it sits in the upper part of the frame, clear of the UI
  D *= push;
  const a = 0.38;
  const base = r.pivot.position;
  look.set(base.x, base.y + r.height * (isSoj ? 0.42 : 0.5) - lift, base.z);
  out.set(base.x + Math.sin(a) * D, look.y + D * (isSoj ? 0.3 : 0.17) + (1 - push) * -0.3 * (isSoj ? 0.3 : 1), base.z + Math.cos(a) * D);
  // in landscape the glove sits bottom-right, so shift the frame so the rover sits slightly left of centre
  if (!portrait) { const side = new THREE.Vector3(Math.cos(a), 0, -Math.sin(a)); out.addScaledVector(side, D * 0.07); look.addScaledVector(side, D * 0.07); }
}

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function flyTo(i, dur = 1.7, lift = 0.5) {
  tween.active = true; tween.t = 0; tween.dur = reduceMotion ? 0.001 : dur; tween.lift = lift;
  tween.fromPos.copy(cam.pos); tween.fromLook.copy(cam.look);
}

// ---------- UI ----------
const ui = {
  bubble: $('#bubble'), text: $('#bubble-text'), kind: $('#bubble-kind'), src: $('#bubble-src'), statsBtn: $('#stats-btn'), count: $('#bubble-count'), next: $('#bubble-next'),
  tag: $('#rover-tag'), name: $('#rover-name'), meta: $('#rover-meta'), status: $('#rover-status'), stats: $('#stats'),
  power: $('#power'), ring: $('#power-ring'), hint: $('#hint'), nav: $('#nav'), toast: $('#toast'),
  explore: $('#explore-btn'), cta: $('#end-cta'),
};
let typing = { full: '', shown: 0, acc: 0 };
const home = {
  root: $('#home'), slot: $('#title-slot'), days: $('#c-days'), clock: $('#c-clock'), labels: $('#labels'),
  warp: $('#go-warp'), exp: $('#go-exp'), els: [],
};
const LAST_CONTACT = Date.UTC(2010, 2, 22);
const fmt = (n, L) => (L === 'ar' ? n.toLocaleString('ar-EG') : n.toLocaleString('en-US'));
function renderCounter() {
  const ms = Date.now() - LAST_CONTACT;
  const days = Math.floor(ms / 86400000);
  const rem = ms % 86400000;
  const hh = Math.floor(rem / 3600000), mm = Math.floor((rem % 3600000) / 60000), ss = Math.floor((rem % 60000) / 1000);
  const p2 = (x) => String(x).padStart(2, '0');
  home.days.textContent = fmt(days, S.lang);
  const clock = `${p2(hh)}:${p2(mm)}:${p2(ss)}`;
  home.clock.textContent = S.lang === 'ar' ? clock.replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]) : clock;
}
function buildLabels() {
  home.labels.innerHTML = '';
  home.els = [...SITES, ...ACTIVE_SITES].map((site) => {
    const el = document.createElement('div'); el.className = 'site-label' + (site.extra ? ' extra' : '');
    el.dataset.extra = site.extra ? '1' : '';
    el.addEventListener('click', () => selectSite(site.id));
    el.innerHTML = `<i></i><div><b>${site.name}</b><span class="place">${site.place}</span><span class="when"></span></div>`;
    home.labels.appendChild(el); return el;
  });
  renderSiteStatus();
}
function renderSiteStatus() {
  const st = opening.siteStatus();
  st.forEach((x, i) => {
    const el = home.els[i]; if (!el) return;
    const h = Math.floor(x.hour), m = Math.floor((x.hour % 1) * 60);
    const t = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    const tt = S.lang === 'ar' ? t.replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]) : t;
    el.querySelector('.when').textContent = el.dataset.extra
      ? `● ${T('active', S.lang)} · ${x.day ? '☀' : '☾'} ${tt}`
      : `${x.day ? '☀' : '☾'} ${T(x.day ? 'day' : 'night', S.lang)} · ${tt}`;
    el.classList.toggle('night', !x.day);
  });
  measureLabels();
}
const measureLabels = () => home.els.forEach((el) => { el._w = el.offsetWidth; });
const labelPos = [];
function updateLabels() {
  opening.labelPositions(labelPos);
  labelPos.forEach((p, i) => {
    const el = home.els[i]; if (!el) return;
    // near the right edge, put the card on the other side of the pin so it never runs off screen
    const flip = p.x + (el._w || 140) > innerWidth - 6;
    el.classList.toggle('flip', flip);
    el.style.transform = `translate(${(p.x - (flip ? el._w || 140 : 0)).toFixed(1)}px, ${p.y.toFixed(1)}px)`;
    const stageOk = el.dataset.extra ? S.stage === 'ending' : (S.stage === 'home' || S.stage === 'opening' || S.stage === 'pick' || S.stage === 'ending');
    el.classList.toggle('show', p.visible && stageOk);
  });
}
function rebuildTitle() {
  const r = home.slot.getBoundingClientRect();
  if (r.width < 10) return;
  opening.buildTitle(r, S.lang);
  // the same letters, drawn crisp with a warm gradient, fade in once the dust has settled
  const src = opening.title.canvas; if (!src) return;
  const out = document.createElement('canvas'); out.width = src.width; out.height = src.height;
  const g = out.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, out.height);
  grad.addColorStop(0, '#fff8ef'); grad.addColorStop(0.55, '#ffe2c8'); grad.addColorStop(1, '#f2b083');
  const tmp = document.createElement('canvas'); tmp.width = src.width; tmp.height = src.height;
  const t = tmp.getContext('2d'); t.fillStyle = grad; t.fillRect(0, 0, tmp.width, tmp.height);
  t.globalCompositeOperation = 'destination-in'; t.drawImage(src, 0, 0);
  g.shadowColor = 'rgba(255,150,90,0.35)'; g.shadowBlur = 28; g.drawImage(tmp, 0, 0);
  g.shadowBlur = 0; g.drawImage(tmp, 0, 0);
  out.className = 'title-crisp';
  home.slot.replaceChildren(out);
}

// "Next:" what the child should do now (under the power button, or at the end of a rover's story)
function nextStepHTML() {
  const L = S.lang, d = rovers[S.focus]?.data; if (!d) return '';
  const sleeper = S.awake.findIndex((a) => !a);
  const next = !S.awake[S.focus] ? T(innerWidth < 760 ? 'nextWakeShort' : 'nextWake', L).replace('{r}', d.name)
    : sleeper >= 0 ? T('nextGo', L).replace('{r}', rovers[sleeper].data.name) : T('nextEnd', L);
  return `<b>${T('nextLabel', L)}</b> ${next}`;
}

// one panel at a time: the rover's data or SOL's speech bubble
let statsOpen = false;
function setStats(open) {
  ui.stats.classList.toggle('show', open);
  ui.statsBtn.setAttribute('aria-expanded', open);
  document.body.classList.toggle('stats-open', open);
}
function renderTag() {
  const r = rovers[S.focus]; if (!r) return;
  const d = r.data, L = S.lang;
  ui.name.textContent = d.name;
  ui.meta.textContent = `${d.mission} · ${d.site} · ${d.coords}`;
  ui.status.textContent = S.awake[S.focus] ? T('awakeNow', L) : (L === 'ar' ? d.status_ar : d.status_en);
  ui.status.classList.toggle('on', S.awake[S.focus]);
  ui.stats.innerHTML = d.stats.map((s) => `<div class="stat"><span>${L === 'ar' ? s.ar_label : s.en_label}</span><b>${L === 'ar' ? s.ar : s.en}</b></div>`).join('');
  ui.statsBtn.hidden = !S.awake[S.focus];
  setStats(S.awake[S.focus] && statsOpen);
  ui.nav.querySelectorAll('button').forEach((b, i) => {
    b.classList.toggle('active', i === S.focus); b.classList.toggle('awake', S.awake[i]); b.setAttribute('aria-pressed', i === S.focus);
    let ok = b.querySelector('.ok');
    if (S.awake[i] && !ok) { ok = document.createElement('span'); ok.className = 'ok'; ok.innerHTML = '<span aria-hidden="true">✓</span><span class="sr-only"></span>'; b.appendChild(ok); }
    if (!S.awake[i] && ok) ok.remove();
    if (ok) ok.querySelector('.sr-only').textContent = ' ' + T('awakeSr', L);
  });
  const awake = S.awake[S.focus];
  ui.power.classList.toggle('hidden', awake || S.mode !== 'hall');
  // always say what to do next
  ui.hint.innerHTML = nextStepHTML();
  ui.hint.classList.toggle('show', S.mode === 'hall');
  ui.explore.hidden = !awake;
  ui.cta.hidden = !(allAwake() && S.mode === 'hall');
}
const allAwake = () => S.awake.every(Boolean);

function showLine(i, n) {
  const r = rovers[i], line = r.data.lines[n], L = S.lang;
  ui.bubble.classList.add('show'); document.body.classList.add('bubble-on');
  ui.kind.textContent = line.kind === 'fact' ? T('fact', L) : T('story', L);
  ui.kind.className = 'kind ' + line.kind;
  ui.src.innerHTML = line.kind === 'fact' ? srcButton(line.src, L) : '';
  ui.count.textContent = `${n + 1} / ${r.data.lines.length}`;
  ui.next.textContent = n + 1 < r.data.lines.length ? T('next', L) : T('again', L);
  const step = $('#bubble-step'), last = n + 1 >= r.data.lines.length && S.awake.some((a) => !a);
  step.hidden = !last; step.innerHTML = last ? nextStepHTML() : '';
  const full = L === 'ar' ? line.ar : line.en;
  const job = { onProgress: (f) => { if (typing.job === job) typing.progress = f; } };
  // a recorded Azure voice per line; the device's own voice only if the file cannot play
  if (VOICE_FILES) {
    const next = [`audio/v/${r.id}_${n + 2}_${L}.mp3`];
    // waking the last rover leads straight into the ending: have SOL's lines ready
    if (S.awake.every(Boolean)) next.push(...['endA', 'endB', 'endChain'].map((k) => `audio/v/sol_${k}_${L}.mp3`));
    if (n + 1 < r.data.lines.length) speech.preload(next); else speech.preload(next.slice(1));
  }
  const voiced = speech.speak({ ...job, file: VOICE_FILES ? `audio/v/${r.id}_${n + 1}_${L}.mp3` : null, lang: L, role: r.id, text: ttsText(L === 'ar' ? (line.tts_ar || line.ar) : line.en, L) });
  typing = makeTyping(full, voiced, L);
  typing.job = job;
  ui.text.textContent = reduceMotion ? full : '';
  ui.text.dir = L === 'ar' ? 'rtl' : 'ltr';
}

function hideBubble() { ui.bubble.classList.remove('show'); document.body.classList.remove('bubble-on'); speech.stop(); }

function focusRover(i) {
  if (i === S.focus || !rovers[i] || S.mode === 'intro') return;
  statsOpen = false;
  S.focus = i; S.charge = 0; S.holding = false;
  prefetchVoices('rover', i);
  hideBubble();
  flyTo(i, 1.8, 0.7);
  renderTag();
  if (S.awake[i]) later(reduceMotion ? 0.05 : 1.5, () => { if (S.focus === i && S.stage === 'surface') showLine(i, S.line[i]); });
}

function toast(msg) { ui.toast.textContent = msg; ui.toast.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => ui.toast.classList.remove('show'), 2600); }

// ---------- Power Pulse ----------
const palmW = new THREE.Vector3(), aimW = new THREE.Vector3(), baseW = new THREE.Vector3();
function firePulse() {
  const i = S.focus, r = rovers[i];
  S.holding = false; S.mode = 'firing';
  glove.fire(); audio.zap(); audio.setCharge(0);
  glove.worldPalm(palmW);
  aimW.copy(r.pivot.position); aimW.y += r.height * 0.55;
  baseW.copy(r.pivot.position);
  fx.fire(palmW, aimW, baseW, r.id === 'sojourner' ? 0.45 : 1, () => wake(i));
  ui.power.classList.add('hidden'); ui.power.classList.remove('holding'); ui.hint.classList.remove('show');
}

function wake(i) {
  const r = rovers[i];
  r.wakeT = 0; S.awake[i] = true; S.line[i] = 0;
  renderJourney();
  grade.uniforms.uFlash.value = reduceMotion ? 0.3 : 1;
  audio.chime();
  later(reduceMotion ? 0.2 : 1.5, () => {
    if (S.stage !== 'surface' || S.mode !== 'firing') return; // the explorer left in the meantime
    S.mode = 'hall'; renderTag(); if (S.focus === i) showLine(i, 0);
  });
}

function setHolding(h) {
  if (S.mode !== 'hall' || S.awake[S.focus]) return;
  audio.start();
  S.holding = h;
  if (h && VOICE_FILES) speech.preload([`audio/v/${rovers[S.focus].id}_1_${S.lang}.mp3`]);
  ui.power.classList.toggle('holding', h);
}

ui.power.addEventListener('pointerdown', (e) => { e.preventDefault(); ui.power.setPointerCapture?.(e.pointerId); setHolding(true); });
['pointerup', 'pointercancel', 'lostpointercapture'].forEach((ev) => ui.power.addEventListener(ev, () => setHolding(false)));
ui.power.addEventListener('contextmenu', (e) => e.preventDefault());
// A button clicked with the mouse must not keep keyboard focus: otherwise the next Space press
// "clicks" it again (e.g. flips the language back) instead of charging the Power Pulse.
document.addEventListener('click', (e) => {
  const b = e.target.closest && e.target.closest('button');
  if (b && e.detail > 0) b.blur();
});
const isTyping = () => { const a = document.activeElement; return a && (a.tagName === 'INPUT' || a.tagName === 'TEXTAREA' || a.isContentEditable); };
const kbButtonFocused = () => { const a = document.activeElement; return a && a.tagName === 'BUTTON' && a !== ui.power; };
const overlayOpen = () => explore.isOpen || finale.isOpen || learn.isOpen || atlas.isOpen || !$('#cert').hidden;
window.addEventListener('keydown', (e) => {
  if (isTyping() || overlayOpen()) return;
  if ((S.stage === 'exp' || S.stage === 'edl') && (e.code === 'Space' || (e.code === 'Enter' && document.activeElement === expUI.act))) {
    if (kbButtonFocused() && document.activeElement !== expUI.act) return;
    e.preventDefault(); if (!e.repeat) expPress(true); return;
  }
  const pulseKey = e.code === 'Space' || (e.code === 'Enter' && document.activeElement === ui.power);
  if (pulseKey && !kbButtonFocused()) { e.preventDefault(); if (!e.repeat) setHolding(true); return; }
  if (e.repeat) return;
  if (e.key === 'ArrowRight') focusRover(Math.min(2, S.focus + (S.lang === 'ar' ? -1 : 1)));
  if (e.key === 'ArrowLeft') focusRover(Math.max(0, S.focus + (S.lang === 'ar' ? 1 : -1)));
  if (e.key === 'f' || e.key === 'F') $('#fps').classList.toggle('show');
  if (e.key === 'm' || e.key === 'M') toggleMute();
  if ((e.key === 'b' || e.key === 'B') && !bench.on && S.mode === 'hall') { bench.on = true; bench.data = {}; runBench(); }
});
window.addEventListener('keyup', (e) => {
  if ((S.stage === 'exp' || S.stage === 'edl') && (e.code === 'Space' || e.code === 'Enter')) { expPress(false); return; }
  if ((e.code === 'Space' || e.code === 'Enter') && S.holding) { e.preventDefault(); setHolding(false); }
});
window.addEventListener('blur', () => { if (S.holding) setHolding(false); });

ui.next.addEventListener('click', () => {
  const i = S.focus, n = rovers[i].data.lines.length;
  S.line[i] = (S.line[i] + 1) % n; showLine(i, S.line[i]);
});
ui.text.addEventListener('click', () => { typing.shown = 1e9; ui.text.textContent = typing.full; });

ui.nav.querySelectorAll('button').forEach((b, i) => b.addEventListener('click', () => { audio.start(); focusRover(i); }));

// drag to turn an awake rover
let drag = null;
let canvasHold = false;
canvas.addEventListener('pointerdown', (e) => {
  if (S.mode !== 'hall') return;
  canvas.setPointerCapture(e.pointerId);
  if (S.awake[S.focus]) drag = { x: e.clientX };
  else { canvasHold = true; setHolding(true); }
});
canvas.addEventListener('pointermove', (e) => { if (drag) { const dx = e.clientX - drag.x; drag.x = e.clientX; rovers[S.focus].yawVel = dx * 0.0045 / (1 / 60); } });
const endCanvas = () => { drag = null; if (canvasHold) { canvasHold = false; setHolding(false); } };
canvas.addEventListener('pointerup', endCanvas);
canvas.addEventListener('pointercancel', endCanvas);
window.addEventListener('pointermove', (e) => { pointer.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1); });

function toggleMute() {
  audio.setMuted(!audio.muted);
  if (audio.muted) speech.stop();
  $('#mute').classList.toggle('muted', audio.muted);
  $('#mute').setAttribute('aria-pressed', audio.muted);
  $('#mute').setAttribute('aria-label', T(audio.muted ? 'unmute' : 'mute', S.lang));
}
$('#mute').addEventListener('click', () => { audio.start(); toggleMute(); });
$('#lang').addEventListener('click', () => {
  S.lang = S.lang === 'ar' ? 'en' : 'ar';
  try { localStorage.setItem('tlf-lang', S.lang); } catch (e) {}
  applyLang(S.lang); renderTag(); if (S.started) prefetchVoices();
  opening.resize(S.lang); rebuildTitle(); renderCounter(); renderSiteStatus();
  layoutGuide(); renderChips(); renderJourney(); explore.refresh(); finale.refresh(); learn.refresh(); atlas.refresh(); renderGhostChips();
  if ((S.stage === 'pick' || S.stage === 'ending' || S.stage === 'exp' || S.stage === 'edl') && guideUI.typing.key) guideSay(guideUI.typing.key, guideUI.typing.then);
  renderExpButton(); renderExpHUD(true); if (xp.step) setStep(xp.step);
  if (ui.bubble.classList.contains('show')) showLine(S.focus, S.line[S.focus]);
});

// ---------- resize ----------
function onResize() {
  const w = innerWidth, h = innerHeight;
  camera.aspect = w / h;
  camera.fov = isMobile && w < h ? 48 : 35;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h); composer.setSize(w, h);
  grade.uniforms.uRes.value.set(w, h);
  glove.layout(w / h);
  renderTag();
  opening.resize(S.lang);
  clearTimeout(onResize._t); onResize._t = setTimeout(() => { rebuildTitle(); layoutGuide(); }, 150);
  if ((S.mode === 'hall' || S.mode === 'firing') && rovers.length) { shotFor(S.focus, shotPos, shotLook); if (!tween.active) { cam.pos.copy(shotPos); cam.look.copy(shotLook); } }
}
window.addEventListener('resize', onResize);

// ---------- loop ----------
const timer = new THREE.Timer();
timer.connect(document);
let frames = 0, acc = 0, fpsAcc = 0, lowStreak = 0;
const tmpV = new THREE.Vector3();
let shadowFrames = 2;

let lastSec = -1;
function stepGuide(dt) {
  const gt = guideUI.typing;
  if (stepTyping(gt, dt, 1.45)) (gt.el || guideUI.text).textContent = gt.full.slice(0, gt.shown);
  // SOL's eyes and antenna move while he talks
  if (speech.speaking || (gt.shown < gt.full.length && !gt.voiced)) guide.talk(0.12);
  // next line once the text is out and the voice has finished
  if (guideUI.after && gt.shown >= gt.full.length && gt.spoken) { const f = guideUI.after; guideUI.after = null; later(0.9, () => { if (S.stage === gt.stage && guideUI.typing === gt) f(); }); }
}
function updateSpace(dt, time) {
  pointerS.lerp(pointer, Math.min(1, dt * 3));
  opening.update(dt, time);
  guide.update(dt, reduceMotion ? null : pointerS);
  stepGuide(dt);
  updateLabels();
  const sec = Math.floor(Date.now() / 1000);
  if (sec !== lastSec) { lastSec = sec; renderCounter(); if (sec % 30 === 0) renderSiteStatus(); }
}

function update(dt, time) {
  // pointer smoothing for parallax + glove tilt
  pointerS.lerp(pointer, Math.min(1, dt * 3));

  // charge
  if (S.holding) S.charge = Math.min(1, S.charge + dt / 1.5);
  else S.charge = Math.max(0, S.charge - dt * 1.4);
  glove.state.charge = S.charge;
  audio.setCharge(S.charge);
  ui.ring.style.setProperty('--p', S.charge.toFixed(3));
  world.dust.material.uniforms.uBoost.value = S.charge * 1.5;
  if (S.holding && S.charge >= 1) firePulse();

  // rovers
  rovers.forEach((r, i) => {
    const focusTarget = i === S.focus ? 0 : 0.62;
    r.u.uDim.value += (focusTarget - r.u.uDim.value) * Math.min(1, dt * 3);
    if (r.wakeT >= 0) {
      r.wakeT += dt;
      const k = Math.min(1, r.wakeT / 1.6);
      r.u.uSleep.value = 1 - ease(k);
      r.u.uGlow.value = Math.sin(Math.min(1, r.wakeT / 1.4) * Math.PI) * 0.9;
      const hop = r.wakeT < 0.9 ? Math.sin((r.wakeT / 0.9) * Math.PI) * (r.id === 'sojourner' ? 0.04 : 0.09) : 0;
      r.pivot.position.y = r.baseY + (reduceMotion ? 0 : hop);
      r.model.rotation.z = reduceMotion ? 0 : Math.sin(r.wakeT * 14) * 0.02 * Math.max(0, 1 - r.wakeT / 1.2);
      r.push = 1 - 0.1 * ease(Math.min(1, r.wakeT / 2.2));
      if (r.wakeT < 2.5) shadowFrames = 1;
      if (r.wakeT > 3) { r.wakeT = -2; }
    }
    if (S.awake[i]) {
      // gentle idle "breathing": mast scan is baked into the mesh, so sway the whole rover slightly
      if (!drag || i !== S.focus) r.yawVel *= Math.pow(0.04, dt);
      r.yaw += r.yawVel * dt;
      if (Math.abs(r.yawVel) > 0.001) shadowFrames = 1;
      r.pivot.rotation.y = r.yaw;
    }
  });

  // camera
  const live = S.mode === 'hall' || S.mode === 'firing';
  if (rovers.length && live) shotFor(S.focus, shotPos, shotLook);
  if (tween.active) {
    tween.t += dt; const k = Math.min(1, tween.t / tween.dur), e = ease(k);
    cam.pos.lerpVectors(tween.fromPos, shotPos, e);
    cam.pos.y += Math.sin(k * Math.PI) * tween.lift;
    cam.look.lerpVectors(tween.fromLook, shotLook, e);
    if (k >= 1) { tween.active = false; if (S.mode === 'intro') { S.mode = 'hall'; document.body.classList.add('hall-live'); glove.state.raiseTarget = 1; renderTag(); if (S.awake[S.focus]) showLine(S.focus, S.line[S.focus]); } }
  } else if (live) {
    cam.pos.lerp(shotPos, Math.min(1, dt * 2.5)); cam.look.lerp(shotLook, Math.min(1, dt * 2.5));
  }
  camera.position.copy(cam.pos);
  if (!reduceMotion) {
    camera.position.x += pointerS.x * 0.12; camera.position.y += pointerS.y * 0.06;
    camera.position.y += Math.sin(time * 0.5) * 0.015;
    const sh = fx.shake * fx.shake * 0.05; if (sh > 0) camera.position.add(tmpV.set((Math.random() - 0.5) * sh, (Math.random() - 0.5) * sh, 0));
  }
  camera.lookAt(cam.look);

  glove.update(dt, reduceMotion ? null : pointerS);
  glove.worldPalm(palmW);
  fx.update(dt, time, palmW);

  world.sky.material.uniforms.uTime.value = time;
  world.dust.material.uniforms.uTime.value = time;
  grade.uniforms.uFlash.value = Math.max(0, grade.uniforms.uFlash.value - dt * 1.6);

  // typewriter (follows the voice)
  const rid = rovers[S.focus]?.id;
  if (stepTyping(typing, dt, rid === 'sojourner' ? 1.25 : rid === 'opportunity' ? 0.85 : 1)) ui.text.textContent = typing.full.slice(0, typing.shown);
}

const adaptQ = { hitches: 0, high: 0, ups: 0, pr0: S.pr };
function adapt(dt) {
  frames++; acc += dt;
  if (acc >= 1) {
    S.fps = Math.round(frames / acc); frames = 0; acc = 0;
    if ((DEBUG || $('#fps').classList.contains('show')) && !$('#fps').dataset.final) {
      const info = renderer.info.render;
      $('#fps').textContent = `${S.fps} fps · pr ${S.pr.toFixed(2)} · ${info.calls} calls · ${(info.triangles / 1000).toFixed(0)}k tris · stalls ${hitch.n} (max ${Math.round(hitch.worst * 1000)} ms)`;
    }
    // a second with a one-off stall (another app, the browser itself) is not the scene being too heavy
    const stalled = hitch.n !== adaptQ.hitches; adaptQ.hitches = hitch.n;
    if (S.stage !== 'loading' && S.stage !== 'signal' && S.fps < 52 && !document.hidden && !stalled) lowStreak++; else lowStreak = 0;
    // and when the device is fast again, the sharpness comes back (at most twice, so it never see-saws)
    if (S.fps >= 58 && !document.hidden) adaptQ.high++; else adaptQ.high = 0;
    if (adaptQ.high >= 6 && S.pr < adaptQ.pr0 && adaptQ.ups < 2) {
      S.pr = Math.min(adaptQ.pr0, S.pr + 0.25); renderer.setPixelRatio(S.pr); composer.setPixelRatio(S.pr); composer.setSize(innerWidth, innerHeight);
      adaptQ.high = 0; adaptQ.ups++;
    }
    if (lowStreak >= 2 && S.pr > 0.85) {
      S.pr = Math.max(0.85, S.pr - 0.25); renderer.setPixelRatio(S.pr); composer.setPixelRatio(S.pr); composer.setSize(innerWidth, innerHeight); lowStreak = 0;
      if (S.pr <= 1 && bloom.enabled && S.fps < 35) bloom.enabled = false;
    }
  }
}

const bench = { on: params.has('bench'), phase: 'idle', data: {} };
const hitch = { n: 0, worst: 0 }; // frames slower than 0.1 s, shown in the F overlay
function frame() {
  timer.update();
  if (bench.on && S.started) { const raw = timer.getDelta(); (bench.data[bench.phase] ||= []).push(raw * 1000); }
  const rawDt = timer.getDelta(); if (rawDt > 0.1) { hitch.n++; hitch.worst = Math.max(hitch.worst, rawDt); }
  const dt = Math.min(rawDt, DT_MAX) * S.timeScale;
  const time = timer.getElapsed();
  for (let k = jobs.length - 1; k >= 0; k--) { jobs[k].t -= dt; if (jobs[k].t <= 0) { const j = jobs.splice(k, 1)[0]; j.fn(); } }
  if (S.fade !== S.fadeTarget) {
    const step = dt * S.fadeSpeed;
    S.fade = Math.abs(S.fadeTarget - S.fade) <= step ? S.fadeTarget : S.fade + Math.sign(S.fadeTarget - S.fade) * step;
  }
  grade.uniforms.uFade.value = S.fade;
  grade.uniforms.uTime.value = time;
  if (S.stage === 'exp') updateExp(dt, time);
  else if (S.stage === 'edl') updateEDL(dt, time);
  else if (SPACE.has(S.stage)) updateSpace(dt, time); else update(dt, time);
  if (shadowFrames > 0) { renderer.shadowMap.needsUpdate = true; shadowFrames--; }
  composer.render(dt);
  adapt(dt);
}

// ---------- boot ----------
async function compileHidden(sc, cam) {
  // compile every shader now, including effects hidden until later (beam, orb, sparks, flash, shockwave),
  // otherwise the first charge/fire stalls while they compile
  const hidden = [];
  sc.traverse((o) => { if (!o.visible) { hidden.push(o); o.visible = true; } });
  // compile with the composer's render target bound, so the programs match the ones used for real
  // (rendering into a target picks different shader variants than rendering to the screen)
  renderer.setRenderTarget(composer.renderTarget1);
  try { await renderer.compileAsync(sc, cam, sc); } catch (e) { /* older drivers: compile lazily */ }
  // one hidden warm-up render builds the shadow-depth programs too
  renderer.shadowMap.needsUpdate = true;
  renderer.setRenderTarget(composer.renderTarget1);
  renderer.render(sc, cam);
  renderer.setRenderTarget(null);
  // upload every texture now too, so nothing stalls the first time it appears on screen
  const seen = new Set();
  sc.traverse((o) => {
    [o.material].flat().forEach((m) => {
      if (!m) return;
      for (const v of Object.values(m)) if (v && v.isTexture && !seen.has(v)) seen.add(v);
      if (m.uniforms) for (const u of Object.values(m.uniforms)) if (u.value && u.value.isTexture) seen.add(u.value);
    });
  });
  seen.forEach((t) => { try { if (t.image) renderer.initTexture(t); } catch (e) {} });
  hidden.forEach((o) => { o.visible = false; });
}

async function boot() {
  applyLang(S.lang);
  setStage('loading');
  if (DEBUG) $('#fps').classList.add('show');
  opening.resize(S.lang);
  // the title is drawn from the real font, so wait for it (but never longer than 1.5 s)
  try { await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]); } catch (e) {}
  rebuildTitle();
  buildLabels(); renderCounter(); renderJourney();
  await compileHidden(opening.scene, opening.camera);
  renderer.setAnimationLoop(frame);
  setStage('signal');
  $('#signal').classList.add('ready');
  $('#start').disabled = false;
  window.__tlf.ready = true;
  // the surface (rovers, terrain) loads in the background while the opening plays
  await loadRovers();
  edl = buildEDL(scene, { rover: merTpl, env: envTex });
  renderTag();
  camera.position.copy(cam.pos); camera.lookAt(cam.look);
  await compileHidden(scene, camera);
  S.surfaceReady = true;
  window.__tlf.surfaceReady = true;
  later(2, () => loadEarth().catch(() => {}));
  // after the first visit the site opens from the device (and works offline): see sw.js
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || params.has('sw')) && !params.has('test')) navigator.serviceWorker.register('sw.js').catch(() => {});
  home.warp.classList.remove('loading');
  if (pendingWarp) startWarp(pendingWarp);
}

function receiveSignal() {
  if (S.started) return; S.started = true;
  audio.start(); audio.signal(); audio.setAmbient('space');
  prefetchVoices();
  document.body.classList.add('started');
  renderJourney();
  setStage('opening');
  opening.start(reduceMotion);
  if (!reduceMotion) [1.5, 1.95, 2.4].forEach((t, i) => later(t, () => audio.beep(i)));
  later(reduceMotion ? 0.2 : 4.3, () => { if (S.stage === 'opening') setStage('home'); });
}
$('#start').addEventListener('click', receiveSignal);

// ---------- Instant Warp: choose a landing site with SOL, then dive ----------
const guideUI = {
  root: $('#guide'), text: $('#guide-text'), chips: $('#guide-chips'), land: $('#guide-land'), back: $('#guide-back'),
  typing: { full: '', shown: 0, acc: 0 }, after: null, selected: null,
};
// SOL's lines that have a recorded voice (tools/lines.mjs renders exactly these)
const SOL_VOICED = new Set(['guideHello', 'guideChoose', 'guide_sojourner', 'guide_spirit', 'guide_opportunity', 'endA', 'endB', 'endC',
  'expHello', 'expPad', 'expLaunched', 'expCruise1', 'expCruise2', 'expMars', 'expApproach', 'expEntry', 'expEntryOk',
  'edlChute', 'edlEarly', 'edlChuteLate', 'edlChuteOk', 'edlBags', 'edlBagsEarly', 'edlBagsLate', 'edlBagsOk', 'edlBounce', 'edlOpened', 'edlNow',
  'solPre', 'endChain', 'solQuiz']);

// ---------- voices download quietly in the background, in the order the story will need them ----------
const vfile = (k) => `audio/v/${k}_${S.lang}.mp3`;
const roverVoice = (i) => [...ROVERS[i].lines.map((_, n) => `${ROVERS[i].id}_${n + 1}`), `${ROVERS[i].id}_last`, `${ROVERS[i].id}_now`];
const SOL_EXP = ['expHello', 'expPad', 'expLaunched', 'expCruise1', 'expCruise2', 'expMars', 'expApproach', 'expEntry', 'expEntryOk',
  'edlChute', 'edlEarly', 'edlChuteLate', 'edlChuteOk', 'edlBags', 'edlBagsEarly', 'edlBagsLate', 'edlBagsOk', 'edlBounce', 'edlOpened', 'edlNow'];
function prefetchVoices(what = 'all', i = 0) {
  if (!VOICE_FILES) return;
  const sol = (keys) => keys.map((k) => vfile('sol_' + k));
  if (what === 'rover') { speech.prefetch(roverVoice(i).map(vfile), true); return; }
  if (what === 'exp') { speech.prefetch(sol(SOL_EXP), true); return; }
  speech.prefetch([
    ...sol(['solPre', 'guideHello', 'guideChoose', 'guide_sojourner', 'guide_spirit', 'guide_opportunity', 'expHello', 'expPad']),
    ...[0, 1, 2].map((r) => vfile(roverVoice(r)[0])),
    ...[0, 1, 2].flatMap((r) => roverVoice(r).slice(1).map(vfile)),
    ...sol(['endA', 'endB', 'endChain', 'solQuiz', 'endC']),
    ...sol(SOL_EXP),
  ]);
}
function guideSay(key, then) {
  const full = T(key, S.lang);
  const el = S.stage === 'ending' ? endUI.text : (S.stage === 'exp' || S.stage === 'edl') ? expUI.text : guideUI.text;
  const job = {
    onProgress: (f) => { if (guideUI.typing.job === job) guideUI.typing.progress = f; },
    onEnd: () => { if (guideUI.typing.job === job) guideUI.typing.spoken = true; },
  };
  const voiced = speech.speak({ ...job, file: VOICE_FILES && SOL_VOICED.has(key) ? `audio/v/sol_${key}_${S.lang}.mp3` : null, lang: S.lang, role: 'sol', text: ttsText(full, S.lang) });
  guideUI.typing = makeTyping(full, voiced, S.lang, 1.04);
  Object.assign(guideUI.typing, { key, job, spoken: !voiced, el, then, stage: S.stage });
  el.textContent = reduceMotion ? full : '';
  guideUI.after = then || null;
}
function renderChips() {
  guideUI.chips.querySelectorAll('button').forEach((b) => {
    const on = b.dataset.site === guideUI.selected;
    b.classList.toggle('active', on); b.setAttribute('aria-pressed', on);
  });
  const sel = SITES.find((x) => x.id === guideUI.selected);
  guideUI.land.hidden = !sel;
  if (sel) guideUI.land.textContent = `${T('landAt', S.lang)} ${sel.name}`;
}
function layoutGuide() {
  const r = (S.stage === 'ending' ? endUI.root : S.stage === 'exp' ? expUI.root : guideUI.root).getBoundingClientRect();
  guide.layout(S.stage === 'exp' && expd ? expd.camera : opening.camera, S.lang, r);
}
function enterPick() {
  if (S.stage !== 'home') return;
  audio.start();
  setStage('pick');
  opening.enterPick();
  guideUI.selected = null; renderChips();
  layoutGuide(); guide.show();
  guideUI.text.textContent = '';
  later(reduceMotion ? 0 : 0.7, () => { if (S.stage === 'pick') guideSay('guideHello', () => guideSay('guideChoose')); });
}
function selectSite(id) {
  if (S.stage !== 'pick') return;
  if (id.startsWith('ghost:')) { opening.focusSite(id); audio.beep(3); atlas.open('mars', id.slice(6)); return; }
  const i = SITES.findIndex((x) => x.id === id); if (i < 0) return;
  S.focus = i; guideUI.selected = id;
  prefetchVoices('rover', i);
  opening.focusSite(id); renderChips();
  audio.beep(i);
  guideSay('guide_' + id);
}
function backHome() {
  if (S.stage !== 'pick') return;
  speech.stop();
  setStage('home'); opening.goHome(S.lang, false); guide.hide();
  guideUI.after = null;
}
guideUI.chips.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => selectSite(b.dataset.site)));
// "coming soon" hardware on Mars: the same cards as the Atlas
function renderGhostChips() {
  $('#ghost-chips').innerHTML = ATLAS.mars.map((g) => `<button type="button" data-ghost="${g.id}" aria-haspopup="dialog">${g.name}</button>`).join('');
}
renderGhostChips();
$('#ghost-chips').addEventListener('click', (e) => { const b = e.target.closest('[data-ghost]'); if (b) selectSite('ghost:' + b.dataset.ghost); });
guideUI.back.addEventListener('click', backHome);
guideUI.land.addEventListener('click', () => { if (guideUI.selected) startWarp(guideUI.selected); });
window.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!$('#cert').hidden) closeCert();
  else if (!overlayOpen()) backHome();
});

let pendingWarp = null;
function startWarp(id) {
  if (S.stage !== 'pick' && !pendingWarp) return;
  if (!S.surfaceReady) { pendingWarp = id; guideUI.land.classList.add('loading'); guideUI.land.textContent = T('preparing', S.lang); return; }
  pendingWarp = null;
  guideUI.land.classList.remove('loading');
  S.focus = SITES.findIndex((x) => x.id === id);
  setStage('warp'); guide.hide(); speech.stop();
  audio.whoosh(2.9);
  if (reduceMotion) { fadeTo(0, 0.4); later(0.45, enterSurface); return; }
  later(2.05, () => fadeTo(0, 0.75));
  opening.warpTo(id, enterSurface);
}
home.warp.addEventListener('click', () => learn.open('warp', enterPick));

// spin the globe by dragging; a tap on a pin chooses it
let gdrag = null;
canvas.addEventListener('pointerdown', (e) => {
  if (S.stage !== 'pick') return;
  canvas.setPointerCapture(e.pointerId);
  gdrag = { x: e.clientX, y: e.clientY, t: performance.now(), moved: 0 };
  opening.dragStart();
});
canvas.addEventListener('pointermove', (e) => {
  if (!gdrag) return;
  const now = performance.now(), dx = e.clientX - gdrag.x, dy = e.clientY - gdrag.y;
  gdrag.moved += Math.abs(dx) + Math.abs(dy);
  opening.dragMove(dx, dy, (now - gdrag.t) / 1000);
  gdrag.x = e.clientX; gdrag.y = e.clientY; gdrag.t = now;
});
const endGlobe = (e) => {
  if (!gdrag) return;
  opening.dragEnd();
  if (gdrag.moved < 8 && e.type === 'pointerup') { const id = opening.pickAt(e.clientX, e.clientY); if (id) selectSite(id); }
  gdrag = null;
};
canvas.addEventListener('pointerup', endGlobe);
canvas.addEventListener('pointercancel', endGlobe);

function enterSurface() {
  setStage('surface');
  audio.setAmbient('mars');
  S.mode = 'intro';
  // start high in the sky, as if still falling, then glide down to the focused rover
  const r = rovers[S.focus];
  cam.pos.set(r.pivot.position.x + 10, 34, r.pivot.position.z + 52);
  cam.look.set(r.pivot.position.x, 0, r.pivot.position.z - 8);
  camera.position.copy(cam.pos); camera.lookAt(cam.look);
  shadowFrames = 2;
  shotFor(S.focus, shotPos, shotLook);
  flyTo(S.focus, reduceMotion ? 0.001 : 4.6, 0);
  $('#site-caption').textContent = r.data.site.toUpperCase();
  $('#caption-eyebrow').textContent = `${r.data.name.toUpperCase()} · ${r.data.coords}`;
  $('#title').classList.remove('out');
  later(reduceMotion ? 0.8 : 3.4, () => $('#title').classList.add('out'));
  fadeTo(1, reduceMotion ? 0.3 : 1.1);
  renderTag();
}

$('#home-btn').addEventListener('click', () => {
  if (S.stage === 'exp' || S.stage === 'edl') { leaveExpedition('home'); return; }
  if (S.stage === 'ending') {
    speech.stop(); guideUI.after = null; fadeTo(0, 0.45);
    later(0.5, () => { guide.hide(); setStage('home'); opening.goHome(S.lang); rebuildTitle(); renderSiteStatus(); fadeTo(1, 0.7); });
    return;
  }
  if (S.stage !== 'surface' || S.mode === 'firing' || S.mode === 'away') return; // let the pulse finish first
  explore.close(); hideBubble(); fadeTo(0, 0.45);
  later(0.5, () => {
    setStage('home'); opening.goHome(S.lang); audio.setAmbient('space');
    rebuildTitle(); renderSiteStatus();
    fadeTo(1, 0.7);
  });
});



// ---------- Immersive Expedition: Spirit's real trip, launch → cruise → entry → parachute → airbags ----------
let expd = null, edl = null;
const expUI = { root: $('#exp'), text: $('#exp-text'), hud: $('#exp-hud'), act: $('#exp-act'), skip: $('#exp-skip'), step: $('#exp-step') };
const xp = { mode: null, kind: null, holding: false, charge: 0, step: 0, hudT: 0, onTap: null, onFull: null };
function setExpButton(kind, mode, handler) {
  xp.kind = kind; xp.mode = mode; xp.charge = 0; xp.holding = false;
  if (mode === 'hold') { xp.onFull = handler; xp.onTap = null; } else { xp.onTap = handler; xp.onFull = null; }
  renderExpButton();
}
function renderExpButton() {
  const b = expUI.act;
  b.hidden = !xp.mode;
  if (!xp.mode) return;
  b.textContent = T({ launch: 'expLaunchBtn', shield: 'expShieldBtn', chute: 'expChuteBtn', bags: 'expBagsBtn' }[xp.kind], S.lang);
  b.classList.toggle('hold', xp.mode === 'hold');
  b.style.setProperty('--p', xp.charge.toFixed(3));
}
function expPress(down) {
  if (!xp.mode) return;
  audio.start();
  if (xp.mode === 'hold') { xp.holding = down; expUI.act.classList.toggle('pressed', down); }
  else if (down && xp.onTap) xp.onTap();
}
expUI.act.addEventListener('pointerdown', (e) => { if (xp.mode !== 'hold') return; e.preventDefault(); expUI.act.setPointerCapture?.(e.pointerId); expPress(true); });
['pointerup', 'pointercancel', 'lostpointercapture'].forEach((ev) => expUI.act.addEventListener(ev, () => { if (xp.mode === 'hold') expPress(false); }));
expUI.act.addEventListener('click', (e) => { if (xp.mode === 'tap' && e.detail > 0) expPress(true); });
expUI.act.addEventListener('contextmenu', (e) => e.preventDefault());
expUI.skip.addEventListener('click', () => leaveExpedition('land'));
function setStep(n) { xp.step = n; expUI.step.textContent = n ? `${fmt(n, S.lang)}/${fmt(5, S.lang)} · ${T('expStep' + n, S.lang)}` : ''; }
// say a line now, or right after the current one if SOL is still talking
function sayNext(key, then) {
  const gt = guideUI.typing;
  if (gt.shown >= gt.full.length && !speech.speaking) guideSay(key, then);
  else guideUI.after = () => guideSay(key, then);
}

function renderExpHUD(force) {
  const L = S.lang, n = (v, d = 0) => (L === 'ar' ? Number(v).toLocaleString('ar-EG', { maximumFractionDigits: d, minimumFractionDigits: d }) : Number(v).toLocaleString('en-US', { maximumFractionDigits: d, minimumFractionDigits: d }));
  const cell = (k, v, cls = '') => `<div class="${cls}"><dt>${T(k, L)}</dt><dd>${v}</dd></div>`;
  let html = '';
  if (S.stage === 'exp' && expd) {
    const h = expd.hud(), ph = expd.phase;
    if (ph === 'pad' || ph === 'launch') html = cell('hDate', T('launchDate', L)) + cell('hPlace', 'Cape Canaveral');
    else if (ph === 'cruise' || ph === 'approach') html = cell('hDay', `${n(h.days)} / ${n(208)}`) + cell('hDist', `${n(h.mkm)} ${T('uMkm', L)}`);
    else html = cell('hSpeed', `~${n(19000)} ${T('uKmh', L)}`) + cell('hShield', `${n(Math.round(h.heat * 100))}٪`.replace('٪', L === 'ar' ? '٪' : '%'), h.heat > 0.99 ? 'go' : '');
  } else if (S.stage === 'edl' && edl) {
    const h = edl.hud(), ph = edl.phase;
    if (ph === 'fall' || ph === 'chute') {
      const inWin = ph === 'fall' && h.alt <= 11.5;
      html = cell('hAlt', `${n(h.alt, 1)} ${T('uKm', L)}`, inWin ? 'go' : '') + cell('hSpeed', `${n(Math.round(h.speed / 10) * 10)} ${T('uKmh', L)}`);
    } else if (ph === 'drop') {
      const inWin = h.tg <= 10 && h.tg >= 6;
      html = cell('hGround', `${n(h.tg, 1)} ${T('uSec', L)}`, inWin ? 'go' : h.tg < 6 ? 'warn' : '') + cell('hSpeed', `~${n(300)} ${T('uKmh', L)}`);
    } else html = cell('hBounces', n(h.bounces)) + cell('hSpeed', `${n(h.speed)} ${T('uKmh', L)}`);
  }
  if (force || expUI.hud._html !== html) { expUI.hud.innerHTML = html; expUI.hud._html = html; }
}

async function startExpedition() {
  if (S.stage !== 'home' || !S.surfaceReady || home.exp.classList.contains('loading')) return;
  audio.start();
  home.exp.classList.add('loading');
  try {
    await loadEarth();
    if (!expd) {
      expd = buildExpedition(renderer, { marsMap: opening.planet.material.map, quality, env: envTex, reduced: reduceMotion });
      await expd.ready;
      expd.camera.add(guide.root); // SOL rides along; compile his shaders with this scene's lights too
      await compileHidden(expd.scene, expd.camera);
      opening.camera.add(guide.root);
    }
  } catch (e) { console.warn(e); home.exp.classList.remove('loading'); return; }
  home.exp.classList.remove('loading');
  if (S.stage !== 'home') return;
  fadeTo(0, 0.5);
  later(0.55, () => {
    setStage('exp');
    expd.resize();
    expd.start(onExpEvent);
    expd.camera.add(guide.root);
    setExpButton(null, null); setStep(1); renderExpHUD(true);
    expUI.text.textContent = '';
    layoutGuide(); guide.show();
    fadeTo(1, 0.9);
    const showLaunch = () => {
      if (S.stage !== 'exp' || expd.phase !== 'pad' || xp.mode) return;
      setExpButton('launch', 'hold', () => { expd.launch(); audio.whoosh(5.5); setExpButton(null, null); guideUI.after = null; guideSay('expLaunched'); });
    };
    later(reduceMotion ? 0.2 : 1.0, () => { if (S.stage === 'exp') guideSay('expHello', () => { guideSay('expPad'); showLaunch(); }); });
    later(reduceMotion ? 1 : 9, showLaunch); // in case the voice is slow, the button still comes
  });
}
home.exp.addEventListener('click', () => { if (S.stage === 'home' && S.surfaceReady && !home.exp.classList.contains('loading')) { prefetchVoices('exp'); learn.open('expedition', startExpedition); } });

function onExpEvent(e) {
  if (S.stage !== 'exp') return;
  if (e === 'cruise') { setStep(2); sayNext('expCruise1', () => guideSay('expCruise2')); }
  if (e === 'marsAhead') sayNext('expMars');
  if (e === 'approach') { setStep(3); sayNext('expApproach'); }
  if (e === 'entry') {
    guideUI.after = null; guideSay('expEntry');
    setExpButton('shield', 'hold', () => { expd.enterOk(); setExpButton(null, null); audio.setCharge(0); audio.whoosh(2.4); guideSay('expEntryOk'); });
  }
  if (e === 'plunged') {
    grade.uniforms.uFlash.value = reduceMotion ? 0.3 : 1;
    grade.uniforms.uFadeColor.value.setRGB(1.0, 0.82, 0.62);
    fadeTo(0, 0.5);
    later(0.55, startEDL);
  }
}

function updateExp(dt, time) {
  pointerS.lerp(pointer, Math.min(1, dt * 3));
  // hold-to-act button (launch thrust / heat shield)
  if (xp.mode === 'hold') {
    xp.charge = xp.holding ? Math.min(1, xp.charge + dt / (xp.kind === 'shield' ? 2.4 : 1.5)) : Math.max(0, xp.charge - dt * 0.9);
    expUI.act.style.setProperty('--p', xp.charge.toFixed(3));
    if (xp.kind === 'launch') expd.charge = xp.charge;
    if (xp.kind === 'shield') { expd.heat = xp.charge; audio.setCharge(xp.charge); }
    if (xp.charge >= 1) { const f = xp.onFull; xp.mode = null; xp.holding = false; expUI.act.classList.remove('pressed'); f && f(); }
  }
  expd.update(dt, time);
  guide.update(dt, reduceMotion ? null : pointerS);
  stepGuide(dt);
  xp.hudT += dt; if (xp.hudT > 0.1) { xp.hudT = 0; renderExpHUD(); }
}

function startEDL() {
  if (S.stage !== 'exp') return;
  setStage('edl');
  guide.hide(); opening.camera.add(guide.root);
  rovers.forEach((r) => { r.pivot.visible = false; });
  shadowFrames = 2;
  audio.setAmbient('mars');
  edl.start(onEDLEvent);
  setStep(4); renderExpHUD(true);
  setExpButton('chute', 'tap', () => { const r = edl.press(); if (r === 'early') guideSay('edlEarly'); });
  guideSay('edlChute');
  fadeTo(1, 0.6);
  later(0.8, () => grade.uniforms.uFadeColor.value.setRGB(0.86, 0.56, 0.4));
}

function onEDLEvent(e) {
  if (S.stage !== 'edl') return;
  if (e === 'chuteWindow' || e === 'bagsWindow') expUI.act.classList.add('ready');
  if (e === 'chuteLate') { expUI.act.classList.remove('ready'); guideSay('edlChuteLate'); }
  if (e === 'chuteOk') { expUI.act.classList.remove('ready'); setExpButton(null, null); audio.whoosh(1.2); guideSay('edlChuteOk'); }
  if (e === 'drop') {
    setStep(5);
    setExpButton('bags', 'tap', () => { const r = edl.press(); if (r === 'early') guideSay('edlBagsEarly'); });
    sayNext('edlBags');
  }
  if (e === 'bagsLate') { expUI.act.classList.remove('ready'); guideSay('edlBagsLate'); }
  if (e === 'bagsOk') { expUI.act.classList.remove('ready'); setExpButton(null, null); audio.chime(); guideSay('edlBagsOk'); }
  if (e === 'rockets') { grade.uniforms.uFlash.value = reduceMotion ? 0.15 : 0.45; audio.zap(); }
  if (e === 'bounce') { audio.blip(0.35); if (edl.hud().bounces === 1) guideSay('edlBounce'); }
  if (e === 'opened') sayNext('edlOpened', () => guideSay('edlNow', () => later(1.2, () => { if (S.stage === 'edl') leaveExpedition('hall'); })));
}

function updateEDL(dt, time) {
  edl.update(dt, time, camera);
  glove.update(dt, null); // keeps it lowered, out of the picture
  world.sky.material.uniforms.uTime.value = time;
  world.dust.material.uniforms.uTime.value = time;
  grade.uniforms.uFlash.value = Math.max(0, grade.uniforms.uFlash.value - dt * 1.6);
  stepGuide(dt);
  xp.hudT += dt; if (xp.hudT > 0.1) { xp.hudT = 0; renderExpHUD(); }
}

// leave the expedition: 'hall' after the landing story, 'land' when skipped, 'home' from the globe button
function leaveExpedition(where) {
  if (S.stage !== 'exp' && S.stage !== 'edl') return;
  speech.stop(); guideUI.after = null; setExpButton(null, null); audio.setCharge(0);
  fadeTo(0, 0.45);
  later(0.5, () => {
    edl?.stop(); guide.hide(); opening.camera.add(guide.root);
    rovers.forEach((r) => { r.pivot.visible = true; });
    shadowFrames = 2;
    grade.uniforms.uFadeColor.value.setRGB(0.86, 0.56, 0.4);
    if (where === 'home') { setStage('home'); opening.goHome(S.lang); audio.setAmbient('space'); rebuildTitle(); renderSiteStatus(); fadeTo(1, 0.7); return; }
    S.focus = 1;
    if (where === 'land') { enterSurface(); return; }
    // straight from the landing: a short glide to Spirit as it is today
    setStage('surface'); audio.setAmbient('mars');
    S.mode = 'intro';
    const r = rovers[1];
    cam.pos.set(r.pivot.position.x + 7, r.pivot.position.y + 6, r.pivot.position.z + 14);
    cam.look.copy(r.pivot.position);
    camera.position.copy(cam.pos); camera.lookAt(cam.look);
    shotFor(1, shotPos, shotLook); flyTo(1, reduceMotion ? 0.001 : 2.6, 0.2);
    $('#site-caption').textContent = r.data.site.toUpperCase();
    $('#caption-eyebrow').textContent = `SPIRIT · ${fmt(new Date().getFullYear(), S.lang).replace(/[,٬]/g, '')}`;
    $('#title').classList.remove('out');
    later(reduceMotion ? 0.8 : 2.8, () => $('#title').classList.add('out'));
    fadeTo(1, 0.9); renderTag();
  });
}

// ---------- explore panels (timeline, photo, game, quiz) and the About dialog ----------
const explore = createExplore({
  getLang: () => S.lang,
  audio,
  onBadge: (k) => { if (S.badges.has(k)) return; S.badges.add(k); toast('★ ' + T('savedSpirit', S.lang)); },
  onClose: () => { document.body.classList.remove('sheet-open'); speech.stop(); },
  onLegacy: (i) => finale.openLegacy({ mode: 'explore', at: i }),
  // a rover reads its own "last footprint" card
  say: (id, part, text) => speech.speak({ file: VOICE_FILES ? `audio/v/${id}_${part}_${S.lang}.mp3` : null, lang: S.lang, role: id, text: ttsText(text, S.lang) }),
  stopSay: () => speech.stop(),
});
ui.explore.addEventListener('click', () => {
  if (S.stage !== 'surface' || !S.awake[S.focus]) return;
  speech.stop(); typing.shown = 1e9; ui.text.textContent = typing.full;
  document.body.classList.add('sheet-open');
  explore.open(rovers[S.focus]);
});
$('#about-btn').addEventListener('click', () => explore.openAbout());
ui.statsBtn.addEventListener('click', () => { statsOpen = !statsOpen; setStats(statsOpen); });

// "Source" buttons beside every Fact open one shared popover
initSourcePopover(() => S.lang);

// keep keyboard focus inside an open dialog
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Tab') return;
  const m = [...document.querySelectorAll('.modal')].find((x) => !x.hidden); if (!m) return;
  const f = [...m.querySelectorAll('button:not([disabled]), a[href], input, [tabindex]:not([tabindex="-1"])')].filter((x) => x.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (!m.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
  else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

// ---------- journey footprints ----------
const jEls = [...document.querySelectorAll('#journey li')];
let jPrev = [];
function renderJourney() {
  const done = [S.started, ...S.awake, S.done];
  const now = done.indexOf(false);
  jEls.forEach((li, i) => {
    const label = T('j' + (i + 1), S.lang);
    li.classList.toggle('done', done[i]); li.classList.toggle('now', i === now);
    if (done[i] && jPrev[i] === false && !reduceMotion) { li.classList.add('just'); setTimeout(() => li.classList.remove('just'), 650); }
    li.title = label;
    li.querySelector('.sr-only').textContent = label + (done[i] ? ' ✓' : '');
    if (i === now) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
  });
  jPrev = done;
  const n = done.filter(Boolean).length, L = S.lang;
  const step = Math.min(5, n + 1), what = n >= 5 ? 'jNow5' : n === 0 ? 'jNow0' : n === 4 ? 'jNow4' : 'jNow1';
  $('#j-count').innerHTML = `${T('stepOf', L).replace('{n}', L === 'ar' ? '٠١٢٣٤٥٦٧٨٩'[step] : step)}: <span class="jn">${T(what, L)}</span>`;
}

// ---------- ending: "The Next Footprint" ----------
const endUI = { stepper: $('#end-stepper'), root: $('#ending'), text: $('#end-text'), form: $('#end-form'), name: $('#end-name'), err: $('#end-err'), steps: $('#end-steps'), busy: false };
// after SOL's first two lines: the chain of missions, then the final quiz, then the name and the certificate
const finale = createFinale({
  getLang: () => S.lang, audio, compare: (bits) => learn.compare(bits),
  onQuizOpen: () => { if (S.stage === 'ending') { endStep(1); guideSay('solQuiz'); } },
  onQuizDone: (score, total, bits) => {
    S.quiz = score == null ? null : { score, total };
    if (S.stage === 'ending') endStep(2);
    if (bits && bits.length === total) learn.quizDone(bits);
    if (S.stage !== 'ending' || !endUI.form.hidden) return;
    endUI.steps.hidden = true; layoutGuide();
    guideSay('endC', showEndForm);
  },
  onLegacyClosed: (mode) => { if (mode === 'ending' && S.stage === 'ending' && endUI.form.hidden) { endUI.steps.hidden = false; layoutGuide(); } },
});
// "the chain → the quiz → the certificate", so the child always knows where they are
function endStep(k) {
  endUI.stepper.hidden = k < 0;
  endUI.stepper.querySelectorAll('li').forEach((li, i) => {
    li.classList.toggle('done', i < k); li.classList.toggle('now', i === k);
    if (i === k) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
  });
}
function showEndSteps() {
  if (S.stage !== 'ending') return;
  endStep(0);
  endUI.steps.hidden = false; layoutGuide();
  later(reduceMotion ? 0.1 : 0.6, () => { if (S.stage === 'ending' && endUI.form.hidden && !finale.isOpen) finale.openLegacy({ mode: 'ending' }); });
}
$('#end-legacy').addEventListener('click', () => finale.openLegacy({ mode: 'ending' }));
$('#end-skip').addEventListener('click', () => {
  finale.close(); endUI.steps.hidden = true; endStep(2); layoutGuide();
  guideSay('endC', showEndForm);
});
const cert = { root: $('#cert'), img: $('#cert-img'), dl: $('#cert-dl'), url: null, back: null };
function goEnding() {
  if (S.stage !== 'surface' || S.mode !== 'hall' || !allAwake()) return;
  S.mode = 'away';
  explore.close(); hideBubble(); ui.cta.hidden = true;
  audio.whoosh(1.8); fadeTo(0, 0.6);
  later(0.65, () => {
    setStage('ending'); measureLabels();
    audio.setAmbient('space');
    opening.resize(S.lang); opening.enterEnding();
    endUI.form.hidden = true; endUI.steps.hidden = true; endStep(-1); endUI.text.textContent = ''; S.quiz = null;
    layoutGuide(); guide.show();
    fadeTo(1, reduceMotion ? 0.3 : 1);
    later(reduceMotion ? 0.2 : 1.4, () => { if (S.stage === 'ending') guideSay('endA', () => guideSay('endB', () => guideSay('endChain', showEndSteps))); });
  });
}
function showEndForm() {
  if (S.stage !== 'ending') return;
  endUI.form.hidden = false;
  layoutGuide(); // the panel just grew: move SOL so it stays clear of it
  if (!isMobile) endUI.name.focus({ preventScroll: true });
}
ui.cta.addEventListener('click', goEnding);

async function fontsReady() {
  const want = ['600 40px "Chakra Petch"', '600 40px "Chakra"', '400 40px "Lalezar"', '600 40px "IBM Plex Sans Arabic"', '600 40px "Plex Arabic"', '400 40px "IBM Plex Sans Arabic"', '400 40px "Plex Arabic"'];
  try { await Promise.race([Promise.all(want.map((f) => document.fonts.load(f, 'Aب').catch(() => {}))), new Promise((r) => setTimeout(r, 1500))]); } catch (e) {}
}
endUI.form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (endUI.busy) return;
  const name = endUI.name.value.replace(/\s+/g, ' ').trim().slice(0, 28);
  if (!name) { endUI.err.textContent = T('nameNeeded', S.lang); endUI.name.setAttribute('aria-invalid', 'true'); endUI.name.focus(); return; }
  endUI.err.textContent = ''; endUI.name.removeAttribute('aria-invalid');
  endUI.busy = true;
  audio.chime();
  await fontsReady();
  learn.finished(); endStep(3);
  const c = drawCertificate(name, S.lang, new Date(), [...S.badges], S.quiz);
  c.toBlob((blob) => {
    endUI.busy = false;
    if (!blob) return;
    if (cert.url) URL.revokeObjectURL(cert.url);
    cert.url = URL.createObjectURL(blob); cert.blob = blob;
    cert.img.src = cert.url;
    cert.img.alt = `${T('certTitle', S.lang)}: ${name}`;
    cert.dl.href = cert.url;
    cert.dl.download = `The-Last-Footprint-${name.replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '') || 'explorer'}.png`;
    S.done = true; renderJourney();
    openCert();
  }, 'image/png');
});
function openCert() {
  cert.back = document.activeElement;
  cert.root.hidden = false; void cert.root.offsetWidth; cert.root.classList.add('open');
  cert.root.querySelector('.cert-close').focus({ preventScroll: true });
}
function closeCert() {
  cert.root.classList.remove('open');
  setTimeout(() => { if (!cert.root.classList.contains('open')) cert.root.hidden = true; }, 200);
  cert.back?.focus?.({ preventScroll: true });
}
cert.root.querySelector('.cert-close').addEventListener('click', closeCert);
cert.root.addEventListener('click', (e) => { if (e.target === cert.root) closeCert(); });
// Inside the Claude artifact viewer a page may not start downloads itself: it hands the file to the
// viewer's "downloads" capability. Everywhere else (GitHub Pages, offline) the plain <a download> works.
let artifactDownloads = null;
(async () => { try { if (window.claude && window.claude.use) artifactDownloads = await window.claude.use('downloads'); } catch (e) { /* not in the viewer */ } })();
cert.dl.addEventListener('click', async (e) => {
  if (!cert.url) { e.preventDefault(); return; }
  if (!artifactDownloads) return;
  e.preventDefault();
  try { await artifactDownloads.save({ filename: cert.dl.download, data: cert.blob }); }
  catch (err) { if (!err || err.code !== 'declined') toast(T('saveHint', S.lang)); }
});

// start the whole journey again, without reloading the page
function replay() {
  if (!cert.root.hidden) closeCert();
  speech.stop(); guide.hide(); guideUI.after = null; finale.close();
  S.awake = [false, false, false]; S.line = [0, 0, 0]; S.done = false; S.badges.clear(); S.focus = 1; S.quiz = null;
  rovers.forEach((r) => {
    r.u.uSleep.value = 1; r.u.uGlow.value = 0; r.wakeT = -1; r.push = 1;
    r.yaw = r.baseYaw; r.yawVel = 0; r.pivot.rotation.y = r.baseYaw; r.pivot.position.y = r.baseY; r.model.rotation.z = 0;
  });
  shadowFrames = 2;
  endUI.form.hidden = true; endUI.steps.hidden = true; endUI.name.value = ''; endUI.err.textContent = ''; endUI.name.removeAttribute('aria-invalid');
  fadeTo(0, 0.45);
  later(0.5, () => {
    setStage('home'); opening.goHome(S.lang); audio.setAmbient('space');
    rebuildTitle(); renderSiteStatus(); renderTag(); renderJourney();
    fadeTo(1, 0.7);
  });
}
$('#end-replay').addEventListener('click', replay);
endUI.name.addEventListener('input', () => { if (endUI.err.textContent) { endUI.err.textContent = ''; endUI.name.removeAttribute('aria-invalid'); } });

// ?bench: plays the whole scene by itself and prints frame-time stats in the overlay
async function runBench() {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const until = async (fn) => { while (!fn()) await wait(50); };
  $('#fps').classList.add('show');
  await until(() => S.mode === 'hall');
  const pulse = async () => { bench.phase = 'charge'; setHolding(true); await until(() => S.mode === 'firing'); bench.phase = 'fire+wake'; await wait(3200); bench.phase = 'idle'; };
  await wait(2500);
  await pulse();
  bench.phase = 'fly'; focusRover(0); await wait(2600); bench.phase = 'idle';
  await pulse();
  bench.phase = 'fly'; focusRover(2); await wait(2600); bench.phase = 'idle';
  await pulse(); await wait(1500);
  const rows = Object.entries(bench.data).map(([k, a]) => {
    const sorted = [...a].sort((x, y) => x - y);
    const avg = a.reduce((x, y) => x + y, 0) / a.length;
    const p99 = sorted[Math.floor(sorted.length * 0.99)] || 0;
    return `${k}: ${(1000 / avg).toFixed(0)} fps avg · worst1% ${(1000 / p99).toFixed(0)} fps · max ${Math.max(...a).toFixed(0)}ms · hitches>50ms ${a.filter((x) => x > 50).length}`;
  });
  bench.on = false;
  const out = rows.join('\n') + `\npr ${S.pr.toFixed(2)} · ${innerWidth}x${innerHeight} · dpr ${devicePixelRatio}`;
  window.__benchResult = out;
  const el = $('#fps'); el.style.whiteSpace = 'pre'; el.textContent = out; el.dataset.final = '1';
}
if (bench.on) runBench();

window.__tlf = {
  ready: false, surfaceReady: false, S, rovers, renderer, focusRover, opening, receiveSignal, startWarp, setStage,
  selectSite, enterPick, backHome, audio, speech, explore, finale, learn, goEnding, replay, renderJourney,
  startExpedition: () => startExpedition(), get xp() { return xp; }, get expd() { return expd; }, get edl() { return edl; }, expPress: (d) => expPress(d), leaveExpedition: (w) => leaveExpedition(w),
  goSurface: () => { S.started = true; document.body.classList.add('started'); enterSurface(); },
  wakeNow: () => { if (S.mode === 'hall' && !S.awake[S.focus]) { S.charge = 1; firePulse(); } },
};

boot().catch((e) => { console.error(e); $('#loader-text').textContent = T('loadError', S.lang); });
