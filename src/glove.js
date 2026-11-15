// AI disclosure (NASA Space Apps SI rules): written by Team 3M with AI coding assistance from Claude (Anthropic).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// A chunky EVA glove: white fabric shell, grey rubber grips, metal wrist ring, glowing palm core.
export function buildGlove() {
  const root = new THREE.Group();      // follows the camera
  const hand = new THREE.Group();      // animated (tilt, thrust)
  root.add(hand);
  const pose = new THREE.Group();      // palm up, fingers forward (the geometry is built palm -z, fingers +y)
  pose.rotation.set(-1.2, Math.PI, 0);
  hand.add(pose);

  const weave = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
    for (let y = 0; y < 64; y++) for (let x = 0; x < 64; x++) {
      const v = 128 + 50 * Math.sin(x * 0.8) * Math.sin(y * 0.8) + (Math.random() - 0.5) * 40;
      g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(x, y, 1, 1);
    }
    const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 3); return t;
  })();
  const fabric = new THREE.MeshStandardMaterial({ color: '#ddd7cc', roughness: 0.9, metalness: 0.0, bumpMap: weave, bumpScale: 0.6 });
  const rubber = new THREE.MeshStandardMaterial({ color: '#7b7d82', roughness: 0.6, metalness: 0.1 });
  const metal = new THREE.MeshStandardMaterial({ color: '#c9ccd2', roughness: 0.28, metalness: 0.95 });
  const blue = new THREE.MeshStandardMaterial({ color: '#2b5fb8', roughness: 0.55 });
  const orange = new THREE.MeshStandardMaterial({ color: '#e0682a', roughness: 0.55 });
  const coreMat = new THREE.MeshStandardMaterial({ color: '#0b2533', emissive: '#58e3ff', emissiveIntensity: 0.4, roughness: 0.2 });
  const allMats = [fabric, rubber, metal, blue, orange, coreMat];
  allMats.forEach((m) => { m.fog = false; });

  // palm faces the scene (-z in hand space)
  const palm = new THREE.Mesh(new RoundedBoxGeometry(0.17, 0.19, 0.075, 3, 0.03), fabric);
  pose.add(palm);
  const pad = new THREE.Mesh(new RoundedBoxGeometry(0.13, 0.13, 0.02, 2, 0.008), rubber);
  pad.position.set(0, -0.01, -0.035); pose.add(pad);

  const knuckle = new THREE.Mesh(new RoundedBoxGeometry(0.168, 0.036, 0.05, 2, 0.016), fabric);
  knuckle.position.set(0, 0.078, 0.02); pose.add(knuckle);
  const core = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.01, 32), coreMat);
  core.rotation.x = Math.PI / 2; core.position.set(0, -0.01, -0.047); pose.add(core);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.025, 0.005, 10, 40), metal);
  ring.position.copy(core.position); pose.add(ring);

  const glowTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const g = c.getContext('2d'); const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(140,235,255,0.6)'); gr.addColorStop(1, 'rgba(60,180,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#7fe8ff', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, toneMapped: false }));
  glow.scale.setScalar(0.12); glow.position.set(0, -0.005, -0.1); pose.add(glow);
  const orbCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.018, 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 5, 6), toneMapped: false, fog: false, transparent: true }));
  orbCore.position.set(0, -0.005, -0.1); pose.add(orbCore);
  const sparkGeo = new THREE.BufferGeometry();
  const SP = 40, spPos = new Float32Array(SP * 3), spSeed = new Float32Array(SP * 3);
  for (let i = 0; i < SP; i++) { spSeed[i * 3] = Math.random() * 6.28; spSeed[i * 3 + 1] = Math.random() * 6.28; spSeed[i * 3 + 2] = 0.6 + Math.random(); }
  sparkGeo.setAttribute('position', new THREE.BufferAttribute(spPos, 3));
  const sparks = new THREE.Points(sparkGeo, new THREE.PointsMaterial({ map: glowTex, color: new THREE.Color(1.5, 3.5, 4.5), size: 0.012, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, fog: false }));
  sparks.frustumCulled = false; pose.add(sparks);
  const light = new THREE.PointLight('#6fe0ff', 0, 7, 1.4);
  light.position.set(0, -0.005, -0.14); pose.add(light);

  // fingers: index..pinky along +y at the top of the palm
  const fingers = [];
  const fx = [-0.058, -0.019, 0.02, 0.058];
  const lens = [[0.05, 0.036, 0.03], [0.056, 0.04, 0.032], [0.052, 0.037, 0.03], [0.04, 0.03, 0.026]];
  fx.forEach((x, i) => {
    let parent = pose; const joints = [];
    let y = 0.095;
    lens[i].forEach((L, j) => {
      const pivot = new THREE.Group(); pivot.position.set(j === 0 ? x : 0, y, j === 0 ? 0.004 : 0);
      parent.add(pivot);
      const r = 0.0185 - j * 0.0018;
      const seg = new THREE.Mesh(new THREE.CapsuleGeometry(r, L - r, 4, 12), j === 2 ? rubber : fabric);
      seg.position.y = L / 2; pivot.add(seg);
      if (j > 0) { const b = new THREE.Mesh(new THREE.TorusGeometry(r * 0.98, r * 0.18, 6, 16), rubber); b.rotation.x = Math.PI / 2; b.position.y = 0.002; pivot.add(b); }
      joints.push(pivot); parent = pivot; y = L;
    });
    fingers.push(joints);
  });
  // thumb on -x side, angled
  const thumbBase = new THREE.Group(); thumbBase.position.set(-0.085, -0.02, -0.01); thumbBase.rotation.set(0, 0.5, 0.9); pose.add(thumbBase);
  const t1 = new THREE.Mesh(new THREE.CapsuleGeometry(0.021, 0.035, 4, 12), fabric); t1.position.y = 0.028; thumbBase.add(t1);
  const thumbTip = new THREE.Group(); thumbTip.position.y = 0.056; thumbBase.add(thumbTip);
  const t2 = new THREE.Mesh(new THREE.CapsuleGeometry(0.019, 0.026, 4, 12), rubber); t2.position.y = 0.022; thumbTip.add(t2);

  // wrist + cuff (the sleeve continues out of frame)
  const wrist = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.075, 0.06, 32), fabric);
  wrist.position.y = -0.125; pose.add(wrist);
  const ringW = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.012, 12, 48), metal);
  ringW.rotation.x = Math.PI / 2; ringW.position.y = -0.16; pose.add(ringW);
  const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.088, 0.1, 0.36, 32), fabric);
  sleeve.position.y = -0.35; pose.add(sleeve);
  const bandB = new THREE.Mesh(new THREE.CylinderGeometry(0.0895, 0.0905, 0.022, 32), blue); bandB.position.y = -0.2; pose.add(bandB);
  const bandO = new THREE.Mesh(new THREE.CylinderGeometry(0.0915, 0.0925, 0.016, 32), orange); bandO.position.y = -0.232; pose.add(bandO);
  // small wrist display
  const disp = new THREE.Mesh(new RoundedBoxGeometry(0.07, 0.045, 0.02, 2, 0.006), rubber); disp.position.set(0, -0.215, 0.085); pose.add(disp);
  const dispScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.055, 0.03), new THREE.MeshBasicMaterial({ color: '#58e3ff', toneMapped: false, fog: false }));
  dispScreen.position.set(0, -0.215, 0.0955); pose.add(dispScreen);

  hand.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; o.renderOrder = 10; } });

  const state = { charge: 0, recoil: 0, open: 0, t: 0, tiltX: 0, tiltY: 0, raise: 0, raiseTarget: 0 };
  const base = new THREE.Vector3();
  let portrait = false;

  function layout(aspect) {
    portrait = aspect < 0.9;
    if (portrait) { base.set(0.15, -0.4, -0.95); root.scale.setScalar(0.8); }
    else { base.set(0.31, -0.27, -0.92); root.scale.setScalar(1.05); }
    root.position.copy(base);
  }

  function update(dt, pointer) {
    state.t += dt;
    // the hand rises into view when the explorer arrives
    state.raise += (state.raiseTarget - state.raise) * Math.min(1, dt * 3.2);
    root.position.set(base.x, base.y - (1 - state.raise) * 0.42, base.z);
    // stays 'visible' (just below the frame) so its light is always counted and no shader recompiles when it rises
    state.recoil = Math.max(0, state.recoil - dt * 2.6);
    state.open = Math.max(0, state.open - dt * 0.9);
    state.tiltX += ((pointer?.y ?? 0) * 0.12 - state.tiltX) * Math.min(1, dt * 5);
    state.tiltY += ((pointer?.x ?? 0) * -0.18 - state.tiltY) * Math.min(1, dt * 5);
    const c = state.charge;
    const breathe = Math.sin(state.t * 1.6) * 0.006;
    const shake = c > 0.55 ? (Math.random() - 0.5) * 0.004 * (c - 0.55) * 2 : 0;
    const rec = Math.sin(Math.min(1, state.recoil) * Math.PI);           // 0 -> 1 -> 0 thrust
    hand.position.set(shake - rec * 0.05, breathe + shake + rec * 0.05, -rec * 0.16);
    hand.rotation.set(state.tiltX + rec * 0.35 + c * 0.06, (portrait ? 0.12 : 0.32) + state.tiltY, (portrait ? 0.15 : 0.3) - c * 0.08);
    // fingers cup around the orb while charging, then flick open on release
    const curl = THREE.MathUtils.lerp(0.18 + c * 0.5, -0.1, Math.min(1, state.open * 1.6));
    fingers.forEach((j, i) => {
      const k = 1 - i * 0.06;
      j[0].rotation.x = -curl * 0.7 * k; j[1].rotation.x = -curl * 1.0 * k; j[2].rotation.x = -curl * 0.8 * k;
      j[0].rotation.z = (1.5 - i) * (0.045 + state.open * 0.1);
    });
    thumbTip.rotation.x = -(0.15 + c * 0.45) + state.open * 0.3;
    thumbBase.rotation.x = -c * 0.2;
    // the orb: grows with charge, hovers and pulses, vanishes when it is thrown
    const live = c > 0.02 && state.open < 0.05;
    const os = live ? 0.25 + c * 1.6 + Math.sin(state.t * 22) * 0.06 * c : 0.001;
    orbCore.scale.setScalar(os); orbCore.visible = live;
    orbCore.position.z = -0.085 - c * 0.04; orbCore.rotation.y += dt * 4; orbCore.rotation.x += dt * 2.6;
    glow.position.z = orbCore.position.z;
    sparks.visible = live;
    if (live) {
      for (let i = 0; i < SP; i++) {
        const a = spSeed[i * 3] + state.t * (2 + spSeed[i * 3 + 2] * 3), b2 = spSeed[i * 3 + 1] + state.t * 1.3;
        const r = (0.03 + c * 0.05) * spSeed[i * 3 + 2];
        spPos[i * 3] = Math.cos(a) * Math.sin(b2) * r; spPos[i * 3 + 1] = -0.005 + Math.cos(b2) * r; spPos[i * 3 + 2] = orbCore.position.z + Math.sin(a) * Math.sin(b2) * r;
      }
      sparkGeo.attributes.position.needsUpdate = true;
    }
    coreMat.emissiveIntensity = 0.3 + c * 2.5 + state.open * 4 + Math.sin(state.t * 3) * 0.08;
    glow.material.opacity = Math.min(1, c * 0.85 + state.open * 0.8);
    glow.material.color.setRGB(0.35 + c * 0.9, 0.7 + c * 1.5, 0.9 + c * 1.8);
    glow.scale.setScalar(0.03 + c * 0.075 + state.open * 0.12);
    light.intensity = c * 6 + state.open * 14;
    dispScreen.material.color.setRGB(0.25 + c * 0.6, 0.8, 1.0);
  }

  function fire() { state.recoil = 1; state.open = 1; }

  function worldPalm(target) { return orbCore.getWorldPosition(target); }

  return { root, hand, state, update, fire, layout, worldPalm };
}
