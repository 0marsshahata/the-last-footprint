// AI disclosure (NASA Space Apps SI rules): written by Team 3M with AI coding assistance from Claude (Anthropic).
// All sound effects are synthesized with WebAudio (no files); character voices are AI-generated mp3s in audio/v/.
export function createAudio() {
  let ctx = null, master = null, muted = false, meter = null, ambBus = null;
  let chargeOsc = null, chargeOsc2 = null, chargeGain = null, chargeFilter = null;
  let narration = null;
  const amb = { space: null, mars: null, current: null };

  function noiseBuffer(sec = 2) {
    const b = ctx.createBuffer(1, ctx.sampleRate * sec, ctx.sampleRate);
    const d = b.getChannelData(0); let last = 0;
    for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
    return b;
  }
  function whiteBuffer(sec = 1) {
    const b = ctx.createBuffer(1, ctx.sampleRate * sec, ctx.sampleRate);
    const d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }

  function start() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = muted ? 0 : 0.9; master.connect(ctx.destination);
    // level meter (used by the automated audio test and the debug overlay)
    meter = ctx.createAnalyser(); meter.fftSize = 1024; master.connect(meter);
    // ambience goes through its own bus so it can duck under voices
    ambBus = ctx.createGain(); ambBus.gain.value = 1; ambBus.connect(master);
    // charge hum (used on the surface)
    chargeFilter = ctx.createBiquadFilter(); chargeFilter.type = 'lowpass'; chargeFilter.frequency.value = 300; chargeFilter.Q.value = 6;
    chargeGain = ctx.createGain(); chargeGain.gain.value = 0;
    chargeOsc = ctx.createOscillator(); chargeOsc.type = 'sawtooth'; chargeOsc.frequency.value = 70;
    chargeOsc2 = ctx.createOscillator(); chargeOsc2.type = 'sine'; chargeOsc2.frequency.value = 140;
    chargeOsc.connect(chargeFilter); chargeOsc2.connect(chargeFilter); chargeFilter.connect(chargeGain).connect(master);
    chargeOsc.start(); chargeOsc2.start();
  }

  function makeMars() {
    // wind: brown noise through a slowly moving band-pass
    const g = ctx.createGain(); g.gain.value = 0; g.connect(ambBus);
    const src = ctx.createBufferSource(); src.buffer = noiseBuffer(4); src.loop = true;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 380; bp.Q.value = 0.6;
    src.connect(bp).connect(g); src.start();
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07; const lfoG = ctx.createGain(); lfoG.gain.value = 160;
    lfo.connect(lfoG).connect(bp.frequency); lfo.start();
    return { gain: g, level: 0.16 };
  }
  function makeSpace() {
    // a low, slowly breathing pad: two detuned fifths through a soft low-pass
    const g = ctx.createGain(); g.gain.value = 0; g.connect(ambBus);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 520; lp.Q.value = 0.4; lp.connect(g);
    [[55, 'sine'], [55.4, 'triangle'], [82.4, 'sine'], [110.2, 'sine']].forEach(([f, type], i) => {
      const o = ctx.createOscillator(); o.type = type; o.frequency.value = f;
      const og = ctx.createGain(); og.gain.value = [0.5, 0.25, 0.3, 0.12][i];
      o.connect(og).connect(lp); o.start();
    });
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.05; const lfoG = ctx.createGain(); lfoG.gain.value = 220;
    lfo.connect(lfoG).connect(lp.frequency); lfo.start();
    return { gain: g, level: 0.085 };
  }

  function setAmbient(kind) {
    if (!ctx) return;
    if (kind === 'mars' && !amb.mars) amb.mars = makeMars();
    if (kind === 'space' && !amb.space) amb.space = makeSpace();
    const t = ctx.currentTime;
    for (const k of ['mars', 'space']) {
      const a = amb[k]; if (!a) continue;
      a.gain.gain.cancelScheduledValues(t);
      a.gain.gain.setValueAtTime(a.gain.gain.value, t);
      a.gain.gain.linearRampToValueAtTime(k === kind ? a.level : 0, t + (k === kind ? 2.5 : 1.2));
    }
    amb.current = kind;
  }

  // radio static that "locks" onto a signal
  function signal() {
    if (!ctx) return;
    const t = ctx.currentTime;
    const n = ctx.createBufferSource(); n.buffer = whiteBuffer(1.4);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2400; bp.Q.value = 0.8;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    for (let i = 0; i < 14; i++) g.gain.setValueAtTime(0.05 + Math.random() * 0.12, t + i * 0.07);
    g.gain.linearRampToValueAtTime(0, t + 1.25);
    n.connect(bp).connect(g).connect(master); n.start(t); n.stop(t + 1.4);
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(1600, t + 0.9); o.frequency.exponentialRampToValueAtTime(880, t + 1.15);
    const og = ctx.createGain(); og.gain.setValueAtTime(0, t + 0.9); og.gain.linearRampToValueAtTime(0.12, t + 0.93); og.gain.exponentialRampToValueAtTime(0.001, t + 1.5);
    o.connect(og).connect(master); o.start(t + 0.9); o.stop(t + 1.6);
  }

  // a sonar-like ping for each beacon, with a short echo
  function beep(i = 0) {
    if (!ctx) return;
    const t = ctx.currentTime;
    const f = [784, 988, 1175][i % 3];
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.11, t + 0.01); g.gain.exponentialRampToValueAtTime(0.001, t + 0.9);
    const d = ctx.createDelay(); d.delayTime.value = 0.22; const fb = ctx.createGain(); fb.gain.value = 0.32;
    o.connect(g); g.connect(master); g.connect(d); d.connect(fb).connect(d); d.connect(master);
    o.start(t); o.stop(t + 1);
  }

  // rising whoosh for the dive into the atmosphere
  function whoosh(dur = 2.8) {
    if (!ctx) return;
    const t = ctx.currentTime;
    const n = ctx.createBufferSource(); n.buffer = noiseBuffer(dur + 0.5);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.2;
    bp.frequency.setValueAtTime(180, t); bp.frequency.exponentialRampToValueAtTime(2600, t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + dur * 0.9); g.gain.exponentialRampToValueAtTime(0.001, t + dur + 0.4);
    n.connect(bp).connect(g).connect(master); n.start(t); n.stop(t + dur + 0.5);
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(40, t); o.frequency.linearRampToValueAtTime(70, t + dur);
    const og = ctx.createGain(); og.gain.setValueAtTime(0.0001, t); og.gain.exponentialRampToValueAtTime(0.35, t + dur); og.gain.exponentialRampToValueAtTime(0.001, t + dur + 0.6);
    o.connect(og).connect(master); o.start(t); o.stop(t + dur + 0.7);
  }

  function setCharge(c) {
    if (!ctx) return;
    const t = ctx.currentTime;
    chargeGain.gain.setTargetAtTime(c > 0.01 ? 0.05 + c * 0.11 : 0, t, 0.05);
    chargeOsc.frequency.setTargetAtTime(70 + c * 260, t, 0.05);
    chargeOsc2.frequency.setTargetAtTime(140 + c * 620, t, 0.05);
    chargeFilter.frequency.setTargetAtTime(300 + c * 2600, t, 0.05);
  }

  function zap() {
    if (!ctx) return;
    const t = ctx.currentTime;
    const n = ctx.createBufferSource(); n.buffer = noiseBuffer(1);
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.setValueAtTime(3000, t); hp.frequency.exponentialRampToValueAtTime(200, t + 0.6);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.9);
    n.connect(hp).connect(g).connect(master); n.start(t); n.stop(t + 1);
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(900, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.7);
    const og = ctx.createGain(); og.gain.setValueAtTime(0.45, t); og.gain.exponentialRampToValueAtTime(0.001, t + 0.9);
    o.connect(og).connect(master); o.start(t); o.stop(t + 1);
  }

  function chime() {
    if (!ctx) return;
    const t = ctx.currentTime;
    [1046.5, 1318.5, 1568, 2093].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = ctx.createGain(); const s = t + 0.25 + i * 0.12;
      g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(0.09, s + 0.02); g.gain.exponentialRampToValueAtTime(0.001, s + 1.4);
      o.connect(g).connect(master); o.start(s); o.stop(s + 1.5);
    });
  }

  // little robotic chirps while text types (used when no narration file plays)
  let lastBlip = 0;
  function blip(pitch = 1) {
    if (!ctx || narration) return;
    const t = ctx.currentTime; if (t - lastBlip < 0.075) return; lastBlip = t;
    const base = (420 + Math.random() * 360) * pitch;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1400 * pitch; f.Q.value = 0.9;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.16, t + 0.008); g.gain.exponentialRampToValueAtTime(0.001, t + 0.085);
    [1, 1.5].forEach((m) => { const o = ctx.createOscillator(); o.type = m === 1 ? 'square' : 'triangle'; o.frequency.setValueAtTime(base * m, t); o.frequency.exponentialRampToValueAtTime(base * m * (Math.random() > 0.5 ? 1.25 : 0.8), t + 0.07); o.connect(f); o.start(t); o.stop(t + 0.09); });
    f.connect(g).connect(master);
  }
  function duck(on) {
    if (!ctx || !ambBus) return;
    ambBus.gain.setTargetAtTime(on ? 0.35 : 1, ctx.currentTime, 0.15);
  }

  function speak(url) {
    stopSpeech();
    if (!url || muted) return null;
    narration = new Audio(url);
    narration.addEventListener('ended', () => { narration = null; });
    narration.play().catch(() => { narration = null; });
    return narration;
  }
  function stopSpeech() { if (narration) { narration.pause(); narration = null; } }

  function setMuted(m) {
    muted = m;
    if (master) master.gain.setTargetAtTime(m ? 0 : 0.9, ctx.currentTime, 0.05);
    if (m) stopSpeech();
  }

  function level() {
    if (!meter) return 0;
    const a = new Float32Array(meter.fftSize); meter.getFloatTimeDomainData(a);
    let s = 0; for (const v of a) s += v * v; return Math.sqrt(s / a.length);
  }

  return { level, duck, get ctx() { return ctx; }, start, setAmbient, signal, beep, whoosh, setCharge, zap, chime, blip, speak, stopSpeech, setMuted, get muted() { return muted; } };
}
