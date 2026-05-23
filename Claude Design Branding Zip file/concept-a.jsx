// Concept A — EDITORIAL WARM
// Same visual system as B/C. Differs in: classic editorial serif (Cormorant
// Garamond), softly-rounded CTAs (8 px), warm conversational copy.

const CONFIG_A = {
  code: 'CONCEPT A · 01/03',
  name: 'Editorial Warm',
  kicker: 'Editorial Warm',
  descriptor: 'Cormorant Garamond · 8 px rounded · warm voice',
  why: 'A classic editorial serif carries the brand. Cormorant Garamond has anatomical contrast in its strokes that feels appropriate for a chiropractic practice — refined, considered, and warm without being precious.',

  fontHead:  '"Cormorant Garamond", Georgia, serif',
  fontSub:   '"Cormorant Garamond", Georgia, serif',
  fontBody:  '"Inter", system-ui, sans-serif',
  fontPull:  '"Cormorant Garamond", Georgia, serif',
  fontLabel: '"Inter", system-ui, sans-serif',

  headStyle:  { fontWeight: 400, lineHeight: 0.95, letterSpacing: '-0.01em' },
  subStyle:   { fontWeight: 400, fontStyle: 'italic' },
  bodyStyle:  { fontWeight: 400 },
  pullStyle:  { fontWeight: 400, fontStyle: 'italic' },
  labelStyle: { fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase' },

  typeStack: 'Cormorant Garamond + Inter',
  typeMeta: {
    head: ['Cormorant Garamond · 400', '88 – 140 px', 'line-height 0.95'],
    headSample: 'Care for the body that carries you.',
    sub: ['Cormorant Italic · 400', '28 – 36 px', 'line-height 1.25'],
    subSample: 'Chiropractic care in Bilbao, for people taking the long view on their body.',
    body: ['Inter Regular · 400', '17 – 18 px', 'line-height 1.65'],
    bodySample: 'Sara Crespo has been practising chiropractic care since 2017. She trained at the Barcelona College of Chiropractic, holds a master\'s from Pompeu Fabra, and a Doctor of Chiropractic from the European Academy.',
    pull: ['Cormorant Italic · 400', '24 – 32 px', 'colour: Clay'],
  },

  buttons: {
    radius: 8,
    case: 'sentence',
    tracking: '0.01em',
    label: 'softly rounded · 8 px radius · sentence case',
  },

  copy: {
    hero: 'Care for the body\nthat carries you.',
    lead: 'Quirosasun is a chiropractic practice in Bilbao for people who take the long view on their health. Sara Crespo combines deep clinical training with the kind of steady attention most clinics no longer have time for.',
    tagline: 'Care for the body that carries you.',
    pull: 'Your spine carries around a hundred million signals an hour. The work is finding which ones are quiet, and helping the line open back up.',
    cta: {
      primary:   'Book the first conversation',
      secondary: 'Read about Sara',
      tertiary:  'Send a message →',
      accent:    'Care plans',
      ghost:     'Subscribe to the letter',
      quiet:     'Learn more',
    },
    mission: 'To restore and protect the connection between brain and body — clinically grounded, delivered with patience and care.',
    vision:  'A Bilbao where serious people understand the spine the way they understand their teeth — a thing you look after for life.',
    values: [
      ['01', 'Clinical seriousness', 'The work is medical, not magical. Plans are explained. Results are measured.'],
      ['02', 'Patient time',         'No rushing. The pace of care is part of the care.'],
      ['03', 'Adult conversation',   'Patients are treated as capable of understanding their bodies.'],
      ['04', 'Material honesty',     'Real materials, real outcomes, real timeframes. No spa theatre.'],
      ['05', 'Quiet excellence',     'The work speaks. The brand does not shout.'],
    ],
    doList: [
      'Use Cormorant Italic for subheads and pull quotes',
      'Keep paragraphs short. Lead with the verb',
      'Address the reader directly ("your spine", "your body")',
      'Speak in declarative sentences. Avoid superlatives',
      'Pair every primary headline with a single image or anatomical line',
    ],
    dontList: [
      'Capitalise every word in a headline — sentence case only',
      'Use exclamation marks, emojis, or "wellness journey" language',
      'Place Cormorant in body copy — it is a display face only',
      'Set Clay as a button colour or for body type',
      'Use the retired emerald green from the previous logo anywhere',
    ],
    postcardLine: 'Care for the body that carries you.',
  },
};

function ConceptA() { return <BrandBoard cfg={CONFIG_A} />; }
window.ConceptA = ConceptA;
