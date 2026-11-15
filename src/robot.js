import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// SOL — the team's original guide robot (a "sol" is one day on Mars).
// A small hovering explorer: glossy white head with a dark visor, two glowing eyes,
// an antenna with an amber tip, floating hands and a soft thruster glow.
export function buildGuide(renderer) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  const root = new THREE.Group();      // placed in camera space
  const body = new THREE.Group();      // bobbing / tilting
  root.add(body);

  const shell = new THREE.MeshStandardMaterial({ color: '#f3efe9', roughness: 0.28, metalness: 0.05, envMap: env, envMapIntensity: 1.1 });
  const trim = new THREE.MeshStandardMaterial({ color: '#2a2f3a', roughness: 0.45, metalness: 0.4, envMap: env, envMapIntensity: 0.9 });
  const visor = new THREE.MeshStandardMaterial({ color: '#06090d', roughness: 0.08, metalness: 0.2, envMap: env, envMapIntensity: 1.4 });
  const amber = new THREE.MeshStandardMaterial({ color: '#ffb36b', roughness: 0.35, envMap: env, emissive: '#ff8a3d', emissiveIntensity: 0.25 });
  const eyeMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 3.6, 4.4), toneMapped: false });
  const tipMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 2.2, 0.9), toneMapped: false });

  // head
  const head = new THREE.Group(); head.position.y = 0.16; body.add(head);
  const skull = new THREE.Mesh(new RoundedBoxGeometry(0.62, 0.46, 0.5, 6, 0.2), shell); head.add(skull);
  const face = new THREE.Mesh(new RoundedBoxGeometry(0.5, 0.3, 0.06, 4, 0.1), visor); face.position.set(0, -0.01, 0.235); head.add(face);
  const eyes = [-1, 1].map((s) => {
    const e = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.05, 4, 12), eyeMat);
    e.position.set(s * 0.1, 0.0, 0.27); head.add(e); return e;
  });
  // ears with amber rings
  [-1, 1].forEach((s) => {
    const ear = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.05, 28), trim);
    ear.rotation.z = Math.PI / 2; ear.position.set(s * 0.325, 0, 0); head.add(ear);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.012, 8, 28), amber);
    ring.rotation.y = Math.PI / 2; ring.position.set(s * 0.352, 0, 0); head.add(ring);
  });
  // antenna
  const ant = new THREE.Group(); ant.position.set(0.12, 0.23, -0.02); head.add(ant);
  const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.01, 0.16, 8), trim); stalk.position.y = 0.08; ant.add(stalk);
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.028, 16, 12), tipMat); tip.position.y = 0.17; ant.add(tip);

  // torso: a small rounded capsule with a chest light
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.17, 0.12, 6, 20), shell); torso.position.y = -0.22; body.add(torso);
  const belt = new THREE.Mesh(new THREE.TorusGeometry(0.172, 0.018, 10, 36), trim); belt.rotation.x = Math.PI / 2; belt.position.y = -0.2; body.add(belt);
  const chest = new THREE.Mesh(new THREE.CircleGeometry(0.035, 24), eyeMat); chest.position.set(0, -0.17, 0.168); body.add(chest);

  // floating hands
  const hands = [-1, 1].map((s) => {
    const h = new THREE.Group(); h.position.set(s * 0.29, -0.22, 0.04); body.add(h);
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.06, 20, 14), shell); m.scale.set(1, 1.15, 0.85); h.add(m);
    const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.01, 8, 20), amber); cuff.rotation.x = Math.PI / 2; cuff.position.y = -0.04; h.add(cuff);
    return h;
  });

  // thruster glow
  const glowTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.4, 'rgba(255,200,140,0.5)'); gr.addColorStop(1, 'rgba(255,140,60,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c);
  })();
  const flame = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: new THREE.Color(2.4, 1.5, 0.8), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
  flame.position.y = -0.42; flame.scale.set(0.22, 0.3, 1); body.add(flame);

  root.traverse((o) => { o.frustumCulled = false; if (o.isMesh || o.isSprite) o.renderOrder = 30; });

  const st = { t: 0, blink: 2, talk: 0, wave: 0, show: 0, showTarget: 0, look: new THREE.Vector2(), side: 1 };
  const anchor = new THREE.Vector3();

  // place in camera space: bottom corner on the reading-start side; on phones it sits just above the bubble
  function layout(camera, lang, avoid) {
    const portrait = innerWidth < innerHeight * 0.95;
    const D = 3.2;
    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * D, halfW = halfH * camera.aspect;
    const upp = (2 * halfH) / innerHeight; // camera units per CSS pixel at depth D
    st.side = lang === 'ar' ? 1 : -1;
    const s = portrait ? 0.6 : 0.78;
    root.scale.setScalar(s);
    if (portrait && avoid && avoid.height > 0) {
      const yPx = avoid.top - (0.62 * s) / upp; // robot centre a little above the bubble
      anchor.set(st.side * (halfW - 0.48 * s), halfH - yPx * upp, -D);
    } else {
      anchor.set(st.side * (halfW - 0.55 * s), -halfH + 0.72 * s, -D);
    }
    root.rotation.y = -st.side * 0.35; // turn slightly toward the middle of the screen
  }

  function update(dt, pointer) {
    st.t += dt;
    st.show += (st.showTarget - st.show) * Math.min(1, dt * 3.5);
    root.visible = st.show > 0.01;
    // fly in from below/outside
    const off = (1 - st.show);
    root.position.set(anchor.x + st.side * off * 0.9, anchor.y - off * 1.4 + Math.sin(st.t * 1.8) * 0.035, anchor.z);
    // look toward the pointer a little
    if (pointer) st.look.lerp(pointer, Math.min(1, dt * 3));
    head.rotation.set(-st.look.y * 0.18, st.look.x * 0.3, Math.sin(st.t * 0.9) * 0.04);
    body.rotation.z = Math.sin(st.t * 1.3) * 0.05;
    // blink
    st.blink -= dt;
    let open = 1;
    if (st.blink < 0.12) open = Math.abs(st.blink - 0.06) / 0.06;
    if (st.blink < 0) st.blink = 2.2 + Math.random() * 2.5;
    // happy squint while talking
    const talk = st.talk > 0 ? 0.75 + 0.25 * Math.sin(st.t * 22) : 1;
    eyes.forEach((e) => { e.scale.set(1, Math.max(0.08, open * talk), 1); });
    st.talk = Math.max(0, st.talk - dt);
    tip.scale.setScalar(1 + (st.talk > 0 ? 0.35 * Math.abs(Math.sin(st.t * 14)) : 0.1 * Math.sin(st.t * 3)));
    ant.rotation.z = Math.sin(st.t * 2.4) * 0.12;
    // hands: idle float, wave on hello
    st.wave = Math.max(0, st.wave - dt);
    hands.forEach((h, i) => {
      const s = i === 0 ? -1 : 1;
      h.position.y = -0.22 + Math.sin(st.t * 2 + i) * 0.02;
      h.rotation.z = 0;
      if (st.wave > 0 && i === (st.side > 0 ? 0 : 1)) {
        h.position.y = 0.02 + Math.sin(st.t * 9) * 0.02;
        h.rotation.z = Math.sin(st.t * 12) * 0.5 * s;
      }
    });
    flame.material.opacity = 0.6 + 0.4 * Math.sin(st.t * 30) * Math.sin(st.t * 7);
    flame.scale.set(0.2 + 0.03 * Math.sin(st.t * 25), 0.28 + 0.06 * Math.sin(st.t * 17), 1);
  }

  return {
    root, layout, update,
    show() { st.showTarget = 1; st.wave = 1.8; },
    hide() { st.showTarget = 0; },
    talk(sec) { st.talk = Math.max(st.talk, sec); },
    get visible() { return st.show > 0.5; },
  };
}
