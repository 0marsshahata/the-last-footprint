import asyncio, sys, json
from playwright.async_api import async_playwright
W,H = int(sys.argv[1]), int(sys.argv[2]); tag = sys.argv[3]; q = sys.argv[4] if len(sys.argv)>4 else '?dtmax=0.1'
OUT="shots/"
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist","--autoplay-policy=no-user-gesture-required"])
        ctx = await b.new_context(viewport={"width":W,"height":H}, device_scale_factor=1, is_mobile=W<600, has_touch=W<600)
        pg = await ctx.new_page(); errs=[]
        pg.on("pageerror", lambda e: errs.append("pageerror:"+str(e)))
        pg.on("console", lambda m: errs.append(m.type+":"+m.text) if m.type in("error","warning") and "GPU stall" not in m.text and "parallel_shader" not in m.text else None)
        pg.on("response", lambda r: errs.append("HTTP%d:%s"%(r.status,r.url)) if r.status>=400 else None)
        async def shot(name):
            ts = await pg.evaluate("(()=>{const t=__tlf.S.timeScale; __tlf.S.timeScale=0; return t})()")
            await pg.wait_for_timeout(500); await pg.screenshot(path=OUT+tag+name+".png")
            await pg.evaluate(f"__tlf.S.timeScale={ts}")
        async def until_t(t):  # opening timeline time
            await pg.wait_for_function(f"__tlf.opening.t >= {t}", timeout=180000, polling=30)
        await pg.goto(f"http://localhost:8777/index.html{q}")
        await pg.wait_for_function("window.__tlf && window.__tlf.ready", timeout=180000)
        await pg.wait_for_timeout(800); await pg.screenshot(path=OUT+tag+"a_signal.png")
        await pg.click("#start")
        await until_t(1.2); await shot("b_t1")
        await until_t(2.6); await shot("c_t26")
        await until_t(3.6); await shot("d_t36")
        await pg.wait_for_function("__tlf.S.stage==='home'", timeout=180000, polling=50)
        await until_t(6.0); await shot("e_home")
        await pg.click("#lang"); await pg.wait_for_timeout(1500); await shot("f_home_en")
        await pg.click("#lang")
        await pg.wait_for_function("window.__tlf.surfaceReady", timeout=180000)
        await pg.click("#atlas .atlas-card.ready"); await pg.wait_for_timeout(400); await pg.click("#go-warp"); await pg.wait_for_timeout(800); await pg.click("#guide-chips button[data-site='spirit']"); await pg.wait_for_timeout(1500); await pg.click("#guide-land")
        await pg.wait_for_function("__tlf.S.stage==='warp'", timeout=60000)
        await pg.evaluate("__tlf.S.timeScale=0.5")
        await pg.wait_for_timeout(3000); await shot("g_warp1")
        await pg.wait_for_timeout(3000); await shot("h_warp2")
        await pg.evaluate("__tlf.S.timeScale=1")
        await pg.wait_for_function("__tlf.S.stage==='surface'", timeout=180000, polling=50)
        await pg.wait_for_timeout(1500); await shot("i_descent")
        await pg.wait_for_function("__tlf.S.mode==='hall'", timeout=180000, polling=50)
        await pg.wait_for_timeout(800); await shot("j_hall")
        await pg.click("#home-btn"); await pg.wait_for_function("__tlf.S.stage==='home'", timeout=60000, polling=50)
        await pg.wait_for_timeout(2500); await shot("k_back_home")
        print("errors:", errs[:12])
        await b.close()
asyncio.run(main())
