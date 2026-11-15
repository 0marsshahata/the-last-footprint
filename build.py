# Rebuild docs/app.js from src/ (run `npm install` once first).
import subprocess
subprocess.run(['npx', 'esbuild', 'src/main.js', '--bundle', '--format=iife', '--minify', '--target=es2020', '--outfile=docs/app.js'], check=True)
print('built docs/app.js')
