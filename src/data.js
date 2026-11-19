// AI disclosure (NASA Space Apps SI rules): written by Team 3M with AI coding assistance from Claude (Anthropic).
export const ROVERS = [
 {
  "id": "sojourner",
  "name": "Sojourner",
  "mission": "Mars Pathfinder",
  "site": "Ares Vallis",
  "coords": "19.13°N 33.22°W",
  "status_ar": "ساكتة من ٢٧ سبتمبر ١٩٩٧",
  "status_en": "Silent since 27 Sep 1997",
  "voice": {
   "pitch": 1.18,
   "speed": 1.05
  },
  "stats": [
   {
    "ar_label": "نزلت على المريخ",
    "ar": "٤ يوليو ١٩٩٧",
    "en_label": "Landed on Mars",
    "en": "4 Jul 1997"
   },
   {
    "ar_label": "العمر المخطط",
    "ar": "٧ أيام مريخية",
    "en_label": "Planned life",
    "en": "7 sols"
   },
   {
    "ar_label": "اشتغلت فعلًا",
    "ar": "حوالي ٨٣ يوم",
    "en_label": "Actually worked",
    "en": "about 83 sols"
   },
   {
    "ar_label": "الوزن",
    "ar": "حوالي ١٠ كيلو",
    "en_label": "Mass",
    "en": "about 10 kg"
   },
   {
    "ar_label": "آخر اتصال",
    "ar": "٢٧ سبتمبر ١٩٩٧",
    "en_label": "Last contact",
    "en": "27 Sep 1997"
   }
  ],
  "source": "https://science.nasa.gov/mission/mars-pathfinder/",
  "lines": [
   {
    "kind": "fiction",
    "ar": "…هه؟ مين صحّاني؟ شكرًا ليك! أنا Sojourner، أصغر روفر في الحكاية… وأول عربية بعجل تمشي على كوكب تاني!",
    "tts_ar": "هه؟ مين صحّاني؟ شكرا ليك! أنا سوجورنر، أصغر روفر في الحكاية. وأول عربية بعجل تمشي على كوكب تاني!",
    "en": "…Huh? Who woke me up? Thank you! I'm Sojourner, the smallest rover in this story… and the first wheeled vehicle to drive on another planet!",
    "audio_en": "audio/sojourner_1_en.mp3"
   },
   {
    "kind": "fiction",
    "ar": "هقولك سر: أنا ساكتة من سنة ١٩٩٧، والطاقة دي جاية من خيالك. بس اللي عملته لسه العلماء فاكرينه لحد النهارده.",
    "tts_ar": "هقولك سر: أنا ساكتة من سنة 1997، والطاقة دي جاية من خيالك. بس اللي عملته لسه العلماء فاكرينه لحد النهارده.",
    "en": "Here's a secret: I've been silent since 1997, and this energy comes from your imagination. But scientists still remember what I did.",
    "audio_en": "audio/sojourner_2_en.mp3"
   },
   {
    "kind": "fact",
    "ar": "نزلت على المريخ يوم ٤ يوليو ١٩٩٧ جوه وادي اسمه Ares Vallis، ونطّيت على الأرض جوه أكياس هوا زي الكورة! كان مخطط أشتغل ٧ أيام بس… واشتغلت حوالي ٨٣ يوم.",
    "tts_ar": "نزلت على المريخ يوم 4 يوليو 1997 جوه وادي اسمه آريس فاليس، ونطّيت على الأرض جوه أكياس هوا زي الكورة! كان مخطط أشتغل 7 أيام بس، واشتغلت حوالي 83 يوم.",
    "en": "I landed on Mars on 4 July 1997 in a valley called Ares Vallis, bouncing on the ground inside airbags like a ball! I was planned to work for just 7 days… and I worked for about 83.",
    "audio_en": "audio/sojourner_3_en.mp3",
    "src": [
     "mpfFact",
     "mpfEnd"
    ]
   },
   {
    "kind": "fact",
    "ar": "وزني حوالي ١٠ كيلو بس، وكنت بفحص الصخور بجهاز في ضهري. والعلماء سمّوا الصخور اللي حواليّا أسامي لطيفة زي Barnacle Bill و Yogi!",
    "tts_ar": "وزني حوالي 10 كيلو بس، وكنت بفحص الصخور بجهاز في ضهري. والعلماء سمّوا الصخور اللي حواليا أسامي لطيفة زي بارناكل بيل ويوجي!",
    "en": "I weighed only about 10 kilograms, and I studied rocks with an instrument on my back. Scientists gave the rocks around me fun names like Barnacle Bill and Yogi!",
    "audio_en": "audio/sojourner_4_en.mp3",
    "src": [
     "mpfNssdc",
     "mpfRocks"
    ]
   },
   {
    "kind": "fact",
    "ar": "الوادي اللي نزلت فيه اتحفر من فيضانات مية ضخمة من زمان أوي، والصخور اللي فحصتها ساعدت العلماء يفهموا إن المريخ كان فيه مية كتير.",
    "tts_ar": "الوادي اللي نزلت فيه اتحفر من فيضانات مية ضخمة من زمان أوي، والصخور اللي فحصتها ساعدت العلماء يفهموا إن المريخ كان فيه مية كتير.",
    "en": "The valley I landed in was carved by huge floods long ago, and the rocks I studied helped scientists understand that Mars once had a lot of water.",
    "audio_en": "audio/sojourner_5_en.mp3",
    "src": [
     "mpfFact"
    ]
   },
   {
    "kind": "fact",
    "ar": "في سبتمبر ١٩٩٧ المحطة اللي كنت بكلّم الأرض من خلالها سكتت، فبقيت لوحدي. بس أنا اللي فتحت الطريق لكل الروفرز اللي جم بعدي.",
    "tts_ar": "في سبتمبر 1997 المحطة اللي كنت بكلّم الأرض من خلالها سكتت، فبقيت لوحدي. بس أنا اللي فتحت الطريق لكل الروفرز اللي جم بعدي.",
    "en": "In September 1997, the lander I used to talk to Earth went silent, and I was left alone. But I opened the road for every rover that came after me.",
    "audio_en": "audio/sojourner_6_en.mp3",
    "src": [
     "mpfEnd",
     "mpfJpl"
    ]
   }
  ]
 },
 {
  "id": "spirit",
  "name": "Spirit",
  "mission": "MER-A",
  "site": "Gusev Crater",
  "coords": "14.57°S 175.47°E",
  "status_ar": "ساكت من ٢٢ مارس ٢٠١٠",
  "status_en": "Silent since 22 Mar 2010",
  "voice": {
   "pitch": 1.0,
   "speed": 1.0
  },
  "stats": [
   {
    "ar_label": "نزل على المريخ",
    "ar": "٤ يناير ٢٠٠٤",
    "en_label": "Landed on Mars",
    "en": "4 Jan 2004"
   },
   {
    "ar_label": "العمر المخطط",
    "ar": "٩٠ يوم مريخي",
    "en_label": "Planned life",
    "en": "90 sols"
   },
   {
    "ar_label": "اشتغل فعلًا",
    "ar": "+٢٢٠٠ يوم مريخي",
    "en_label": "Actually worked",
    "en": "2,200+ sols"
   },
   {
    "ar_label": "المسافة",
    "ar": "٧٫٧ كم",
    "en_label": "Distance",
    "en": "7.7 km"
   },
   {
    "ar_label": "آخر اتصال",
    "ar": "٢٢ مارس ٢٠١٠",
    "en_label": "Last contact",
    "en": "22 Mar 2010"
   }
  ],
  "source": "https://science.nasa.gov/mission/mer-spirit/",
  "lines": [
   {
    "kind": "fiction",
    "ar": "…إيه ده؟ … أنا صحيت؟! شكرًا إنك صحّيتني! أنا Spirit، روفر من ناسا.",
    "tts_ar": "إيه ده؟ أنا صحيت؟! شكرا إنك صحّيتني! أنا سبيريت، روفر من ناسا.",
    "en": "…What was that? … Am I awake?! Thank you for waking me up! I'm Spirit, a NASA rover.",
    "audio_en": "audio/spirit_1_en.mp3"
   },
   {
    "kind": "fiction",
    "ar": "هقولك سر: أنا في الحقيقة ساكت من ٢٢ مارس ٢٠١٠، والطاقة دي جاية من خيالك. بس اللي اكتشفته لسه عايش لحد النهارده.",
    "tts_ar": "هقولك سر: أنا في الحقيقة ساكت من 22 مارس 2010، والطاقة دي جاية من خيالك. بس اللي اكتشفته لسه عايش لحد النهارده.",
    "en": "Here's a secret: I've really been silent since 22 March 2010, and this energy comes from your imagination. But what I discovered is still alive today.",
    "audio_en": "audio/spirit_2_en.mp3"
   },
   {
    "kind": "fact",
    "ar": "نزلت على المريخ يوم ٤ يناير ٢٠٠٤ جوه فوهة اسمها جوسيف. كانوا مخططين أشتغل ٩٠ يوم مريخي بس… وأنا اشتغلت أكتر من ٢٢٠٠!",
    "tts_ar": "نزلت على المريخ يوم 4 يناير 2004 جوه فوهة اسمها جوسيف. كانوا مخططين أشتغل 90 يوم مريخي بس، وأنا اشتغلت أكتر من 2200!",
    "en": "I landed on Mars on 4 January 2004, inside Gusev Crater. I was planned to work for just 90 Martian days… and I worked for more than 2,200!",
    "audio_en": "audio/spirit_3_en.mp3",
    "src": [
     "spirit",
     "spiritEnd"
    ]
   },
   {
    "kind": "fact",
    "ar": "سنة ٢٠٠٦ عجلتي الأمامية اليمين بطّلت تلف، فبقيت أمشي لورا وأنا بجرّها. وتخيّل؟ العجلة دي حفرت الأرض وكشفت تربة كلها تقريبًا سيليكا، ودي علامة إن زمان كان فيه مية سخنة هنا.",
    "tts_ar": "سنة 2006 عجلتي الأمامية اليمين بطّلت تلف، فبقيت أمشي لورا وأنا بجرّها. وتخيّل؟ العجلة دي حفرت الأرض وكشفت تربة كلها تقريبا سيليكا، ودي علامة إن زمان كان فيه مية سخنة هنا.",
    "en": "In 2006 my right front wheel stopped turning, so I drove backwards, dragging it. And guess what? That wheel dug up soil that was almost pure silica, a sign that hot water once existed here.",
    "audio_en": "audio/spirit_4_en.mp3",
    "src": [
     "silica",
     "silicaAsu"
    ]
   },
   {
    "kind": "fact",
    "ar": "سنة ٢٠٠٩ غرزت في رمل ناعم في مكان اسمه Troy. وفي ٢٠١٠ جه الشتا والطاقة خلصت، وبطّلت أتكلم.",
    "tts_ar": "سنة 2009 غرزت في رمل ناعم في مكان اسمه تروي. وفي 2010 جه الشتا والطاقة خلصت، وبطّلت أتكلم.",
    "en": "In 2009 I got stuck in soft sand at a place called Troy. In 2010 winter came, my power ran out, and I stopped talking.",
    "audio_en": "audio/spirit_5_en.mp3",
    "src": [
     "troyOrbit",
     "spiritEnd"
    ]
   },
   {
    "kind": "fact",
    "ar": "بس آثاري لسه هنا: ٧٫٧ كيلومتر مشيتهم على المريخ. تحب تكتشف رحلتي؟",
    "tts_ar": "بس آثاري لسه هنا: سبعة كيلو وسبعمية متر مشيتهم على المريخ. تحب تكتشف رحلتي؟",
    "en": "But my footprints are still here: 7.7 kilometres driven on Mars. Want to explore my journey?",
    "audio_en": "audio/spirit_6_en.mp3",
    "src": [
     "spiritEnd"
    ]
   }
  ]
 },
 {
  "id": "opportunity",
  "name": "Opportunity",
  "mission": "MER-B",
  "site": "Meridiani Planum",
  "coords": "1.95°S 354.47°E",
  "status_ar": "ساكت من ١٠ يونيو ٢٠١٨",
  "status_en": "Silent since 10 Jun 2018",
  "voice": {
   "pitch": 0.88,
   "speed": 0.95
  },
  "stats": [
   {
    "ar_label": "نزل على المريخ",
    "ar": "٢٥ يناير ٢٠٠٤",
    "en_label": "Landed on Mars",
    "en": "25 Jan 2004"
   },
   {
    "ar_label": "العمر المخطط",
    "ar": "٩٠ يوم مريخي",
    "en_label": "Planned life",
    "en": "90 sols"
   },
   {
    "ar_label": "اشتغل فعلًا",
    "ar": "حوالي ١٥ سنة",
    "en_label": "Actually worked",
    "en": "about 15 years"
   },
   {
    "ar_label": "المسافة",
    "ar": "+٤٥ كم",
    "en_label": "Distance",
    "en": "45+ km"
   },
   {
    "ar_label": "آخر اتصال",
    "ar": "١٠ يونيو ٢٠١٨",
    "en_label": "Last contact",
    "en": "10 Jun 2018"
   }
  ],
  "source": "https://science.nasa.gov/mission/mer-opportunity/",
  "lines": [
   {
    "kind": "fiction",
    "ar": "…آه؟ أنا فين؟ … إنت اللي صحّيتني؟ شكرًا يا بطل! أنا Opportunity، وصحابي بيقولولي Oppy.",
    "tts_ar": "آه؟ أنا فين؟ إنت اللي صحّيتني؟ شكرا يا بطل! أنا أوبورتشونيتي، وصحابي بيقولولي أوبي.",
    "en": "…Huh? Where am I? … Did you wake me up? Thank you, hero! I'm Opportunity, and my friends call me Oppy.",
    "audio_en": "audio/opportunity_1_en.mp3"
   },
   {
    "kind": "fiction",
    "ar": "هقولك سر: أنا ساكت من ١٠ يونيو ٢٠١٨، والطاقة دي جاية من خيالك. بس رحلتي لسه بتعلّم العلماء لحد النهارده.",
    "tts_ar": "هقولك سر: أنا ساكت من 10 يونيو 2018، والطاقة دي جاية من خيالك. بس رحلتي لسه بتعلّم العلماء لحد النهارده.",
    "en": "Here's a secret: I've been silent since 10 June 2018, and this energy comes from your imagination. But my journey still teaches scientists today.",
    "audio_en": "audio/opportunity_2_en.mp3"
   },
   {
    "kind": "fact",
    "ar": "نزلت يوم ٢٥ يناير ٢٠٠٤، ونطّيت في أكياس الهوا لحد ما وقعت جوه فوهة صغيرة اسمها Eagle. العلماء سمّوها «Hole in one» زي الجولف!",
    "tts_ar": "نزلت يوم 25 يناير 2004، ونطّيت في أكياس الهوا لحد ما وقعت جوه فوهة صغيرة اسمها إيجل. العلماء سمّوها هول إن وان، زي الجولف!",
    "en": "I landed on 25 January 2004 and bounced in my airbags until I rolled into a small crater called Eagle. Scientists called it a \"hole in one\", like in golf!",
    "audio_en": "audio/opportunity_3_en.mp3",
    "src": [
     "oppEnd",
     "twins20jpl"
    ]
   },
   {
    "kind": "fact",
    "ar": "هناك لقيت كور صغيرة من معدن اسمه هيماتيت، والعلماء سمّوها «التوت». الكور دي بتتكوّن في وجود مية، يعني المكان ده كان فيه مية زمان.",
    "tts_ar": "هناك لقيت كور صغيرة من معدن اسمه هيماتيت، والعلماء سمّوها التوت. الكور دي بتتكوّن في وجود مية، يعني المكان ده كان فيه مية زمان.",
    "en": "There I found tiny balls of a mineral called hematite, which scientists nicknamed \"blueberries\". They form in water, so this place once had water.",
    "audio_en": "audio/opportunity_4_en.mp3",
    "src": [
     "twins20"
    ]
   },
   {
    "kind": "fact",
    "ar": "كان مخطط أعيش ٩٠ يوم مريخي… وعشت حوالي ١٥ سنة! ومشيت أكتر من ٤٥ كيلومتر، يعني أكتر من ماراثون كامل.",
    "tts_ar": "كان مخطط أعيش 90 يوم مريخي، وعشت حوالي 15 سنة! ومشيت أكتر من 45 كيلومتر، يعني أكتر من ماراثون كامل.",
    "en": "I was planned to live for 90 Martian days… and I lived for about 15 years! I drove more than 45 kilometres, longer than a whole marathon.",
    "audio_en": "audio/opportunity_5_en.mp3",
    "src": [
     "oppEnd",
     "record"
    ]
   },
   {
    "kind": "fact",
    "ar": "في ٢٠١٨ جت عاصفة ترابية غطّت المريخ كله وحجبت الشمس عن ألواحي، وبطّلت أتكلم. بس آثاري لسه مرسومة على الرمل. تحب تمشي على خطايا؟",
    "tts_ar": "في 2018 جت عاصفة ترابية غطّت المريخ كله وحجبت الشمس عن ألواحي، وبطّلت أتكلم. بس آثاري لسه مرسومة على الرمل. تحب تمشي على خطايا؟",
    "en": "In 2018 a dust storm covered all of Mars and blocked the Sun from my solar panels, and I stopped talking. But my tracks are still drawn in the sand. Want to walk in my footsteps?",
    "audio_en": "audio/opportunity_6_en.mp3",
    "src": [
     "twins"
    ]
   }
  ]
 }
];
