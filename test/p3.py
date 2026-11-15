import asyncio, sys, json
from playwright.async_api import async_playwright
W,H = int(sys.argv[1]), int(sys.argv[2]); tag = sys.argv[3]; lang = sys.argv[4] if len(sys.argv)>4 else 'ar'
OUT="shots/"
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
        ctx = await b.new_context(viewport={"width":W,"height":H}, device_scale_factor=1, is_mobile=W<600, has_touch=W<600)
        pg = await ctx.new_page(); errs=[]
        pg.on("pageerror", lambda e: errs.append("pageerror:"+str(e)))
        pg.on("console", lambda m: errs.append(m.type+":"+m.text) if m.type in("error","warning") and "GPU stall" not in m.text and "parallel_shader" not in m.text else None)
        async def shot(name):
            ts = await pg.evaluate("(()=>{const t=__tlf.S.timeScale; __tlf.S.timeScale=0; return t})()")
            await pg.wait_for_timeout(500); await pg.screenshot(path=OUT+tag+name+".png")
            await pg.evaluate(f"__tlf.S.timeScale={ts}")
        if lang=='en': await pg.add_init_script("localStorage.setItem('tlf-lang','en')")
        await pg.goto("http://localhost:8777/index.html?dtmax=0.25")
        await pg.wait_for_function("window.__tlf && window.__tlf.ready", timeout=180000)
        await pg.click("#start")
        await pg.wait_for_function("__tlf.S.stage==='home'", timeout=180000, polling=50)
        await pg.wait_for_function("__tlf.opening.t >= 5.5", timeout=180000, polling=50)
        await pg.click("#go-warp")
        await pg.wait_for_function("document.querySelector('#guide-text').textContent.length > 20", timeout=180000, polling=50)
        await pg.wait_for_timeout(2500); await shot("a_hello")
        await pg.wait_for_function("document.querySelector('#guide-text').textContent.length > 40 && !document.querySelector('#guide-text').textContent.includes('سول') && !document.querySelector('#guide-text').textContent.includes('SOL')", timeout=180000, polling=100)
        await pg.wait_for_timeout(2500); await shot("b_choose")
        # drag the globe
        await pg.mouse.move(W*0.5, H*0.4); await pg.mouse.down(); await pg.mouse.move(W*0.5+160, H*0.4+20, steps=8); await pg.mouse.up()
        await pg.wait_for_timeout(1500); await shot("c_dragged")
        await pg.click("#guide-chips button[data-site='opportunity']")
        await pg.wait_for_timeout(4000); await shot("d_opp")
        await pg.click("#guide-chips button[data-site='spirit']")
        await pg.wait_for_timeout(5000); await shot("e_spirit")
        await pg.wait_for_function("window.__tlf.surfaceReady", timeout=180000)
        await pg.click("#guide-land")
        await pg.wait_for_function("__tlf.S.stage==='surface'", timeout=180000, polling=50)
        await pg.wait_for_function("__tlf.S.mode==='hall'", timeout=180000, polling=50)
        await pg.wait_for_timeout(1000); await shot("f_hall")
        print("focus", await pg.evaluate("__tlf.S.focus"), "errors:", errs[:10])
        await b.close()
asyncio.run(main())
