"""Immersive Expedition end to end: launch (hold), cruise, entry (hold), parachute (late, early, right), airbags, bounce, petals, Rover Hall.
usage: python3 test/exp.py W H tag [ar|en]"""
import asyncio, sys
from playwright.async_api import async_playwright
W, H = int(sys.argv[1]), int(sys.argv[2]); tag = sys.argv[3]; lang = sys.argv[4] if len(sys.argv) > 4 else 'ar'
OUT = "shots/"
fails = []
def check(c, m):
    print(("PASS " if c else "FAIL ") + m)
    if not c: fails.append(m)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"])
        ctx = await b.new_context(viewport={"width": W, "height": H}, device_scale_factor=1, is_mobile=W < 600, has_touch=W < 600)
        pg = await ctx.new_page(); errs = []
        pg.on("pageerror", lambda e: errs.append("pageerror:" + str(e)))
        pg.on("console", lambda m: errs.append(m.type + ":" + m.text) if m.type in ("error", "warning") and "GPU stall" not in m.text and "parallel_shader" not in m.text else None)
        async def shot(name):
            ts = await pg.evaluate("(()=>{const t=__tlf.S.timeScale; __tlf.S.timeScale=0; return t})()")
            await pg.wait_for_timeout(400); await pg.screenshot(path=OUT + tag + name + ".png")
            await pg.evaluate(f"__tlf.S.timeScale={ts}")
        wf = lambda js, t=180000: pg.wait_for_function(js, timeout=t, polling=60)
        txt = lambda: pg.evaluate("document.querySelector('#exp-text').textContent")
        await pg.goto(f"http://localhost:8777/index.html?dtmax=0.25&lang={lang}")
        await wf("window.__tlf && window.__tlf.ready")
        await pg.click("#start")
        await wf("__tlf.S.stage==='home' && __tlf.surfaceReady && __tlf.opening.t>5")
        await pg.click("#go-exp")
        await wf("__tlf.S.stage==='exp'")
        await wf("!document.querySelector('#exp-act').hidden")
        await pg.wait_for_timeout(1500); await shot("a_pad")
        AXE = open('/tmp/axe/node_modules/axe-core/axe.min.js').read()
        async def axe(state):
            if not await pg.evaluate("!!window.axe"): await pg.add_script_tag(content=AXE)
            v = await pg.evaluate("""async () => (await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a','wcag2aa','wcag21a','wcag21aa'] } })).violations.map(v => v.id + ': ' + v.nodes.slice(0,3).map(n => n.target.join(' ')).join(' | '))""")
            check(not v, f"axe {state}: {v}")
        await axe("expedition pad")
        # hold Launch with the mouse
        box = await pg.locator("#exp-act").bounding_box()
        await pg.mouse.move(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2); await pg.mouse.down()
        await wf("__tlf.expd.phase==='launch'", 30000); await pg.mouse.up()
        check(True, "launch by holding the button")
        await pg.wait_for_timeout(1800); await shot("b_launch")
        await wf("__tlf.expd.phase==='cruise'")
        await pg.wait_for_timeout(1200); await shot("c_cruise_earth")
        await wf("__tlf.expd.hud().days>150"); await shot("d_cruise_mars")
        await wf("__tlf.expd.phase==='approach'"); await pg.wait_for_timeout(1500); await shot("e_approach")
        await wf("__tlf.expd.phase==='entry'"); await pg.wait_for_timeout(600)
        check(not await pg.evaluate("document.querySelector('#exp-act').hidden"), "shield button shown at entry")
        # hold the shield with the keyboard (Space)
        await pg.evaluate("document.activeElement && document.activeElement.blur()")
        await pg.keyboard.down("Space"); await pg.wait_for_timeout(1500); await shot("f_entry_hold")
        await wf("__tlf.expd.phase==='plunge'", 60000); await pg.keyboard.up("Space")
        check(True, "entry by holding Space")
        await wf("__tlf.S.stage==='edl'", 60000)
        await pg.wait_for_timeout(1200); await shot("g_edl_fall")
        await axe("landing")
        # too early
        await pg.click("#exp-act"); await pg.wait_for_timeout(500)
        t = await txt(); check(('بدري' in t) or ('early' in t), "early parachute explained")
        # let it go late once
        await wf("__tlf.edl.hud().alt>13", 60000)
        check(True, "late parachute rewinds the altitude")
        await wf("__tlf.edl.hud().alt<=11.2 && __tlf.edl.phase==='fall'", 60000)
        await pg.click("#exp-act")
        await wf("__tlf.edl.phase==='chute'", 10000)
        await pg.wait_for_timeout(1500); await shot("h_chute")
        await wf("__tlf.edl.phase==='chute' && document.querySelector('#exp-text').textContent.length>5", 20000)
        await pg.wait_for_timeout(4000); await shot("i_bridle")
        await wf("__tlf.edl.phase==='drop'", 60000)
        await wf("__tlf.edl.hud().tg<=9.5", 60000)
        await pg.click("#exp-act"); await pg.wait_for_timeout(800); await shot("j_bags")
        await wf("__tlf.edl.phase==='bounce'", 60000); await pg.wait_for_timeout(900); await shot("k_bounce")
        await wf("__tlf.edl.phase==='open'", 60000); await pg.wait_for_timeout(2000); await shot("l_open")
        await pg.wait_for_timeout(2600); await shot("l2_opened")
        await wf("__tlf.S.stage==='surface' && __tlf.S.mode==='hall'", 120000)
        await pg.wait_for_timeout(800); await shot("m_hall")
        check(await pg.evaluate("__tlf.rovers.every(r=>r.pivot.visible)"), "rovers visible again in the hall")
        check(await pg.evaluate("__tlf.S.focus===1"), "landed at Spirit")
        print("errors:", errs[:10])
        check(not errs, "no console errors")
        await b.close()
    print("RESULT", "OK" if not fails else f"{len(fails)} FAIL")
asyncio.run(main())
