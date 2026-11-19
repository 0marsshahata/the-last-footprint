"""Accessibility pass: axe-core (WCAG 2.1 A/AA rules) in each UI state + a keyboard-only walk.
usage: python3 test/a11y.py [ar|en]"""
import asyncio, sys, json
from playwright.async_api import async_playwright
lang = sys.argv[1] if len(sys.argv) > 1 else 'ar'
AXE = open('/tmp/axe/node_modules/axe-core/axe.min.js').read()
OUT = "shots/"
report = {}

async def axe(pg, state):
    await pg.add_script_tag(content=AXE) if not await pg.evaluate("!!window.axe") else None
    res = await pg.evaluate("""async () => {
      const r = await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] }, resultTypes: ['violations'] });
      return r.violations.map(v => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.slice(0, 4).map(n => n.target.join(' ') + ' :: ' + (n.failureSummary || '').split('\\n').slice(1, 2).join('')) }));
    }""")
    report[state] = res
    print(f"[{state}] {len(res)} violation types")
    for v in res:
        print(f"   - {v['impact']}: {v['id']} — {v['help']}")
        for n in v['nodes']: print(f"       {n}")

async def focus_desc(pg):
    return await pg.evaluate("""() => { const a = document.activeElement; if (!a || a === document.body) return 'BODY';
      const r = a.getBoundingClientRect(); const cs = getComputedStyle(a);
      return `${a.tagName.toLowerCase()}${a.id ? '#' + a.id : ''}${a.className && typeof a.className === 'string' ? '.' + a.className.split(' ').join('.') : ''} "${(a.getAttribute('aria-label') || a.textContent || '').trim().slice(0, 28)}" ${Math.round(r.width)}x${Math.round(r.height)} outline=${cs.outlineStyle}/${cs.outlineWidth} vis=${r.width > 0 && cs.visibility !== 'hidden'}`; }""")

async def tab_walk(pg, n, label):
    print(f"-- keyboard walk: {label}")
    seen = []
    for _ in range(n):
        await pg.keyboard.press("Tab"); await pg.wait_for_timeout(60)
        d = await focus_desc(pg); seen.append(d); print("   ", d)
    return seen

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"])
        ctx = await b.new_context(viewport={"width": 1280, "height": 800}, device_scale_factor=1)
        pg = await ctx.new_page(); errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto(f"http://localhost:8777/index.html?dtmax=0.25&lang={lang}")
        await pg.wait_for_function("window.__tlf && window.__tlf.ready", timeout=180000)
        await axe(pg, "signal")
        # keyboard: Tab to the signal button, Enter
        await pg.keyboard.press("Tab"); print("first tab stop:", await focus_desc(pg))
        await pg.keyboard.press("Enter")
        await pg.wait_for_function("__tlf.S.stage==='home'", timeout=180000, polling=50)
        await pg.wait_for_function("__tlf.opening.t >= 6 && __tlf.surfaceReady", timeout=180000, polling=50)
        await pg.wait_for_timeout(800)
        await axe(pg, "home")
        await tab_walk(pg, 5, "home")
        # About via keyboard
        await pg.focus("#about-btn"); await pg.keyboard.press("Enter"); await pg.wait_for_timeout(500)
        await axe(pg, "about")
        print("about focus:", await focus_desc(pg))
        await tab_walk(pg, 7, "about (should cycle inside the dialog)")
        await pg.focus("#about [aria-selected=true]"); await pg.keyboard.press("ArrowLeft" if lang == 'ar' else "ArrowRight"); await pg.wait_for_timeout(150)
        print("after arrow:", await pg.evaluate("document.querySelector('#about [aria-selected=true]').dataset.tab"), "| focus:", await focus_desc(pg))
        await pg.keyboard.press("Escape"); await pg.wait_for_timeout(500)
        print("after Esc focus:", await focus_desc(pg))
        # pick + land with keyboard
        await axe(pg, "atlas")
        await pg.focus("#atlas .atlas-card[data-world=moon]"); await pg.keyboard.press("Enter"); await pg.wait_for_timeout(500)
        await axe(pg, "atlas moon list")
        print("atlas dialog focus:", await focus_desc(pg))
        await pg.keyboard.press("Escape"); await pg.wait_for_timeout(300)
        print("after atlas Esc:", await focus_desc(pg))
        await pg.focus("#atlas .atlas-card.ready"); await pg.keyboard.press("Enter"); await pg.wait_for_timeout(500)
        print("after Mars:", await focus_desc(pg))
        await pg.focus("#go-warp"); await pg.keyboard.press("Enter"); await pg.wait_for_timeout(800)
        await axe(pg, "pre (before we start)")
        print("pre focus:", await focus_desc(pg))
        await pg.keyboard.press("Space"); await pg.wait_for_timeout(200)   # tick consent
        await axe(pg, "pre consent + ages")
        await tab_walk(pg, 4, "pre")
        await pg.focus("#pre [data-act='start']"); await pg.keyboard.press("Enter"); await pg.wait_for_timeout(300)
        print("pre error:", await pg.evaluate("document.querySelector('#pre-err').textContent"), "| focus:", await focus_desc(pg))
        await pg.keyboard.press("ArrowRight"); await pg.wait_for_timeout(100)
        await pg.focus("#pre [data-act='start']"); await pg.keyboard.press("Enter"); await pg.wait_for_timeout(300)
        await axe(pg, "pre question")
        for i in range(3): await pg.keyboard.press("Enter"); await pg.wait_for_timeout(250)
        await axe(pg, "pre done")
        await pg.keyboard.press("Enter"); await pg.wait_for_timeout(1500)
        await axe(pg, "pick")
        await pg.focus("#guide-chips [data-site='spirit']"); await pg.keyboard.press("Enter"); await pg.wait_for_timeout(600)
        await pg.focus("#guide-land"); await pg.keyboard.press("Enter")
        await pg.wait_for_function("__tlf.S.stage==='surface' && __tlf.S.mode==='hall'", timeout=180000, polling=50)
        await pg.wait_for_timeout(600)
        # hold Space to wake (body focused)
        await pg.evaluate("document.activeElement && document.activeElement.blur()")
        await pg.keyboard.down("Space"); await pg.wait_for_function("__tlf.S.mode==='firing'", timeout=20000, polling=50); await pg.keyboard.up("Space")
        await pg.wait_for_function("__tlf.S.mode==='hall' && __tlf.S.awake[1]", timeout=60000, polling=50)
        await pg.wait_for_timeout(1200)
        await axe(pg, "hall-awake")
        await tab_walk(pg, 9, "hall")
        await pg.focus("#explore-btn"); await pg.keyboard.press("Enter"); await pg.wait_for_timeout(700)
        await axe(pg, "explore")
        print("explore focus:", await focus_desc(pg))
        await tab_walk(pg, 4, "explore")
        for t in ["finds", "play", "last"]:
            await pg.focus("#ext-" + t); await pg.keyboard.press("Enter"); await pg.wait_for_timeout(500)
            await axe(pg, "explore tab " + t)
        await pg.focus("#exp-last .src-btn"); await pg.keyboard.press("Enter"); await pg.wait_for_timeout(300)
        await axe(pg, "source popover")
        print("popover focus:", await focus_desc(pg))
        await pg.keyboard.press("Escape"); await pg.wait_for_timeout(300)
        print("after popover Esc:", await focus_desc(pg), "| sheet open:", await pg.evaluate("!document.querySelector('#explore').hidden"))
        await pg.focus("#ext-play"); await pg.keyboard.press("Enter"); await pg.wait_for_timeout(300)
        await pg.focus("#exp-play [data-act='game']"); await pg.keyboard.press("Enter"); await pg.wait_for_timeout(600)
        await axe(pg, "game")
        await tab_walk(pg, 5, "game (should cycle inside)")
        await pg.keyboard.press("Escape"); await pg.wait_for_timeout(500)
        print("after game Esc:", await focus_desc(pg), "| sheet open:", await pg.evaluate("!document.querySelector('#explore').hidden"))
        await pg.keyboard.press("Escape"); await pg.wait_for_timeout(500)
        print("after sheet Esc:", await focus_desc(pg))
        # ending
        await pg.evaluate("__tlf.S.awake=[true,true,true]; __tlf.focusRover(0)"); await pg.wait_for_timeout(2500)
        await pg.evaluate("__tlf.goEnding()")
        await pg.wait_for_function("document.querySelector('#legacy').classList.contains('open')", timeout=120000, polling=100)
        await pg.wait_for_timeout(500)
        await axe(pg, "legacy chain")
        await tab_walk(pg, 9, "legacy chain")
        for i in range(5): await pg.click("#legacy [data-act='next']"); await pg.wait_for_timeout(200)
        await pg.click("#legacy [data-act='quiz']")
        await pg.wait_for_function("document.querySelector('#fquiz').classList.contains('open')", timeout=10000, polling=50)
        await pg.wait_for_timeout(400)
        await axe(pg, "final quiz")
        await pg.keyboard.press("Enter"); await pg.wait_for_timeout(300)
        await axe(pg, "final quiz answered")
        print("quiz focus after answer:", await focus_desc(pg))
        for i in range(5):
            if i: await pg.click("#fquiz .g-opts button >> nth=1"); await pg.wait_for_timeout(200)
            await pg.click("#fquiz [data-act='nextq']"); await pg.wait_for_timeout(250)
        await axe(pg, "quiz score")
        print("score focus:", await focus_desc(pg))
        await pg.keyboard.press("Enter")
        await pg.wait_for_function("!document.querySelector('#end-form').hidden", timeout=120000, polling=100)
        await pg.wait_for_timeout(500)
        await axe(pg, "ending")
        print("ending focus:", await focus_desc(pg))
        await pg.keyboard.press("Enter"); await pg.wait_for_timeout(300)
        print("empty submit error:", await pg.evaluate("document.querySelector('#end-err').textContent"), await pg.evaluate("document.querySelector('#end-name').getAttribute('aria-invalid')"))
        await pg.keyboard.type("Layla"); await pg.keyboard.press("Enter")
        await pg.wait_for_function("!document.querySelector('#cert').hidden", timeout=30000, polling=100)
        await pg.wait_for_timeout(600)
        await axe(pg, "certificate")
        await tab_walk(pg, 4, "certificate (cycle)")
        await pg.screenshot(path=OUT + f"a11y_cert_{lang}.png")
        print("page errors:", errs)
        await b.close()
    json.dump(report, open(f"/tmp/a11y_{lang}.json", "w"), ensure_ascii=False, indent=1)
asyncio.run(main())
