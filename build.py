# Rebuild docs/ from src/ (run `npm install` once first): the code, its version stamp, and the offline cache (sw.js).
import subprocess, re, os, hashlib, json
subprocess.run(['npx', 'esbuild', 'src/main.js', '--bundle', '--format=iife', '--minify', '--target=es2020', '--outfile=docs/app.js'], check=True)
h = hashlib.sha1()
h.update(re.sub(rb'\?v=[0-9a-f]+', b'', open('docs/index.html', 'rb').read()))
for f in ['docs/app.js', 'tools/sw.js'] + [os.path.join(d, x) for d in ['docs/models', 'docs/audio/v', 'docs/assets'] for x in sorted(os.listdir(d))]:
    h.update(open(f, 'rb').read())
V = h.hexdigest()[:12]
s = open('docs/index.html').read()
s = re.sub(r'src="app\.js(\?v=[0-9a-f]+)?"', 'src="app.js?v=' + V + '"', s)
s = re.sub(r'src="models/space-tex\.js(\?v=[0-9a-f]+)?"', 'src="models/space-tex.js?v=' + V + '"', s)
open('docs/index.html', 'w').write(s)
core = ['./', 'index.html', 'app.js?v=' + V, 'models/space-tex.js?v=' + V, 'models/MER.glb'] + ['fonts/' + f for f in sorted(os.listdir('docs/fonts'))] + ['assets/' + f for f in sorted(os.listdir('docs/assets'))]
open('docs/sw.js', 'w').write(open('tools/sw.js').read().replace('__VERSION__', V).replace('__CORE__', json.dumps(core)))
print('built docs/app.js, version', V)
