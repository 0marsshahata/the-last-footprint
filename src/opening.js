import * as THREE from 'three';
import { marsSun, latLonToVec, localSolarHour } from './mars24.js';
import { vnoise } from './noise.js';

// Landing sites (planetocentric latitude, east longitude)
// still-active rovers, shown in the ending as "the footprints continue"
export const ACTIVE_SITES = [
  { id: 'curiosity', lat: -4.59, lon: 137.44, name: 'Curiosity', place: 'Gale Crater', year: 2012, extra: true },
  { id: 'perseverance', lat: 18.44, lon: 77.45, name: 'Perseverance', place: 'Jezero Crater', year: 2021, extra: true },
];
export const SITES = [
  { id: 'sojourner', lat: 19.13, lon: -33.22, name: 'Sojourner', place: 'Ares Vallis', year: 1997 },
  { id: 'spirit', lat: -14.57, lon: 175.47, name: 'Spirit', place: 'Gusev Crater', year: 2004 },
  { id: 'opportunity', lat: -1.95, lon: -5.53, name: 'Opportunity', place: 'Meridiani Planum', year: 2004 },
];

const R_HOME = 5.4;
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

// aim the camera halfway between local noon and the landing sites (around 20°W),
// so the globe shows its real terminator and the beacons are on the near side
function startLon(sunLon) {
  const a = THREE.MathUtils.degToRad(sunLon), b = THREE.MathUtils.degToRad(-20);
  return THREE.MathUtils.radToDeg(Math.atan2(Math.sin(a) + Math.sin(b), Math.cos(a) + Math.cos(b)));
}

function texFromB64(b64, srgb = true) {
  const img = new Image();
  const tex = new THREE.Texture(img);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  img.onload = () => { tex.needsUpdate = true; };
  img.src = 'data:image/jpeg;base64,' + b64;
  return tex;
}

function dotTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.3, 'rgba(255,255,255,0.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

function moon(radius, seed, color) {
  const geo = new THREE.IcosahedronGeometry(1, 3);
  const p = geo.attributes.position; const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const k = 1 + vnoise(v.x * 2.2 + seed, v.y * 2.2 + v.z) * 0.22 + vnoise(v.x * 6 + seed, v.z * 6) * 0.05;
    v.multiplyScalar(k); v.x *= 1.25; // potato-shaped
    p.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 1 }));
  m.scale.setScalar(radius);
  return m;
}

export function buildOpening(renderer, quality) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, innerWidth / innerHeight, 0.01, 200);
  scene.add(camera);
  const dot = dotTexture();

  // ----- sky: Milky Way panorama + crisp twinkling stars -----
  const skyTex = texFromB64(window.STARS_TEX_B64 || '');
  const sky = new THREE.Mesh(new THREE.SphereGeometry(90, 48, 24), new THREE.MeshBasicMaterial({ map: skyTex, side: THREE.BackSide, color: new THREE.Color(0.32, 0.32, 0.36), depthWrite: false, transparent: true, opacity: 0 }));
  scene.add(sky);
  const N = quality.mobile ? 1400 : 2600;
  const sp = new Float32Array(N * 3), sr = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, r = 70;
    const s = Math.sqrt(1 - u * u);
    sp[i * 3] = Math.cos(a) * s * r; sp[i * 3 + 1] = u * r; sp[i * 3 + 2] = Math.sin(a) * s * r; sr[i] = Math.random();
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(sp, 3)); sg.setAttribute('aRand', new THREE.BufferAttribute(sr, 1));
  const starMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uPx: { value: renderer.getPixelRatio() }, uOpacity: { value: 0 }, uMap: { value: dot } },
    vertexShader: `attribute float aRand; uniform float uTime, uPx, uOpacity; varying float vA; varying vec3 vC;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv;
        float tw = 0.65 + 0.35 * sin(uTime * (0.6 + aRand * 2.2) + aRand * 60.0);
        gl_PointSize = (0.8 + pow(aRand, 6.0) * 3.2) * uPx * 2.0;
        vA = tw * uOpacity * (0.35 + 0.65 * aRand);
        vC = mix(vec3(0.75,0.85,1.0), vec3(1.0,0.86,0.7), fract(aRand * 7.31)); }`,
    fragmentShader: `uniform sampler2D uMap; varying float vA; varying vec3 vC;
      void main(){ float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(vC * 1.6, a * vA); }`,
  });
  scene.add(new THREE.Points(sg, starMat));

  // ----- Mars, lit by the real Sun position for this moment -----
  const sun = marsSun(new Date());
  const sunDir = latLonToVec(sun.lat, sun.lonE, new THREE.Vector3());
  const marsTex = texFromB64(window.MARS_TEX_B64 || '');
  marsTex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const bumpTex = texFromB64(window.MARS_TEX_B64 || '', false);
  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(1, quality.mobile ? 96 : 160, quality.mobile ? 48 : 80),
    new THREE.MeshStandardMaterial({ map: marsTex, bumpMap: bumpTex, bumpScale: 1.4, roughness: 1, metalness: 0 }),
  );
  scene.add(planet);
  // thin dusty atmosphere: a fresnel rim, brighter on the day side
  const atmo = new THREE.Mesh(new THREE.SphereGeometry(1.035, 96, 48), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.BackSide, blending: THREE.AdditiveBlending,
    uniforms: { uSun: { value: sunDir }, uK: { value: 0 } },
    vertexShader: `varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(normal); vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `uniform vec3 uSun; uniform float uK; varying vec3 vN; varying vec3 vW;
      void main(){ vec3 V = normalize(cameraPosition - vW); float rim = pow(1.0 - abs(dot(-vN, V)), 3.0);
        float day = 0.22 + 0.78 * smoothstep(-0.25, 0.5, dot(normalize(vW), uSun)); // a faint rim stays on the night side
        vec3 c = mix(vec3(0.95,0.55,0.35), vec3(0.6,0.75,1.0), smoothstep(0.1, -0.2, dot(normalize(vW), uSun)) * 0.6);
        gl_FragColor = vec4(c * rim * day * 1.6 * uK, rim * day * uK); }`,
  }));
  scene.add(atmo);

  const sunLight = new THREE.DirectionalLight('#fff1e0', 0);
  sunLight.position.copy(sunDir).multiplyScalar(10);
  scene.add(sunLight);
  const amb = new THREE.AmbientLight('#5d5a80', 0.32); // faint, so the night side and its beacons still read as part of the globe
  scene.add(amb);

  // Phobos and Deimos (sizes exaggerated so they read on screen; orbits in Mars' equatorial plane)
  const phobos = moon(0.045, 3, '#6d625a');
  const deimos = moon(0.03, 9, '#8a7d70');
  scene.add(phobos, deimos);

  // ----- landing-site beacons -----
  const ALL = [...SITES, ...ACTIVE_SITES];
  const beacons = ALL.map((site, i) => {
    const green = !!site.extra;
    const n = latLonToVec(site.lat, site.lon, new THREE.Vector3());
    const g = new THREE.Group();
    g.position.copy(n).multiplyScalar(1.003);
    g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), n);
    const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: dot, color: green ? new THREE.Color(1.6, 4.6, 2.2) : new THREE.Color(2.2, 4.4, 5.2), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
    core.scale.setScalar(0.05); g.add(core);
    const rings = [0, 1].map(() => {
      const r = new THREE.Mesh(new THREE.RingGeometry(0.8, 1, 48), new THREE.MeshBasicMaterial({ color: green ? new THREE.Color(0.9, 3, 1.3) : new THREE.Color(1.2, 2.8, 3.4), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, side: THREE.DoubleSide }));
      r.rotation.x = -Math.PI / 2; g.add(r); return r;
    });
    const beamGeo = new THREE.CylinderGeometry(0.0015, 0.004, 0.05, 8, 1, true).translate(0, 0.025, 0);
    const beam = new THREE.Mesh(beamGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 2.6, 3.2), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
    g.add(beam);
    // map pin (only shown while choosing a landing site)
    const pin = new THREE.Group(); pin.scale.setScalar(0.001); g.add(pin);
    const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.15, 8).translate(0, 0.075, 0), new THREE.MeshBasicMaterial({ color: '#e9e4dc', transparent: true }));
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.024, 20, 14), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.35, 0.72, 0.3), toneMapped: false }));
    head.position.y = 0.16; pin.add(stalk, head);
    const hit = new THREE.Mesh(new THREE.SphereGeometry(0.085, 10, 8), new THREE.MeshBasicMaterial({ visible: false }));
    hit.position.y = 0.13; hit.userData.site = site.id; pin.add(hit);
    scene.add(g);
    return { site, n, g, core, rings, beam, pin, head, hit, on: 0, target: 0, phase: i * 0.37, el: null, pinK: 0 };
  });

  // ----- the trail: great-circle arcs Sojourner -> Spirit -> Opportunity -> Curiosity -> Perseverance -----
  const trailPts = [];
  const chain = ['sojourner', 'spirit', 'opportunity', 'curiosity', 'perseverance'].map((id) => ALL.find((x) => x.id === id));
  const va = new THREE.Vector3(), vb = new THREE.Vector3(), vq = new THREE.Vector3();
  for (let k = 0; k < chain.length - 1; k++) {
    latLonToVec(chain[k].lat, chain[k].lon, va); latLonToVec(chain[k + 1].lat, chain[k + 1].lon, vb);
    const ang = va.angleTo(vb), steps = Math.max(8, Math.round(ang * 40));
    for (let j = 0; j <= steps; j++) {
      const f = j / steps;
      // slerp on the sphere, lifted a little in the middle like a hop
      vq.copy(va).multiplyScalar(Math.sin((1 - f) * ang)).addScaledVector(vb, Math.sin(f * ang)).divideScalar(Math.sin(ang));
      trailPts.push(vq.clone().multiplyScalar(1.006 + Math.sin(f * Math.PI) * 0.05));
    }
  }
  const trailGeo = new THREE.BufferGeometry().setFromPoints(trailPts);
  const trail = new THREE.Line(trailGeo, new THREE.LineDashedMaterial({ color: new THREE.Color(2.2, 1.3, 0.55), dashSize: 0.025, gapSize: 0.018, transparent: true, toneMapped: false }));
  trail.computeLineDistances(); trailGeo.setDrawRange(0, 0); trail.visible = false; scene.add(trail);
  const trailState = { k: 0 };

  // ----- title made of dust -----
  const title = { points: null, mat: null, progress: 0, opacity: 0 };
  function buildTitle(rect, lang) {
    if (title.points) { camera.remove(title.points); title.points.geometry.dispose(); }
    // sample the words from a canvas
    const W = 1200, H = 520;
    const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
    g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = '600 200px "Chakra Petch", "Chakra", "Segoe UI", sans-serif';
    const fitLine = (txt, y) => { let size = 200; g.font = `600 ${size}px "Chakra Petch", "Chakra", "Segoe UI", sans-serif`; while (g.measureText(txt).width > W * 0.96 && size > 40) { size -= 6; g.font = `600 ${size}px "Chakra Petch", "Chakra", "Segoe UI", sans-serif`; } g.fillText(txt, W / 2, y); };
    fitLine('THE LAST', H * 0.27); fitLine('FOOTPRINT', H * 0.74);
    title.canvas = c;
    const data = g.getImageData(0, 0, W, H).data;
    const pts = [];
    const step = quality.mobile ? 4 : 3;
    for (let y = 0; y < H; y += step) for (let x = 0; x < W; x += step) if (data[(y * W + x) * 4 + 3] > 140) pts.push(x + (Math.random() - 0.5) * step * 0.6, y + (Math.random() - 0.5) * step * 0.6);
    const count = pts.length / 2;
    // map canvas space onto the reserved title rectangle, at depth D in camera space
    const D = 4;
    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * D, halfW = halfH * camera.aspect;
    const sx = (px) => ((px / innerWidth) * 2 - 1) * halfW, sy = (py) => (1 - (py / innerHeight) * 2) * halfH;
    const scale = Math.min(rect.width / W, rect.height / H);
    const ox = rect.left + (rect.width - W * scale) / 2, oy = rect.top + (rect.height - H * scale) / 2;
    const target = new Float32Array(count * 3), start = new Float32Array(count * 3), rnd = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      const px = ox + pts[i * 2] * scale, py = oy + pts[i * 2 + 1] * scale;
      target[i * 3] = sx(px); target[i * 3 + 1] = sy(py); target[i * 3 + 2] = -D;
      // dust blows in from the planet's side of the screen
      // dust lifts off the globe (centre of the screen while the camera approaches) and flies into the letters
      const a = Math.random() * Math.PI * 2, rr = Math.sqrt(Math.random()) * halfH * 0.42;
      start[i * 3] = Math.cos(a) * rr;
      start[i * 3 + 1] = Math.sin(a) * rr;
      start[i * 3 + 2] = -D + 0.6 + Math.random() * 1.2;
      rnd[i * 2] = Math.random(); rnd[i * 2 + 1] = (pts[i * 2] / W);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(target, 3));
    geo.setAttribute('aStart', new THREE.BufferAttribute(start, 3));
    geo.setAttribute('aRnd', new THREE.BufferAttribute(rnd, 2));
    const pxSize = Math.max(1.4, scale * step * 1.05) * renderer.getPixelRatio();
    title.mat = title.mat || new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending,
      uniforms: { uP: { value: 0 }, uT: { value: 0 }, uO: { value: 0 }, uSize: { value: 2 }, uMap: { value: dot }, uSide: { value: 1 } },
      vertexShader: `attribute vec3 aStart; attribute vec2 aRnd; uniform float uP, uT, uSize, uSide; varying float vA;
        void main(){
          float order = uSide > 0.0 ? aRnd.y : 1.0 - aRnd.y;           // sweep in reading order
          float k = clamp((uP * 1.9 - order * 0.6 - aRnd.x * 0.3), 0.0, 1.0);
          k = k * k * (3.0 - 2.0 * k);
          vec3 p = mix(aStart, position, k);
          p.x += sin(uT * 1.3 + aRnd.x * 40.0) * 0.004 * (1.0 + (1.0 - k) * 30.0);
          p.y += cos(uT * 1.1 + aRnd.x * 30.0) * 0.004 * (1.0 + (1.0 - k) * 30.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * (1.0 + (1.0 - k) * 1.4) * (0.75 + aRnd.x * 0.5);
          vA = mix(0.25, 1.0, k) * (0.8 + 0.2 * sin(uT * 3.0 + aRnd.x * 50.0));
        }`,
      fragmentShader: `uniform sampler2D uMap; uniform float uO; varying float vA;
        void main(){ float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.5, 1.12, 0.82), a * vA * uO); }`,
    });
    title.mat.uniforms.uSize.value = pxSize;
    title.mat.uniforms.uSide.value = 1;
    title.points = new THREE.Points(geo, title.mat);
    title.points.frustumCulled = false; title.points.renderOrder = 20;
    camera.add(title.points);
  }

  // ----- camera rig -----
  const target = new THREE.Vector3();
  const rig = {
    // camera starts on the day side, 60° away from the noon meridian so the terminator shows
    lon: startLon(sun.lonE), lat: 12, r: 13, look: new THREE.Vector3(), side: 0, sideTarget: 0, lift: 0, liftTarget: 0,
  };
  const st = { t: -1, phase: 'idle', warp: null, spin: 0.018, focus: null, vLon: 0, vLat: 0, dragging: false, idle: 0 };
  const tmp = new THREE.Vector3(), right = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), camUp = new THREE.Vector3();

  function layout(lang) {
    const portrait = innerWidth < innerHeight * 0.95;
    // shift the globe away from the text column (screen-space offset, in planet radii)
    rig.sideTarget = portrait ? 0 : (lang === 'ar' ? -0.62 : 0.62);
    const tablet = portrait && innerWidth / innerHeight > 0.6; // tall but wide-ish (tablets, a narrow desktop window)
    rig.liftTarget = portrait ? (tablet ? 0.15 : 0.27) : 0.05;
    rig.rHome = portrait ? (tablet ? 7.5 : 6.7) : R_HOME;
    // choosing a site: the globe moves to the middle (a bit higher on phones, above the guide's bubble)
    rig.pickLift = portrait ? (tablet ? 0.12 : 0.3) : 0.1;
    rig.pickR = portrait ? (tablet ? 5.6 : 6.0) : 5.0;
    camera.fov = portrait ? 46 : 35;
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  }

  function placeCamera() {
    const la = THREE.MathUtils.degToRad(rig.lat), lo = THREE.MathUtils.degToRad(rig.lon);
    camera.position.set(Math.cos(lo) * Math.cos(la), Math.sin(la), -Math.sin(lo) * Math.cos(la)).multiplyScalar(rig.r);
    // look past the planet so it sits off-centre: offset along the camera's right/up vectors
    tmp.copy(camera.position).negate().normalize();
    right.crossVectors(tmp, up).normalize();
    camUp.crossVectors(right, tmp);
    rig.look.set(0, 0, 0).addScaledVector(right, -rig.side * rig.r * 0.42).addScaledVector(camUp, -rig.lift * rig.r * 0.42);
    camera.lookAt(rig.look);
  }

  const sfx = { beep: null };
  function start(reduced) {
    st.t = 0; st.phase = 'intro'; st.reduced = reduced;
    if (reduced) { st.t = 6; }
  }

  // fly to a site and dive into it; onDone fires at the end
  function warpTo(siteId, onDone) {
    const b = beacons.find((x) => x.site.id === siteId);
    st.phase = 'warp';
    st.warp = { t: 0, from: { lon: rig.lon, lat: rig.lat, r: rig.r, side: rig.side, lift: rig.lift }, to: { lon: b.site.lon, lat: b.site.lat }, onDone, done: false };
  }

  function enterEnding() {
    st.phase = 'ending'; st.focus = null; st.warp = null; amb.intensity = 0.32; trailState.k = 0;
    rig.lon = startLon(marsSun(new Date()).lonE); rig.lat = 10; rig.r = rig.pickR * 1.6; title.opacity = 0;
    beacons.forEach((b) => { b.target = 1; });
  }
  function enterPick() {
    st.phase = 'pick'; st.focus = null; st.idle = 0; st.vLon = 0; st.vLat = 0;
    beacons.forEach((b) => { b.target = b.site.extra ? 0 : 1; });
  }
  function focusSite(id) {
    const b = beacons.find((x) => x.site.id === id);
    st.focus = b ? { id, lon: b.site.lon, lat: THREE.MathUtils.clamp(b.site.lat, -40, 40) } : null;
  }
  function dragStart() { st.dragging = true; st.focus = null; st.idle = 0; st.vLon = 0; st.vLat = 0; }
  function dragMove(dx, dy, dt) {
    const k = 0.22 * (rig.r / 4);
    rig.lon -= dx * k; rig.lat = THREE.MathUtils.clamp(rig.lat + dy * k * 0.8, -55, 55);
    if (dt > 0) { st.vLon = (-dx * k) / dt; st.vLat = (dy * k * 0.8) / dt; }
  }
  function dragEnd() { st.dragging = false; st.idle = 0; }
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  function pickAt(x, y) {
    ndc.set((x / innerWidth) * 2 - 1, -(y / innerHeight) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const pHit = ray.intersectObject(planet, false)[0];
    const hits = ray.intersectObjects(beacons.filter((b) => b.pin.visible).map((b) => b.hit), false);
    for (const h of hits) if (!pHit || h.distance < pHit.distance + 0.02) return h.object.userData.site;
    return null;
  }

  function goHome(lang, instant = true) {
    st.phase = 'home'; st.t = Math.max(st.t, 6); st.warp = null; st.focus = null; amb.intensity = 0.32; trail.visible = false;
    beacons.forEach((b) => { b.target = b.site.extra ? 0 : 1; });
    layout(lang);
    if (instant) { rig.r = rig.rHome; rig.lat = 12; title.opacity = 0.38; rig.lon = startLon(marsSun(new Date()).lonE); }
  }

  const proj = new THREE.Vector3();
  let sunClock = 0;
  function refreshSun() {
    // Mars turns ~15° an hour: keep the lighting true even if the page stays open
    const s = marsSun(new Date());
    latLonToVec(s.lat, s.lonE, sunDir);
    sunLight.position.copy(sunDir).multiplyScalar(10);
  }
  function update(dt, time) {
    sunClock += dt; if (sunClock > 30) { sunClock = 0; refreshSun(); }
    starMat.uniforms.uTime.value = time;
    if (st.t >= 0) st.t += dt;
    const t = st.t;
    // timeline
    const fadeStars = smooth(0.0, 1.6, t);
    starMat.uniforms.uOpacity.value = fadeStars;
    sky.material.opacity = fadeStars;
    sunLight.intensity = 3.2 * smooth(0.3, 2.6, t);
    atmo.material.uniforms.uK.value = smooth(1.0, 3.0, t);
    if (st.phase === 'intro' || st.phase === 'home') {
      const rT = THREE.MathUtils.lerp(13, rig.rHome, ease(clamp01(t / 4.2)));
      rig.r = st.phase === 'intro' ? rT : rig.r + (rT - rig.r) * Math.min(1, dt * 2.5);
      if (st.phase === 'home') { rig.lat += (12 - rig.lat) * Math.min(1, dt * 1.5); amb.intensity += (0.32 - amb.intensity) * Math.min(1, dt * 2); }
      rig.lon += st.spin * dt * (st.phase === 'home' ? 1 : 0.6) * 57.3 * 0.25;
      rig.side += (rig.sideTarget * smooth(2.5, 4.5, t) - rig.side) * Math.min(1, dt * 3);
      rig.lift += (rig.liftTarget * smooth(2.5, 4.5, t) - rig.lift) * Math.min(1, dt * 3);
      beacons.forEach((b, i) => { b.target = !b.site.extra && t > 1.5 + i * 0.45 ? 1 : 0; });
      title.progress = smooth(1.7, 4.3, t); title.opacity = smooth(1.5, 2.2, t);
      if (st.phase === 'intro' && t > 4.4) st.phase = 'home';
      // once the crisp title is on screen the dust stays as a soft shimmer behind it
      if (st.phase === 'home') title.opacity += (0.38 - title.opacity) * Math.min(1, dt * 1.2);
    }
    if (st.phase === 'ending') {
      amb.intensity += (1.05 - amb.intensity) * Math.min(1, dt * 2);
      rig.side += (0 - rig.side) * Math.min(1, dt * 3);
      // a little smaller and higher than in "pick", so SOL's panel (with the name field) never covers it
      rig.lift += (rig.pickLift + 0.12 - rig.lift) * Math.min(1, dt * 3);
      rig.r += (rig.pickR * 1.12 - rig.r) * Math.min(1, dt * 2);
      rig.lat += (8 - rig.lat) * Math.min(1, dt * 1.5);
      rig.lon += 6 * dt;
      title.opacity += (0 - title.opacity) * Math.min(1, dt * 4);
      beacons.forEach((b) => { b.target = 1; });
      trail.visible = true;
      trailState.k = Math.min(1, trailState.k + dt / 5.5);
      trailGeo.setDrawRange(0, Math.floor(trailPts.length * trailState.k));
    }
    if (st.phase === 'pick') {
      // "map mode": lift the night side enough to read the whole globe while choosing
      amb.intensity += (1.05 - amb.intensity) * Math.min(1, dt * 2);
      rig.side += (0 - rig.side) * Math.min(1, dt * 3);
      rig.lift += (rig.pickLift - rig.lift) * Math.min(1, dt * 3);
      rig.r += (rig.pickR - rig.r) * Math.min(1, dt * 2.5);
      title.opacity += (0 - title.opacity) * Math.min(1, dt * 4);
      if (st.focus) {
        // turn the globe so the chosen site faces us
        const dLon = ((st.focus.lon - rig.lon + 540) % 360) - 180;
        rig.lon += dLon * Math.min(1, dt * 2.6);
        rig.lat += (st.focus.lat - rig.lat) * Math.min(1, dt * 2.6);
      } else if (!st.dragging) {
        rig.lon += st.vLon * dt; rig.lat = THREE.MathUtils.clamp(rig.lat + st.vLat * dt, -55, 55);
        st.vLon *= Math.pow(0.08, dt); st.vLat *= Math.pow(0.08, dt);
        st.idle += dt;
        if (st.idle > 2.5) rig.lon += 3 * dt; // drift slowly when nobody touches it
      }
    }
    if (st.phase === 'warp') {
      const w = st.warp; w.t += dt;
      const k = ease(clamp01(w.t / 1.9));
      // shortest way round in longitude
      let dLon = ((w.to.lon - w.from.lon + 540) % 360) - 180;
      rig.lon = w.from.lon + dLon * k;
      rig.lat = THREE.MathUtils.lerp(w.from.lat, w.to.lat, k);
      rig.r = THREE.MathUtils.lerp(w.from.r, 1.55, k);
      rig.side = THREE.MathUtils.lerp(w.from.side, 0, k);
      rig.lift = THREE.MathUtils.lerp(w.from.lift, 0, k);
      title.opacity = 1 - smooth(0, 0.6, w.t);
      // the dive
      if (w.t > 1.9) { const d = ease(clamp01((w.t - 1.9) / 1.0)); rig.r = THREE.MathUtils.lerp(1.55, 1.006, d); camera.fov = THREE.MathUtils.lerp(camera.fov, 60, dt * 2); camera.updateProjectionMatrix(); }
      amb.intensity = THREE.MathUtils.lerp(0.32, 2.2, smooth(0.2, 1.5, w.t));
      if (w.t > 2.9 && !w.done) { w.done = true; w.onDone?.(); }
    }
    placeCamera();

    // moons (sped up)
    const pa = time * 0.16, da = time * 0.05 + 2.0;
    phobos.position.set(Math.cos(pa) * 2.0, Math.sin(pa) * 0.05, -Math.sin(pa) * 2.0); phobos.rotation.y = -pa;
    deimos.position.set(Math.cos(da) * 3.3, Math.sin(da) * 0.12, -Math.sin(da) * 3.3); deimos.rotation.y = -da;

    // beacons
    beacons.forEach((b) => {
      if (st.phase === 'warp' && st.warp.t > 0.5) b.target = 0;
      b.on += (b.target - b.on) * Math.min(1, dt * 4);
      b.g.getWorldPosition(proj); tmp.copy(camera.position).sub(proj).normalize();
      b.g.visible = tmp.dot(b.n) > -0.05;
      const pulse = (time * 0.55 + b.phase) % 1;
      b.rings.forEach((r, j) => { const p = (pulse + j * 0.5) % 1; r.scale.setScalar(0.008 + p * 0.07); r.material.opacity = (1 - p) * 0.85 * b.on; });
      b.core.material.opacity = b.on; b.core.scale.setScalar(0.018 + 0.006 * Math.sin(time * 5 + b.phase * 9) * b.on + 0.012 * b.on);
      b.beam.material.opacity = 0.45 * b.on; b.beam.scale.y = 0.2 + b.on * 0.8;
      const pinT = st.phase === 'pick' && !b.site.extra ? 1 : 0;
      b.pinK += (pinT - b.pinK) * Math.min(1, dt * 5);
      const sel = st.focus && st.focus.id === b.site.id;
      const pop = b.pinK * (sel ? 1.35 + 0.08 * Math.sin(time * 6) : 1);
      b.pin.scale.setScalar(Math.max(0.001, pop));
      b.pin.visible = b.pinK > 0.01;
      b.head.material.color.setRGB(sel ? 0.7 : 1.35, sel ? 1.9 : 0.72, sel ? 2.3 : 0.3);
    });

    if (title.mat) {
      title.mat.uniforms.uP.value = st.reduced ? 1 : title.progress;
      title.mat.uniforms.uO.value = title.opacity;
      title.mat.uniforms.uT.value = time;
    }
  }

  // project beacon positions to screen for the HTML labels
  function labelPositions(out) {
    camera.updateMatrixWorld();
    beacons.forEach((b, i) => {
      b.g.getWorldPosition(proj);
      tmp.copy(camera.position).sub(proj).normalize();
      const facing = tmp.dot(b.n);
      proj.project(camera);
      out[i] = { x: (proj.x * 0.5 + 0.5) * innerWidth, y: (-proj.y * 0.5 + 0.5) * innerHeight, visible: facing > 0.15 && b.on > 0.5, on: b.on };
    });
    return out;
  }

  function siteStatus() {
    const s = marsSun(new Date());
    return [...SITES, ...ACTIVE_SITES].map((site) => {
      const h = localSolarHour(s, site.lon);
      const n = latLonToVec(site.lat, site.lon, new THREE.Vector3());
      const sd = latLonToVec(s.lat, s.lonE, new THREE.Vector3());
      return { id: site.id, hour: h, day: n.dot(sd) > 0 };
    });
  }

  function resize(lang) { layout(lang); starMat.uniforms.uPx.value = renderer.getPixelRatio(); }
  layout('ar');
  placeCamera();

  return {
    scene, camera, update, start, warpTo, goHome, resize, enterPick, enterEnding, focusSite, dragStart, dragMove, dragEnd, pickAt, planet, buildTitle, labelPositions, siteStatus, beacons, sun,
    get phase() { return st.phase; }, get t() { return st.t; }, title, sfx,
  };
}
