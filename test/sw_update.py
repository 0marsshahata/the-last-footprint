"""After an update, the very first reload already runs the new code (never new page + old cached code)."""
import asyncio, re, shutil
from playwright.async_api import async_playwright
D = "/home/claude/p1/dist/site/"
async def main():
    shutil.copy(D + "index.html", "/tmp/idx.bak"); shutil.copy(D + "app.js", "/tmp/app.bak"); shutil.copy(D + "sw.js", "/tmp/sw.bak")
    try:
        async with async_playwright() as p:
            b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"])
            ctx = await b.new_context(); pg = await ctx.new_page()
            await pg.goto("http://localhost:8777/index.html?sw&dtmax=0.25")
            await pg.wait_for_function("window.__tlf && __tlf.surfaceReady", timeout=180000)
            await pg.wait_for_function("!!navigator.serviceWorker.controller", timeout=60000)
            # publish a "new version"
            s = open(D + "index.html").read(); s = re.sub(r'app\.js\?v=[0-9a-f]+', 'app.js?v=feedbeef0001', s); open(D + "index.html", "w").write(s)
            open(D + "app.js", "a").write("\nwindow.__newVersion=1;\n")
            w = open(D + "sw.js").read(); w = re.sub(r"const VERSION = '[^']+'", "const VERSION = 'feedbeef0001'", w); open(D + "sw.js", "w").write(w)
            await pg.reload(); await pg.wait_for_function("window.__tlf && __tlf.ready", timeout=180000)
            ok = await pg.evaluate("window.__newVersion === 1")
            print("PASS first reload after an update runs the new code" if ok else "FAIL old code after update")
            print("RESULT", "OK" if ok else "FAIL")
            await b.close()
    finally:
        shutil.copy("/tmp/idx.bak", D + "index.html"); shutil.copy("/tmp/app.bak", D + "app.js"); shutil.copy("/tmp/sw.bak", D + "sw.js")
asyncio.run(main())
