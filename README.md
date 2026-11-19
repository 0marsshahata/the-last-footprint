# The Last Footprint

**A mission may end, but its footprint remains.**

An interactive 3D story for students aged 10–15 about three NASA rovers that finished their missions and stayed on Mars: **Sojourner** (1997), **Spirit** (2004) and **Opportunity** (2004).

Built by **Team 3M** for **NASA Space Apps Challenge 2026 · Kafr El Sheikh**, challenge *“Abandoned but not Forgotten”*.

▶ **Live site:** https://0marsshahata.github.io/the-last-footprint/
English by default; Arabic is one tap away (the language button), or open https://0marsshahata.github.io/the-last-footprint/?lang=ar

---

## The Ghost Hardware Atlas (the first screen)

The site opens on a small atlas of machines people sent out and left behind, in three worlds:

- **Mars** — the full experience below. On the landing-site globe, grey “ghost” pins also mark the other Mars machines that are still there: Viking 1 and 2, the Pathfinder lander, Phoenix, InSight and Ingenuity.
- **The Moon** — *coming soon*: Apollo 11’s Eagle descent stage, the three Lunar Roving Vehicles, the ALSEP science stations, Surveyor 1 and Surveyor 3.
- **Deeper in space** — *coming soon*: Pioneer 10 and 11, Dawn (still circling Ceres), NEAR Shoemaker (on asteroid Eros) and Kepler.

The Moon and deep-space pages are short previews of where the project goes next: each machine has one checked line and a **Source** button (NASA NSSDCA), with no story yet. Card images: NASA/JPL/USGS (PIA00405, PIA00407) and NASA/JPL-Caltech/UCLA/MPS/DLR/IDA (PIA21906).

## Two ways in

**Instant Warp (about 2 minutes).** Mars appears lit by the Sun exactly as it is lit *right now* (NASA’s Mars24 algorithm). A live counter shows how long Spirit has been silent. **SOL**, a small guide robot, helps you pick one of the three landing sites, and you dive straight to the rovers.

**Immersive Expedition (about 5 minutes).** Live Spirit’s real trip:

1. **Launch** from Cape Canaveral, Florida, on 10 June 2003. You hold the button to launch.
2. **Cruise** for about 7 months and 487 million km, squeezed into half a minute. The day counter and the distance are real.
3. **Atmospheric entry** at about 19,000 km/h. You hold the heat shield steady.
4. **Parachute.** You open it at about 10 km altitude: too early and it could tear, too late and you crash.
5. **Airbags.** You inflate them about 8 seconds before touchdown. Then the retro-rockets fire, the bridle is cut, and you bounce across Mars (the real Spirit bounced about 30 times). Finally the lander opens like a flower and Spirit stands up on its base petal.

Then you jump to **today**, where Spirit is silent, and you wake it.

## In the Rover Hall

- **Power Pulse:** press and hold to charge your suit glove and wake a sleeping rover. It tells its story, and every line is labelled **Fact** or **Story**. Tap **Source** next to any Fact to see the NASA page it was checked against.
- A **Next step** line always tells you what to do, the rover buttons get a ✓ when a rover is awake, and the journey bar says where you are (“2 of 5: Wake the three rovers”).
- **Explore** each rover, in four tabs (*My life*, *My finds*, *Last footprint*, *Play*):
  - *My life on Mars*: how far each rover went past its planned end (Spirit: 90 planned sols, 2,208 actual).
  - *Last footprint*: the last place, last picture and last signal of each rover, and where it is now. Spirit is marked on a real HiRISE image from orbit (PIA12205), stuck at Troy beside Home Plate; Sojourner’s last picture beside the rock “Chimp” (PIA00971) and Opportunity’s final panorama (PIA22908).
  - **Sojourner:** the first wheels on another planet, how small it was, why it went silent, and what it passed on (the airbag landing and the six-wheel design).
  - **Spirit:** *That dot is us* (Earth photographed from Mars, NASA PIA05547), *A discovery from a broken wheel* (silica from ancient hot springs), and *The day I almost died*: save Spirit from its Sol-18 memory crisis, the way the JPL engineers did.
  - **Opportunity:** the hole-in-one landing in Eagle crater, the hematite “blueberries”, the meteorite and the gypsum veins at Endeavour, and *Fact or myth?*: was “my battery is low and it’s getting dark” really its last message?
  - *Compare us*: the three rovers side by side.
- **From Footprint to Footprint:** after you wake all three, a chain shows what each mission found and what it passed on to the next: Sojourner (1997) → Spirit and Opportunity (2004) → Curiosity (2012) → Perseverance (2021) → you.
- **Before we start:** right after choosing a path, three quick questions (they can be skipped). At the end, the five-question quiz *What did you learn?* asks the same three again, so each child sees “1 of 3 before → 3 of 3 after”.
- **What did you learn?** A five-question quiz checks the big ideas, with an explanation after every answer.
- **The Next Footprint:** write your name and download your **Mars Explorer certificate**, with your quiz score on it.

The journey bar at the top shows your five footprints, and the ending shows three steps: the chain → the quiz → the certificate.

## For teachers

Open **ⓘ → For teachers** for a 20-minute lesson plan and discussion questions. The site works in **Arabic and English**, on phones, tablets and computers.

## Privacy and the learning data

No accounts and no names. Only if the child ticks the box, the site sends their **age group** (for example 12–13) and their **answers** to the three “before” questions and the final quiz, anonymously, to the team’s own Google Sheet, so we can see what children actually learn and improve the project. The name typed on the certificate never leaves the device. Without the tick, nothing is sent.

The sheet has an *Analysis* tab (before vs after by age group, and each question) with charts. Rows from the team’s own trials (opened with `?test`) are flagged automatically, and any row can be ticked *Exclude*; both are left out of the analysis. The script is in `tools/sheet/Code.gs`.

## Facts and sources

Every date and number was checked against NASA sources. Every Fact has its own **Source** button in the site, and **[FACT-CHECK.md](FACT-CHECK.md)** lists every Fact with the source it was checked against (generated from the site’s own data by `tools/factcheck.mjs`). The full list is also in **ⓘ → Sources** inside the site, including:

- NASA Science mission pages for Spirit, Opportunity and Mars Pathfinder/Sojourner
- JPL news: *NASA’s Spirit Rover Completes Mission on Mars*, *Mars Exploration Rover Spirit Mission Status (4 Jan 2004)*, *20 Years After Landing*
- NASA Photojournal PIA05547 (NASA/JPL/Cornell/Texas A&M)
- NASA GISS Mars24 Sunclock algorithm (Allison & McEwen 2000)

## Credits

- Spirit/Opportunity 3D model: NASA/JPL-Caltech (NASA 3D Resources).
- Mars and Milky Way maps: Solar System Scope (CC BY 4.0), based on NASA data.
- Earth: NASA Blue Marble: Next Generation (NASA Earth Observatory, Reto Stöckli) and NASA Earth at Night.
- Photos: PIA05547 (NASA/JPL/Cornell/Texas A&M), PIA00971 (NASA/JPL), PIA12205 (NASA/JPL-Caltech/University of Arizona), PIA22908 (NASA/JPL-Caltech/Cornell/ASU).
- Voices: Microsoft Azure AI Speech neural voices (ar-EG Shakir and Salma; en-US Ana, Aria, Guy and Davis), rendered once with `tools/synth.sh`.
- Fonts: IBM Plex Sans Arabic, Lalezar, Chakra Petch (SIL Open Font License).
- Made by the team in code: Sojourner model, SOL, the glove, the terrain, the spacecraft, the parachute and airbags, effects and all sounds.

## Use of AI

We are open about how we used AI tools:

- We used **Claude** (by Anthropic) as an assistant for coding, design and writing. Every decision was the team’s.
- Character voices use Microsoft Azure neural text-to-speech (Egyptian Arabic and US English voices), not real people’s voices.
- **SOL** is a fictional character we designed. Rover lines marked *Story* are fiction; lines marked *Fact* are checked against NASA.
- All real photos are NASA’s and credited. No AI-generated image is presented as real, and no NASA logo or mission insignia was generated or modified.
- **Labels inside the files:** every voice file in `docs/audio/v/` carries ID3 metadata marking it as AI-generated (Azure neural TTS, voice name, the line it speaks); every source file in `src/` and the built `app.js` start with an AI-disclosure comment; `index.html` has an `ai-disclosure` meta tag. Script: `tools/tag_audio.py`.

## How it is built

- [three.js](https://threejs.org/) r186 (WebGL), bundled with esbuild into one `app.js`.
- Post-processing: bloom, colour grade, film grain.
- Web Audio API for the sound design; pre-rendered Azure neural voices, with the browser's Web Speech API as a fallback.
- Textures and the 3D model are embedded in small scripts, so the site also runs from a double-click (`file://`), with no internet.
- Fast on slow connections: the rover model is meshopt-compressed (`models/MER.glb`, about 1 MB) and starts downloading at once; the voices (mono MP3, 5 MB in all) download quietly in the background in the order the story needs them and play from memory; the Earth texture for the Expedition is fetched while you explore.
- After the first visit a service worker (`sw.js`) keeps the site on the device, so it opens instantly and works offline; each new version replaces the old copy.

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
