# Goes home -> pick -> land -> hall -> home ten times, switching language, and watches GPU/JS memory.
import asyncio, json
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--enable-precise-memory-info"])
        pg = await b.new_page(viewport={"width":1024,"height":640}); errs=[]
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.on("console", lambda m: errs.append(m.text) if m.type=="error" else None)
        await pg.goto("http://localhost:8777/index.html?dtmax=0.3")
        await pg.wait_for_function("window.__tlf && window.__tlf.ready && window.__tlf.surfaceReady", timeout=240000)
        await pg.evaluate("__tlf.S.timeScale=4")
        await pg.click("#start")
        await pg.wait_for_function("__tlf.S.stage==='home'", timeout=180000, polling=50)
        mem = "({g: __tlf.renderer.info.memory.geometries, t: __tlf.renderer.info.memory.textures, p: __tlf.renderer.info.programs.length, heap: Math.round(performance.memory.usedJSHeapSize/1e6)})"
        print("start", await pg.evaluate(mem))
        sites=['sojourner','spirit','opportunity']
        for i in range(10):
            await pg.click("#go-warp")
            await pg.wait_for_function("__tlf.S.stage==='pick'", timeout=60000, polling=30)
            await pg.click(f"#guide-chips button[data-site='{sites[i%3]}']")
            await pg.click("#guide-land")
            await pg.wait_for_function("__tlf.S.mode==='hall'", timeout=180000, polling=50)
            if i % 2 == 0: await pg.click("#lang")
            await pg.click("#home-btn")
            await pg.wait_for_function("__tlf.S.stage==='home'", timeout=60000, polling=30)
            await pg.wait_for_timeout(300)
            print(i, sites[i%3], await pg.evaluate(mem))
        print("errors", errs[:5])
        await b.close()
asyncio.run(main())
