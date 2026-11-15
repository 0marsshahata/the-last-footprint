# Checks the voice logic with a fake speech engine that has Edge's Egyptian voices:
# right voice per character, captions follow the voice, SOL moves on after each line, mute stops speech.
import asyncio, json
from playwright.async_api import async_playwright
MOCK = r"""
(() => {
  const V = (name, lang) => ({ name, lang, localService: false, default: false, voiceURI: name });
  const voices = [V('Microsoft Hoda - Arabic (Saudi Arabia)','ar-SA'), V('Microsoft Shakir Online (Natural) - Arabic (Egypt)','ar-EG'),
    V('Microsoft Salma Online (Natural) - Arabic (Egypt)','ar-EG'), V('Microsoft Zira - English (United States)','en-US'),
    V('Microsoft Guy Online (Natural) - English (United States)','en-US'), V('Microsoft Aria Online (Natural) - English (United States)','en-US')];
  window.__said = [];
  const synth = { speaking: false, pending: false, _u: null, _timers: [],
    getVoices: () => voices, addEventListener() {},
    cancel() { this._timers.forEach(clearTimeout); this._timers = []; if (this._u) { const u = this._u; this._u = null; this.speaking = false; u.onend && u.onend(); } },
    speak(u) { this._u = u; this.speaking = true; window.__said.push({ text: u.text, voice: u.voice && u.voice.name, pitch: u.pitch, rate: u.rate });
      const dur = u.text.length * 60; const T = (ms, f) => this._timers.push(setTimeout(f, ms));
      T(10, () => u.onstart && u.onstart());
      for (let k = 0; k < u.text.length; k += 8) T(dur * k / u.text.length, () => u.onboundary && u.onboundary({ charIndex: k, charLength: 4 }));
      T(dur, () => { if (this._u !== u) return; this._u = null; this.speaking = false; u.onend && u.onend(); });
    } };
  Object.defineProperty(window, 'speechSynthesis', { value: synth });
  window.SpeechSynthesisUtterance = class { constructor(t) { this.text = t; } };
})();
"""
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--autoplay-policy=no-user-gesture-required"])
        pg = await b.new_page(viewport={"width":1280,"height":760}); errs=[]
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.on("console", lambda m: errs.append(m.text) if m.type=="error" else None)
        await pg.add_init_script(MOCK)
        await pg.goto("http://localhost:8777/index.html?dtmax=0.25&lang=ar&nofiles")
        await pg.wait_for_function("window.__tlf && window.__tlf.ready && window.__tlf.surfaceReady", timeout=240000)
        await pg.evaluate("__tlf.S.timeScale=3"); await pg.click("#start")
        await pg.wait_for_function("__tlf.S.stage==='home' && __tlf.opening.t>5", timeout=180000, polling=50)
        await pg.click("#go-warp")
        # mid-sentence the caption should be partly written (it follows the voice), not complete
        await pg.wait_for_function("__said.length>=1", timeout=60000, polling=30)
        await pg.wait_for_timeout(1200)
        mid = await pg.evaluate("[document.querySelector('#guide-text').textContent.length, __said[0].text.length]")
        await pg.wait_for_function("__said.length>=2", timeout=60000, polling=50)   # SOL moved on to the 2nd line by himself
        await pg.click("#guide-chips button[data-site='sojourner']")
        await pg.wait_for_timeout(500)
        await pg.click("#mute"); await pg.wait_for_timeout(300)
        speaking_after_mute = await pg.evaluate("speechSynthesis.speaking")
        await pg.click("#mute")
        await pg.click("#guide-chips button[data-site='spirit']"); await pg.wait_for_timeout(300)
        await pg.click("#guide-land")
        await pg.wait_for_function("__tlf.S.mode==='hall'", timeout=180000, polling=50)
        await pg.evaluate("__tlf.wakeNow()")
        await pg.wait_for_function("document.querySelector('#bubble').classList.contains('show')", timeout=120000, polling=50)
        await pg.wait_for_timeout(800)
        said = await pg.evaluate("__said")
        for x in said: print(json.dumps(x, ensure_ascii=False))
        print("caption mid-sentence:", mid, "| speaking after mute:", speaking_after_mute, "| errors:", errs[:5])
        await b.close()
asyncio.run(main())
