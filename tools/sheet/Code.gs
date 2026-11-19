/**
 * The Last Footprint — learning data endpoint (Google Apps Script, deployed as a Web App).
 * Team 3M · NASA Space Apps 2026. AI disclosure: written with AI assistance (Claude, Anthropic).
 *
 * The site sends, only with the child's permission and never with a name:
 *   age group, language, path, pre-quiz answers (3), final-quiz answers (5), minutes, finished.
 * Run setup() once: it creates the spreadsheet (Data + Analysis tabs, charts) in the owner's Drive.
 * Then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 */

const TITLE = 'The Last Footprint — Learning Data';
const HEAD = ['Received (UTC)', 'Session', 'Language', 'Age group', 'Path',
  'Before Q1', 'Before Q2', 'Before Q3', 'Before score (/3)',
  'After Q1', 'After Q2', 'After Q3', 'After Q4', 'After Q5', 'Final quiz (/5)',
  'After, same 3 (/3)', 'Learning gain', 'Minutes', 'Finished', 'Team test', 'Exclude', 'Site version'];
const COL = Object.fromEntries(HEAD.map((h, i) => [h, i + 1]));
const AGES = ['Under 10', '10–11', '12–13', '14–15', 'Over 15'];
const LANGS = ['ar', 'en'];
const PATHS = ['warp', 'expedition'];

function sheet_() {
  const id = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  if (!id) throw new Error('Run setup() first');
  return SpreadsheetApp.openById(id);
}

function setup() {
  const props = PropertiesService.getScriptProperties();
  let ss;
  const old = props.getProperty('SHEET_ID');
  if (old) { try { ss = SpreadsheetApp.openById(old); } catch (e) { ss = null; } }
  if (!ss) { ss = SpreadsheetApp.create(TITLE); props.setProperty('SHEET_ID', ss.getId()); }

  // ---- Data ----
  let d = ss.getSheetByName('Data') || ss.getSheets()[0];
  d.setName('Data');
  d.getRange(1, 1, 1, HEAD.length).setValues([HEAD]).setFontWeight('bold').setBackground('#2a1810').setFontColor('#ffe2c8').setWrap(true);
  d.setFrozenRows(1); d.setFrozenColumns(2);
  d.setColumnWidth(1, 150); d.setColumnWidth(2, 110);
  const n = 2000;
  if (d.getMaxRows() < n) d.insertRowsAfter(d.getMaxRows(), n - d.getMaxRows());
  const box = SpreadsheetApp.newDataValidation().requireCheckbox().build();
  d.getRange(2, COL['Team test'], n - 1, 1).setDataValidation(box);
  d.getRange(2, COL['Exclude'], n - 1, 1).setDataValidation(box);
  d.getRange(2, COL['Received (UTC)'], n - 1, 1).setNumberFormat('yyyy-mm-dd hh:mm');
  d.getRange(2, COL['Minutes'], n - 1, 1).setNumberFormat('0.0');
  d.getRange(1, COL['Exclude']).setNote('Tick to leave this row out of the Analysis (for example, a test by the team).');
  d.getRange(1, COL['Team test']).setNote('Ticked automatically when the site is opened with ?test (team trials). Ticked rows are left out of the Analysis.');
  d.getRange(1, COL['Learning gain']).setNote('Correct answers on the same 3 questions after the experience, minus before.');
  // grey out rows that are left out
  const rules = d.getConditionalFormatRules().filter(() => false);
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=OR($T2=TRUE,$U2=TRUE)').setFontColor('#9a9a9a').setBackground('#f1f1f1')
    .setRanges([d.getRange(2, 1, n - 1, HEAD.length)]).build());
  d.setConditionalFormatRules(rules);

  // ---- Analysis ----
  let a = ss.getSheetByName('Analysis');
  if (a) ss.deleteSheet(a);
  a = ss.insertSheet('Analysis');
  a.getCharts().forEach((c) => a.removeChart(c));
  const inc = 'Data!$T:$T,FALSE,Data!$U:$U,FALSE'; // team tests and excluded rows never count
  a.getRange('A1').setValue('The Last Footprint — what the children learned').setFontSize(16).setFontWeight('bold');
  a.getRange('A2').setValue('Rows ticked "Team test" or "Exclude" in the Data tab are left out of every number here.').setFontColor('#666666');

  a.getRange('A4:H4').setValues([['Age group', 'Children', 'Finished', 'Before (/3)', 'After, same 3 (/3)', 'Learning gain', 'Final quiz (/5)', 'Minutes']]);
  const rows = AGES.map((g, i) => {
    const r = 5 + i, A = `$A${r}`;
    return [g,
      `=COUNTIFS(Data!$D:$D,${A},${inc})`,
      `=COUNTIFS(Data!$D:$D,${A},Data!$S:$S,TRUE,${inc})`,
      `=IFERROR(AVERAGEIFS(Data!$I:$I,Data!$D:$D,${A},${inc}),"")`,
      `=IFERROR(AVERAGEIFS(Data!$P:$P,Data!$D:$D,${A},${inc}),"")`,
      `=IFERROR(AVERAGEIFS(Data!$Q:$Q,Data!$D:$D,${A},${inc}),"")`,
      `=IFERROR(AVERAGEIFS(Data!$O:$O,Data!$D:$D,${A},${inc}),"")`,
      `=IFERROR(AVERAGEIFS(Data!$R:$R,Data!$D:$D,${A},${inc}),"")`];
  });
  rows.push(['All',
    `=SUM(B5:B9)`, `=SUM(C5:C9)`,
    `=IFERROR(AVERAGEIFS(Data!$I:$I,${inc}),"")`,
    `=IFERROR(AVERAGEIFS(Data!$P:$P,${inc}),"")`,
    `=IFERROR(AVERAGEIFS(Data!$Q:$Q,${inc}),"")`,
    `=IFERROR(AVERAGEIFS(Data!$O:$O,${inc}),"")`,
    `=IFERROR(AVERAGEIFS(Data!$R:$R,${inc}),"")`]);
  a.getRange(5, 1, rows.length, 8).setFormulas(rows.map((r) => r.map((v) => (String(v).startsWith('=') ? v : ''))));
  a.getRange(5, 1, rows.length, 1).setValues(rows.map((r) => [r[0]]));
  a.getRange('D5:H10').setNumberFormat('0.00');
  a.getRange('A10:H10').setFontWeight('bold').setBorder(true, null, null, null, null, null);

  a.getRange('A13:D13').setValues([['Question', 'Topic', 'Correct before', 'Correct after']]);
  const qs = [['Q1', 'Sojourner: what it proved'], ['Q2', 'Spirit: the broken wheel'], ['Q3', 'Opportunity: the blueberries'],
    ['Q4', 'How the twins helped Curiosity'], ['Q5', 'What Perseverance does']];
  const before = ['F', 'G', 'H'], after = ['J', 'K', 'L', 'M', 'N'];
  a.getRange(14, 1, 5, 2).setValues(qs);
  a.getRange(14, 3, 5, 2).setFormulas(qs.map((_, i) => [
    before[i] ? `=IFERROR(AVERAGEIFS(Data!$${before[i]}:$${before[i]},${inc}),"")` : '',
    `=IFERROR(AVERAGEIFS(Data!$${after[i]}:$${after[i]},${inc}),"")`]));
  a.getRange('C14:D18').setNumberFormat('0%');

  a.getRange('A21').setValue('Left out of the analysis');
  a.getRange('A22:B23').setValues([['Team tests', ''], ['Excluded by hand', '']]);
  a.getRange('B22').setFormula('=COUNTIF(Data!$T:$T,TRUE)');
  a.getRange('B23').setFormula('=COUNTIFS(Data!$U:$U,TRUE,Data!$T:$T,FALSE)');

  [a.getRange('A4:H4'), a.getRange('A13:D13')].forEach((r) => r.setFontWeight('bold').setBackground('#2a1810').setFontColor('#ffe2c8'));
  a.getRange('A21').setFontWeight('bold');
  a.setColumnWidth(1, 150); a.setColumnWidth(2, 210);
  for (let c = 3; c <= 8; c++) a.setColumnWidth(c, 120);
  a.setFrozenRows(0);

  // charts: before vs after by age group, and each question
  a.insertChart(a.newChart().setChartType(Charts.ChartType.COLUMN)
    .addRange(a.getRange('A4:A9')).addRange(a.getRange('D4:E9'))
    .setOption('title', 'Before vs after (same 3 questions), by age group')
    .setOption('vAxis', { minValue: 0, maxValue: 3, title: 'correct answers (out of 3)' })
    .setOption('colors', ['#c9a27a', '#4fb8d8']).setOption('legend', { position: 'bottom' })
    .setNumHeaders(1).setPosition(4, 10, 0, 0).setOption('width', 560).setOption('height', 300).build());
  a.insertChart(a.newChart().setChartType(Charts.ChartType.BAR)
    .addRange(a.getRange('B13:B18')).addRange(a.getRange('C13:D18'))
    .setOption('title', 'Correct answers per question')
    .setOption('hAxis', { minValue: 0, maxValue: 1, format: 'percent' })
    .setOption('colors', ['#c9a27a', '#4fb8d8']).setOption('legend', { position: 'bottom' })
    .setNumHeaders(1).setPosition(21, 10, 0, 0).setOption('width', 560).setOption('height', 300).build());

  ss.setActiveSheet(a); ss.moveActiveSheet(2);
  ss.setActiveSheet(d);
  Logger.log('Sheet ready: ' + ss.getUrl());
  return ss.getUrl();
}

// ---------- receiving ----------
function doGet() {
  return ContentService.createTextOutput('The Last Footprint learning-data endpoint. It only accepts anonymous quiz results.');
}

function doPost(e) {
  let m;
  try { m = JSON.parse(e.postData.contents); } catch (err) { return out_('bad json'); }
  const v = clean_(m);
  if (!v) return out_('rejected');
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = sheet_().getSheetByName('Data');
    // the checkbox columns fill every row, so find the last real row by its Session cell
    const ids = d.getRange(2, COL['Session'], d.getMaxRows() - 1, 1).getValues();
    let row = 0, last = 1;
    for (let i = 0; i < ids.length; i++) if (ids[i][0] !== '') { last = i + 2; if (ids[i][0] === v.session) row = i + 2; }
    if (!row) {
      row = last + 1;
      if (row > d.getMaxRows()) d.insertRowsAfter(d.getMaxRows(), 500);
      d.getRange(row, 1, 1, 5).setValues([[new Date(), v.session, v.lang, v.age, v.path]]);
      d.getRange(row, COL['Team test'], 1, 2).setValues([[v.test, false]]);
      d.getRange(row, COL['Site version']).setValue(v.version);
    }
    if (v.pre) {
      const s = v.pre.reduce((a, b) => a + b, 0);
      d.getRange(row, COL['Before Q1'], 1, 4).setValues([[...v.pre, s]]);
    }
    if (v.post) {
      const s = v.post.reduce((a, b) => a + b, 0), same = v.post[0] + v.post[1] + v.post[2];
      d.getRange(row, COL['After Q1'], 1, 7).setValues([[...v.post, s, same]]);
      d.getRange(row, COL['Learning gain']).setFormula(`=IF(AND(ISNUMBER(I${row}),ISNUMBER(P${row})),P${row}-I${row},"")`);
    }
    if (v.minutes != null) d.getRange(row, COL['Minutes']).setValue(v.minutes);
    if (v.finished) d.getRange(row, COL['Finished']).setValue(true);
    return out_('ok');
  } finally { lock.releaseLock(); }
}

// accept only the exact shape the site sends; anything else is dropped
function clean_(m) {
  if (!m || typeof m !== 'object') return null;
  const session = String(m.session || '');
  if (!/^[a-z0-9]{10,24}$/.test(session)) return null;
  const age = AGES.includes(m.age) ? m.age : null;
  if (!age) return null;
  const bits = (a, n) => (Array.isArray(a) && a.length === n && a.every((x) => x === 0 || x === 1) ? a : null);
  const pre = m.pre == null ? null : bits(m.pre, 3);
  const post = m.post == null ? null : bits(m.post, 5);
  if (m.pre != null && !pre) return null;
  if (m.post != null && !post) return null;
  const minutes = typeof m.minutes === 'number' && m.minutes >= 0 && m.minutes < 600 ? Math.round(m.minutes * 10) / 10 : null;
  return {
    session, age, pre, post, minutes,
    lang: LANGS.includes(m.lang) ? m.lang : '',
    path: PATHS.includes(m.path) ? m.path : '',
    finished: m.finished === true,
    test: m.test === true,
    version: String(m.version || '').slice(0, 16),
  };
}

function out_(s) { return ContentService.createTextOutput(s); }
