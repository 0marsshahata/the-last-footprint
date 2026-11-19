"""Recorded Azure voices: SOL and the rovers play their mp3 files (both languages) and the captions follow them."""
import asyncio, sys
from playwright.async_api import async_playwright
lang = sys.argv[1] if len(sys.argv) > 1 else 'ar'
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--autoplay-policy=no-user-gesture-required"])
        pg = await (await b.new_context(viewport={"width": 1280, "height": 760})).new_page(); errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
        await pg.add_init_script("""window.__played=[]; const op=HTMLMediaElement.prototype.play;
          HTMLMediaElement.prototype.play=function(){ const el=this; const nm=(el.dataset.file||el.src).split('/').slice(-1)[0]; window.__played.push(nm); const ok=()=>window.__played.push('ok:'+nm+':'+el.duration.toFixed(1)+(pre?':preloaded':'')+(el.src.startsWith('blob:')?':mem':'')); const pre=el.readyState>=1; if(pre) ok(); else el.addEventListener('loadedmetadata',ok); return op.call(this); }""")
        await pg.goto(f"http://localhost:8777/index.html?dtmax=0.25&lang={lang}")
        await pg.wait_for_function("window.__tlf && __tlf.ready", timeout=180000)
        await pg.click("#start")
        await pg.wait_for_function("__tlf.S.stage==='home' && __tlf.surfaceReady && __tlf.opening.t>5", timeout=180000, polling=100)
        await pg.click("#atlas .atlas-card.ready"); await pg.wait_for_timeout(400); await pg.click("#go-warp")
        await pg.wait_for_function(f"window.__played.some(x=>x.startsWith('ok:sol_solPre_{lang}'))", timeout=60000)
        print("PASS new voice: sol_solPre plays")
        if await pg.is_checked("#pre-ok"): await pg.click("#pre-ok")
        await pg.click("#pre [data-act=start]"); await pg.wait_for_timeout(400)
        quiet = await pg.evaluate("!__tlf.speech.speaking")
        print("PASS SOL stops when the questions start" if quiet else "FAIL SOL still talking over the questions")
        if not quiet: errs.append("sol talks over questions")
        await pg.keyboard.press("Escape")
        await pg.wait_for_function(f"window.__played.some(x=>x.startsWith('ok:sol_guideHello_{lang}'))", timeout=60000)
        await pg.wait_for_function("document.querySelector('#guide-text').textContent.length>30", timeout=60000)
        await pg.evaluate("__tlf.S.focus=1; __tlf.goSurface()")
        await pg.wait_for_function("__tlf.S.mode==='hall'", timeout=120000, polling=100)
        await pg.evaluate("__tlf.wakeNow()")
        await pg.wait_for_function(f"window.__played.some(x=>x.startsWith('ok:spirit_1_{lang}'))", timeout=60000)
        print("played:", await pg.evaluate("window.__played"))
        print("errors:", errs)
        print("RESULT", "OK" if not errs else "FAIL")
        await b.close()
asyncio.run(main())
