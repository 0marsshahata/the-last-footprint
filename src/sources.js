// AI disclosure (NASA Space Apps SI rules): written by Team 3M with AI coding assistance from Claude (Anthropic).
// Every source the site relies on, by key. Each Fact line, card and chain step names the keys it was checked against,
// so a tap on "Fact" shows exactly where that sentence comes from (and FACT-CHECK.md is generated from the same data).
import { T } from './ui.js';

export const SRC = {
  // Sojourner / Mars Pathfinder
  mpf: ['NASA Science — Mars Pathfinder mission', 'https://science.nasa.gov/mission/mars-pathfinder/'],
  mpfFact: ['JPL fact sheet — Mars Pathfinder (landing on 4 July 1997 in the Ares Vallis flood plain, carved by a catastrophic flood)', 'https://webarchive.library.unt.edu/web/20090813031850/http:/jpl.nasa.gov/news/fact_sheets/mpf.pdf'],
  mpfNssdc: ['NASA NSSDCA — Mars Pathfinder (rover mass 10.5 kg)', 'https://nssdc.gsfc.nasa.gov/planetary/mesur.html'],
  mpfRocks: ['NASA — Barnacle Bill and Sojourner (the rocks Barnacle Bill and Yogi)', 'https://science.nasa.gov/?p=1252685'],
  mpfEnd: ['JPL — Mars Pathfinder winds down (last data on 27 Sep 1997, sol 83; rover worked 12 times its 7-day design life)', 'https://www.jpl.nasa.gov/news/mars-pathfinder-winds-down-after-phenomenal-mission/'],
  mpf25: ['NASA — 25 Years Ago: Mars Pathfinder launches (Sojourner drove about 100 m)', 'https://www.nasa.gov/?p=445143'],
  mpf10: ['NASA — 10 years later: Pathfinder and Sojourner (550 rover images)', 'https://www.nasa.gov/image-article/pathfinder-sojourner-10-years-later/'],
  mpfJpl: ['JPL — Mars Pathfinder / Sojourner (airbag and petal landing reused for later rovers)', 'https://www.jpl.nasa.gov/missions/mars-pathfinder-sojourner-rover/'],
  ieeeSoj: ['IEEE Spectrum — Sojourner: autonomous hazard avoidance and the six-wheel rocker-bogie design', 'https://spectrum.ieee.org/mars-pathfinder-rover'],
  sojStimpy: ['NASA Photojournal PIA01569 — Sojourner leaving the Rock Garden (last target: the rock Stimpy)', 'https://science.nasa.gov/?p=915935'],
  sojChimp: ['JPL PIA01581 — Sojourner behind the rock Chimp, a record 12.3 m from the lander (17 Sep 1997)', 'https://www.jpl.nasa.gov/images/pia01581-sojourner-rover-behind-chimp-right-eye/'],
  sojChimpImg: ['NASA Photojournal PIA00971 — Sojourner near “Chimp” (15 Sep 1997)', 'https://photojournal.jpl.nasa.gov/catalog/PIA00971'],
  mpfOrbit: ['JPL — New NASA orbiter sees details of 1997 Pathfinder site (HiRISE, PIA09105)', 'https://www.jpl.nasa.gov/news/new-nasa-orbiter-sees-details-of-1997-pathfinder-site/'],
  // Spirit
  spirit: ['NASA Science — Spirit (operated 6 years, 2 months, 19 days; 7.73 km)', 'https://science.nasa.gov/mission/mer-spirit/'],
  spiritEnd: ['JPL — NASA’s Spirit Rover Completes Mission on Mars (last communication 22 March 2010)', 'https://www.jpl.nasa.gov/news/nasas-spirit-rover-completes-mission-on-mars'],
  spiritStatus: ['JPL — Mars Exploration Rover Spirit Mission Status, 4 Jan 2004 (bounced and rolled after impact)', 'https://www.jpl.nasa.gov/news/mars-exploration-rover-spirit-mission-status-2/'],
  earthDot: ['NASA Photojournal PIA05547 — You are here: Earth as seen from Mars', 'https://science.nasa.gov/photojournal/you-are-here-earth-as-seen-from-mars/'],
  sol18: ['Spaceflight Now — Thousands of files deleted on Spirit to fix computer trouble (Feb 2004)', 'https://spaceflightnow.com/mars/mera/040201spirit.html'],
  silica: ['JPL — Spirit faces circuitous route (silica near Home Plate: hot springs or steam vents)', 'https://www.jpl.nasa.gov/news/nasas-mars-rover-spirit-faces-circuitous-route/'],
  silicaAsu: ['ASU — Foot-dragging rover finds hot-spring deposits (nearly pure silica)', 'https://news.asu.edu/content/mars-rover-finds-yellowstone-hot-spring-deposits'],
  troyOrbit: ['NASA Photojournal PIA12205 — Orbital view of Spirit at “Troy” (HiRISE, 13 June 2009)', 'https://photojournal.jpl.nasa.gov/catalog/PIA12205'],
  troyWater: ['Astronomy — Trapped Mars rover finds evidence of subsurface water (Spirit at Troy)', 'https://astronomy.com/space-exploration/trapped-mars-rover-finds-evidence-of-subsurface-water'],
  // Opportunity
  opp: ['NASA Science — Opportunity in depth (Heat Shield Rock iron-nickel meteorite)', 'https://science.nasa.gov/mission/mer-opportunity/'],
  twins: ['NASA Science — Mars Exploration Rovers Spirit and Opportunity (Opportunity last communicated on 10 June 2018)', 'https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/'],
  oppEnd: ['JPL — Opportunity: NASA Rover Completes Mars Mission (hole-in-one, driving record)', 'https://www.jpl.nasa.gov/videos/opportunity-nasa-rover-completes-mars-mission/'],
  twins20: ['NASA — 20 Years After Landing (hematite “blueberries” formed in acidic water)', 'https://www.nasa.gov/missions/mer/20-years-after-landing-how-nasas-twin-rovers-changed-mars-science/'],
  twins20jpl: ['JPL — 20 Years After Landing: How NASA’s Twin Rovers Changed Mars Science (about 30 bounces)', 'https://www.jpl.nasa.gov/news/20-years-after-landing-how-nasas-twin-rovers-changed-mars-science/'],
  gypsum: ['JPL — Paydirt at Endeavour Crater (gypsum veins, strongest evidence for water)', 'https://www.jpl.nasa.gov/news/paydirt-at-8-year-old-mars-rovers-new-landing-site/'],
  oppFinal: ['NASA Science — Opportunity rover’s final Mars images (354-image panorama, 13 May–10 June 2018)', 'https://science.nasa.gov/?p=140583'],
  oppOrbit: ['NASA Photojournal PIA22549 — Opportunity after the dust storm (HiRISE, 20 Sep 2018)', 'https://photojournal.jpl.nasa.gov/catalog/PIA22549'],
  snopes: ['Snopes — Opportunity’s “final words” fact check', 'https://www.snopes.com/fact-check/opportunity-rovers-final-words/'],
  // after them
  record: ['NASA Science — Perseverance sets off-world record for total distance driven (11 Oct 2026, passing Opportunity’s 45.16 km)', 'https://science.nasa.gov/blogs/perseverance-mars-rover/2026/10/12/nasas-perseverance-sets-off-world-record-for-total-distance-driven/'],
  curiosity: ['The Planetary Society — Curiosity found Gale Crater once held a lake', 'https://www.planetary.org/space-missions/curiosity'],
  perse: ['NASA Science — Perseverance science: looking for signs of past life', 'https://science.nasa.gov/mission/mars-2020-perseverance/science/'],
  msr: ['NASA Science — Mars Sample Return', 'https://science.nasa.gov/mission/mars-sample-return/'],
  bio: ['NASA — Mars rover discovered a potential biosignature (2025)', 'https://www.nasa.gov/news-release/nasa-says-mars-rover-discovered-potential-biosignature-last-year/'],
  // landing (the Immersive Expedition)
  landingSfn: ['Spaceflight Now — Giant airbags will give rovers’ landings a bounce (entry 5.4 km/s, parachute, 20 m bridle, airbags 8 s before touchdown)', 'https://spaceflightnow.com/mars/mera/031231landing.html'],
  merTimeline: ['Windows to the Universe (UCAR) — MER mission events timeline (launch dates, parachute, retro-rockets)', 'https://windows2universe.org/space_missions/mars/mars_exploration_rover/mission_events.html&edu=high'],
  podcast: ['NASA podcast “On a Mission”: Before you can drive, first you have to fly (airbag landings)', 'https://www.nasa.gov/podcasts/on-a-mission/before-you-can-drive-first-you-have-to-fly-s4e9/'],
  // data and models
  mars24: ['NASA GISS — Mars24 Sunclock algorithm (Allison & McEwen 2000)', 'https://www.giss.nasa.gov/tools/mars24/help/algorithm.html'],
  model: ['NASA 3D Resources — Mars Exploration Rover model', 'https://science.nasa.gov/3d-resources/'],
  blueMarble: ['NASA Earth Observatory — Blue Marble: Next Generation, Reto Stöckli (Earth in the expedition)', 'https://science.nasa.gov/earth/earth-observatory/blue-marble-next-generation/'],
  blackMarble: ['NASA Earth Observatory — Earth at Night / Black Marble (night lights in the expedition)', 'https://science.nasa.gov/earth/earth-observatory/earth-at-night/maps'],
  sss: ['Solar System Scope — Mars & Milky Way textures (CC BY 4.0)', 'https://www.solarsystemscope.com/textures/'],
  // Ghost Hardware Atlas
  nsEagle: ['NASA NSSDCA — Apollo 11 Lunar Module / EASEP (1969-059C)', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C'],
  apollo11Home: ['NASA — 50 Years Ago: Apollo 11, The Journey Home (descent stage used as a launch pad)', 'https://www.nasa.gov/history/50-years-ago-apollo-11-the-journey-home'],
  lrvNssdc: ['NASA NSSDCA — The Apollo Lunar Roving Vehicle (Apollo 17: 35.9 km)', 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html'],
  alsepNtrs: ['NASA NTRS — ALSEP Termination Report (stations turned off 30 Sept 1977)', 'https://ntrs.nasa.gov/citations/19790014808'],
  nsA15: ['NASA NSSDCA — Apollo 15 Lunar Module / ALSEP (1971-063C)', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C'],
  nsS1: ['NASA NSSDCA — Surveyor 1 (1966-045A)', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1966-045A'],
  surveyor1Nasa: ['NASA — 55 Years Ago: Surveyor 1 makes a soft landing on the Moon', 'https://www.nasa.gov/feature/55-years-ago-surveyor-1-makes-a-soft-landing-on-the-moon'],
  nsS3: ['NASA NSSDCA — Surveyor 3 (1967-035A)', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A'],
  nsV1: ['NASA NSSDCA — Viking 1 Lander (1975-075C)', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1975-075C'],
  nsV2: ['NASA NSSDCA — Viking 2 Lander (1975-083C)', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1975-083C'],
  nsPhoenix: ['NASA NSSDCA — Phoenix Mars Lander (2007-034A)', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2007-034A'],
  phoenixJpl: ['NASA JPL — Phoenix mission (water ice, perchlorate)', 'https://www.jpl.nasa.gov/missions/phoenix/'],
  nsInsight: ['NASA NSSDCA — InSight (2018-042A)', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2018-042A'],
  insightEnd: ['EarthSky (NASA release) — InSight falls silent: 1,319 marsquakes', 'https://earthsky.org/space/insight-falls-silent-nasa-declares-mission-end/'],
  nsM2020: ['NASA NSSDCA — Mars 2020, with the Ingenuity Helicopter (2020-052A)', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2020-052A'],
  ingenuityEnd: ['NASASpaceflight — Ingenuity’s mission ends after 72 flights', 'https://nasaspaceflight.com/2024/01/ingenuity-final-flight'],
  pathfinderEnd: ['NASA Science — Mars Pathfinder winds down (last data 27 Sept 1997)', 'https://science.nasa.gov/solar-system/mars-pathfinder-winds-down-after-phenomenal-mission/'],
  nsP10: ['NASA NSSDCA — Pioneer 10 (1972-012A)', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-012A'],
  nsP11: ['NASA NSSDCA — Pioneer 11 (1973-019A)', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1973-019A'],
  pioneerLast: ['NASA Science — Pioneer 10 sends last signal (and Pioneer 11, 1995)', 'https://science.nasa.gov/missions/pioneer/pioneer-10-sends-last-signal/'],
  nsDawn: ['NASA NSSDCA — Dawn (2007-043A)', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2007-043A'],
  dawnEnd: ['NASA — Dawn mission to asteroid belt comes to end (1 Nov 2018)', 'https://solarsystem.nasa.gov/news/746/nasas-dawn-mission-to-asteroid-belt-comes-to-end'],
  nsNear: ['NASA NSSDCA — NEAR Shoemaker (1996-008A)', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1996-008A'],
  nearNasa: ['NASA Science — NEAR Shoemaker (first to orbit and land on an asteroid)', 'https://science.nasa.gov/mission/near-shoemaker/'],
  nsKepler: ['NASA NSSDCA — Kepler (2009-011A)', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2009-011A'],
  keplerEnd: ['NASA — NASA retires Kepler space telescope (2,600+ planets)', 'https://www.nasa.gov/news-release/nasa-retires-kepler-space-telescope-passes-planet-hunting-torch'],
  imgMoon: ['NASA/JPL/USGS — PIA00405: Earth’s Moon, seen by Galileo', 'https://science.nasa.gov/photojournal/earths-moon/'],
  imgMars: ['NASA/JPL/USGS — PIA00407: Global color views of Mars (Viking)', 'https://photojournal.jpl.nasa.gov/catalog/PIA00407'],
  imgCeres: ['NASA/JPL-Caltech/UCLA/MPS/DLR/IDA — PIA21906: Ceres seen by Dawn', 'https://science.nasa.gov/photojournal/high-resolution-ceres-view/'],
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// the small "Source" button that sits beside a Fact label
export function srcButton(keys, L) {
  if (!keys || !keys.length) return '';
  return `<button type="button" class="src-btn" data-src="${keys.join(' ')}" aria-haspopup="dialog">${T('sourceBtn', L)}</button>`;
}

// one popover for the whole page; opened by any [data-src] button
let pop = null, opener = null;
export function initSourcePopover(getLang) {
  pop = document.createElement('div');
  pop.id = 'srcpop'; pop.className = 'glass'; pop.hidden = true;
  pop.setAttribute('role', 'dialog'); pop.setAttribute('aria-modal', 'false'); pop.setAttribute('aria-labelledby', 'srcpop-h');
  document.body.appendChild(pop);
  const close = () => { if (pop.hidden) return; pop.hidden = true; opener?.setAttribute('aria-expanded', 'false'); opener?.focus({ preventScroll: true }); opener = null; };
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-src]');
    if (b) { e.preventDefault(); if (opener === b) { close(); return; } open(b, getLang()); return; }
    if (!pop.hidden && !e.target.closest('#srcpop')) close();
  });
  pop.addEventListener('click', (e) => { if (e.target.closest('.srcpop-x')) close(); });
  document.addEventListener('keydown', (e) => {
    if (pop.hidden) return;
    if (e.key === 'Escape') { e.stopImmediatePropagation(); close(); return; }
    // Tab stays inside the popover while it is open
    if (e.key === 'Tab' && pop.contains(document.activeElement)) {
      e.stopImmediatePropagation();
      const f = [...pop.querySelectorAll('a[href], button')];
      const i = f.indexOf(document.activeElement), n = f.length;
      e.preventDefault(); f[(i + (e.shiftKey ? n - 1 : 1)) % n].focus();
    }
  }, true);
  window.addEventListener('resize', close);
  function open(b, L) {
    opener?.setAttribute('aria-expanded', 'false');
    opener = b; b.setAttribute('aria-expanded', 'true');
    const keys = b.dataset.src.split(' ').filter((k) => SRC[k]);
    pop.innerHTML = `<div class="srcpop-head"><h3 id="srcpop-h">${T('sourceTitle', L)}</h3><button type="button" class="srcpop-x icon-btn" aria-label="${T('close', L)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>
      <ul>${keys.map((k) => `<li><a href="${SRC[k][1]}" target="_blank" rel="noopener">${esc(SRC[k][0])}</a></li>`).join('')}</ul>`;
    pop.hidden = false;
    // place it next to the button, inside the screen
    const r = b.getBoundingClientRect(), w = Math.min(360, innerWidth - 24);
    pop.style.width = w + 'px';
    const h = pop.offsetHeight;
    let x = r.left + r.width / 2 - w / 2; x = Math.max(12, Math.min(innerWidth - w - 12, x));
    let y = r.top - h - 10; if (y < 12) y = Math.min(innerHeight - h - 12, r.bottom + 10);
    pop.style.left = x + 'px'; pop.style.top = y + 'px';
    pop.querySelector('a')?.focus({ preventScroll: true });
  }
  return { close, get isOpen() { return !pop.hidden; } };
}
