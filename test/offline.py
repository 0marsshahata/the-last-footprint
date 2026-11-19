# Opens the offline package straight from disk (file://), like a double-click, and plays to the Rover Hall.
import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        ctx = await b.new_context(viewport={"width":1280,"height":760}, offline=True)
        pg = await ctx.new_page(); errs=[]
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.on("console", lambda m: errs.append(m.text) if m.type=="error" else None)
        await pg.goto("file://docs/index.html?dtmax=0.3")
        await pg.wait_for_function("window.__tlf && window.__tlf.ready && window.__tlf.surfaceReady", timeout=240000)
        fonts = await pg.evaluate("[document.fonts.check('600 20px Chakra'), document.fonts.check('20px \"Plex Arabic\"'), document.fonts.check('20px Lalezar')]")
        await pg.evaluate("__tlf.S.timeScale=3"); await pg.click("#start")
        await pg.wait_for_function("__tlf.S.stage==='home' && __tlf.opening.t>6", timeout=180000, polling=50)
        await pg.click("#atlas .atlas-card.ready"); await pg.wait_for_timeout(400); await pg.click("#go-warp"); await pg.click("#pre [data-act=skip]"); await pg.wait_for_timeout(600); await pg.click("#guide-chips button[data-site='spirit']"); await pg.click("#guide-land")
        await pg.wait_for_function("__tlf.S.mode==='hall'", timeout=180000, polling=50)
        await pg.screenshot(path="shots/offline_hall.png")
        print("fonts", fonts, "errors", errs[:5])
        await b.close()
asyncio.run(main())
