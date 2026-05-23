// Concept C — QUIET MODERN
// Same visual system as A/B. Differs in: precise modern sans (Inter Tight)
// with mono accents (IBM Plex Mono), sharp-edged CTAs, clinical/precise copy.

const CONFIG_C = {
  code: 'CONCEPT C · 03/03',
  name: 'Quiet Modern',
  kicker: 'Quiet Modern',
  descriptor: 'Inter Tight + IBM Plex Mono · sharp CTAs · precise voice',
  why: 'A precise modernist sans paired with mono accents. The brand reads as architectural and intelligent — closer to a Scandinavian dental clinic than a wellness centre. Mono labels carry technical information (dates, file numbers, room names) as a signature element.',

  fontHead:  '"Inter Tight", "Inter", system-ui, sans-serif',
  fontSub:   '"Inter Tight", "Inter", system-ui, sans-serif',
  fontBody:  '"Inter", system-ui, sans-serif',
  fontPull:  '"IBM Plex Mono", ui-monospace, monospace',
  fontLabel: '"IBM Plex Mono", ui-monospace, monospace',

  headStyle:  { fontWeight: 500, lineHeight: 0.94, letterSpacing: '-0.045em' },
  subStyle:   { fontWeight: 400, letterSpacing: '-0.02em' },
  bodyStyle:  { fontWeight: 400 },
  pullStyle:  { fontWeight: 400, letterSpacing: '0.02em' },
  labelStyle: { fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase' },

  typeStack: 'Inter Tight + Inter + IBM Plex Mono',
  typeMeta: {
    head: ['Inter Tight · 500', '96 – 160 px', 'tracking −4.5%'],
    headSample: 'Restore the signal.',
    sub: ['Inter Tight · 400', '28 – 36 px', 'tracking −2%'],
    subSample: 'Chiropractic care in Bilbao, for people taking the long view on their body.',
    body: ['Inter Regular · 400', '16 – 18 px', 'line-height 1.65'],
    bodySample: 'Sara Crespo has been practising since 2017. She trained at the Barcelona College of Chiropractic, holds a master\'s from Pompeu Fabra, and a Doctor of Chiropractic from the European Academy.',
    pull: ['IBM Plex Mono Italic · 400', '18 – 22 px', 'tracked +0.02em · Clay'],
  },

  buttons: {
    radius: 0,
    case: 'upper',
    tracking: '0.14em',
    label: 'sharp · 0 px radius · tracked uppercase',
  },

  copy: {
    hero: 'Restore\nthe signal.',
    lead: 'Quirosasun is a chiropractic practice in Bilbao. Spine and nervous-system care, delivered with the clinical seriousness the work deserves and the time it requires.',
    tagline: 'Restore the signal.',
    pull: 'The spine carries about a hundred million signals an hour. Most of them are working. Some are not. The work is finding which.',
    cta: {
      primary:   'Book first conversation →',
      secondary: 'About · Sara',
      tertiary:  'Enquire →',
      accent:    'Care plans',
      ghost:     'Secondary',
      quiet:     'Read the notes',
    },
    mission: 'To restore and protect the connection between brain and body — measured, paced, clinically grounded. The line is the practice.',
    vision:  'A Bilbao where the spine is understood as a long-term system, not a fix-it appointment. Patients arrive informed and leave more informed.',
    values: [
      ['01', 'Clinical seriousness', 'Medical, not magical. Every plan explained. Every result measured.'],
      ['02', 'Patient time',         'No rushing. The pace of care is part of the care.'],
      ['03', 'Adult conversation',   'Patients are treated as capable of understanding their own bodies.'],
      ['04', 'Material honesty',     'Real outcomes. Real timeframes. No spa theatre.'],
      ['05', 'Quiet excellence',     'The work speaks. The brand does not shout.'],
    ],
    doList: [
      'Use mono type for dates, file numbers, room names and labels',
      'Reserve full uppercase for buttons and metadata only',
      'Set columns with rules, not boxes — let the grid do the work',
      'Write in short, declarative sentences. Verb first',
      'Always pair a measured fact with a plain-language explanation',
    ],
    dontList: [
      'Round the corners of buttons — edges are sharp at all sizes',
      'Use italic decoratively — reserve it for pull quotes',
      'Add gradients, drop-shadows or skeuomorphic chrome',
      'Centre long-form text. Always left-aligned',
      'Use the retired emerald, vivid greens, or pure black surfaces',
    ],
    postcardLine: 'Restore the signal.',
  },
};

function ConceptC() { return <BrandBoard cfg={CONFIG_C} />; }
window.ConceptC = ConceptC;
