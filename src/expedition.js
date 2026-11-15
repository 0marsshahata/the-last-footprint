import * as THREE from 'three';

// Immersive Expedition, space part: Spirit's real trip in 2003–2004.
// Earth (NASA Blue Marble) → launch from Cape Canaveral → cruise → arrival at Mars → atmospheric entry.
// Distances and times are squeezed so the whole trip takes about a minute; the numbers on screen are the real ones.

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const decoding = [];
function texFromB64(b64, srgb = true) {
  const img = new Image();
  const tex = new THREE.Texture(img);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  img.onload = () => { tex.needsUpdate = true; };
  if (b64) { img.src = 'data:image/jpeg;base64,' + b64; decoding.push(img.decode().then(() => { tex.needsUpdate = true; }).catch(() => {})); }
  return tex;
}

function glowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'); const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(255,220,170,0.7)'); gr.addColorStop(1, 'rgba(255,140,60,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

// the spacecraft as it flew: cruise stage (solar cells) on top of the aeroshell (backshell + heat shield)
export function buildCapsule(env) {
  const g = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({ color: '#e9e6e0', roughness: 0.45, metalness: 0.25, envMap: env || null, envMapIntensity: 0.6 });
  const shieldMat = new THREE.MeshStandardMaterial({ color: '#9a6440', roughness: 0.8, metalness: 0.05, emissive: new THREE.Color('#ff6a1a'), emissiveIntensity: 0 });
  const dark = new THREE.MeshStandardMaterial({ color: '#2b2f36', roughness: 0.6, metalness: 0.5 });
  // heat shield: a wide, shallow cone pointing forward (+y)
  const shield = new THREE.Mesh(new THREE.ConeGeometry(1, 0.42, 48, 1, true), shieldMat);
  shield.position.y = 0.21; shield.material.side = THREE.DoubleSide;
  g.add(shield);
  const cap = new THREE.Mesh(new THREE.CircleGeometry(1, 48), shieldMat); cap.rotation.x = Math.PI / 2; g.add(cap);
  // backshell: a cone tapering backwards
  const back = new THREE.Mesh(new THREE.CylinderGeometry(0.98, 0.42, 0.95, 48, 1, true), white); // wide next to the heat shield, narrow at the back
  back.position.y = -0.475; back.material.side = THREE.DoubleSide; g.add(back);
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.06, 32), white); top.position.y = -0.98; g.add(top);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.99, 0.03, 8, 64), dark); ring.rotation.x = Math.PI / 2; g.add(ring);
  return { group: g, shield, shieldMat, white, dark };
}

export function buildExpedition(renderer, { marsMap, quality, env, reduced }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, innerWidth / innerHeight, 0.002, 400);
  scene.add(camera);
  const SUN = new THREE.Vector3(1, 0.35, 0.55).normalize();

  // ----- stars that always surround the camera -----
  const N = quality.mobile ? 1400 : 2400;
  const sp = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, s = Math.sqrt(1 - u * u), r = 150;
    sp[i * 3] = Math.cos(a) * s * r; sp[i * 3 + 1] = u * r; sp[i * 3 + 2] = Math.sin(a) * s * r;
  }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
  const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: '#cfd8ff', size: 1.4 * renderer.getPixelRatio(), sizeAttenuation: false, transparent: true, opacity: 0.85, depthWrite: false }));
  scene.add(stars);

  // ----- Earth: day map lit by the Sun, city lights on the night side, a blue rim -----
  const dayTex = texFromB64(window.EARTH_DAY_B64);
  const nightTex = texFromB64(window.EARTH_NIGHT_B64);
  dayTex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const earthMat = new THREE.ShaderMaterial({
    uniforms: { uDay: { value: dayTex }, uNight: { value: nightTex }, uSun: { value: SUN } },
    vertexShader: `varying vec2 vUv; varying vec3 vN; varying vec3 vW;
      void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `uniform sampler2D uDay, uNight; uniform vec3 uSun; varying vec2 vUv; varying vec3 vN; varying vec3 vW;
      void main(){
        float ndl = dot(normalize(vN), uSun);
        vec3 day = texture2D(uDay, vUv).rgb; vec3 night = texture2D(uNight, vUv).rgb;
        vec3 c = day * (smoothstep(-0.12, 0.35, ndl) * 1.15 + 0.035);
        c += night * night * 2.2 * smoothstep(0.1, -0.25, ndl);
        vec3 V = normalize(cameraPosition - vW); float rim = pow(1.0 - max(dot(normalize(vN), V), 0.0), 3.0);
        c += vec3(0.25, 0.5, 1.0) * rim * (0.25 + 0.9 * smoothstep(-0.3, 0.4, ndl));
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  const lat = THREE.MathUtils.degToRad(28.5), lon = -80.6; // Cape Canaveral
  const earthTilt = new THREE.Group(), earthSpin = new THREE.Group();
  const earth = new THREE.Mesh(new THREE.SphereGeometry(1, quality.mobile ? 96 : 128, quality.mobile ? 48 : 64), earthMat);
  earthSpin.add(earth); earthTilt.add(earthSpin); scene.add(earthTilt);
  { // turn the globe so Florida faces +z
    const phi = THREE.MathUtils.degToRad(lon + 180);
    const x = -Math.cos(phi) * Math.cos(lat), z = Math.sin(phi) * Math.cos(lat);
    earthSpin.rotation.y = -Math.atan2(x, z);
    earthTilt.rotation.x = lat;
  }
  const atmoE = new THREE.Mesh(new THREE.SphereGeometry(1.025, 64, 32), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.BackSide, blending: THREE.AdditiveBlending,
    uniforms: { uSun: { value: SUN }, uC: { value: new THREE.Color(0.35, 0.6, 1.0) } },
    vertexShader: `varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `uniform vec3 uSun; uniform vec3 uC; varying vec3 vN; varying vec3 vW;
      void main(){ vec3 V = normalize(cameraPosition - vW); float rim = pow(1.0 - abs(dot(-vN, V)), 2.6);
        float day = 0.15 + 0.85 * smoothstep(-0.3, 0.5, dot(normalize(vN), uSun)); gl_FragColor = vec4(uC * rim * day * 1.4, rim * day); }`,
  }));
  scene.add(atmoE);

  // ----- Mars, far away along the path -----
  const MARS_R = 0.53;
  const M = new THREE.Vector3(26, 5, 62);
  const mars = new THREE.Mesh(new THREE.SphereGeometry(MARS_R, 96, 48), new THREE.MeshStandardMaterial({ map: marsMap, roughness: 1, metalness: 0 }));
  mars.position.copy(M); mars.rotation.y = 2.6; scene.add(mars);
  const atmoM = atmoE.clone(); atmoM.material = atmoE.material.clone(); atmoM.material.uniforms.uC.value = new THREE.Color(0.95, 0.55, 0.35);
  const LIGHT = new THREE.Vector3(-0.55, 0.5, -0.67).normalize(); // Mars and the craft: lit from the Earth side, so we arrive on the day side
  atmoM.material.uniforms.uSun = { value: LIGHT };
  atmoM.scale.setScalar(MARS_R); atmoM.position.copy(M); scene.add(atmoM);

  const sun = new THREE.DirectionalLight('#fff3e6', 3.0); sun.position.copy(LIGHT).multiplyScalar(50); scene.add(sun);
  scene.add(new THREE.AmbientLight('#8a90b0', 0.85)); // enough fill to read the craft against black space
  const glowTex = glowTexture();
  const sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: new THREE.Color(3, 2.6, 2.1), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  sunSprite.position.copy(SUN).multiplyScalar(140); sunSprite.scale.setScalar(16); scene.add(sunSprite);

  // ----- the spacecraft -----
  const cap = buildCapsule(env);
  const craft = new THREE.Group(); craft.add(cap.group);
  const cruise = new THREE.Group(); // the cruise stage, released before entry
  {
    const cells = new THREE.MeshStandardMaterial({ color: '#1d3f8a', roughness: 0.3, metalness: 0.6, emissive: '#0a1a40', emissiveIntensity: 0.4 });
    const disk = new THREE.Mesh(new THREE.CylinderGeometry(1.32, 1.32, 0.16, 48), [cap.white, cap.dark, cells]); // side, top, bottom (cells face away from the aeroshell)
    disk.position.y = -1.1; cruise.add(disk);
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.5, 8), cap.dark); mast.position.y = -1.42; cruise.add(mast);
    const dish = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.12, 24, 1, true), cap.white); dish.position.y = -1.66; dish.material.side = THREE.DoubleSide; cruise.add(dish);
  }
  craft.add(cruise);
  craft.scale.setScalar(0.012);
  scene.add(craft);
  // engine flame (launch) and plasma (entry)
  const flame = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: new THREE.Color(4, 2.6, 1.2), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
  scene.add(flame);
  const plasma = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { uK: { value: 0 }, uT: { value: 0 } },
    vertexShader: `varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform float uK, uT; varying vec3 vP;
      void main(){ float h = vP.y; float flick = 0.75 + 0.25 * sin(uT * 40.0 + vP.x * 20.0) * sin(uT * 31.0 + vP.z * 17.0);
        float a = smoothstep(0.0, 1.0, h) * uK * flick; vec3 c = mix(vec3(1.0,0.35,0.08), vec3(1.0,0.85,0.55), h) * 3.0;
        gl_FragColor = vec4(c * a, a); }`,
  }));
  plasma.scale.set(1.25, 0.9, 1.25); plasma.position.y = 0.32; cap.group.add(plasma);

  // launch trail
  const TRAIL = 80;
  const trailPos = new Float32Array(TRAIL * 3);
  const trailGeo = new THREE.BufferGeometry(); trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
  const trail = new THREE.Line(trailGeo, new THREE.LineBasicMaterial({ color: new THREE.Color(2.4, 1.6, 0.9), transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
  trail.frustumCulled = false; trail.visible = false; scene.add(trail);
  let trailN = 0;

  // ----- the path: Florida → around the Sun (squeezed) → Mars -----
  const F = new THREE.Vector3(0, 0, 1);
  const toE = new THREE.Vector3().subVectors(F, M).normalize();
  const E = M.clone().addScaledVector(toE, MARS_R * 1.9).add(new THREE.Vector3(0, MARS_R * 0.35, 0));
  const C1 = new THREE.Vector3(2.2, 1.6, 8), C2 = new THREE.Vector3(30, 12, 40);
  const path = new THREE.CubicBezierCurve3(F.clone().multiplyScalar(1.004), C1, C2, E);
  const entryEnd = M.clone().add(new THREE.Vector3(0.05, MARS_R * 0.55, -0.0)).addScaledVector(toE, MARS_R * 0.9);

  const st = { phase: 'idle', t: 0, charge: 0, heat: 0, k: 0, shake: 0, onEvent: null, fired: {} };
  const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), camLook = new THREE.Vector3();
  const qTmp = new THREE.Quaternion();
  const emit = (e) => { if (!st.fired[e]) { st.fired[e] = true; st.onEvent?.(e); } };

  function orientCraft(dir) { qTmp.setFromUnitVectors(up, tmp2.copy(dir).normalize()); craft.quaternion.slerp(qTmp, 0.12); }

  function start(onEvent) {
    st.onEvent = onEvent; st.fired = {}; st.phase = 'pad'; st.t = 0; st.charge = 0; st.heat = 0; st.k = 0;
    cruise.visible = true; cruise.position.set(0, 0, 0); cruise.rotation.set(0, 0, 0);
    plasma.material.uniforms.uK.value = 0; cap.shieldMat.emissiveIntensity = 0; flame.material.opacity = 0;
    trail.visible = false; trailN = 0;
    craft.position.copy(path.getPoint(0)); craft.quaternion.setFromUnitVectors(up, F);
    resize();
  }
  function launch() { if (st.phase === 'pad') { st.phase = 'launch'; st.t = 0; } }
  function enterOk() { if (st.phase === 'entry') { st.phase = 'plunge'; st.t = 0; } }

  function resize() {
    camera.aspect = innerWidth / innerHeight;
    camera.fov = innerWidth < innerHeight * 0.95 ? 55 : 40;
    camera.updateProjectionMatrix();
  }

  const camPos = new THREE.Vector3(0.9, 0.35, 3.6), lookAt = new THREE.Vector3(0, 0.15, 0);
  function update(dt, time) {
    st.t += dt;
    stars.position.copy(camera.position);
    earthSpin.rotation.y += dt * 0.004;
    plasma.material.uniforms.uT.value = time;
    const portrait = innerWidth < innerHeight * 0.95;

    if (st.phase === 'pad') {
      // the craft sits on the coast of Florida; holding the button builds up thrust
      camPos.set(portrait ? 0.35 : 0.9, portrait ? -0.2 : 0.3, portrait ? 4.4 : 3.4); lookAt.set(portrait ? 0.08 : 0.42, portrait ? 0.32 : 0.12, 0);
      flame.position.copy(craft.position); flame.scale.setScalar(0.02 + st.charge * 0.07);
      flame.material.opacity = st.charge * (0.8 + Math.random() * 0.2);
    }
    if (st.phase === 'launch') {
      const k = smooth(0, 5.5, st.t);
      st.k = 0.06 * k * k;
      craft.position.copy(path.getPoint(st.k));
      orientCraft(path.getTangent(Math.max(0.0005, st.k)));
      flame.position.copy(craft.position).addScaledVector(path.getTangent(Math.max(0.0005, st.k)), -0.015);
      flame.scale.setScalar(0.05 + 0.04 * Math.random() + k * 0.05); flame.material.opacity = 1 - smooth(4.2, 5.5, st.t);
      trail.visible = true;
      if (trailN < TRAIL) trailN++;
      for (let i = TRAIL - 1; i > 0; i--) { trailPos[i * 3] = trailPos[(i - 1) * 3]; trailPos[i * 3 + 1] = trailPos[(i - 1) * 3 + 1]; trailPos[i * 3 + 2] = trailPos[(i - 1) * 3 + 2]; }
      trailPos[0] = craft.position.x; trailPos[1] = craft.position.y; trailPos[2] = craft.position.z;
      for (let i = trailN; i < TRAIL; i++) { trailPos[i * 3] = trailPos[0]; trailPos[i * 3 + 1] = trailPos[1]; trailPos[i * 3 + 2] = trailPos[2]; }
      trailGeo.attributes.position.needsUpdate = true; trailGeo.setDrawRange(0, trailN);
      trail.material.opacity = 0.9 * (1 - smooth(3.5, 5.5, st.t));
      // pull the camera back as the rocket climbs
      camPos.lerp(tmp.set(portrait ? 0.6 : 1.6, portrait ? 0.4 : 0.8, portrait ? 5.6 : 4.4), Math.min(1, dt * 0.8));
      lookAt.lerp(craft.position, Math.min(1, dt * 1.5));
      if (st.t > 5.6) { st.phase = 'cruise'; st.t = 0; trail.visible = false; emit('cruise'); }
    }
    if (st.phase === 'cruise') {
      const D = 22;
      const k = ease(Math.min(1, st.t / D));
      st.k = 0.06 + 0.92 * k;
      craft.position.copy(path.getPoint(st.k));
      const tan = path.getTangent(st.k);
      orientCraft(tan);
      // camera: first ahead of the craft looking back at Earth, then behind it looking toward Mars
      const swing = smooth(0.35, 0.7, k);
      const side = tmp.crossVectors(tan, up).normalize();
      const offBack = tmp2.copy(tan).multiplyScalar(0.17).addScaledVector(side, 0.22).addScaledVector(up, 0.08); // beside the craft, so it reads in profile against Earth
      const offFwd = new THREE.Vector3().copy(tan).multiplyScalar(-0.27).addScaledVector(side, -0.1).addScaledVector(up, 0.07);
      offBack.lerp(offFwd, swing);
      camPos.copy(craft.position).add(offBack);
      lookAt.copy(craft.position);
      if (k > 0.3) emit('mid');
      if (k > 0.72) emit('marsAhead');
      if (st.t >= D) { st.phase = 'approach'; st.t = 0; emit('approach'); }
    }
    if (st.phase === 'approach') {
      // the cruise stage separates and drifts away; the capsule turns its heat shield toward Mars
      const tan = path.getTangent(0.98);
      craft.position.copy(path.getPoint(0.98)).addScaledVector(tan, st.t * 0.006);
      orientCraft(tmp.subVectors(M, craft.position));
      cruise.position.y = -smooth(0.6, 3.5, st.t) * 3.5; cruise.rotation.x = smooth(0.6, 3.5, st.t) * 0.8;
      cruise.visible = st.t < 3.4;
      const side = tmp.crossVectors(tan, up).normalize();
      camPos.lerp(tmp2.copy(craft.position).addScaledVector(tan, -0.2).addScaledVector(side, -0.1).addScaledVector(up, 0.07), Math.min(1, dt * 2));
      lookAt.lerp(tmp.copy(craft.position).lerp(M, 0.08), Math.min(1, dt * 2));
      if (st.t > 3.6) { st.phase = 'entry'; st.t = 0; st.heat = 0; emit('entry'); }
    }
    if (st.phase === 'entry' || st.phase === 'plunge') {
      // skimming into the atmosphere: the hold keeps the heat shield in front; the plasma grows
      const k = st.phase === 'plunge' ? 1 : st.heat;
      const start = path.getPoint(0.98);
      const p = st.phase === 'plunge' ? 0.35 + smooth(0, 2.2, st.t) * 0.65 : 0.35 * smooth(0, 1, st.heat);
      craft.position.lerpVectors(start, entryEnd, p);
      orientCraft(tmp.subVectors(entryEnd, start));
      const glow = st.phase === 'plunge' ? 0.7 + smooth(0, 1.5, st.t) * 0.6 : 0.15 + st.heat * 0.6;
      plasma.material.uniforms.uK.value = glow;
      cap.shieldMat.emissiveIntensity = glow * 1.6;
      const dir = tmp.subVectors(entryEnd, start).normalize();
      const side = tmp2.crossVectors(dir, up).normalize();
      camPos.lerp(new THREE.Vector3().copy(craft.position).addScaledVector(dir, -0.15).addScaledVector(side, -0.09).addScaledVector(up, 0.06), Math.min(1, dt * 3));
      lookAt.lerp(new THREE.Vector3().copy(craft.position).addScaledVector(dir, 0.05), Math.min(1, dt * 3));
      st.shake = glow * 0.0015 + (st.phase === 'plunge' ? smooth(0, 2, st.t) * 0.002 : 0);
      if (st.phase === 'plunge' && st.t > 2.3) emit('plunged');
    }

    camera.position.copy(camPos);
    if (st.shake > 0 && !reduced) camera.position.add(tmp.set((Math.random() - 0.5) * st.shake, (Math.random() - 0.5) * st.shake, 0));
    camLook.copy(lookAt);
    camera.lookAt(camLook);
  }

  // numbers for the HUD: real values of Spirit's trip, mapped to the squeezed animation
  function hud() {
    const k = st.phase === 'pad' || st.phase === 'launch' ? 0 : Math.min(1, (st.k - 0.06) / 0.92);
    return { days: Math.round(k * 208), mkm: Math.round(k * 487), heat: st.heat }; // 10 Jun 2003 → 4 Jan 2004 (UTC)
  }

  return {
    scene, camera, update, start, launch, enterOk, resize, hud, craft, ready: Promise.all(decoding),
    get phase() { return st.phase; }, set charge(v) { st.charge = v; }, set heat(v) { st.heat = v; }, get heat() { return st.heat; },
  };
}
