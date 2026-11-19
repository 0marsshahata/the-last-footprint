import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        ctx = await b.new_context(viewport={"width":1280,"height":760}, reduced_motion="reduce")
        pg = await ctx.new_page(); errs=[]
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.on("console", lambda m: errs.append(m.text) if m.type=="error" else None)
        await pg.goto("http://localhost:8777/index.html?dtmax=0.25")
        await pg.wait_for_function("window.__tlf && window.__tlf.ready", timeout=180000)
        await pg.click("#start")
        await pg.wait_for_function("__tlf.S.stage==='home'", timeout=60000, polling=50)
        await pg.wait_for_timeout(2500); await pg.screenshot(path="shots/r_home.png")
        await pg.wait_for_function("window.__tlf.surfaceReady", timeout=180000)
        await pg.click("#atlas .atlas-card.ready"); await pg.wait_for_timeout(400); await pg.click("#go-warp"); await pg.wait_for_timeout(500); await pg.click("#pre [data-act=skip]"); await pg.wait_for_timeout(800); await pg.click("#guide-chips button[data-site='spirit']"); await pg.wait_for_timeout(1500); await pg.click("#guide-land")
        await pg.wait_for_function("__tlf.S.mode==='hall'", timeout=120000, polling=50)
        await pg.wait_for_timeout(1500); await pg.screenshot(path="shots/r_hall.png")
        print("ok", errs[:5])
        await b.close()
asyncio.run(main())
