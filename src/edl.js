import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { buildCapsule } from './expedition.js';
import { heightAt } from './world.js';

// Immersive Expedition, landing part ("entry, descent and landing"), played in the surface scene.
// The order and the numbers follow Spirit's real landing on 4 Jan 2004 (UTC):
//   parachute at about 10 km → heat shield off → lander lowered on a 20 m bridle →
//   airbags inflate about 8 s before touchdown → retro-rockets → bridle cut → about 30 bounces → petals open.
// Time is squeezed; the HUD shows the real values.

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

function glowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.3, 'rgba(255,210,150,0.7)'); gr.addColorStop(1, 'rgba(255,120,40,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

export const WINDOWS = { chute: [11.5, 8.5], bags: [10, 6] }; // km of altitude, seconds before touchdown

export function buildEDL(scene) {
  const root = new THREE.Group(); root.visible = false; scene.add(root);
  const glow = glowTexture();

  // capsule (heat shield down)
  const cap = buildCapsule(null);
  const capsule = new THREE.Group(); capsule.add(cap.group); cap.group.rotation.x = Math.PI; cap.group.scale.setScalar(1.35);
  root.add(capsule);
  const shieldParts = cap.group.children.filter((o) => o.material === cap.shieldMat);
  shieldParts.forEach((o) => { o.userData.y0 = o.position.y; });

  // parachute: striped canopy + suspension lines
  const chute = new THREE.Group(); capsule.add(chute);
  {
    const geo = new THREE.SphereGeometry(1, 32, 10, 0, Math.PI * 2, 0, Math.PI * 0.42);
    const col = new Float32Array(geo.attributes.position.count * 3); const p = geo.attributes.position;
    const a = new THREE.Color('#f2efe8'), b = new THREE.Color('#e0782f');
    for (let i = 0; i < p.count; i++) { const gore = Math.floor(((Math.atan2(p.getZ(i), p.getX(i)) + Math.PI) / (Math.PI * 2)) * 16); const c = gore % 2 ? a : b; col.set([c.r, c.g, c.b], i * 3); }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const canopy = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, side: THREE.DoubleSide }));
    canopy.scale.set(7.5, 4.2, 7.5); canopy.position.y = 20; chute.add(canopy);
    const pts = [];
    for (let i = 0; i < 16; i++) { const t = (i / 16) * Math.PI * 2; pts.push(Math.cos(t) * 7.5 * Math.sin(Math.PI * 0.42), 20 + 4.2 * Math.cos(Math.PI * 0.42), Math.sin(t) * 7.5 * Math.sin(Math.PI * 0.42), 0, 1.6, 0); }
    const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    chute.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: '#d9d2c6', transparent: true, opacity: 0.7 })));
    chute.userData.canopy = canopy;
  }
  chute.scale.setScalar(0.001); chute.visible = false;

  // lander: a small tetrahedron with three petals, wrapped in airbags
  const lander = new THREE.Group(); root.add(lander);
  const petalMat = new THREE.MeshStandardMaterial({ color: '#c8a35a', roughness: 0.55, metalness: 0.45, side: THREE.DoubleSide });
  const baseMat = new THREE.MeshStandardMaterial({ color: '#8b8f96', roughness: 0.6, metalness: 0.4, side: THREE.DoubleSide });
  const S = 1.15, H = S * Math.sqrt(3) / 2; // side length, triangle height
  const tri = (h) => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute([-S / 2, 0, 0, S / 2, 0, 0, 0, h, 0], 3)); g.computeVertexNormals(); return g; };
  const base = new THREE.Mesh(tri(H), baseMat); base.rotation.x = -Math.PI / 2; base.position.z = H / 3; lander.add(base);
  const petals = [];
  const closed = -Math.acos(1 / 3) + Math.PI / 2; // tilt that closes a regular tetrahedron
  for (let i = 0; i < 3; i++) {
    const hinge = new THREE.Group(); hinge.rotation.y = (i / 3) * Math.PI * 2;
    const arm = new THREE.Group(); arm.position.z = H / 3; hinge.add(arm);
    const petal = new THREE.Mesh(tri(H), petalMat); arm.add(petal);
    arm.rotation.x = -closed; petals.push(arm); lander.add(hinge);
  }
  lander.position.y = 0.05;
  // airbags: 4 bags × 6 lobes on the real landers; here 24 lumps merged into one mesh
  const bagGeo = (() => {
    const parts = []; const ico = new THREE.IcosahedronGeometry(1, 1); const p = ico.attributes.position; const seen = new Set(); const v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i); const key = v.toArray().map((x) => x.toFixed(2)).join();
      if (seen.has(key)) continue; seen.add(key);
      const sph = new THREE.SphereGeometry(0.62, 14, 10); sph.translate(v.x * 1.05, v.y * 1.05, v.z * 1.05); parts.push(sph);
    }
    return mergeGeometries(parts);
  })();
  const bags = new THREE.Mesh(bagGeo, new THREE.MeshStandardMaterial({ color: '#e7dcc8', roughness: 0.92, metalness: 0 }));
  bags.scale.setScalar(0.001); bags.visible = false; bags.position.y = 0.45; lander.add(bags);
  // bridle between backshell and lander
  const bridleGeo = new THREE.BufferGeometry(); bridleGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3));
  const bridle = new THREE.Line(bridleGeo, new THREE.LineBasicMaterial({ color: '#e8e2d8' })); bridle.frustumCulled = false; root.add(bridle);
  // retro-rockets: three flames under the backshell
  const rockets = [0, 1, 2].map((i) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: new THREE.Color(4, 2.4, 1), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
    const a = (i / 3) * Math.PI * 2; s.position.set(Math.cos(a) * 0.6, -0.5, Math.sin(a) * 0.6); s.scale.setScalar(1.6); capsule.add(s); return s;
  });
  // dust puff on each bounce
  const puff = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: new THREE.Color(0.9, 0.55, 0.35), transparent: true, opacity: 0, depthWrite: false }));
  root.add(puff);
  [capsule, lander, chute, bags].forEach((o) => o.traverse((m) => { if (m.isMesh) { m.castShadow = false; m.receiveShadow = false; } }));

  const LAND = new THREE.Vector3(1.2, 0, -5.5); // where the airbag ball first hits the ground
  const REST = new THREE.Vector3(-1.5, 0, 1.0);
  const st = { phase: 'idle', t: 0, alt: 16, speed: 1600, tg: 16, onEvent: null, fired: {}, chuteK: 0, bagsK: 0, vel: new THREE.Vector3(), bounces: 0 };
  const emit = (e) => { st.onEvent?.(e); };
  const once = (e) => { if (!st.fired[e]) { st.fired[e] = true; emit(e); } };
  const camPos = new THREE.Vector3(), camLook = new THREE.Vector3(), tmp = new THREE.Vector3();
  const backVel = new THREE.Vector3();

  function reset() {
    st.fired = {}; st.alt = 16; st.speed = 1600; st.tg = 16; st.chuteK = 0; st.bagsK = 0; st.bounces = 0;
    chute.visible = false; chute.scale.setScalar(0.001); bags.visible = false; bags.scale.setScalar(0.001);
    shieldParts.forEach((o) => { o.visible = true; o.position.y = o.userData.y0; });
    cap.shieldMat.emissiveIntensity = 0.9; capsule.visible = true; capsule.rotation.set(0, 0, 0);
    rockets.forEach((r) => { r.material.opacity = 0; });
    petals.forEach((p) => { p.rotation.x = -closed; });
    lander.visible = false; bridle.visible = false; puff.material.opacity = 0;
  }
  function start(onEvent) { st.onEvent = onEvent; reset(); st.phase = 'fall'; st.t = 0; root.visible = true; }
  function stop() { st.phase = 'idle'; root.visible = false; }

  // the player's button: open the parachute / inflate the airbags
  function press() {
    if (st.phase === 'fall') {
      if (st.alt > WINDOWS.chute[0]) return 'early';
      st.phase = 'chute'; st.t = 0; chute.visible = true; emit('chuteOk'); return 'ok';
    }
    if (st.phase === 'drop' && !bags.visible) {
      if (st.tg > WINDOWS.bags[0]) return 'early';
      bags.visible = true; st.bagsT = 0; emit('bagsOk'); return 'ok';
    }
    return 'none';
  }

  const capY = (alt) => 22 + alt * 8; // 16 km → 150 units above the ground
  function update(dt, time, camera) {
    if (st.phase === 'idle') return;
    st.t += dt;
    const groundL = heightAt(LAND.x, LAND.z);
    const sway = Math.sin(time * 1.3) * 0.05;

    if (st.phase === 'fall') {
      // after the hottest part of entry: still very fast, heat shield cooling down
      st.alt = Math.max(0, st.alt - dt * 0.55);
      st.speed = 1600;
      cap.shieldMat.emissiveIntensity = Math.max(0, 0.9 - st.t * 0.12);
      capsule.position.set(LAND.x + st.alt * 2.2, groundL + capY(st.alt), LAND.z - st.alt * 1.2);
      capsule.rotation.z = Math.sin(time * 2.1) * 0.06; capsule.rotation.x = Math.sin(time * 1.7) * 0.05;
      if (st.alt <= WINDOWS.chute[0]) once('chuteWindow');
      if (st.alt < WINDOWS.chute[1]) { st.alt = 14.5; st.fired.chuteWindow = false; emit('chuteLate'); }
      camPos.copy(capsule.position).add(tmp.set(8, 3.5, 13)); camLook.copy(capsule.position).add(tmp.set(0, -2.2, 0));
    }
    if (st.phase === 'chute') {
      // canopy snaps open, the capsule slows from ~1,600 to ~300 km/h; then heat shield off and lander lowered on the bridle
      st.chuteK = Math.min(1, st.t / 0.7);
      const pop = st.chuteK < 1 ? st.chuteK * (1.15 - 0.15 * st.chuteK) : 1;
      chute.scale.setScalar(Math.max(0.001, pop));
      chute.userData.canopy.scale.set(7.5 * (0.6 + 0.4 * pop), 4.2, 7.5 * (0.6 + 0.4 * pop));
      st.speed = 1600 - 1300 * smooth(0, 3, st.t);
      st.alt = Math.max(0.3, st.alt - dt * (0.55 - 0.4 * smooth(0, 3, st.t)));
      capsule.position.set(LAND.x + st.alt * 2.2, groundL + capY(st.alt), LAND.z - st.alt * 1.2);
      capsule.rotation.z = sway; capsule.rotation.x = Math.sin(time * 1.1) * 0.04;
      // heat shield falls away
      const hs = smooth(3.2, 5.5, st.t);
      shieldParts.forEach((o) => { o.position.y = o.userData.y0 + hs * 9; o.visible = hs < 0.98; });
      if (st.t > 3.2) once('shieldOff');
      // lander lowered on the bridle
      const low = smooth(5.0, 7.0, st.t);
      lander.visible = st.t > 5.0; bridle.visible = lander.visible;
      lander.position.copy(capsule.position).add(tmp.set(0, -1.2 - low * 18, 0));
      if (st.t > 5.0) once('bridle');
      // first frame the canopy and the capsule, then the capsule and the lander hanging below it
      camPos.copy(capsule.position).add(tmp.set(20, 8 - low * 16, 32)); camLook.copy(capsule.position).add(tmp.set(0, 11 - low * 20, 0));
      if (st.t > 8) { st.phase = 'drop'; st.t = 0; st.tg = 16; emit('drop'); }
    }
    if (st.phase === 'drop') {
      // counting down to touchdown: airbags must inflate about 8 seconds before
      st.tg = Math.max(0, st.tg - dt * 1.35);
      st.speed = 300;
      st.alt = st.tg * 0.083; // ~83 m/s (about 300 km/h) under the parachute
      const lY = groundL + 2.6 + st.tg * 4.2;
      lander.position.set(LAND.x + st.tg * 0.35, lY, LAND.z - st.tg * 0.2);
      capsule.position.copy(lander.position).add(tmp.set(0, 19.2, 0)); capsule.rotation.z = sway * 0.6;
      if (bags.visible) { st.bagsT += dt; st.bagsK = Math.min(1, st.bagsT / 0.5); bags.scale.setScalar(Math.max(0.001, st.bagsK * (1.12 - 0.12 * st.bagsK))); }
      if (st.tg <= WINDOWS.bags[0]) once('bagsWindow');
      if (!bags.visible && st.tg < WINDOWS.bags[1]) { st.tg = 16; st.fired.bagsWindow = false; emit('bagsLate'); }
      // retro-rockets and bridle cut just above the ground
      const fire = bags.visible && st.tg < 1.6;
      rockets.forEach((r) => { r.material.opacity = fire ? 0.8 + Math.random() * 0.2 : 0; r.scale.setScalar(1.4 + Math.random() * 0.6); });
      if (fire) once('rockets');
      camPos.copy(lander.position).add(tmp.set(10, 3, 17)); camLook.copy(lander.position).add(tmp.set(0, 1.5, 0));
      if (bags.visible && st.tg <= 0.5) {
        st.phase = 'bounce'; st.t = 0; once('cut');
        st.vel.set(-1.2, -6, 3.0); backVel.set(3, 7, -2);
      }
    }
    if (st.phase === 'bounce') {
      // backshell and parachute fly away; the airbag ball bounces and rolls to a stop
      capsule.position.addScaledVector(backVel, dt); backVel.y -= dt * 0.8;
      capsule.visible = st.t < 6;
      rockets.forEach((r) => { r.material.opacity = Math.max(0, r.material.opacity - dt * 3); });
      const steps = Math.ceil(dt / (1 / 120));
      for (let k = 0; k < steps; k++) {
        const h = dt / steps;
        st.vel.y -= 9.0 * h;
        lander.position.addScaledVector(st.vel, h);
        const gy = heightAt(lander.position.x, lander.position.z) + 1.25; // ball radius minus its offset
        if (lander.position.y < gy) {
          lander.position.y = gy;
          if (st.vel.y < -1.2) {
            st.vel.y = -st.vel.y * 0.58; st.vel.x *= 0.82; st.vel.z *= 0.82; st.bounces++;
            puff.position.set(lander.position.x, gy - 1.0, lander.position.z); puff.material.opacity = Math.min(0.7, Math.abs(st.vel.y) * 0.15); puff.scale.setScalar(3.5);
            emit('bounce');
          } else { st.vel.y = 0; st.vel.x *= Math.pow(0.15, h); st.vel.z *= Math.pow(0.15, h); }
        }
      }
      // gentle pull toward the resting point so it never rolls off into the distance
      lander.position.x += (REST.x - lander.position.x) * dt * 0.08; lander.position.z += (REST.z - lander.position.z) * dt * 0.08;
      lander.rotation.x += st.vel.z * dt * 0.5; lander.rotation.z -= st.vel.x * dt * 0.5;
      puff.material.opacity = Math.max(0, puff.material.opacity - dt * 0.8); puff.scale.multiplyScalar(1 + dt * 0.8);
      st.speed = Math.round(st.vel.length() * 3.6 * 3);
      st.alt = 0; st.tg = 0;
      camPos.lerp(tmp.copy(lander.position).add(new THREE.Vector3(6, 2.5, 10)), Math.min(1, dt * 2)); camLook.lerp(lander.position, Math.min(1, dt * 3));
      if (st.t > 5 && st.vel.length() < 0.4) { st.phase = 'open'; st.t = 0; once('rest'); }
    }
    if (st.phase === 'open') {
      // airbags deflate and pull in, the lander rights itself and the petals open like a flower
      const k = smooth(0, 1.6, st.t);
      bags.scale.set(1 - k * 0.75, 1 - k * 0.9, 1 - k * 0.75); bags.position.y = 0.45 - k * 0.45;
      lander.rotation.x *= Math.pow(0.02, dt); lander.rotation.z *= Math.pow(0.02, dt);
      const gy = heightAt(lander.position.x, lander.position.z);
      lander.position.y += (gy + 0.25 - lander.position.y) * Math.min(1, dt * 3);
      const o = smooth(1.4, 3.4, st.t);
      petals.forEach((p) => { p.rotation.x = THREE.MathUtils.lerp(-closed, Math.PI / 2 - 0.12, o); });
      bags.visible = k < 0.98;
      camPos.lerp(tmp.copy(lander.position).add(new THREE.Vector3(3.2, 2.2, 5.5)), Math.min(1, dt * 1.5)); camLook.lerp(lander.position, Math.min(1, dt * 2));
      if (st.t > 3.8) once('opened');
    }

    if (bridle.visible) {
      const p = bridleGeo.attributes.position;
      p.setXYZ(0, capsule.position.x, capsule.position.y - 0.4, capsule.position.z);
      p.setXYZ(1, lander.position.x, lander.position.y + 1.2, lander.position.z);
      p.needsUpdate = true;
      if (st.phase === 'bounce' || st.phase === 'open') bridle.visible = false;
    }
    camera.position.copy(camPos); camera.lookAt(camLook);
  }

  return {
    root, start, stop, update, press,
    get phase() { return st.phase; },
    hud() { return { alt: st.alt, speed: Math.round(st.speed), tg: st.tg, bounces: st.bounces }; },
  };
}
