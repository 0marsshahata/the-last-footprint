import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        pg = await b.new_page(viewport={"width":1366,"height":728})
        await pg.goto("http://localhost:8777/index.html?dtmax=0.25")
        await pg.wait_for_function("window.__tlf && window.__tlf.ready", timeout=180000)
        await pg.wait_for_timeout(4000)
        r = await pg.evaluate("""(()=>{const R=__tlf.renderer; R.info.autoReset=false; R.info.reset(); return new Promise(res=>requestAnimationFrame(()=>requestAnimationFrame(()=>{const i=R.info.render; const out={calls:i.calls,tris:i.triangles,points:i.points}; R.info.reset(); R.info.autoReset=true; res(out)})))})()""")
        print("frame (incl shadow/post):", r)
        print(await pg.evaluate("""(()=>{const out={}; __tlf.rovers.forEach(rv=>{let t=0; rv.model.traverse(o=>{if(o.isMesh){const g=o.geometry; t+=(g.index?g.index.count:g.attributes.position.count)/3}}); out[rv.id]=Math.round(t)}); return out})()"""))
        await b.close()
asyncio.run(main())
