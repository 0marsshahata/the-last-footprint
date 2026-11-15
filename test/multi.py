import asyncio, sys
from playwright.async_api import async_playwright
W,H,tag,lang = int(sys.argv[1]), int(sys.argv[2]), sys.argv[3], sys.argv[4]
OUT="shots/"
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        ctx = await b.new_context(viewport={"width":W,"height":H}, is_mobile=W<600, has_touch=W<600)
        pg = await ctx.new_page(); errs=[]
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.on("console", lambda m: errs.append(m.text) if m.type=="error" else None)
        await pg.add_init_script(f"localStorage.setItem('tlf-lang','{lang}')")
        async def shot(n):
            await pg.evaluate("__tlf.S.timeScale=0"); await pg.wait_for_timeout(400)
            await pg.screenshot(path=OUT+tag+n+".png"); await pg.evaluate("__tlf.S.timeScale=3")
        await pg.goto("http://localhost:8777/index.html?dtmax=0.3")
        await pg.wait_for_function("window.__tlf && window.__tlf.ready && window.__tlf.surfaceReady", timeout=240000)
        await pg.evaluate("__tlf.S.timeScale=3"); await pg.click("#start")
        await pg.wait_for_function("__tlf.S.stage==='home' && __tlf.opening.t>6", timeout=180000, polling=50)
        await shot("1home")
        await pg.click("#go-warp"); await pg.click("#guide-chips button[data-site='opportunity']")
        await pg.wait_for_timeout(2500); await shot("2pick")
        await pg.click("#guide-land")
        await pg.wait_for_function("__tlf.S.mode==='hall'", timeout=180000, polling=50)
        await pg.wait_for_timeout(1200); await shot("3hall")
        print(tag, "errors", errs[:5])
        await b.close()
asyncio.run(main())
