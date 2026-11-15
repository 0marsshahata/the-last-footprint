import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Bake a static group of small meshes into one mesh per material (≈130 draw calls → 8).
function mergeByMaterial(g) {
  g.updateMatrixWorld(true);
  const buckets = new Map(), drop = [];
  g.traverse((o) => {
    if (!o.isMesh || Array.isArray(o.material)) return;
    const geo = (o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone()).applyMatrix4(o.matrixWorld);
    for (const k of Object.keys(geo.attributes)) if (!['position', 'normal', 'uv'].includes(k)) geo.deleteAttribute(k);
    if (!buckets.has(o.material)) buckets.set(o.material, []);
    buckets.get(o.material).push(geo); drop.push(o);
  });
  drop.forEach((o) => o.parent.remove(o));
  // empty helper groups (wheels) can go too
  [...g.children].forEach((c) => { if (!c.isMesh && c.children.length === 0) g.remove(c); });
  for (const [mat, list] of buckets) g.add(new THREE.Mesh(mergeGeometries(list), mat));
}
import { SPOTS, heightAt } from './world.js';

// Every rover material gets two uniforms: uSleep (dusty, desaturated, dim) and uDim (pushed back when another rover is in focus).
function patch(material, u) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uSleep = u.uSleep;
    shader.uniforms.uDim = u.uDim;
    shader.uniforms.uGlow = u.uGlow;
    shader.fragmentShader = 'uniform float uSleep; uniform float uDim; uniform float uGlow;\n' + shader.fragmentShader.replace(
      '#include <dithering_fragment>',
      `float lum = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
       // asleep: buried under years of rust-coloured dust, flat and dim
       vec3 dusty = vec3(lum) * vec3(1.15, 0.78, 0.58) * 0.55 + vec3(0.05, 0.022, 0.01);
       // awake: clean and a touch brighter, so the change reads instantly
       vec3 awake = gl_FragColor.rgb * 1.18;
       gl_FragColor.rgb = mix(awake, dusty, uSleep);
       gl_FragColor.rgb *= mix(1.0, 0.32, uDim);
       float rim = 1.0 - abs(dot(normalize(normal), normalize(vViewPosition)));
       gl_FragColor.rgb += vec3(0.25, 0.85, 1.0) * uGlow * (0.06 + pow(rim, 2.5) * 1.4);
       // a faint cyan rim stays on while the rover is awake
       gl_FragColor.rgb += vec3(0.2, 0.7, 1.0) * pow(rim, 4.0) * 0.12 * (1.0 - uSleep) * (1.0 - uDim);
       #include <dithering_fragment>`,
    );
  };
  material.customProgramCacheKey = () => 'tlf-rover';
}

function makeUniforms() {
  return { uSleep: { value: 1 }, uDim: { value: 0 }, uGlow: { value: 0 } };
}

function finish(id, group, u, height, radius) {
  group.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  const spot = SPOTS[id];
  const pivot = new THREE.Group();
  pivot.position.set(spot.x, heightAt(spot.x, spot.z), spot.z);
  pivot.add(group);
  return { id, pivot, model: group, u, height, radius, baseYaw: 0 };
}

function cellsTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 192;
  const g = c.getContext('2d');
  g.fillStyle = '#1a2440'; g.fillRect(0, 0, 256, 192);
  for (let y = 0; y < 12; y++) for (let x = 0; x < 16; x++) {
    const sh = 40 + ((x * 7 + y * 13) % 9) * 3;
    g.fillStyle = `rgb(${sh - 12},${sh + 6},${sh + 52})`;
    g.fillRect(x * 16 + 1, y * 16 + 1, 14, 14);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function buildSojourner() {
  // Mars Pathfinder's Sojourner: ~65 x 48 x 30 cm, 6 wheels (13 cm), flat solar panel on top,
  // gold-foil "warm electronics box", stereo cameras + laser stripers at the front, APXS at the back.
  const u = makeUniforms();
  const g = new THREE.Group();
  const gold = new THREE.MeshStandardMaterial({ color: '#c9a35e', metalness: 0.75, roughness: 0.38 });
  const foil = new THREE.MeshStandardMaterial({ color: '#d8c7a0', metalness: 0.6, roughness: 0.55 });
  const alu = new THREE.MeshStandardMaterial({ color: '#b9b6b0', metalness: 0.85, roughness: 0.35 });
  const dark = new THREE.MeshStandardMaterial({ color: '#1d1b1a', metalness: 0.3, roughness: 0.55 });
  const panelMat = new THREE.MeshStandardMaterial({ map: cellsTexture(), metalness: 0.5, roughness: 0.3 });
  const white = new THREE.MeshStandardMaterial({ color: '#e2ded6', roughness: 0.65 });
  const red = new THREE.MeshStandardMaterial({ color: '#a33a2a', roughness: 0.6 });
  [gold, foil, alu, dark, panelMat, white, red].forEach((m) => patch(m, u));
  const add = (mesh, x, y, z) => { mesh.position.set(x, y, z); g.add(mesh); return mesh; };

  // chassis (WEB) + solar panel
  add(new THREE.Mesh(new RoundedBoxGeometry(0.4, 0.13, 0.3, 2, 0.012), gold), 0, 0.2, 0.0);
  add(new THREE.Mesh(new RoundedBoxGeometry(0.36, 0.02, 0.26, 1, 0.006), foil), 0, 0.27, 0.0);
  const panel = add(new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.01, 0.36), [alu, alu, panelMat, dark, alu, alu]), 0, 0.285, -0.01);
  // panel frame
  for (const [w, d, x, z] of [[0.49, 0.012, 0, 0.17], [0.49, 0.012, 0, -0.19], [0.012, 0.37, 0.243, -0.01], [0.012, 0.37, -0.243, -0.01]]) add(new THREE.Mesh(new THREE.BoxGeometry(w, 0.016, d), alu), x, 0.287, z);
  // front: camera head with two lenses + laser stripers
  add(new THREE.Mesh(new RoundedBoxGeometry(0.14, 0.035, 0.035, 2, 0.008), white), 0, 0.235, 0.165);
  for (const sx of [-1, 1]) {
    const lens = add(new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.012, 16), dark), sx * 0.04, 0.237, 0.184); lens.rotation.x = Math.PI / 2;
    const st = add(new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.012, 0.012), red), sx * 0.11, 0.16, 0.156);
  }
  // back: APXS on its deployment mechanism + rear camera
  const apxsArm = add(new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.018, 0.1), alu), 0, 0.17, -0.19); apxsArm.rotation.x = 0.6;
  add(new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.04, 16), alu), 0, 0.13, -0.235);
  // antenna mast + whip
  add(new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.01, 0.06, 10), alu), 0.15, 0.32, -0.1);
  add(new THREE.Mesh(new THREE.CylinderGeometry(0.0025, 0.0025, 0.34, 6), dark), 0.15, 0.52, -0.1);
  add(new THREE.Mesh(new THREE.SphereGeometry(0.007, 10, 8), alu), 0.15, 0.69, -0.1);

  // wheels: aluminium drum with cleats; rocker-bogie on each side
  const wheelGeo = new THREE.CylinderGeometry(0.066, 0.066, 0.075, 24, 1, true); wheelGeo.rotateZ(Math.PI / 2);
  const capGeo = new THREE.CircleGeometry(0.064, 24); 
  const cleatGeo = new THREE.BoxGeometry(0.078, 0.008, 0.012);
  const hubGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.085, 12); hubGeo.rotateZ(Math.PI / 2);
  for (const sx of [-1, 1]) {
    for (const z of [-0.2, 0.0, 0.2]) {
      const w = new THREE.Group(); w.position.set(sx * 0.265, 0.066, z); g.add(w);
      w.add(new THREE.Mesh(wheelGeo, alu));
      for (const side of [-1, 1]) { const c = new THREE.Mesh(capGeo, dark); c.rotation.y = side * Math.PI / 2; c.position.x = side * 0.037; w.add(c); }
      for (let k = 0; k < 12; k++) { const cl = new THREE.Mesh(cleatGeo, alu); const a = (k / 12) * Math.PI * 2; cl.position.set(0, Math.cos(a) * 0.068, Math.sin(a) * 0.068); cl.rotation.x = -a; w.add(cl); }
      w.add(new THREE.Mesh(hubGeo, dark));
    }
    // rocker (front wheel <-> pivot) and bogie (middle <-> rear)
    const strut = (x1, y1, z1, x2, y2, z2) => {
      const a = new THREE.Vector3(x1, y1, z1), b = new THREE.Vector3(x2, y2, z2);
      const m = add(new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.014, a.distanceTo(b)), alu), (x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2);
      m.lookAt(g.localToWorld(b.clone())); return m;
    };
    const x = sx * 0.235;
    strut(x, 0.07, 0.2, x, 0.17, 0.04);   // front leg up to the rocker pivot
    strut(x, 0.17, 0.04, x, 0.13, -0.1); // rocker to bogie pivot
    strut(x, 0.13, -0.1, x, 0.07, 0.0);  // bogie to middle wheel
    strut(x, 0.13, -0.1, x, 0.07, -0.2); // bogie to rear wheel
    add(new THREE.Mesh(new THREE.SphereGeometry(0.014, 10, 8), dark), x, 0.17, 0.04);
  }
  mergeByMaterial(g);
  return finish('sojourner', g, u, 0.6, 0.45);
}

export async function loadMER(url, onProgress) {
  const gltf = await new GLTFLoader().loadAsync(url, onProgress);
  return gltf.scene;
}

export function buildMER(id, template) {
  const u = makeUniforms();
  const g = template.clone(true);
  g.traverse((o) => {
    if (o.isMesh) {
      o.material = Array.isArray(o.material) ? o.material.map((m) => m.clone()) : o.material.clone();
      [o.material].flat().forEach((m) => { m.envMapIntensity = 1; patch(m, u); });
    }
  });
  return finish(id, g, u, 1.58, 1.6);
}
