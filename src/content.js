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
    { k: 'first', src: ['mpf25', 'mpfEnd', 'mpf10'], title: { ar: 'أول عجل على كوكب تاني', en: 'The first wheels on another planet' }, body: { ar: 'أنا أول عربية بعجل اشتغلت على كوكب غير الأرض. اتصممت أشتغل ٧ أيام، واشتغلت ٨٣ يوم. مشيت حوالي ١٠٠ متر، وحلّلت الصخور والتربة في ١٦ مكان حوالين المحطة، ولقيتها شبه الصخور البركانية اللي على الأرض. وصوّرت ٥٥٠ صورة.', en: 'I was the first wheeled vehicle ever driven on another planet. I was built for 7 days and worked for 83. I drove about 100 m, analysed rocks and soil at 16 places around the lander, and found they look like volcanic rocks on Earth. I also took 550 pictures.' } },
    { k: 'size', src: ['mpfNssdc', 'spirit'], title: { ar: 'قد إيه أنا صغيرة؟', en: 'How small am I?' }, body: { ar: 'طولي حوالي ٦٥ سم ووزني حوالي ١٠٫٦ كيلو بس، قد شنطة سفر صغيرة. Spirit وOpportunity وزن الواحد فيهم حوالي ١٨٠ كيلو، يعني أتقل مني ١٧ مرة!', en: 'I’m about 65 cm long and weigh only about 10.6 kg — like a small suitcase. Spirit and Opportunity weigh about 180 kg each, 17 times more than me!' } },
    { k: 'why', src: ['mpfEnd'], title: { ar: 'ليه سكتّ؟', en: 'Why did I go silent?' }, body: { ar: 'أنا ما كنتش بكلم الأرض مباشرة، كنت بكلم المحطة Pathfinder وهي توصّل كلامي. لما Pathfinder بعتت آخر إشارة يوم ٢٧ سبتمبر ١٩٩٧، فضلت أنا لوحدي من غير صوت.', en: 'I didn’t talk to Earth directly — the Pathfinder lander relayed my messages. When Pathfinder sent its last signal on 27 Sep 1997, I was left without a voice.' } },
    { k: 'legacy', legacy: 0, src: ['mpfJpl', 'ieeeSoj'], title: { ar: 'سبت إيه للي بعدي؟', en: 'What did I pass on?' }, body: { ar: 'طريقة الهبوط بأكياس الهوا والمحطة اللي بتفتح زي الوردة اتستخدموا تاني عشان ينزّلوا Spirit وOpportunity. وأثبتت إن روفر صغير يقدر يلف حوالين الصخور لوحده، وتصميم العجل الست بتاعي بقى الأساس لكل روفرات ناسا اللي جت بعدي.', en: 'My airbag landing and my flower-like opening lander were used again to land Spirit and Opportunity. I proved a small rover can steer around rocks by itself, and my six-wheel design became the base for every NASA Mars rover after me.' } },
  ],
  spirit: [
    { k: 'photo', src: ['earthDot'], title: { ar: 'النقطة دي… إحنا', en: 'That dot is us' }, body: { ar: 'يوم ٨ مارس ٢٠٠٤، قبل شروق الشمس بساعة، Spirit صوّر النقطة المنورة دي. دي الأرض! أول صورة للأرض اتاخدت من سطح كوكب أبعد من القمر. كل الناس اللي تعرفهم موجودين جوه النقطة دي.', en: 'On 8 March 2004, one hour before sunrise, Spirit photographed this bright dot. That’s Earth! The first image of Earth ever taken from the surface of a planet beyond the Moon. Everyone you know is inside that dot.' }, img: 'assets/PIA05547.jpg', w: 1194, h: 1007, credit: 'NASA/JPL/Cornell/Texas A&M · PIA05547' },
    { k: 'silica', src: ['silica', 'silicaAsu'], title: { ar: 'اكتشاف من عجلة بايظة', en: 'A discovery from a broken wheel' }, body: { ar: 'سنة ٢٠٠٦ عجلة من عجلاتي وقفت، فبقيت أسحبها ورايا. العجلة دي حفرت في الأرض وطلّعت تربة بيضا طلعت سيليكا شبه نقية، جنب مكان اسمه Home Plate. السيليكا دي بتتكوّن حوالين ينابيع مية سخنة أو فتحات بخار، وأماكن زي دي على الأرض مليانة حياة.', en: 'In 2006 one of my wheels stopped, so I dragged it behind me. That wheel dug up white soil that turned out to be almost pure silica, near a place called Home Plate. Silica like this forms around hot springs or steam vents — places that are full of life on Earth.' } },
    { k: 'legacy', legacy: 1, src: ['silica', 'twins20jpl'], title: { ar: 'سبت إيه للي بعدي؟', en: 'What did I pass on?' }, body: { ar: 'اكتشاف الينابيع السخنة غيّر السؤال: مش بس «كان فيه مية؟»… لأ، «هل المريخ كان ممكن يعيش فيه كائنات؟». وده بالظبط السؤال اللي Curiosity اتبعت عشانه.', en: 'Finding signs of hot springs changed the question from “was there water?” to “could Mars once have supported life?” — exactly the question Curiosity was sent to answer.' } },
  ],
  opportunity: [
    { k: 'hole', src: ['oppEnd'], title: { ar: 'هدف من أول لمسة', en: 'A hole-in-one landing' }, body: { ar: 'أكياس الهوا بتاعتي نطّت ودحرجتني جوه فوهة صغيرة اسمها Eagle. ولما فتحت كاميراتي لقيت حرفها كله صخور طبقات مكشوفة قدامي على طول! المهندسين سمّوها «hole-in-one» زي الجولف.', en: 'My airbags bounced and rolled me into a small crater called Eagle. When I opened my cameras, its rim was lined with exposed layered bedrock right in front of me! The engineers called it a “hole-in-one”, like in golf.' } },
    { k: 'berries', src: ['twins20'], title: { ar: 'التوت الأزرق اللي مش توت', en: 'Blueberries that aren’t berries' }, body: { ar: 'لقيت كور صغيرة قد حبة الخرز مالية الأرض، العلماء سمّوها «توت أزرق». طلعت معدن اسمه الهيماتيت، واتكوّنت في مية حمضية زمان. دي كانت من أهم الأدلة إن المكان ده كان غرقان مية في الماضي.', en: 'I found tiny balls, the size of beads, all over the ground. Scientists nicknamed them “blueberries”. They are made of a mineral called hematite that formed in acidic water long ago — one of the strongest clues that this place was once soaked in water.' } },
    { k: 'gypsum', src: ['opp', 'gypsum'], title: { ar: 'خط أبيض… دليل قوي', en: 'A white line, a strong clue' }, body: { ar: 'سنة ٢٠٠٥ لقيت صخرة طلعت نيزك من حديد ونيكل جنب درع الحرارة بتاعي. وبعد رحلة ٣ سنين لفوهة Endeavour (عرضها حوالي ٢٢ كم)، لقيت عروق بيضا من معدن الجبس، اتكوّنت من مية جرت في شقوق تحت الأرض. فريقي قال إنه أقوى دليل على المية شافوه معايا.', en: 'In 2005 I found a rock near my heat shield that turned out to be an iron-nickel meteorite. After a 3-year drive to Endeavour Crater (about 22 km wide), I found bright veins of gypsum, left by water flowing through underground cracks. My team called it the strongest evidence for water they had seen with me.' } },
    { k: 'legacy', legacy: 2, src: ['oppEnd', 'record', 'twins20jpl'], title: { ar: 'سبت إيه للي بعدي؟', en: 'What did I pass on?' }, body: { ar: 'مشيت ٤٥٫١٦ كم، وفضل ده أطول مسافة اتمشت على عالم تاني لحد ١١ أكتوبر ٢٠٢٦، لما Perseverance عدّاني. واكتشافاتي أنا وSpirit عن المية كانت جزء من سبب إن ناسا وافقت تبعت Curiosity عشان تشوف: هل مكونات الحياة كانت موجودة على المريخ؟', en: 'I drove 45.16 km — the longest drive on another world until 11 October 2026, when Perseverance passed me. What Spirit and I found about water is part of why NASA approved Curiosity, to check whether the ingredients for life were once on Mars.' } },
  ],
};


// "The last footprint": where each rover stopped, what it did last, its last signal. And where it is now, seen from orbit.
export const LAST = {
  sojourner: {
    last: { src: ['sojStimpy', 'sojChimp', 'mpfEnd'], img: 'assets/PIA00971.jpg', w: 446, h: 218, credit: 'NASA/JPL · PIA00971',
      ar: 'آخر صخرة درستها كان اسمها Stimpy. وآخر صور ليا من المحطة بتوريني جنب صخرة كبيرة اسمها Chimp، على بعد ١٢٫٣ متر من المحطة، وده أبعد مكان وصلتله. آخر إشارة من المحطة كانت يوم ٢٧ سبتمبر ١٩٩٧، في اليوم المريخي ٨٣.',
      en: 'The last rock I studied was called Stimpy. The last pictures of me, taken by the lander, show me beside a big rock called Chimp, 12.3 m from the lander — the farthest I ever went. The lander’s last signal came on 27 September 1997, sol 83.' },
    now: { src: ['mpfOrbit'],
      ar: 'سنة ٢٠٠٦ الكاميرا HiRISE على المركبة MRO صوّرت مكان هبوطي من المدار: المحطة وأكياس الهوا باينين، وكمان حاجة صغيرة العلماء رجّحوا إنها أنا. ويمكن أكون اتحركت شوية ناحية المحطة بعد آخر إرسال.',
      en: 'In 2006 the HiRISE camera on the Mars Reconnaissance Orbiter photographed my landing site from orbit: the lander and airbags are visible, and so is a small object scientists think is probably me. I may have moved a little closer to the lander after its last transmission.' },
  },
  spirit: {
    last: { src: ['troyOrbit', 'troyWater', 'spiritEnd'],
      ar: 'سنة ٢٠٠٩ عجلي غرزت في تربة ناعمة جداً في مكان اسمه Troy، جنب الهضبة اللي اسمها Home Plate. ما قدرتش أطلع، بس فضلت أشتغل: درست التربة اللي عجلي كشفتها، ولقيت دليل إن مية اتسربت تحت السطح. ولما الشتا جه ما قدرتش أميّل ألواحي ناحية الشمس، وآخر إشارة مني كانت يوم ٢٢ مارس ٢٠١٠.',
      en: 'In 2009 my wheels sank into very soft soil at a place called Troy, beside a plateau called Home Plate. I couldn’t get out, but I kept working: I studied the soil my wheels had uncovered and found evidence that water had seeped below the surface. When winter came I couldn’t tilt my solar panels toward the Sun, and my last signal came on 22 March 2010.' },
    now: { src: ['troyOrbit'], img: 'assets/PIA12205.jpg', w: 731, h: 597, mark: [26.7, 47.7], credit: 'NASA/JPL-Caltech/Univ. of Arizona · PIA12205',
      ar: 'يوم ١٣ يونيو ٢٠٠٩ الكاميرا HiRISE صوّرتني من المدار وأنا محشور في Troy: النقطة المنورة على شمال Home Plate، الهضبة الفاتحة اللي عرضها حوالي ٨٠ متر. ولسه هناك لحد النهارده.',
      en: 'On 13 June 2009 the HiRISE camera photographed me from orbit while I was stuck at Troy: I’m the bright dot to the left of Home Plate, the pale plateau about 80 m across. I’m still there today.' },
  },
  opportunity: {
    last: { src: ['oppFinal', 'twins'], img: 'assets/PIA22908.jpg', w: 1800, h: 402, credit: 'NASA/JPL-Caltech/Cornell/ASU · PIA22908',
      ar: 'من ١٣ مايو لـ ١٠ يونيو ٢٠١٨ صوّرت آخر بانوراما ليا: ٣٥٤ صورة لمكاني في Perseverance Valley، وكنت بدرس صخرة لما العاصفة الترابية جت. شوية صور فضلت أبيض وأسود لأني ما لحقتش أكملها. وآخر صور خالص كانت صورتين صغيرين لسما ضلمة، فيهم نقطة باهتة هي الشمس. آخر إشارة مني: ١٠ يونيو ٢٠١٨.',
      en: 'From 13 May to 10 June 2018 I took my last panorama: 354 pictures of my spot in Perseverance Valley, where I was studying a rock when the dust storm arrived. A few frames stayed black-and-white because I ran out of time. My very last pictures were two tiny shots of a dark sky with a faint dot — the Sun. My last signal: 10 June 2018.' },
    now: { src: ['oppOrbit'],
      ar: 'يوم ٢٠ سبتمبر ٢٠١٨، بعد ما العاصفة هديت، الكاميرا HiRISE صوّرتني من ارتفاع حوالي ٢٦٧ كم: نقطة صغيرة في نص Perseverance Valley، على الحافة الغربية لفوهة Endeavour. ولسه مستني هناك.',
      en: 'On 20 September 2018, after the storm cleared, the HiRISE camera photographed me from about 267 km up: a small dot halfway down Perseverance Valley, on the western rim of Endeavour Crater. I’m still waiting there.' },
  },
};

// "From footprint to footprint": what each mission found, and what it passed on to the next one.
// Every line here is checked against the sources listed under SOURCES.
export const LEGACY = [
  { id: 'sojourner', name: 'Sojourner', year: 1997, ended: true, src: ['mpf25', 'mpfJpl', 'ieeeSoj', 'mpfFact'],
    found: { ar: 'أول روفر على كوكب تاني. نزلت بأكياس هوا، ولفّت حوالين الصخور لوحدها، وحلّلت صخور شبه البركانية اللي عندنا.', en: 'The first rover on another planet. It landed with airbags, steered around rocks by itself, and analysed rocks that look like Earth’s volcanic rocks.' },
    gave: { ar: 'طريقة الهبوط بأكياس الهوا اتستخدمت تاني مع Spirit وOpportunity، وتصميم العجل الست بقى أساس كل روفر بعدها.', en: 'Its airbag landing was used again for Spirit and Opportunity, and its six-wheel design became the base for every rover after it.' } },
  { id: 'spirit', name: 'Spirit', year: 2004, ended: true, src: ['silica', 'silicaAsu', 'twins20jpl'],
    found: { ar: 'عجلته البايظة حفرت ولقت سيليكا شبه نقية، علامة على ينابيع مية سخنة زمان.', en: 'Its broken wheel dug up almost pure silica, a sign of ancient hot springs.' },
    gave: { ar: 'السؤال كبر: مش بس «كان فيه مية؟» لكن «هل المريخ كان ممكن يعيش فيه كائنات؟».', en: 'The question grew: not just “was there water?” but “could Mars have supported life?”' } },
  { id: 'opportunity', name: 'Opportunity', year: 2004, ended: true, src: ['twins20', 'gypsum', 'record', 'twins20jpl'],
    found: { ar: 'لقى «التوت الأزرق» من الهيماتيت وعروق الجبس، أدلة قوية إن المية جرت زمان. ومشي ٤٥٫١٦ كم، أطول مسافة على عالم تاني لسنين.', en: 'It found hematite “blueberries” and gypsum veins — strong proof that water once flowed — and drove 45.16 km, the longest drive on another world for years.' },
    gave: { ar: 'اكتشافات Spirit وOpportunity كانت جزء من سبب إن ناسا وافقت تبني Curiosity.', en: 'What Spirit and Opportunity found is part of why NASA approved building Curiosity.' } },
  { id: 'curiosity', name: 'Curiosity', year: 2012, ended: false, src: ['twins20jpl', 'curiosity', 'perse'],
    found: { ar: 'اتبعت تسأل: هل مكونات الحياة كانت موجودة؟ وبعد ما نزلت بشوية لقت إنها كانت موجودة، وإن فوهة Gale كان فيها بحيرة زمان.', en: 'Sent to ask: were the ingredients for life there? Soon after landing it found they were — and that Gale Crater once held a lake.' },
    gave: { ar: 'بما إن المريخ كان صالح للحياة، الخطوة الجاية: ندوّر على علامات الحياة نفسها.', en: 'Since Mars was once habitable, the next step was to look for signs of life itself.' } },
  { id: 'perseverance', name: 'Perseverance', year: 2021, ended: false, src: ['perse', 'msr', 'bio', 'record'],
    found: { ar: 'بيدوّر على علامات حياة قديمة في فوهة Jezero، وبيجمع عينات صخور ممكن ترجع الأرض في المستقبل. وسنة ٢٠٢٥ ناسا قالت إن عينة منهم فيها «علامة حيوية محتملة» لسه محتاجة دراسة. ويوم ١١ أكتوبر ٢٠٢٦ عدّى مسافة Opportunity وبقى صاحب أطول مسافة على عالم تاني.', en: 'It searches Jezero Crater for signs of ancient life and collects rock samples that could come back to Earth. In 2025 NASA said one sample holds a “potential biosignature” that still needs study. On 11 October 2026 it passed Opportunity’s distance, becoming the record holder for driving on another world.' },
    gave: { ar: 'العينات دي ممكن تجاوب يوم من الأيام على أكبر سؤال: هل كان فيه حياة على المريخ؟', en: 'One day these samples could help answer the biggest question: was there ever life on Mars?' } },
];

// The final check: what did the student learn? (one question per rover, then the legacy)
export const FINAL_QUIZ = [
  { s: { ar: 'إيه أهم حاجة Sojourner أثبتتها للروفرات اللي بعدها؟', en: 'What was the most important thing Sojourner proved for later rovers?' },
    options: [
      { t: { ar: 'إن روفر صغير ينفع ينزل بأكياس هوا ويلف حوالين الصخور لوحده', en: 'A small rover can land with airbags and steer around rocks by itself' }, ok: true },
      { t: { ar: 'إن الروفرات تقدر تطير فوق المريخ', en: 'Rovers can fly over Mars' } },
      { t: { ar: 'إن المريخ فيه محيطات النهارده', en: 'Mars has oceans today' } },
    ],
    why: { ar: 'Sojourner كانت تجربة تقنية، ونجاحها خلّى ناسا تستخدم نفس طريقة الهبوط ونفس فكرة العجل الست تاني.', en: 'Sojourner was a technology test. Its success let NASA reuse the same landing method and six-wheel idea.' } },
  { s: { ar: 'عجلة Spirit البايظة كشفت عن إيه؟', en: 'What did Spirit’s broken wheel uncover?' },
    options: [
      { t: { ar: 'تلج تحت الرمل', en: 'Ice under the sand' } },
      { t: { ar: 'سيليكا شبه نقية، علامة على ينابيع مية سخنة زمان', en: 'Almost pure silica — a sign of ancient hot springs' }, ok: true },
      { t: { ar: 'حفرية لكائن حي', en: 'A fossil of a living thing' } },
    ],
    why: { ar: 'السيليكا دي بتتكوّن حوالين الينابيع السخنة وفتحات البخار، وأماكن زي دي على الأرض بيعيش فيها كائنات.', en: 'This silica forms around hot springs and steam vents — on Earth, places like these are home to life.' } },
  { s: { ar: '«التوت الأزرق» اللي Opportunity لقاه اتكوّن إزاي؟', en: 'How did the “blueberries” Opportunity found form?' },
    options: [
      { t: { ar: 'نزلوا مع المطر من السما', en: 'They fell from the sky as rain' } },
      { t: { ar: 'دي فاكهة حقيقية', en: 'They are real fruit' } },
      { t: { ar: 'اتكوّنوا في مية زمان', en: 'They formed in water long ago' }, ok: true },
    ],
    why: { ar: 'الكور الصغيرة دي من معدن الهيماتيت، واتكوّنت في مية حمضية، فبقت دليل إن المكان كان غرقان مية.', en: 'These small balls are made of hematite that formed in acidic water — proof that the area was once soaked.' } },
  { s: { ar: 'إزاي Spirit وOpportunity ساعدوا Curiosity؟', en: 'How did Spirit and Opportunity help Curiosity?' },
    options: [
      { t: { ar: 'اكتشافاتهم عن المية خلّت ناسا تبعت Curiosity تدوّر على مكونات الحياة', en: 'Their water discoveries led NASA to send Curiosity to look for the ingredients of life' }, ok: true },
      { t: { ar: 'سلّموها قطع غيار', en: 'They handed it spare parts' } },
      { t: { ar: 'ما ساعدوهاش، كل مهمة لوحدها', en: 'They didn’t — every mission is on its own' } },
    ],
    why: { ar: 'كل مهمة بتبني على اللي قبلها: الأول دوّرنا على المية، بعدين على الظروف المناسبة للحياة، ودلوقتي على علامات الحياة نفسها.', en: 'Each mission builds on the last: first we looked for water, then for conditions for life, and now for signs of life itself.' } },
  { s: { ar: 'Perseverance بيعمل إيه ماحدش من الروفرات اللي قبله عمله؟', en: 'What is Perseverance doing that no rover before it did?' },
    options: [
      { t: { ar: 'بيدوّر على المية لأول مرة', en: 'Looking for water for the first time' } },
      { t: { ar: 'بيجمع عينات صخور ممكن ترجع الأرض', en: 'Collecting rock samples that could come back to Earth' }, ok: true },
      { t: { ar: 'نزل بأكياس هوا', en: 'Landing with airbags' } },
    ],
    why: { ar: 'Perseverance بيحفظ عينات في أنابيب، ومهمة جاية ممكن ترجّعها الأرض عشان العلماء يدرسوها بأجهزة أقوى.', en: 'Perseverance seals samples in tubes so a future mission could bring them to Earth for study with stronger instruments.' } },
];

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

import { SRC } from './sources.js';
// every source, once, in the order of the keyed list
export const SOURCES = Object.values(SRC);

// ---------- Ghost Hardware Atlas: the Moon, Mars and deeper space ----------
// Mars (the three rovers) is the full experience; the rest is shown as "coming soon",
// each with one checked line and its NSSDCA entry, so the plan for the project is clear.
export const ATLAS = {
  worlds: [
    { id: 'mars', img: 'assets/PIA00407.jpg', credit: 'NASA/JPL/USGS · PIA00407', imgSrc: ['imgMars'], ready: true },
    { id: 'moon', img: 'assets/PIA00405.jpg', credit: 'NASA/JPL/USGS · PIA00405', imgSrc: ['imgMoon'], ready: false },
    { id: 'space', img: 'assets/PIA21906.jpg', credit: 'NASA/JPL-Caltech/UCLA/MPS/DLR/IDA · PIA21906', imgSrc: ['imgCeres'], ready: false },
  ],
  moon: [
    { id: 'eagle', name: 'Apollo 11 · Eagle', year: '1969', src: ['nsEagle', 'apollo11Home'],
      ar: 'النص التحتاني من مركبة Apollo 11 واقف على القمر من 20 يوليو 1969. كان منصة الإطلاق اللي رجّعت الرواد.',
      en: 'The lower half of Apollo 11’s lander has stood on the Moon since 20 July 1969. It was the launch pad that sent the astronauts home.' },
    { id: 'lrv', name: 'Lunar Roving Vehicles', year: '1971–1972', src: ['lrvNssdc'],
      ar: 'تلات عربيات كهربا ساقها رواد Apollo 15 و16 و17، ولسه مركونين على القمر. عربية Apollo 17 لوحدها مشيت حوالي 36 كم.',
      en: 'Three electric cars driven by the Apollo 15, 16 and 17 crews, still parked on the Moon. Apollo 17’s alone drove about 36 km.' },
    { id: 'alsep', name: 'ALSEP', year: '1969–1977', src: ['alsepNtrs', 'nsA15'],
      ar: 'محطات علمية سابها الرواد ورا منهم. أجهزة رصد الزلازل فيها سجّلت هزّات القمر لحد ما اتقفلت يوم 30 سبتمبر 1977.',
      en: 'Science stations the astronauts left behind. Their seismometers recorded moonquakes until they were switched off on 30 September 1977.' },
    { id: 'surveyor1', name: 'Surveyor 1', year: '1966', src: ['nsS1', 'surveyor1Nasa'],
      ar: 'أول مركبة أمريكية تنزل على القمر بهدوء (2 يونيو 1966). أثبتت إن الأرض هناك تشيل مركبة، قبل ما البشر يروحوا.',
      en: 'The first US spacecraft to soft-land on the Moon (2 June 1966). It showed the ground could hold a lander, before people went.' },
    { id: 'surveyor3', name: 'Surveyor 3', year: '1967', src: ['nsS3'],
      ar: 'نزلت سنة 1967. وبعدها بسنتين ونص، رواد Apollo 12 مشيوا لحدّها ورجّعوا الكاميرا بتاعتها للأرض.',
      en: 'Landed in 1967. Two and a half years later, Apollo 12 astronauts walked over and brought its camera back to Earth.' },
  ],
  mars: [
    { id: 'viking1', name: 'Viking 1 Lander', year: '1976', lat: 22.48, lon: -49.97, src: ['nsV1'],
      ar: 'أول مركبة أمريكية تشتغل على سطح المريخ (20 يوليو 1976). صوّرت أول صور واضحة من السطح، واشتغلت لحد نوفمبر 1982.',
      en: 'The first US lander to work on Mars (20 July 1976). It sent the first clear pictures from the surface and kept working until November 1982.' },
    { id: 'viking2', name: 'Viking 2 Lander', year: '1976', lat: 47.97, lon: 134.26, src: ['nsV2'],
      ar: 'نزلت في سهل Utopia Planitia يوم 3 سبتمبر 1976، واشتغلت لحد أبريل 1980.',
      en: 'Landed on the plain of Utopia Planitia on 3 September 1976 and worked until April 1980.' },
    { id: 'pathfinder', name: 'Pathfinder lander', year: '1997', pin: false, src: ['pathfinderEnd'],
      ar: 'المركبة اللي نزّلت Sojourner، واسمها «محطة كارل ساجان التذكارية». آخر بيانات منها وصلت يوم 27 سبتمبر 1997.',
      en: 'The lander that carried Sojourner, named the Carl Sagan Memorial Station. Its last data arrived on 27 September 1997.' },
    { id: 'phoenix', name: 'Phoenix', year: '2008', lat: 68.22, lon: -125.7, src: ['nsPhoenix', 'phoenixJpl'],
      ar: 'نزلت قريب من القطب الشمالي سنة 2008، وحفرت لحد ما لقت تلج مية تحت التربة. آخر إشارة منها 2 نوفمبر 2008.',
      en: 'Landed near the north pole in 2008 and dug down to water ice under the soil. Its last signal came on 2 November 2008.' },
    { id: 'insight', name: 'InSight', year: '2018', lat: 4.5, lon: 135.62, src: ['nsInsight', 'insightEnd'],
      ar: 'كانت بتسمع قلب المريخ: سجّلت 1,319 زلزال مريخي، لحد ما التراب غطّى ألواحها الشمسية في ديسمبر 2022.',
      en: 'It listened to the heart of Mars, recording 1,319 marsquakes until dust covered its solar panels in December 2022.' },
    { id: 'ingenuity', name: 'Ingenuity', year: '2021', lat: 18.9, lon: 77.0, src: ['nsM2020', 'ingenuityEnd'],
      ar: 'أول طيارة على كوكب تاني. طارت 72 مرة، ولما ريشة فيها اتكسرت في يناير 2024، فضلت واقفة مكانها.',
      en: 'The first aircraft on another world. It flew 72 times; after a rotor blade broke in January 2024, it stayed where it landed.' },
  ],
  space: [
    { id: 'pioneer10', name: 'Pioneer 10', year: '1972', src: ['nsP10', 'pioneerLast'],
      ar: 'أول مركبة تعدّي حزام الكويكبات وتزور المشتري (1973). آخر إشارة ضعيفة منها يناير 2003، ولسه ماشية لبرّه المجموعة الشمسية.',
      en: 'The first spacecraft to cross the asteroid belt and visit Jupiter (1973). Its last faint signal came in January 2003, and it is still heading out of the solar system.' },
    { id: 'pioneer11', name: 'Pioneer 11', year: '1973', src: ['nsP11', 'pioneerLast'],
      ar: 'أول مركبة تطير جنب زحل (1979). آخر إرسال منها وصل في سبتمبر 1995.',
      en: 'The first spacecraft to fly past Saturn (1979). Its last transmission arrived in September 1995.' },
    { id: 'dawn', name: 'Dawn', year: '2007', src: ['nsDawn', 'dawnEnd'],
      ar: 'لفّت حوالين فيستا وسيريس، أكبر جسمين في حزام الكويكبات. الوقود خلص سنة 2018، ولسه بتلف حوالين سيريس.',
      en: 'It orbited Vesta and Ceres, the two largest bodies in the asteroid belt. It ran out of fuel in 2018 and still circles Ceres.' },
    { id: 'near', name: 'NEAR Shoemaker', year: '1996', src: ['nsNear', 'nearNasa'],
      ar: 'أول مركبة تلف حوالين كويكب وتنزل عليه: نزلت على الكويكب إيروس يوم 12 فبراير 2001.',
      en: 'The first spacecraft to orbit an asteroid and land on one: it touched down on Eros on 12 February 2001.' },
    { id: 'kepler', name: 'Kepler', year: '2009', src: ['nsKepler', 'keplerEnd'],
      ar: 'تلسكوب صيّاد كواكب: لقى أكتر من 2,600 كوكب برّه مجموعتنا الشمسية، والوقود خلص في أكتوبر 2018.',
      en: 'A planet-hunting telescope that found more than 2,600 planets beyond our solar system. It ran out of fuel in October 2018.' },
  ],
};
