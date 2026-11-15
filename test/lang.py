import asyncio, sys, json
from playwright.async_api import async_playwright
OUT="shots/"
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist","--autoplay-policy=no-user-gesture-required"])
        pg = await b.new_page(viewport={"width":1280,"height":760}); errs=[]
        pg.on("pageerror", lambda e: errs.append("pageerror:"+str(e)))
        pg.on("console", lambda m: errs.append(m.type+":"+m.text) if m.type in ("error","warning","log") and "GPU stall" not in m.text else None)
        await pg.goto("http://localhost:8777/index.html?dtmax=0.25")
        await pg.wait_for_function("window.__tlf && window.__tlf.ready", timeout=180000)
        await pg.wait_for_function("window.__tlf.surfaceReady", timeout=180000); await pg.evaluate("__tlf.goSurface()")
        await pg.wait_for_timeout(1500)
        await pg.click("#lang")   # switch during the intro
        await pg.wait_for_timeout(500)
        await pg.click("#lang")
        await pg.wait_for_timeout(500)
        await pg.click("#lang")   # now English
        await pg.wait_for_function("__tlf.S.mode==='hall'", timeout=180000, polling=50)
        print("lang", await pg.evaluate("[__tlf.S.lang, document.documentElement.dir, document.querySelector('#hint').textContent]"))
        await pg.click("#lang"); await pg.wait_for_timeout(300); await pg.click("#lang")  # mouse: ar -> en again, focus left on the button before the fix
        print("after clicks", await pg.evaluate("[__tlf.S.lang, document.activeElement.id || document.activeElement.tagName]"))
        await pg.keyboard.down("Space")
        for i in range(30):
            st = await pg.evaluate("[__tlf.S.mode, __tlf.S.charge.toFixed(2), __tlf.S.holding, __tlf.S.lang]")
            print(i, st)
            if st[0]=='firing': break
            await pg.wait_for_timeout(400)
        await pg.keyboard.up("Space")
        print("lang after space", await pg.evaluate("__tlf.S.lang"))
        await pg.wait_for_function("document.querySelector('#bubble').classList.contains('show')", timeout=120000, polling=100); await pg.wait_for_timeout(2500)
        print(await pg.evaluate("[__tlf.S.mode, __tlf.S.awake, document.querySelector('#bubble-text').textContent, document.querySelector('#bubble-kind').textContent]"))
        await pg.screenshot(path=OUT+"lang.png")
        print("errors:", errs[:20])
        await b.close()
asyncio.run(main())
