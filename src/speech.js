// Voices for SOL and the rovers.
// Today: the browser's own speech engine (Web Speech API). In Microsoft Edge this includes Microsoft's
// natural Egyptian voices "Shakir" and "Salma" — the same voices we picked for the final Azure version.
// Later (phase 4): pre-rendered Azure mp3 files per line; `speak()` already accepts a file URL and prefers it.

const ROLES = {
  // pitch/rate shape a character on top of the chosen voice
  sol: { pref: ['Shakir', 'Hamed', 'Naayf'], gender: 'm', pitch: 1.45, rate: 1.04 },
  sojourner: { pref: ['Salma', 'Zariyah', 'Hoda'], gender: 'f', pitch: 1.2, rate: 1.02 },
  spirit: { pref: ['Shakir', 'Hamed', 'Naayf'], gender: 'm', pitch: 0.95, rate: 0.98 },
  opportunity: { pref: ['Shakir', 'Hamed', 'Naayf'], gender: 'm', pitch: 0.78, rate: 0.95 },
};
const EN_PREF = { m: ['Guy', 'Andrew', 'Christopher', 'Eric', 'David', 'Google US English'], f: ['Aria', 'Jenny', 'Ava', 'Emma', 'Zira', 'Google US English'] };

export function createSpeech(audio) {
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
  let voices = [];
  let current = null;       // { onEnd, onProgress, ended }
  let fileAudio = null;

  function loadVoices() { if (synth) voices = synth.getVoices() || []; }
  loadVoices();
  if (synth && 'onvoiceschanged' in synth) synth.addEventListener('voiceschanged', loadVoices);

  function pickVoice(lang, role) {
    const r = ROLES[role] || ROLES.sol;
    const pool = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith(lang === 'ar' ? 'ar' : 'en'));
    if (!pool.length) return null;
    const names = lang === 'ar' ? r.pref : EN_PREF[r.gender];
    const score = (v) => {
      let s = 0;
      const n = v.name || '';
      names.forEach((p, i) => { if (n.includes(p)) s += 40 - i * 3; });
      if (/Natural|Online|Neural/i.test(n)) s += 20;           // the good, human-sounding voices
      if (lang === 'ar' && /ar-EG/i.test(v.lang)) s += 25;      // Egyptian first
      if (lang === 'en' && /en-US/i.test(v.lang)) s += 8;
      return s;
    };
    return pool.slice().sort((a, b) => score(b) - score(a))[0];
  }

  // does this device have a voice for the language?
  function available(lang) { loadVoices(); return !!pickVoice(lang, 'sol'); }

  function stop() {
    if (fileAudio) { fileAudio.pause(); fileAudio = null; }
    if (synth && (synth.speaking || synth.pending)) synth.cancel();
    if (current && !current.ended) { current.ended = true; }
    current = null;
    audio.duck(false);
  }

  /**
   * Say a line. Returns false when no voice could be used (the caller then falls back to robot chatter).
   * opts: { lang, role, text (what to say), file (mp3 url, preferred), onProgress(fraction), onEnd() }
   */
  function speak(opts) {
    stop();
    if (audio.muted) return false;
    const job = { ended: false, onEnd: opts.onEnd, onProgress: opts.onProgress };
    const finish = () => { if (job.ended) return; job.ended = true; audio.duck(false); job.onProgress?.(1); job.onEnd?.(); if (current === job) current = null; };
    current = job;

    if (opts.file) {
      fileAudio = new Audio(opts.file);
      fileAudio.addEventListener('timeupdate', () => { if (fileAudio && fileAudio.duration) job.onProgress?.(fileAudio.currentTime / fileAudio.duration); });
      fileAudio.addEventListener('ended', finish);
      fileAudio.play().then(() => audio.duck(true)).catch(() => { fileAudio = null; finish(); });
      return true;
    }
    if (!synth) return false;
    loadVoices();
    const voice = pickVoice(opts.lang, opts.role);
    if (!voice) return false;
    const r = ROLES[opts.role] || ROLES.sol;
    const u = new SpeechSynthesisUtterance(opts.text);
    u.voice = voice; u.lang = voice.lang;
    u.pitch = r.pitch; u.rate = r.rate; u.volume = 1;
    const len = Math.max(1, opts.text.length);
    u.onstart = () => audio.duck(true);
    u.onboundary = (e) => { if (typeof e.charIndex === 'number') job.onProgress?.(Math.min(1, (e.charIndex + (e.charLength || 4)) / len)); };
    u.onend = finish;
    u.onerror = finish;
    synth.speak(u);
    // some engines never fire onend: once the engine has gone quiet, finish anyway
    const t0 = performance.now();
    const watch = setInterval(() => {
      if (job.ended) { clearInterval(watch); return; }
      if (performance.now() - t0 > 1200 && !synth.speaking && !synth.pending) { clearInterval(watch); finish(); }
    }, 400);
    return true;
  }

  return { speak, stop, available, get speaking() { return !!current; }, voiceName: (lang, role) => pickVoice(lang, role)?.name || null };
}
