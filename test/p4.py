"""Priority-1 features end to end: explore sheet, Sol-18 game, quiz, About, all three awake -> ending -> certificate -> replay.
usage: python3 test/p4.py W H tag [ar|en]"""
import asyncio, sys
from playwright.async_api import async_playwright
W, H = int(sys.argv[1]), int(sys.argv[2]); tag = sys.argv[3]; lang = sys.argv[4] if len(sys.argv) > 4 else 'ar'
OUT = "shots/"
fails = []
def check(cond, msg):
    print(("PASS " if cond else "FAIL ") + msg)
    if not cond: fails.append(msg)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"])
        ctx = await b.new_context(viewport={"width": W, "height": H}, device_scale_factor=1, is_mobile=W < 600, has_touch=W < 600, accept_downloads=True)
        pg = await ctx.new_page(); errs = []
        pg.on("pageerror", lambda e: errs.append("pageerror:" + str(e)))
        pg.on("console", lambda m: errs.append(m.type + ":" + m.text) if m.type in ("error", "warning") and "GPU stall" not in m.text and "parallel_shader" not in m.text else None)
        async def shot(name, freeze=True):
            if freeze:
                ts = await pg.evaluate("(()=>{const t=__tlf.S.timeScale; __tlf.S.timeScale=0; return t})()")
            await pg.wait_for_timeout(450); await pg.screenshot(path=OUT + tag + name + ".png")
            if freeze: await pg.evaluate(f"__tlf.S.timeScale={ts}")
        if lang == 'en': await pg.add_init_script("localStorage.setItem('tlf-lang','en')")
        await pg.goto("http://localhost:8777/index.html?dtmax=0.25")
        await pg.wait_for_function("window.__tlf && window.__tlf.ready", timeout=180000)
        await pg.click("#start")
        await pg.wait_for_function("__tlf.S.stage==='home'", timeout=180000, polling=50)
        await pg.wait_for_function("window.__tlf.surfaceReady", timeout=180000)
        check(await pg.evaluate("document.querySelectorAll('#journey li.done').length") == 1, "journey: signal step done")
        # about dialog from home
        await pg.click("#about-btn")
        await pg.wait_for_timeout(500)
        check(await pg.evaluate("!document.querySelector('#about').hidden"), "about opens")
        check(await pg.evaluate("document.activeElement.classList.contains('ab-close')"), "about: focus on close")
        await shot("a_about", False)
        await pg.click("#about [data-tab='sources']"); await pg.wait_for_timeout(250)
        n_src = await pg.evaluate("document.querySelectorAll('#about .src a').length")
        check(n_src >= 8, f"about: {n_src} sources listed")
        await shot("b_sources", False)
        await pg.click("#about [data-tab='ai']"); await pg.wait_for_timeout(250); await shot("c_ai", False)
        await pg.keyboard.press("Escape")
        try: await pg.wait_for_function("document.querySelector('#about').hidden", timeout=4000, polling=50)
        except Exception: pass
        check(await pg.evaluate("document.querySelector('#about').hidden && __tlf.S.stage==='home'"), "about: Esc closes, stays home")
        print("   about state:", await pg.evaluate("[document.querySelector('#about').hidden, document.querySelector('#about').className, __tlf.S.stage]"))

        # land at Spirit
        await pg.evaluate("__tlf.S.focus=1; __tlf.goSurface()")
        await pg.wait_for_function("__tlf.S.mode==='hall'", timeout=180000, polling=50)
        check(await pg.evaluate("document.querySelector('#explore-btn').hidden"), "explore hidden while asleep")
        await pg.evaluate("__tlf.wakeNow()")
        await pg.wait_for_function("__tlf.S.mode==='hall' && __tlf.S.awake[1]", timeout=60000, polling=50)
        await pg.wait_for_timeout(600)
        check(await pg.evaluate("!document.querySelector('#explore-btn').hidden"), "explore shown once awake")
        check(await pg.evaluate("document.querySelector('#end-cta').hidden"), "CTA hidden with one rover awake")
        await pg.click("#explore-btn"); await pg.wait_for_timeout(2600)
        check(await pg.evaluate("document.body.classList.contains('sheet-open') && !document.querySelector('#explore').hidden"), "explore sheet opens")
        check(await pg.evaluate("document.querySelectorAll('#explore .tl li').length") == 8, "spirit timeline has 8 events")
        await shot("d_explore_spirit")
        await pg.evaluate("document.querySelector('#explore-body').scrollTop = 1e5"); await pg.wait_for_timeout(300)
        await shot("e_explore_spirit_bottom")
        # play the Sol-18 game: wrong answer first, then right ones
        await pg.click("#explore [data-act='game'] >> nth=0"); await pg.wait_for_timeout(500)
        check(await pg.evaluate("!document.querySelector('#game').hidden"), "game opens")
        await pg.click("#game-body [data-o='1']"); await pg.wait_for_timeout(300)
        check(len(await pg.evaluate("document.querySelector('.g-fb').textContent")) > 10, "game: wrong answer explains")
        await shot("f_game_wrong", False)
        for _ in range(3):
            await pg.click("#game-body [data-o='0']"); await pg.wait_for_timeout(3000)
        check(await pg.evaluate("!!document.querySelector('.g-done')"), "game: finished")
        check(await pg.evaluate("__tlf.S.badges.has('sol18')"), "game: badge earned")
        await shot("g_game_done", False)
        await pg.click("#game-body [data-act='close']"); await pg.wait_for_timeout(450)
        await pg.click("#explore .ex-close"); await pg.wait_for_timeout(500)
        check(await pg.evaluate("document.querySelector('#explore').hidden && !document.body.classList.contains('sheet-open')"), "explore closes")

        # Opportunity: quiz
        await pg.evaluate("__tlf.focusRover(2)"); await pg.wait_for_timeout(2400)
        await pg.evaluate("__tlf.wakeNow()")
        await pg.wait_for_function("__tlf.S.mode==='hall' && __tlf.S.awake[2]", timeout=60000, polling=50)
        await pg.wait_for_timeout(500)
        await pg.click("#explore-btn"); await pg.wait_for_timeout(700)
        await pg.click("#explore .q[data-q='0'] [data-ans='0']"); await pg.wait_for_timeout(200)
        check(await pg.evaluate("document.querySelector('#explore .q[data-q=\"0\"] .right') !== null"), "quiz: myth answered right")
        await pg.evaluate("document.querySelector('#explore .quiz').scrollIntoView()"); await pg.wait_for_timeout(300)
        await shot("h_quiz")
        await pg.click("#explore [data-act='compare']"); await pg.wait_for_timeout(500)
        check(await pg.evaluate("document.querySelectorAll('#compare tbody tr').length") == 10, "compare: 10 rows")
        check(await pg.evaluate("document.querySelectorAll('#compare td.me').length") == 10, "compare: current rover highlighted")
        await shot("h2_compare", False)
        await pg.keyboard.press("Escape"); await pg.wait_for_timeout(450)
        check(await pg.evaluate("document.querySelector('#compare').hidden && !document.querySelector('#explore').hidden"), "compare: Esc closes only the comparison")
        await pg.keyboard.press("Escape")
        try: await pg.wait_for_function("document.querySelector('#explore').hidden", timeout=4000, polling=50)
        except Exception: pass
        check(await pg.evaluate("document.querySelector('#explore').hidden"), "explore: Esc closes")

        # Sojourner, then all three awake -> CTA
        await pg.evaluate("__tlf.focusRover(0)"); await pg.wait_for_timeout(2400)
        await pg.evaluate("__tlf.wakeNow()")
        await pg.wait_for_function("__tlf.S.mode==='hall' && __tlf.S.awake[0]", timeout=60000, polling=50)
        await pg.wait_for_timeout(900)
        check(await pg.evaluate("!document.querySelector('#end-cta').hidden"), "CTA shown when all three awake")
        check(await pg.evaluate("document.querySelectorAll('#journey li.done').length") == 4, "journey: 4 steps done")
        await pg.click("#explore-btn"); await pg.wait_for_timeout(2400)
        await shot("i_explore_soj")
        await pg.click("#explore .ex-close"); await pg.wait_for_timeout(500)
        await shot("j_cta")

        # ending
        await pg.click("#end-cta")
        await pg.wait_for_function("__tlf.S.stage==='ending'", timeout=30000, polling=50)
        await pg.wait_for_timeout(5000); await shot("k_ending_trail")
        await pg.wait_for_function("!document.querySelector('#end-form').hidden", timeout=120000, polling=100)
        check(await pg.evaluate("document.querySelectorAll('.site-label.extra.show').length") >= 1, "ending: active rovers labelled")
        await pg.wait_for_timeout(600); await shot("l_ending_form")
        await pg.fill("#end-name", "Omar Shahata" if lang == 'en' else "عمر شحاتة")
        await pg.click("#end-go")
        await pg.wait_for_function("!document.querySelector('#cert').hidden && document.querySelector('#cert-img').complete && document.querySelector('#cert-img').naturalWidth===1600", timeout=30000, polling=100)
        await pg.wait_for_timeout(500)
        check(await pg.evaluate("document.querySelectorAll('#journey li.done').length") == 5, "journey: all 5 done")
        href = await pg.evaluate("document.querySelector('#cert-dl').href")
        check(href.startswith("blob:"), "certificate download link is a blob")
        await shot("m_cert")
        async with pg.expect_download() as dl:
            await pg.click("#cert-dl")
        d = await dl.value
        await d.save_as(OUT + tag + "certificate.png")
        print("download name:", d.suggested_filename)
        # replay
        await pg.click("#end-replay")
        await pg.wait_for_function("__tlf.S.stage==='home'", timeout=30000, polling=50)
        await pg.wait_for_timeout(1500)
        check(await pg.evaluate("__tlf.S.awake.every(a=>!a) && !__tlf.S.done && __tlf.rovers.every(r=>r.u.uSleep.value===1)"), "replay resets the rovers")
        check(await pg.evaluate("document.querySelectorAll('#journey li.done').length") == 1, "replay resets the journey")
        await shot("n_replay_home")
        print("errors:", errs[:10])
        check(not errs, "no console errors")
        await b.close()
    print("RESULT", "OK" if not fails else f"{len(fails)} FAIL")
asyncio.run(main())
