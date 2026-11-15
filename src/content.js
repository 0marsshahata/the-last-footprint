// AI disclosure (NASA Space Apps SI rules): written by Team 3M with AI coding assistance from Claude (Anthropic).
// Explore panels, the Sol-18 game, the quiz, the ending and the About page.
// Every date and number here was checked against NASA sources (listed in SOURCES).

export const TIMELINES = {
  sojourner: {
    planned: 7, actual: 83, unit: { ar: 'يوم مريخي', en: 'sols' },
    items: [
      { sol: 1, date: { ar: '٤ يوليو ١٩٩٧', en: '4 Jul 1997' }, t: { ar: 'نزلت على المريخ مع المحطة Pathfinder في وادي Ares Vallis', en: 'Landed with the Pathfinder lander in Ares Vallis' } },
      { sol: 7, plan: true, date: { ar: 'يوم ٧', en: 'Sol 7' }, t: { ar: 'كان المفروض مهمتي تخلص هنا', en: 'My mission was planned to end here' } },
      { sol: 83, end: true, date: { ar: '٢٧ سبتمبر ١٩٩٧', en: '27 Sep 1997' }, t: { ar: 'آخر إشارة من Pathfinder، وأنا كنت بكلم الأرض عن طريقها، فسكتّ معاها', en: 'Last signal from Pathfinder — I talked to Earth through it, so I fell silent too' } },
    ],
  },
  spirit: {
    planned: 90, actual: 2208, unit: { ar: 'يوم مريخي', en: 'sols' },
    items: [
      { sol: 1, date: { ar: '٤ يناير ٢٠٠٤', en: '4 Jan 2004' }, t: { ar: 'نزلت في فوهة جوسيف', en: 'Landed in Gusev Crater' } },
      { sol: 18, date: { ar: '٢١ يناير ٢٠٠٤', en: '21 Jan 2004' }, t: { ar: 'ذاكرتي اتملت وفضلت أعيد تشغيل نفسي… كنت هموت', en: 'My memory filled up and I kept restarting… I almost died' }, game: true },
      { sol: 32, date: { ar: '٦ فبراير ٢٠٠٤', en: '6 Feb 2004' }, t: { ar: 'المهندسين صلّحوني ورجعت أشتغل', en: 'Engineers fixed me and I went back to work' } },
      { sol: 63, date: { ar: '٨ مارس ٢٠٠٤', en: '8 Mar 2004' }, t: { ar: 'صوّرت الأرض من سطح المريخ', en: 'I photographed Earth from the surface of Mars' }, photo: true },
      { sol: 90, plan: true, date: { ar: 'يوم ٩٠', en: 'Sol 90' }, t: { ar: 'كان المفروض مهمتي تخلص هنا', en: 'My mission was planned to end here' } },
      { sol: 760, date: { ar: '٢٠٠٦', en: '2006' }, t: { ar: 'عجلة من عجلاتي وقفت، فبقيت أسوق بالعكس وأسحبها', en: 'One wheel stopped, so I drove backwards dragging it' } },
      { sol: 1892, date: { ar: '٢٠٠٩', en: '2009' }, t: { ar: 'غرزت في رمل ناعم في مكان اسمه Troy', en: 'I got stuck in soft sand at a place called Troy' } },
      { sol: 2208, end: true, date: { ar: '٢٢ مارس ٢٠١٠', en: '22 Mar 2010' }, t: { ar: 'آخر رسالة مني للأرض، بعد ما مشيت ٧٫٧٣ كم', en: 'My last message to Earth, after driving 7.73 km' } },
    ],
  },
  opportunity: {
    planned: 90, actual: 5111, unit: { ar: 'يوم مريخي', en: 'sols' },
    items: [
      { sol: 1, date: { ar: '٢٥ يناير ٢٠٠٤', en: '25 Jan 2004' }, t: { ar: 'نزلت جوه فوهة صغيرة اسمها Eagle في سهل Meridiani', en: 'Landed inside a small crater called Eagle, in Meridiani Planum' } },
      { sol: 90, plan: true, date: { ar: 'يوم ٩٠', en: 'Sol 90' }, t: { ar: 'كان المفروض مهمتي تخلص هنا', en: 'My mission was planned to end here' } },
      { sol: 2681, date: { ar: '٩ أغسطس ٢٠١١', en: '9 Aug 2011' }, t: { ar: 'وصلت فوهة Endeavour بعد رحلة ٣ سنين وحوالي ٢١ كم', en: 'Reached Endeavour Crater after a 3-year, ~21 km trip' } },
      { sol: 3968, date: { ar: 'مارس ٢٠١٥', en: 'Mar 2015' }, t: { ar: 'عدّيت مسافة ماراثون كامل (٤٢٫١٩٥ كم)', en: 'Passed a full marathon distance (42.195 km)' } },
      { sol: 5111, end: true, date: { ar: '١٠ يونيو ٢٠١٨', en: '10 Jun 2018' }, t: { ar: 'عاصفة تراب غطّت الكوكب كله وطفت شمسي… آخر اتصال', en: 'A planet-wide dust storm blocked my sun… last contact' } },
    ],
  },
};

// "The day I almost died" — Spirit's Sol 18 flash-memory crisis (21 Jan – 6 Feb 2004)
export const SOL18 = [
  {
    s: { ar: 'يوم ١٨ (٢١ يناير ٢٠٠٤): Spirit بطّل يبعت بيانات مفهومة وبيعيد تشغيل نفسه كل شوية. تعمل إيه الأول؟', en: 'Sol 18 (21 Jan 2004): Spirit stopped sending sensible data and keeps rebooting. What do you do first?' },
    options: [
      { t: { ar: 'نشغّله من غير ما يلمس ذاكرة الفلاش (وضع «Crippled»)', en: 'Boot it without touching its flash memory (“crippled mode”)' }, ok: true },
      { t: { ar: 'نخليه يسوق لمكان فيه شمس أكتر', en: 'Drive it to a sunnier spot' }, why: { ar: 'هو مش قادر يفهم الأوامر بشكل طبيعي، فالسواقة خطر عليه دلوقتي.', en: 'It can’t follow commands normally — driving now would be risky.' } },
      { t: { ar: 'نستسلم ونقفل المهمة', en: 'Give up and end the mission' }, why: { ar: 'لأ! المهندسين ما استسلموش… جرّب تاني.', en: 'No way! The engineers didn’t give up… try again.' } },
    ],
    done: { ar: 'صح! في يوم ٢١ المهندسين دخّلوه «وضع Crippled» ورجعوا يتحكموا فيه.', en: 'Right! On sol 21 the engineers got it into crippled mode and regained control.' },
  },
  {
    s: { ar: 'Spirit هدي. اكتشفنا إن ذاكرة الفلاش مليانة آلاف الملفات القديمة من الرحلة للمريخ. الخطوة الجاية؟', en: 'Spirit is stable. Its flash memory is packed with thousands of old files from the trip to Mars. Next step?' },
    options: [
      { t: { ar: 'نمسح آلاف الملفات اللي مش محتاجينها', en: 'Delete thousands of files we no longer need' }, ok: true },
      { t: { ar: 'نبعتله ملفات زيادة', en: 'Send it even more files' }, why: { ar: 'ده بالظبط اللي عمل المشكلة!', en: 'That’s exactly what caused the problem!' } },
    ],
    done: { ar: 'برافو! المهندسين مسحوا آلاف الملفات وSpirit بقى مستقر.', en: 'Bravo! Engineers deleted thousands of files and Spirit became stable.' },
  },
  {
    s: { ar: 'عشان نبدأ على نضيف ومنكررش الغلطة، نعمل إيه في الذاكرة؟', en: 'To start clean and avoid a repeat, what do we do with the memory?' },
    options: [
      { t: { ar: 'نعمل «فورمات» للذاكرة كلها', en: 'Reformat the whole flash memory' }, ok: true },
      { t: { ar: 'نسيبها زي ما هي', en: 'Leave it as it is' }, why: { ar: 'ملفاتها كان ممكن تكون باظت، والأمان إننا نبدأ من الصفر.', en: 'Its files may be corrupted — the safe move is a clean start.' } },
    ],
    done: { ar: 'تمام! يوم ٣٢ (٦ فبراير ٢٠٠٤) Spirit رجع زي الفل… وعاش ٦ سنين كمان!', en: 'Done! On sol 32 (6 Feb 2004) Spirit was fully back… and worked for 6 more years!' },
  },
];

export const QUIZ = [
  {
    s: { ar: '«بطاريتي ضعيفة والدنيا بتضلم»… دي آخر جملة Opportunity قالها؟', en: '“My battery is low and it’s getting dark” — were these Opportunity’s last words?' },
    answer: false,
    why: { ar: 'إشاعة! Opportunity كان بيبعت أرقام مش كلام: البطارية واطية والسما ضلمة جدًا من عاصفة تراب. صحفي اسمه Jacob Margolis كتب الجملة دي كترجمة شاعرية للبيانات، والناس افتكروها كلام الروفر.', en: 'Myth! Opportunity sent numbers, not words: low battery and a very dark sky from a dust storm. A journalist, Jacob Margolis, wrote that line as a poetic translation of the data — people mistook it for the rover’s words.' },
  },
  {
    s: { ar: 'Opportunity مشي على المريخ مسافة أطول من ماراثون كامل.', en: 'Opportunity drove farther than a full marathon on Mars.' },
    answer: true,
    why: { ar: 'حقيقة! عدّى مسافة الماراثون في مارس ٢٠١٥، وفي الآخر مشي ٤٥٫١٦ كم.', en: 'True! It passed marathon distance in March 2015 and finished with 45.16 km.' },
  },
  {
    s: { ar: 'بعد ما Opportunity سكت، ناسا فضلت تبعتله أوامر عشان يصحى.', en: 'After Opportunity went silent, NASA kept sending commands to wake it.' },
    answer: true,
    why: { ar: 'حقيقة! بعتوا أكتر من ٨٣٥ أمر على مدار شهور، وفي ١٣ فبراير ٢٠١٩ أعلنوا إن المهمة خلصت.', en: 'True! They sent more than 835 recovery commands over months, then declared the mission complete on 13 Feb 2019.' },
  },
];

export const CARDS = {
  sojourner: [
    { k: 'size', title: { ar: 'قد إيه أنا صغيرة؟', en: 'How small am I?' }, body: { ar: 'طولي حوالي ٦٥ سم ووزني حوالي ١٠٫٦ كيلو بس، قد شنطة سفر صغيرة. Spirit وOpportunity وزن الواحد فيهم حوالي ١٨٠ كيلو، يعني أتقل مني ١٧ مرة!', en: 'I’m about 65 cm long and weigh only about 10.6 kg — like a small suitcase. Spirit and Opportunity weigh about 180 kg each, 17 times more than me!' } },
    { k: 'why', title: { ar: 'ليه سكتّ؟', en: 'Why did I go silent?' }, body: { ar: 'أنا ما كنتش بكلم الأرض مباشرة، كنت بكلم المحطة Pathfinder وهي توصّل كلامي. لما Pathfinder بعتت آخر إشارة يوم ٢٧ سبتمبر ١٩٩٧، فضلت أنا لوحدي من غير صوت.', en: 'I didn’t talk to Earth directly — the Pathfinder lander relayed my messages. When Pathfinder sent its last signal on 27 Sep 1997, I was left without a voice.' } },
  ],
  spirit: [
    { k: 'photo', title: { ar: 'النقطة دي… إحنا', en: 'That dot is us' }, body: { ar: 'يوم ٨ مارس ٢٠٠٤، قبل شروق الشمس بساعة، Spirit صوّر النقطة المنورة دي. دي الأرض! أول صورة للأرض اتاخدت من سطح كوكب أبعد من القمر. كل الناس اللي تعرفهم موجودين جوه النقطة دي.', en: 'On 8 March 2004, one hour before sunrise, Spirit photographed this bright dot. That’s Earth! The first image of Earth ever taken from the surface of a planet beyond the Moon. Everyone you know is inside that dot.' }, img: 'assets/PIA05547.jpg', w: 1194, h: 1007, credit: 'NASA/JPL/Cornell/Texas A&M · PIA05547' },
  ],
  opportunity: [],
};

// side by side (NASA sources in SOURCES)
export const COMPARE = {
  rovers: ['sojourner', 'spirit', 'opportunity'],
  names: ['Sojourner', 'Spirit', 'Opportunity'],
  rows: [
    { k: 'cLanded', v: [{ ar: '٤ يوليو ١٩٩٧', en: '4 Jul 1997' }, { ar: '٤ يناير ٢٠٠٤', en: '4 Jan 2004' }, { ar: '٢٥ يناير ٢٠٠٤', en: '25 Jan 2004' }] },
    { k: 'cSite', v: [{ ar: 'Ares Vallis', en: 'Ares Vallis' }, { ar: 'فوهة Gusev', en: 'Gusev Crater' }, { ar: 'Meridiani Planum', en: 'Meridiani Planum' }] },
    { k: 'cLength', v: [{ ar: '٦٥ سم', en: '65 cm' }, { ar: '١٫٦ متر', en: '1.6 m' }, { ar: '١٫٦ متر', en: '1.6 m' }] },
    { k: 'cMass', v: [{ ar: 'حوالي ١٠٫٦ كيلو', en: '~10.6 kg' }, { ar: 'حوالي ١٨٠ كيلو', en: '~180 kg' }, { ar: 'حوالي ١٨٠ كيلو', en: '~180 kg' }] },
    { k: 'cPlanned', v: [{ ar: '٧ أيام', en: '7 sols' }, { ar: '٩٠ يوم', en: '90 sols' }, { ar: '٩٠ يوم', en: '90 sols' }] },
    { k: 'cWorked', v: [{ ar: '٨٣ يوم', en: '83 sols' }, { ar: '٢٬٢٠٨ يوم', en: '2,208 sols' }, { ar: '٥٬١١١ يوم', en: '5,111 sols' }] },
    { k: 'cTimes', v: [{ ar: 'حوالي ١٢ مرة', en: '~12×' }, { ar: 'حوالي ٢٤ مرة', en: '~24×' }, { ar: 'حوالي ٥٦ مرة', en: '~56×' }] },
    { k: 'cDistance', v: [{ ar: 'حوالي ١٠٠ متر', en: '~100 m' }, { ar: '٧٫٧٣ كم', en: '7.73 km' }, { ar: '٤٥٫١٦ كم', en: '45.16 km' }] },
    { k: 'cPower', v: [{ ar: 'ألواح شمسية', en: 'Solar panels' }, { ar: 'ألواح شمسية', en: 'Solar panels' }, { ar: 'ألواح شمسية', en: 'Solar panels' }] },
    { k: 'cLanding', v: [{ ar: 'أكياس هوا', en: 'Airbags' }, { ar: 'أكياس هوا', en: 'Airbags' }, { ar: 'أكياس هوا', en: 'Airbags' }] },
  ],
};

export const ENDING = {
  curiosity: { name: 'Curiosity', lat: -4.59, lon: 137.44, year: 2012 },
  perseverance: { name: 'Perseverance', lat: 18.44, lon: 77.45, year: 2021 },
};

export const SOURCES = [
  ['NASA — Mars Exploration Rover: Spirit', 'https://science.nasa.gov/mission/mer-spirit/'],
  ['NASA — Mars Exploration Rover: Opportunity', 'https://science.nasa.gov/mission/mer-opportunity/'],
  ['NASA — Mars Pathfinder / Sojourner', 'https://science.nasa.gov/mission/mars-pathfinder/'],
  ['JPL — NASA’s Spirit Rover Completes Mission on Mars', 'https://www.jpl.nasa.gov/news/nasas-spirit-rover-completes-mission-on-mars'],
  ['NASA Photojournal PIA05547 — You are here: Earth as seen from Mars', 'https://science.nasa.gov/photojournal/you-are-here-earth-as-seen-from-mars/'],
  ['Spaceflight Now — Thousands of files deleted on Spirit to fix computer trouble (Feb 2004)', 'https://spaceflightnow.com/mars/mera/040201spirit.html'],
  ['NASA GISS — Mars24 Sunclock algorithm (Allison & McEwen 2000)', 'https://www.giss.nasa.gov/tools/mars24/help/algorithm.html'],
  ['NASA 3D Resources — Mars Exploration Rover model', 'https://science.nasa.gov/3d-resources/'],
  ['Snopes — Opportunity’s “final words” fact check', 'https://www.snopes.com/fact-check/opportunity-rovers-final-words/'],
  ['JPL — 20 Years After Landing: How NASA’s Twin Rovers Changed Mars Science (about 30 bounces)', 'https://www.jpl.nasa.gov/news/20-years-after-landing-how-nasas-twin-rovers-changed-mars-science/'],
  ['JPL — Mars Exploration Rover Spirit Mission Status, 4 Jan 2004 (bounced and rolled after impact)', 'https://www.jpl.nasa.gov/news/mars-exploration-rover-spirit-mission-status-2/'],
  ['NASA — 25 Years Ago: Mars Pathfinder launches (Sojourner drove about 100 m)', 'https://www.nasa.gov/?p=445143'],
  ['NASA podcast “On a Mission”: Before you can drive, first you have to fly (airbag landings)', 'https://www.nasa.gov/podcasts/on-a-mission/before-you-can-drive-first-you-have-to-fly-s4e9/'],
  ['Spaceflight Now — Giant airbags will give rovers’ landings a bounce (entry 5.4 km/s, parachute, 20 m bridle, airbags 8 s before touchdown)', 'https://spaceflightnow.com/mars/mera/031231landing.html'],
  ['Windows to the Universe (UCAR) — MER mission events timeline (launch dates, parachute, retro-rockets)', 'https://windows2universe.org/space_missions/mars/mars_exploration_rover/mission_events.html&edu=high'],
  ['NASA Earth Observatory — Blue Marble: Next Generation, Reto Stöckli (Earth in the expedition)', 'https://science.nasa.gov/earth/earth-observatory/blue-marble-next-generation/'],
  ['Solar System Scope — Mars & Milky Way textures (CC BY 4.0)', 'https://www.solarsystemscope.com/textures/'],
];
