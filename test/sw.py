"""Offline cache: after one visit, the site opens and plays voices with the network switched off."""
import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--autoplay-policy=no-user-gesture-required"])
        ctx = await b.new_context(viewport={"width": 1280, "height": 760}); pg = await ctx.new_page(); errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://localhost:8777/index.html?sw&dtmax=0.25&lang=ar")
        await pg.wait_for_function("window.__tlf && __tlf.surfaceReady", timeout=180000)
        await pg.wait_for_function("navigator.serviceWorker.controller || navigator.serviceWorker.ready.then(()=>true)", timeout=60000)
        await pg.click("#start"); await pg.wait_for_timeout(8000)  # voices download in the background
        n = await pg.evaluate("caches.keys().then(async k => { const c = await caches.open(k[0]); return [k, (await c.keys()).length, (await c.keys()).filter(r=>r.url.includes('/audio/')).length] })")
        print("cache:", n)
        await ctx.set_offline(True)
        await pg.reload()
        await pg.wait_for_function("window.__tlf && __tlf.surfaceReady", timeout=180000)
        ok = await pg.evaluate("fetch('audio/v/sol_guideHello_ar.mp3').then(r=>r.ok).catch(()=>false)")
        print("PASS offline reload, rover model and voice from cache" if ok else "FAIL voice not cached")
        print("errors:", errs); print("RESULT", "OK" if ok and not errs else "FAIL")
        await b.close()
asyncio.run(main())
