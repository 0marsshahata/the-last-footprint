import * as THREE from 'three';
import { fbm, vnoise, smoothstep, mulberry32 } from './noise.js';

// Hall layout: the three rovers stand on a gentle arc in a flattened clearing.
export const SPOTS = {
  sojourner: new THREE.Vector3(-6.2, 0, 1.6),
  spirit: new THREE.Vector3(0, 0, 0),
  opportunity: new THREE.Vector3(6.4, 0, 1.2),
};

export function heightAt(x, z) {
  const d = Math.hypot(x, z - 1);
  let h = fbm(x * 0.045, z * 0.045, 5) * 1.7 + fbm(x * 0.23 + 11, z * 0.23 - 5, 3) * 0.16;
  const hall = 1 - smoothstep(8, 22, d);
  h *= 1 - hall * 0.88;
  const far = smoothstep(55, 150, d);
  h += far * (7 + fbm(x * 0.018 + 7, z * 0.018 - 3, 4) * 11);
  // a low crater rim far behind the hall gives the horizon a shape
  const rim = Math.exp(-Math.pow((Math.hypot(x + 30, z + 120) - 70) / 9, 2)) * 5;
  return h + rim;
}

export const PALETTE = {
  horizon: new THREE.Color('#d39a6c'),
  mid: new THREE.Color('#9a6447'),
  zenith: new THREE.Color('#3b2622'),
  halo: new THREE.Color('#8fb4d9'),
};

export function sunDirection() {
  // golden hour: low sun behind and to the left of the hall, so rims glow and shadows run long
  return new THREE.Vector3(-0.62, 0.2, -0.76).normalize();
}

function noiseTexture(size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    // tileable by sampling on a torus-ish wrap
    const u = x / size, v = y / size;
    let n = 0, amp = 0.55, f = 8;
    for (let o = 0; o < 4; o++) {
      n += amp * (vnoise(u * f, v * f) * (1 - u) * (1 - v) + vnoise((u - 1) * f, v * f) * u * (1 - v) + vnoise(u * f, (v - 1) * f) * (1 - u) * v + vnoise((u - 1) * f, (v - 1) * f) * u * v);
      f *= 2; amp *= 0.5;
    }
    const g = Math.max(0, Math.min(255, 128 + n * 140));
    const i = (y * size + x) * 4;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = g; img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.NoColorSpace;
  return t;
}

export function buildWorld(scene, quality) {
  const sun = sunDirection();

  // Sky dome: Martian butterscotch near the horizon, and the famous blue glow around the sun.
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(600, 48, 24),
    new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: {
        uSun: { value: sun }, uHorizon: { value: PALETTE.horizon }, uMid: { value: PALETTE.mid },
        uZenith: { value: PALETTE.zenith }, uHalo: { value: PALETTE.halo }, uTime: { value: 0 },
      },
      vertexShader: /* glsl */`
        varying vec3 vDir;
        void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }`,
      fragmentShader: /* glsl */`
        uniform vec3 uSun, uHorizon, uMid, uZenith, uHalo; varying vec3 vDir;
        void main(){
          vec3 d = normalize(vDir); float h = d.y;
          vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.22, h));
          col = mix(col, uZenith, smoothstep(0.18, 0.95, h));
          col = mix(col, uHorizon * 0.75, smoothstep(0.0, -0.08, h));
          float s = max(dot(d, normalize(uSun)), 0.0);
          col += uHalo * pow(s, 18.0) * 0.85;          // blue halo around the low sun
          col += vec3(1.0, 0.72, 0.48) * pow(s, 3.0) * 0.12; // warm forward scatter
          col += vec3(1.0, 0.96, 0.9) * smoothstep(0.9993, 0.99975, s) * 9.0; // small sun disc, bright enough to bloom
          gl_FragColor = vec4(col, 1.0);
        }`,
    }),
  );
  sky.renderOrder = -10;
  scene.add(sky);
  scene.fog = new THREE.Fog(PALETTE.horizon.clone().multiplyScalar(0.92), 26, 230);

  // Terrain
  const seg = quality.mobile ? 150 : 220;
  const geo = new THREE.PlaneGeometry(460, 460, seg, seg);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const cA = new THREE.Color('#8f4c2c'), cB = new THREE.Color('#b0663e'), cC = new THREE.Color('#5e3020'), cD = new THREE.Color('#c27a4c');
  const tmp = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const y = heightAt(x, z);
    pos.setY(i, y);
    const n1 = fbm(x * 0.08 + 3, z * 0.08, 3), n2 = fbm(x * 0.6, z * 0.6, 2);
    tmp.copy(cA).lerp(cB, smoothstep(-0.3, 0.5, n1));
    tmp.lerp(cC, smoothstep(0.15, 0.6, -n2) * 0.45);
    tmp.lerp(cD, smoothstep(0.35, 0.8, n1 + n2 * 0.3) * 0.5);
    colors[i * 3] = tmp.r; colors[i * 3 + 1] = tmp.g; colors[i * 3 + 2] = tmp.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const bump = noiseTexture(256);
  bump.repeat.set(70, 70);
  const ground = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0, bumpMap: bump, bumpScale: 1.6 }));
  ground.receiveShadow = true;
  ground.matrixAutoUpdate = false;
  scene.add(ground);

  // Rocks: one instanced, faceted mesh
  const rockGeo = new THREE.IcosahedronGeometry(1, 2);
  const rp = rockGeo.attributes.position;
  for (let i = 0; i < rp.count; i++) {
    const v = new THREE.Vector3(rp.getX(i), rp.getY(i), rp.getZ(i));
    const k = 1 + vnoise(v.x * 1.6 + 3, v.z * 1.6 + v.y * 1.3) * 0.32 + vnoise(v.x * 5 + v.y * 2, v.z * 5 - 7) * 0.08;
    v.multiplyScalar(k); v.y *= 0.58;
    if (v.y < -0.1) v.y *= 0.4; // flat-ish bottoms so they sit in the sand
    rp.setXYZ(i, v.x, v.y, v.z);
  }
  rockGeo.computeVertexNormals();
  const rockCount = quality.mobile ? 200 : 420;
  const rockBump = noiseTexture(128); rockBump.repeat.set(2, 2);
  const rocks = new THREE.InstancedMesh(rockGeo, new THREE.MeshStandardMaterial({ roughness: 0.95, bumpMap: rockBump, bumpScale: 2.2 }), rockCount);
  const rnd = mulberry32(7);
  const o = new THREE.Object3D();
  const rc = new THREE.Color();
  let placed = 0, guard = 0;
  while (placed < rockCount && guard++ < 5000) {
    const r = 2.5 + Math.pow(rnd(), 1.6) * 70, a = rnd() * Math.PI * 2;
    const x = Math.cos(a) * r, z = Math.sin(a) * r - 4;
    let ok = true;
    for (const s of Object.values(SPOTS)) if (Math.hypot(x - s.x, z - s.z) < 2.6) ok = false;
    if (z > 9 && Math.abs(x) < 9) ok = false; // keep the camera's foreground clean
    if (!ok) continue;
    const sc = 0.03 + Math.pow(rnd(), 3.6) * (r < 14 ? 0.42 : 0.7);
    o.position.set(x, heightAt(x, z) - sc * 0.3, z);
    o.rotation.set(rnd() * 0.6, rnd() * 6.28, rnd() * 0.6);
    o.scale.set(sc * (0.8 + rnd() * 0.6), sc, sc * (0.8 + rnd() * 0.6));
    o.updateMatrix();
    rocks.setMatrixAt(placed, o.matrix);
    rc.set('#5a301e').lerp(new THREE.Color('#8a5034'), rnd());
    rocks.setColorAt(placed, rc);
    placed++;
  }
  rocks.count = placed;
  rocks.castShadow = true; rocks.receiveShadow = true;
  scene.add(rocks);

  // Lights
  const sunLight = new THREE.DirectionalLight(new THREE.Color('#ffd9b0'), 3.2);
  sunLight.position.copy(sun).multiplyScalar(60);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(quality.mobile ? 1024 : 2048, quality.mobile ? 1024 : 2048);
  const sc = sunLight.shadow.camera;
  sc.left = -16; sc.right = 16; sc.top = 12; sc.bottom = -12; sc.near = 20; sc.far = 110;
  sunLight.shadow.bias = -0.0004; sunLight.shadow.normalBias = 0.03;
  scene.add(sunLight, sunLight.target);
  const hemi = new THREE.HemisphereLight(new THREE.Color('#e7b48e'), new THREE.Color('#4b2616'), 1.15);
  scene.add(hemi);
  const fill = new THREE.DirectionalLight(new THREE.Color('#d8c6b6'), 0.45);
  fill.position.set(6, 7, 14);
  scene.add(fill);

  // Floating dust: a soft, drifting particle field around the hall
  const dustCount = quality.mobile ? 700 : 1700;
  const dGeo = new THREE.BufferGeometry();
  const dp = new Float32Array(dustCount * 3), dr = new Float32Array(dustCount);
  for (let i = 0; i < dustCount; i++) {
    dp[i * 3] = (rnd() - 0.5) * 44; dp[i * 3 + 1] = rnd() * 5.5; dp[i * 3 + 2] = (rnd() - 0.5) * 34 - 2;
    dr[i] = rnd();
  }
  dGeo.setAttribute('position', new THREE.BufferAttribute(dp, 3));
  dGeo.setAttribute('aRand', new THREE.BufferAttribute(dr, 1));
  const dust = new THREE.Points(dGeo, new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTime: { value: 0 }, uPx: { value: quality.pixelRatio }, uColor: { value: new THREE.Color('#ffd0a4') }, uBoost: { value: 0 } },
    vertexShader: /* glsl */`
      attribute float aRand; uniform float uTime, uPx, uBoost; varying float vA;
      void main(){
        vec3 p = position;
        p.x = mod(p.x + uTime * (0.25 + aRand * 0.5) + 22.0, 44.0) - 22.0;
        p.y += sin(uTime * 0.6 + aRand * 40.0) * 0.18;
        p.z += cos(uTime * 0.4 + aRand * 25.0) * 0.25;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = (1.4 + aRand * 2.6) * uPx * (9.0 / -mv.z);
        vA = (0.25 + 0.55 * aRand) * smoothstep(40.0, 6.0, -mv.z) * (1.0 + uBoost);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uColor; varying float vA;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d) * vA; gl_FragColor = vec4(uColor, a * 0.55); }`,
  }));
  dust.frustumCulled = false;
  scene.add(dust);

  return { sky, ground, rocks, sunLight, hemi, fill, dust, sun };
}
