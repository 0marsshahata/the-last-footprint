import * as THREE from 'three';

const beamVert = /* glsl */`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;
const beamFrag = /* glsl */`
uniform float uTime; uniform float uAlpha; uniform vec3 uColor; uniform float uCore;
varying vec2 vUv;
float h(float n){ return fract(sin(n)*43758.5453); }
float n1(float x){ float i=floor(x); float f=fract(x); return mix(h(i),h(i+1.0),f*f*(3.0-2.0*f)); }
void main(){
  // vUv.x wraps around the tube; vUv.y runs palm(0) -> rover(1)
  float edge = abs(sin(vUv.x*3.14159));
  float flow = n1(vUv.y*28.0 - uTime*22.0)*0.55 + n1(vUv.y*9.0 - uTime*9.0 + vUv.x*6.0)*0.45;
  float fade = smoothstep(0.0,0.06,vUv.y)*smoothstep(1.0,0.9,vUv.y);
  float a = pow(edge, 1.6) * (0.55 + flow*0.75) * fade * uAlpha;
  vec3 col = mix(uColor, vec3(1.0), pow(edge,6.0)*uCore);
  gl_FragColor = vec4(col * (1.0 + uCore*2.5), a);
}`;

function softDot() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); return t;
}

export function buildFX(scene) {
  const group = new THREE.Group(); scene.add(group);
  const mkBeam = (radius, color, core) => new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius * 0.12, 1, 24, 1, true).translate(0, 0.5, 0).rotateX(Math.PI / 2),
    new THREE.ShaderMaterial({
      vertexShader: beamVert, fragmentShader: beamFrag, transparent: true, depthWrite: false, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, toneMapped: false, fog: false,
      uniforms: { uTime: { value: 0 }, uAlpha: { value: 0 }, uColor: { value: new THREE.Color(color) }, uCore: { value: core } },
    }),
  );
  const beamOuter = mkBeam(0.075, '#3fb8ff', 0.2);
  const beamInner = mkBeam(0.03, '#bff6ff', 1.0);
  [beamOuter, beamInner].forEach((b) => { b.visible = false; b.frustumCulled = false; group.add(b); });

  const dot = softDot();
  const orb = new THREE.Sprite(new THREE.SpriteMaterial({ map: dot, color: new THREE.Color(2.5, 5, 6), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, fog: false }));
  orb.visible = false; group.add(orb);
  const flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: dot, color: new THREE.Color(3, 5, 6), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, fog: false }));
  flash.visible = false; group.add(flash);

  const ring = new THREE.Mesh(new THREE.RingGeometry(0.82, 1, 96), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.4, 3.2, 4), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2; ring.visible = false; group.add(ring);
  const ring2 = ring.clone(); ring2.material = ring.material.clone(); group.add(ring2);

  const impactLight = new THREE.PointLight('#7fe6ff', 0, 9, 1.6); group.add(impactLight);

  // dust burst
  const N = 220;
  const dGeo = new THREE.BufferGeometry();
  const pos = new Float32Array(N * 3); const vel = new Float32Array(N * 3);
  dGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const dust = new THREE.Points(dGeo, new THREE.PointsMaterial({ map: dot, size: 0.16, color: '#d89a6c', transparent: true, opacity: 0, depthWrite: false, sizeAttenuation: true }));
  dust.frustumCulled = false; group.add(dust);

  const st = { phase: 'idle', t: 0, from: new THREE.Vector3(), to: new THREE.Vector3(), base: new THREE.Vector3(), scale: 1, shake: 0, onHit: null };
  const tmp = new THREE.Vector3();

  function aimBeam(from, to, grow) {
    const len = from.distanceTo(to) * grow;
    for (const b of [beamOuter, beamInner]) {
      b.position.copy(from); b.lookAt(to); b.scale.set(1, 1, Math.max(0.001, len));
    }
  }

  function fire(from, to, base, scale, onHit) {
    st.phase = 'travel'; st.t = 0; st.from.copy(from); st.to.copy(to); st.base.copy(base); st.scale = scale; st.onHit = onHit;
    beamOuter.visible = beamInner.visible = orb.visible = true;
  }

  function burst() {
    for (let i = 0; i < N; i++) {
      const a = Math.random() * Math.PI * 2, r = Math.random() * 0.5 * st.scale;
      pos[i * 3] = st.base.x + Math.cos(a) * r; pos[i * 3 + 1] = st.base.y + 0.05; pos[i * 3 + 2] = st.base.z + Math.sin(a) * r;
      const sp = (1.2 + Math.random() * 2.6) * st.scale;
      vel[i * 3] = Math.cos(a) * sp; vel[i * 3 + 1] = (0.6 + Math.random() * 1.6) * st.scale; vel[i * 3 + 2] = Math.sin(a) * sp;
    }
    dGeo.attributes.position.needsUpdate = true;
    dust.material.opacity = 0.55; dust.material.size = 0.05 * Math.max(0.6, st.scale);
  }

  function update(dt, time, palmNow) {
    beamOuter.material.uniforms.uTime.value = time; beamInner.material.uniforms.uTime.value = time;
    st.shake = Math.max(0, st.shake - dt * 2.2);
    if (palmNow && st.phase !== 'idle') st.from.copy(palmNow);
    if (st.phase === 'travel') {
      st.t += dt; const k = Math.min(1, st.t / 0.32);
      const e = 1 - Math.pow(1 - k, 3);
      aimBeam(st.from, st.to, e);
      tmp.lerpVectors(st.from, st.to, e); orb.position.copy(tmp); orb.scale.setScalar(0.35 + Math.sin(time * 40) * 0.05);
      beamOuter.material.uniforms.uAlpha.value = beamInner.material.uniforms.uAlpha.value = 1;
      if (k >= 1) {
        st.phase = 'hold'; st.t = 0; orb.visible = false;
        flash.visible = true; flash.position.copy(st.to);
        ring.visible = ring2.visible = true;
        ring.position.copy(st.base).y += 0.03; ring2.position.copy(ring.position);
        impactLight.position.copy(st.to); impactLight.intensity = 40;
        st.shake = 1; burst();
        st.onHit?.();
      }
    } else if (st.phase === 'hold') {
      st.t += dt;
      aimBeam(st.from, st.to, 1);
      const a = Math.max(0, 1 - st.t / 0.55);
      beamOuter.material.uniforms.uAlpha.value = a; beamInner.material.uniforms.uAlpha.value = a;
      const fk = Math.min(1, st.t / 0.5);
      flash.scale.setScalar((0.5 + fk * 2.4) * st.scale); flash.material.opacity = (1 - fk) * 0.8;
      const r1 = Math.min(1, st.t / 1.1), r2 = Math.min(1, Math.max(0, (st.t - 0.15) / 1.3));
      ring.scale.setScalar((0.3 + r1 * 4.5) * st.scale); ring.material.opacity = (1 - r1) * 0.9;
      ring2.scale.setScalar((0.2 + r2 * 7) * st.scale); ring2.material.opacity = (1 - r2) * 0.45;
      impactLight.intensity = 40 * Math.max(0, 1 - st.t / 0.7);
      if (st.t > 1.5) {
        st.phase = 'idle';
        beamOuter.visible = beamInner.visible = flash.visible = ring.visible = ring2.visible = false;
      }
    }
    if (dust.material.opacity > 0) {
      for (let i = 0; i < N; i++) {
        vel[i * 3 + 1] -= 1.6 * dt * st.scale;
        vel[i * 3] *= 1 - dt * 1.4; vel[i * 3 + 2] *= 1 - dt * 1.4;
        pos[i * 3] += vel[i * 3] * dt; pos[i * 3 + 1] = Math.max(st.base.y + 0.02, pos[i * 3 + 1] + vel[i * 3 + 1] * dt); pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
      }
      dGeo.attributes.position.needsUpdate = true;
      dust.material.opacity = Math.max(0, dust.material.opacity - dt * 0.32);
      dust.material.size += dt * 0.03;
    }
  }

  return { fire, update, get shake() { return st.shake; }, get busy() { return st.phase !== 'idle'; } };
}
