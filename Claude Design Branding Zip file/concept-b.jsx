// Concept B — MODERN ITALIC
// Same visual system as A/C. Differs in: italic display serif (Instrument Serif),
// fully-pill CTAs, poetic/brand-line forward writing.

const CONFIG_B = {
  code: 'CONCEPT B · 02/03',
  name: 'Modern Italic',
  kicker: 'Modern Italic',
  descriptor: 'Instrument Serif Italic · pill CTAs · brand-line voice',
  why: 'Instrument Serif Italic gives the brand an editorial, almost hand-set quality. The italic display anchors every page in the brand line — "Care for the line that runs you" — making the tagline the visual hero, not a sign-off.',

  fontHead:  '"Instrument Serif", Georgia, serif',
  fontSub:   '"Instrument Serif", Georgia, serif',
  fontBody:  '"Inter", system-ui, sans-serif',
  fontPull:  '"Instrument Serif", Georgia, serif',
  fontLabel: '"Inter", system-ui, sans-serif',

  headStyle:  { fontWeight: 400, fontStyle: 'italic', lineHeight: 0.92, letterSpacing: '-0.015em' },
  subStyle:   { fontWeight: 400, fontStyle: 'normal' },
  bodyStyle:  { fontWeight: 400 },
  pullStyle:  { fontWeight: 400, fontStyle: 'italic' },
  labelStyle: { fontWeight: 500, letterSpacing: '0.32em', textTransform: 'uppercase' },

  typeStack: 'Instrument Serif + Inter',
  typeMeta: {
    head: ['Instrument Serif Italic · 400', '96 – 160 px', 'line-height 0.92'],
    headSample: 'Care for the line that runs you.',
    sub: ['Instrument Serif · 400', '32 – 40 px', 'line-height 1.2'],
    subSample: 'Chiropractic care in Bilbao for people taking the long view on their body.',
    body: ['Inter Regular · 400', '17 – 18 px', 'line-height 1.65'],
    bodySample: 'The work she does is specific. She looks after the spine and the nervous system, with the time and attention that complicated bodies need. Most of her patients come after trying other things.',
    pull: ['Instrument Italic · 400', '24 – 32 px', 'colour: Clay'],
  },

  buttons: {
    radius: 999,
    case: 'sentence',
    tracking: '0.02em',
    label: 'pill · fully rounded · sentence case',
  },

  copy: {
    hero: 'Care for the line\nthat runs you.',
    lead: 'Quirosasun is a chiropractic practice in Bilbao built around one idea: the spine carries the signal that runs everything. Sara Crespo has been looking after that line for almost a decade.',
    tagline: 'Care for the line that runs you.',
    pull: 'The brain has a body. We look after the connection — the line, the signal, the long quiet conversation between the two.',
    cta: {
      primary:   'Book your first visit',
      secondary: 'About the practice',
      tertiary:  'Read Sara\'s story →',
      accent:    'Care plans',
      ghost:     '↓ The letter, monthly',
      quiet:     'Workshops',
    },
    mission: 'To restore and protect the line between brain and body — one spine at a time, in a practice built for thinking and being looked after well.',
    vision:  'A Bilbao where the spine is understood as the conversation it carries — and people care for that line the way they care for their teeth.',
    values: [
      ['I',   'Clinical seriousness', 'The work is medical, not magical. The line is a measurable thing.'],
      ['II',  'Patient time',         'The pace of care is part of the care. We do not rush the line.'],
      ['III', 'Adult conversation',   'You are not a case file. You are someone with a body and questions.'],
      ['IV',  'Material honesty',     'Real outcomes, real timeframes, real materials. No spa theatre.'],
      ['V',   'Quiet excellence',     'The work speaks. The brand line is a whisper, not a shout.'],
    ],
    doList: [
      'Let the tagline be the headline whenever it can be',
      'Use italic for emphasis and for the brand line itself',
      'Write in image-led sentences — "the line", "the signal", "the room"',
      'Set primary lines large and unhurried; let space carry weight',
      'Always end captions and emails with the brand line',
    ],
    dontList: [
      'Use bold weights — italic and roman are the two registers',
      'Crowd the headline with subtitles or kickers',
      'Square the corners of buttons — pill or nothing',
      'Use Clay as a button colour or for body text',
      'Capitalise the brand line. Lowercase, italic, in sentence',
    ],
    postcardLine: 'Care for the line that runs you.',
  },
};

function ConceptB() { return <BrandBoard cfg={CONFIG_B} />; }
window.ConceptB = ConceptB;
