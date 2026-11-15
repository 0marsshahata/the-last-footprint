import asyncio, sys, json
from playwright.async_api import async_playwright
W,H,tag,idx = int(sys.argv[1]), int(sys.argv[2]), sys.argv[3], int(sys.argv[4])
OUT="shots/"
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
        ctx = await b.new_context(viewport={"width":W,"height":H}, device_scale_factor=1, is_mobile=W<600, has_touch=W<600)
        pg = await ctx.new_page(); errs=[]
        pg.on("pageerror", lambda e: errs.append("pageerror:"+str(e)))
        pg.on("console", lambda m: errs.append(m.type+":"+m.text) if m.type=="error" else None)
        async def shot(name):
            ts = await pg.evaluate("(()=>{const t=__tlf.S.timeScale; __tlf.S.timeScale=0; return t})()")
            await pg.wait_for_timeout(400); await pg.screenshot(path=OUT+tag+name+".png")
            await pg.evaluate(f"__tlf.S.timeScale={ts}")
        await pg.goto("http://localhost:8777/index.html?dtmax=0.25")
        await pg.wait_for_function("window.__tlf && window.__tlf.ready", timeout=180000)
        await pg.wait_for_function("window.__tlf.surfaceReady", timeout=180000); await pg.evaluate("__tlf.S.timeScale=3; __tlf.goSurface()")
        await pg.wait_for_function("__tlf.S.mode==='hall'", timeout=180000, polling=50)
        await pg.evaluate(f"__tlf.focusRover({idx})")
        await pg.wait_for_function("!document.querySelector('#bubble').classList.contains('show')", timeout=5000)
        await pg.wait_for_timeout(6000); await shot("a_sleep")
        await pg.evaluate("__tlf.wakeNow()")
        await pg.wait_for_function("document.querySelector('#bubble').classList.contains('show')", timeout=180000, polling=50)
        await pg.wait_for_timeout(5000); await shot("b_awake")
        print(errs[:5])
        await b.close()
asyncio.run(main())
