"""New features: "before we start" questions + opt-in data, explore tabs, Last footprint, Source popovers, before/after on the quiz.
usage: python3 test/p5.py W H tag [ar|en]"""
import asyncio, sys, json
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
        ctx = await b.new_context(viewport={"width": W, "height": H}, device_scale_factor=1, is_mobile=W < 600, has_touch=W < 600)
        pg = await ctx.new_page(); errs = []; sent = []
        pg.on("pageerror", lambda e: errs.append("pageerror:" + str(e)))
        pg.on("console", lambda m: errs.append(m.type + ":" + m.text) if m.type == "error" else None)
        async def grab(route):
            sent.append(json.loads(route.request.post_data)); await route.fulfill(status=200, body="ok")
        await pg.route("https://sheet.test/**", grab)
        await pg.add_init_script(f"localStorage.setItem('tlf-lang','{lang}'); window.__tlfTestEndpoint='https://sheet.test/exec';")
        await pg.goto("http://localhost:8777/index.html?dtmax=0.25&test")
        await pg.wait_for_function("window.__tlf && window.__tlf.ready", timeout=180000)
        await pg.click("#start")
        await pg.wait_for_function("__tlf.S.stage==='home'", timeout=180000, polling=50)
        await pg.wait_for_function("window.__tlf.surfaceReady", timeout=180000)
        await pg.wait_for_timeout(1500)

        # ---- before we start ----
        await pg.click("#atlas .atlas-card.ready"); await pg.wait_for_timeout(400); await pg.click("#go-warp")
        await pg.wait_for_timeout(500)
        check(await pg.evaluate("!document.querySelector('#pre').hidden"), "pre: opens after choosing a path")
        check(await pg.evaluate("__tlf.S.stage==='home'"), "pre: path waits for the questions")
        check(await pg.evaluate("document.querySelector('#pre .ages').hidden"), "pre: age hidden until consent")
        await pg.screenshot(path=OUT + tag + "p5a_pre.png")
        await pg.click("#pre-ok"); await pg.wait_for_timeout(150)
        check(await pg.evaluate("!document.querySelector('#pre .ages').hidden"), "pre: age shows after consent tick")
        await pg.click("#pre [data-act='start']"); await pg.wait_for_timeout(150)
        err = await pg.evaluate("document.querySelector('#pre-err').textContent")
        check(len(err) > 5, "pre: asks for age when consent is ticked")
        await pg.click("#pre .age >> nth=2"); await pg.wait_for_timeout(100)
        await pg.screenshot(path=OUT + tag + "p5b_consent.png")
        await pg.click("#pre [data-act='start']"); await pg.wait_for_timeout(200)
        for i in range(3):
            check(await pg.evaluate("document.querySelectorAll('#pre .g-opts button').length") >= 3, f"pre: question {i+1} shown")
            if i == 0: await pg.screenshot(path=OUT + tag + "p5c_q.png")
            await pg.click("#pre .g-opts button >> nth=0"); await pg.wait_for_timeout(200)
        check(await pg.evaluate("!!document.querySelector('#pre [data-act=go]')"), "pre: done screen")
        await pg.wait_for_timeout(400)
        check(len(sent) == 1 and sent[0].get("age") == "12–13" and sent[0].get("test") is True and len(sent[0].get("pre") or []) == 3 and "name" not in sent[0], f"pre: one anonymous message sent {sent[:1]}")
        check(set(sent[0].keys()) <= {"session","lang","age","path","pre","post","minutes","test","version"} if sent else False, "pre: only the agreed fields")
        await pg.click("#pre [data-act=go]"); await pg.wait_for_timeout(600)
        check(await pg.evaluate("__tlf.S.stage==='pick' && document.querySelector('#pre').hidden"), "pre: then continues to the path")
        # second time: no dialog
        await pg.evaluate("__tlf.backHome()"); await pg.wait_for_timeout(1200)
        await pg.evaluate("document.querySelector('#go-warp').click()"); await pg.wait_for_timeout(500)
        check(await pg.evaluate("document.querySelector('#pre').hidden && __tlf.S.stage==='pick'"), "pre: shown only once")

        # ---- explore tabs + sources + last footprint ----
        await pg.evaluate("__tlf.S.focus=1; __tlf.goSurface()")
        await pg.wait_for_function("__tlf.S.mode==='hall'", timeout=180000, polling=50)
        await pg.evaluate("__tlf.wakeNow()")
        await pg.wait_for_function("__tlf.S.mode==='hall' && __tlf.S.awake[1]", timeout=60000, polling=50)
        await pg.wait_for_timeout(2500)
        # bubble Source on a Fact line
        for _ in range(8):
            if await pg.evaluate("document.querySelector('#bubble-kind').classList.contains('fact')"): break
            await pg.click("#bubble-next"); await pg.wait_for_timeout(300)
        check(await pg.evaluate("!!document.querySelector('#bubble-src .src-btn')"), "bubble: Source button on a Fact line")
        await pg.click("#bubble-src .src-btn"); await pg.wait_for_timeout(300)
        check(await pg.evaluate("!document.querySelector('#srcpop').hidden && document.querySelectorAll('#srcpop a').length>=1"), "source popover opens with links")
        await pg.screenshot(path=OUT + tag + "p5d_src.png")
        await pg.keyboard.press("Escape"); await pg.wait_for_timeout(200)
        check(await pg.evaluate("document.querySelector('#srcpop').hidden && document.activeElement.classList.contains('src-btn')"), "source popover: Esc closes, focus back")
        await pg.click("#explore-btn"); await pg.wait_for_timeout(1500)
        check(await pg.evaluate("document.querySelectorAll('#explore [role=tab]').length") == 4, "explore: 4 tabs")
        check(await pg.evaluate("!document.querySelector('#exp-life').hidden && document.querySelector('#exp-last').hidden"), "explore: starts on My life")
        await pg.click("#ext-last"); await pg.wait_for_timeout(500)
        check(await pg.evaluate("!document.querySelector('#exp-last').hidden && document.querySelector('#ext-last').getAttribute('aria-selected')==='true'"), "explore: Last footprint tab")
        imgs = await pg.evaluate("[...document.querySelectorAll('#exp-last img')].map(i=>[i.complete, i.naturalWidth, i.alt])")
        check(len(imgs) >= 1 and all(i[1] > 0 and i[2] for i in imgs), f"last: images load with alt {imgs}")
        check(await pg.evaluate("!!document.querySelector('#exp-last .pin')"), "last: Spirit marked on the orbital image")
        check(await pg.evaluate("document.querySelectorAll('#exp-last .src-btn').length") == 2, "last: a Source on both parts")
        await pg.screenshot(path=OUT + tag + "p5e_last.png")
        await pg.focus("#ext-last"); await pg.keyboard.press("ArrowRight" if lang == 'en' else "ArrowLeft"); await pg.wait_for_timeout(200)
        check(await pg.evaluate("document.activeElement.id==='ext-play' && !document.querySelector('#exp-play').hidden"), "explore: arrow keys move between tabs")
        check(await pg.evaluate("!!document.querySelector('#exp-play [data-act=game]')"), "play: Sol-18 game in Play")
        await pg.click("#ext-finds"); await pg.wait_for_timeout(300)
        check(await pg.evaluate("document.querySelectorAll('#exp-finds .src-btn').length") >= 2, "finds: cards have Source")
        await pg.screenshot(path=OUT + tag + "p5f_finds.png")
        await pg.keyboard.press("Escape"); await pg.wait_for_timeout(500)

        # ---- final quiz: post + before/after ----
        await pg.evaluate("__tlf.finale.openQuiz()"); await pg.wait_for_timeout(400)
        for i in range(5):
            await pg.click("#fquiz .g-opts button >> nth=0"); await pg.wait_for_timeout(150)
            await pg.click("#fquiz [data-act=nextq]"); await pg.wait_for_timeout(200)
        cmp = await pg.evaluate("document.querySelector('.fq-cmp')?.textContent || ''")
        check(len(cmp) > 10, f"quiz: before/after line '{cmp}'")
        await pg.screenshot(path=OUT + tag + "p5g_score.png")
        await pg.wait_for_timeout(400)
        posts = [m for m in sent if m.get("post")]
        check(len(posts) == 1 and len(posts[0]["post"]) == 5 and posts[0]["session"] == sent[0]["session"], "quiz: post answers sent once, same session")
        check(not [e for e in errs if "sheet.test" not in e], f"no page errors {errs[:3]}")
        await b.close()
    print("FAILS:", len(fails))
    sys.exit(1 if fails else 0)

asyncio.run(main())
