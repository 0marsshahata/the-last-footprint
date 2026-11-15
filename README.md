# The Last Footprint

**A mission may end, but its footprint remains.**

An interactive 3D story for students aged 10–15 about three NASA rovers that finished their missions and stayed on Mars: **Sojourner** (1997), **Spirit** (2004) and **Opportunity** (2004).

Built by **Team 3M** for **NASA Space Apps Challenge 2026 · Kafr El Sheikh**, challenge *“Abandoned but not Forgotten”*.

▶ **Live site:** https://0marsshahata.github.io/the-last-footprint/
Arabic by default. For English, add `?lang=en`: https://0marsshahata.github.io/the-last-footprint/?lang=en

---

## Two ways in

**Instant Warp (about 2 minutes).** Mars appears lit by the Sun exactly as it is lit *right now* (NASA’s Mars24 algorithm). A live counter shows how long Spirit has been silent. **SOL**, a small guide robot, helps you pick one of the three landing sites, and you dive straight to the rovers.

**Immersive Expedition (about 5 minutes).** Live Spirit’s real trip:

1. **Launch** from Cape Canaveral, Florida, on 10 June 2003. You hold the button to launch.
2. **Cruise** for about 7 months and 487 million km, squeezed into half a minute. The day counter and the distance are real.
3. **Atmospheric entry** at about 19,000 km/h. You hold the heat shield steady.
4. **Parachute.** You open it at about 10 km altitude: too early and it could tear, too late and you crash.
5. **Airbags.** You inflate them about 8 seconds before touchdown. Then the retro-rockets fire, the bridle is cut, and you bounce across Mars (the real Spirit bounced about 30 times). Finally the lander opens like a flower.

Then you jump to **today**, where Spirit is silent, and you wake it.

## In the Rover Hall

- **Power Pulse:** press and hold to charge your suit glove and wake a sleeping rover. It tells its story, and every line is labelled **Fact** or **Story**.
- **Explore** each rover:
  - *My life on Mars*: how far each rover went past its planned end (Spirit: 90 planned sols, 2,208 actual).
  - *That dot is us*: Earth photographed by Spirit from the surface of Mars (NASA PIA05547).
  - *The day I almost died*: save Spirit from its Sol-18 memory crisis, the way the JPL engineers did.
  - *Fact or myth?*: was “my battery is low and it’s getting dark” really Opportunity’s last message?
  - *Compare us*: the three rovers side by side.
- **The Next Footprint:** after you wake all three, the footprints continue to Curiosity and Perseverance, which are still exploring Mars today. Write your name and download your **Mars Explorer certificate**.

The journey bar at the top shows your five footprints.

## For teachers

Open **ⓘ → For teachers** for a 20-minute lesson plan and discussion questions. The site works in **Arabic and English**, on phones, tablets and computers. No accounts, no tracking, no server.

## Facts and sources

Every date and number was checked against NASA sources. The full list, with links, is in **ⓘ → Sources** inside the site, including:

- NASA Science mission pages for Spirit, Opportunity and Mars Pathfinder/Sojourner
- JPL news: *NASA’s Spirit Rover Completes Mission on Mars*, *Mars Exploration Rover Spirit Mission Status (4 Jan 2004)*, *20 Years After Landing*
- NASA Photojournal PIA05547 (NASA/JPL/Cornell/Texas A&M)
- NASA GISS Mars24 Sunclock algorithm (Allison & McEwen 2000)

## Credits

- Spirit/Opportunity 3D model: NASA/JPL-Caltech (NASA 3D Resources).
- Mars and Milky Way maps: Solar System Scope (CC BY 4.0), based on NASA data.
- Earth: NASA Blue Marble: Next Generation (NASA Earth Observatory, Reto Stöckli) and NASA Earth at Night.
- Photo PIA05547: NASA/JPL/Cornell/Texas A&M.
- Fonts: IBM Plex Sans Arabic, Lalezar, Chakra Petch (SIL Open Font License).
- Made by the team in code: Sojourner model, SOL, the glove, the terrain, the spacecraft, the parachute and airbags, effects and all sounds.

## Use of AI

We are open about how we used AI tools:

- We used **Claude** (by Anthropic) as an assistant for coding, design and writing. Every decision was the team’s.
- Character voices are computer-generated (text-to-speech), not real people’s voices.
- **SOL** is a fictional character we designed. Rover lines marked *Story* are fiction; lines marked *Fact* are checked against NASA.
- All real photos are NASA’s and credited. No AI-generated image is presented as real.

## How it is built

- [three.js](https://threejs.org/) r186 (WebGL), bundled with esbuild into one `app.js`.
- Post-processing: bloom, colour grade, film grain.
- Web Audio API for the sound design; Web Speech API and pre-rendered audio for the voices.
- Textures and the 3D model are embedded in small scripts, so the site also runs from a double-click (`file://`), with no internet.

```
docs/      the website (GitHub Pages serves this folder)
src/       source code (main.js, opening.js, expedition.js, edl.js, explore.js, …)
test/      automated browser tests (Playwright): features, accessibility (axe-core), offline, memory soak
build.py   rebuilds docs/app.js from src/
```

### Run it locally

```bash
python3 -m http.server 8000 -d docs
# open http://localhost:8000
```

### Rebuild after changing the code

```bash
npm install
python3 build.py
```

## Team

**Team 3M** · NASA Space Apps Challenge 2026 · Kafr El Sheikh, Egypt
