// Builds the list of every voiced line (SOL + rovers, Arabic + English) for Azure TTS.
import { T } from '../src/ui.js';
import { ROVERS } from '../src/data.js';
import { LAST } from '../src/content.js';
import fs from 'fs';
const SAY = { Sojourner: 'سوجورنر', Spirit: 'سبيريت', Opportunity: 'أوبورتشونيتي', Oppy: 'أوبي', NASA: 'ناسا', Curiosity: 'كيوريوسيتي', Perseverance: 'بيرسيفيرانس',
  'Cape Canaveral': 'كيب كانافيرال', 'Delta II': 'دلتا تو', 'Power Pulse': 'باور بولس', 'Gusev': 'جوسيف', 'Ares Vallis': 'آريس فاليس', 'Endeavour': 'إنديفور', 'Eagle': 'إيجل', 'Meridiani': 'ميريدياني', 'Troy': 'تروي', 'Pathfinder': 'باثفايندر',
  'Perseverance Valley': 'وادي بيرسيفيرانس', 'Home Plate': 'هوم بليت', 'HiRISE': 'هاي رايز', 'Mars Reconnaissance Orbiter': 'مارس ريكونيسانس أوربيتر',
  'Stimpy': 'ستيمبي', 'Chimp': 'تشيمب', 'MRO': 'إم آر أو' };
// Arabic words the voice tends to misread: add the vowels it needs (only in what is spoken, never on screen)
const FIX = [
  [/(\d)\s*كم(?![\u0621-\u064A])/g, '$1 كيلومتر'], [/(\d)\s*م(?![\u0621-\u064A])/g, '$1 متر'], [/(\d+)٪/g, '$1 في المِيّة'], [/٫/g, '.'],
  [/مية (سخنة|ضخمة|كتير|زمان)/g, 'مَيّة $1'], [/فيه مية/g, 'فيه مَيّة'], [/إن مية/g, 'إن مَيّة'], [/عجلي /g, 'عَجَلي '], [/عملتها!/g, 'عَمَلتها!'], [/في وجود مية/g, 'في وجود مَيّة'], [/من مية/g, 'من مَيّة'],
  [/مستكشف/g, 'مُستكشِف'], [/أنا سول/g, 'أنا سُول'], [/على خطايا/g, 'على خُطايا'], [/أنا صحيت/g, 'أنا صِحيت'],
  [/صحّيت /g, 'صَحّيت '], [/بعجل/g, 'بِعَجَل'], [/كور صغيرة/g, 'كُوَر صغيرة'], [/الكور دي/g, 'الكُوَر دي'],
  [/غرزت/g, 'غِرِزت'], [/جوه /g, 'جُوّه '], [/ضهري/g, 'ضَهري'], [/أوي/g, 'أَوي'], [/الكرة دي/g, 'الكُرة دي'], [/الدرع/g, 'الدِّرع'], [/فضيت/g, 'فِضيت'],
];
const clean = (t, lang) => {
  t = t.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/[«»“”"]/g, '');
  t = t.replace(/…/g, lang === 'ar' ? '، ' : ', ');
  if (lang === 'ar') {
    t = t.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/٬/g, '');
    for (const [k, v] of Object.entries(SAY).sort((a, b) => b[0].length - a[0].length)) t = t.split(k).join(v);
    for (const [re, v] of FIX) t = t.replace(re, v);
  }
  else t = t.replace(/…/g, ', ').replace(/(\d) m\b/g, '$1 metres');
  return t.trim();
};
const VOICE = {
  sol: { ar: ['ar-EG-ShakirNeural', '+14%', '+4%'], en: ['en-US-AnaNeural', '+0%', '+2%'] },
  sojourner: { ar: ['ar-EG-SalmaNeural', '+8%', '+2%'], en: ['en-US-AriaNeural', '+6%', '+2%'] },
  spirit: { ar: ['ar-EG-ShakirNeural', '-2%', '+0%'], en: ['en-US-GuyNeural', '+0%', '+0%'] },
  opportunity: { ar: ['ar-EG-ShakirNeural', '-12%', '-4%'], en: ['en-US-DavisNeural', '-8%', '-3%'] },
};
const SOL = ['guideHello', 'guideChoose', 'guide_sojourner', 'guide_spirit', 'guide_opportunity', 'endA', 'endB', 'endC',
  'expHello', 'expPad', 'expLaunched', 'expCruise1', 'expCruise2', 'expMars', 'expApproach', 'expEntry', 'expEntryOk',
  'edlChute', 'edlEarly', 'edlChuteLate', 'edlChuteOk', 'edlBags', 'edlBagsEarly', 'edlBagsLate', 'edlBagsOk', 'edlBounce', 'edlOpened', 'edlNow',
  'solPre', 'endChain', 'solQuiz'];
const out = [];
for (const lang of ['ar', 'en']) {
  for (const k of SOL) { const [voice, pitch, rate] = VOICE.sol[lang]; out.push({ id: `sol_${k}_${lang}`, lang, voice, pitch, rate, text: clean(T(k, lang), lang) }); }
  // "Last footprint": each rover reads its own last place and where it is now
  for (const [id, d] of Object.entries(LAST)) for (const part of ['last', 'now']) { const [voice, pitch, rate] = VOICE[id][lang]; out.push({ id: `${id}_${part}_${lang}`, lang, voice, pitch, rate, text: clean(d[part][lang], lang) }); }
  ROVERS.forEach((r) => r.lines.forEach((l, i) => { const [voice, pitch, rate] = VOICE[r.id][lang]; out.push({ id: `${r.id}_${i + 1}_${lang}`, lang, voice, pitch, rate, text: clean(lang === 'ar' ? (l.tts_ar || l.ar) : l.en, lang) }); }));
}
fs.writeFileSync('tools/voice_lines.json', JSON.stringify(out, null, 0));
console.log(out.length, 'lines,', out.reduce((a, b) => a + b.text.length, 0), 'chars');
