// Quirosasun · "Beneficios de la quiropráctica" poster — editable version.
// 24 icons drawn as fine-line SVGs (24×24 viewBox, stroke 1.2). Text is plain
// HTML spans so Claude's direct-edit mode can rewrite anything inline.
// Poster size: 1500 × 1000 (≈ reference 3:2).

const POSTER = {
  bg:    '#EFE9DC',
  ink:   '#3A3A2A',
  inkSoft:'#7A7A66',
  clay:  '#B89576',
  rule:  '#C8BFAA',
};

// ─── icon primitive ──────────────────────────────────────────
function BIcon({ children, size = 76, color = POSTER.ink, sw = 1.15 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size}
         fill="none" stroke={color} strokeWidth={sw}
         strokeLinecap="round" strokeLinejoin="round"
         style={{ display:'block' }}>
      {children}
    </svg>
  );
}

// ═══ 24 ICONS ═══════════════════════════════════════════════════════════════

// 01 · Spine with motion lines — back & neck pain
function Ic_Spine() {
  return (
    <BIcon>
      <path d="M11 4 q1.6 1 0 2 q-1.6 1 0 2 q1.6 1 0 2 q-1.6 1 0 2 q1.6 1 0 2 q-1.6 1 0 2 q1.6 1 0 2"/>
      <path d="M7.5 5.5 l-1.5 -1.2 M7 9 l-2 0 M7 13 l-2 0 M7 16.5 l-1.5 1.2"/>
      <path d="M14.5 5.5 l1.5 -1.2 M15 9 l2 0 M15 13 l2 0 M15 16.5 l1.5 1.2"/>
    </BIcon>
  );
}

// 02 · Torso with target — muscle tension
function Ic_Tension() {
  return (
    <BIcon>
      <path d="M8 5 c0 2 -1 3 -2 4 v6 c0 3 2 5 6 5 c4 0 6 -2 6 -5 v-6 c-1 -1 -2 -2 -2 -4"/>
      <circle cx="13.5" cy="10.5" r="2.5" stroke={POSTER.clay}/>
      <circle cx="13.5" cy="10.5" r="0.9" fill={POSTER.clay} stroke="none"/>
    </BIcon>
  );
}

// 03 · Head with brain — nervous system
function Ic_Brain() {
  return (
    <BIcon>
      <path d="M6 13 c-1 -5 3 -9 7 -9 c3 0 6 2 6 5 c0 2 -1 3 -2 4 v3 l-1.5 0.5 v2 h-7 v-2 c-1.5 -0.5 -2.5 -2 -2.5 -3.5 z"/>
      <path d="M9 9 c0 -1 1 -2 2 -2 M11 8 c1 0 1 1 1 2 M12 10 c0 1 -1 2 -2 2 M10 12 c-1 0 -2 -1 -1.5 -2"/>
      <path d="M12 7 v8"/>
    </BIcon>
  );
}

// 04 · Moon + stars — sleep quality
function Ic_Sleep() {
  return (
    <BIcon>
      <path d="M5 13 q4 -7 12 -7 q-3 4 0 8 q-7 1 -12 -1 z"/>
      <path d="M18.5 4.5 l0.6 1.4 l1.4 0.6 l-1.4 0.6 l-0.6 1.4 l-0.6 -1.4 l-1.4 -0.6 l1.4 -0.6 z"
            stroke={POSTER.clay}/>
      <circle cx="20.5" cy="11" r="0.5" fill={POSTER.ink} stroke="none"/>
    </BIcon>
  );
}

// 05 · Jump rope figure — energy & vitality
function Ic_Energy() {
  return (
    <BIcon>
      <circle cx="12" cy="6" r="1.6"/>
      <path d="M12 7.5 v5 M12 12 l-2.5 4 M12 12 l2.5 4"/>
      <path d="M10 10 l-2 0.5 M14 10 l2 0.5"/>
      <path d="M5 17 q7 -10 14 0" strokeDasharray="0.4 1.4"/>
    </BIcon>
  );
}

// 06 · Standing figure — body posture
function Ic_Posture() {
  return (
    <BIcon>
      <circle cx="12" cy="5" r="1.6"/>
      <path d="M12 6.8 v8.5"/>
      <path d="M8 10 l4 -1.2 l4 1.2"/>
      <path d="M12 15 l-2.5 5 M12 15 l2.5 5"/>
    </BIcon>
  );
}

// 07 · Running figure — physical performance
function Ic_Running() {
  return (
    <BIcon>
      <circle cx="14" cy="5" r="1.6"/>
      <path d="M14 7 l-3 4 l2 2 l-1 4"/>
      <path d="M13 13 l3 1.5 l1 3"/>
      <path d="M11 11 l-4 -0.5"/>
      <path d="M4 19 l3 0 M4 16 l2 0"/>
    </BIcon>
  );
}

// 08 · Shield with check — immune system
function Ic_Shield() {
  return (
    <BIcon>
      <path d="M12 4 l6 2 v6 c0 4 -3 7 -6 8 c-3 -1 -6 -4 -6 -8 v-6 z"/>
      <path d="M9 12 l2 2 l4 -4" stroke={POSTER.clay}/>
    </BIcon>
  );
}

// 09 · Lotus flower — stress & anxiety
function Ic_Lotus() {
  return (
    <BIcon>
      <path d="M12 18 q-6 -1 -7 -5 q3 0 5 2"/>
      <path d="M12 18 q6 -1 7 -5 q-3 0 -5 2"/>
      <path d="M12 18 q-4 -2 -4 -7 q2 1 3 3"/>
      <path d="M12 18 q4 -2 4 -7 q-2 1 -3 3"/>
      <path d="M12 18 q0 -4 0 -8 q1 2 1 5 q-1 0 -2 0 q0 -3 1 -5"/>
      <path d="M5 18 q7 2 14 0" stroke={POSTER.clay}/>
    </BIcon>
  );
}

// 10 · Lungs — respiratory
function Ic_Lungs() {
  return (
    <BIcon>
      <path d="M12 5 v8"/>
      <path d="M12 7 q-4 1 -5 5 c-0.5 3 0.5 6 2 6 c1.5 0 2 -1.5 2 -3 v-6"/>
      <path d="M12 7 q4 1 5 5 c0.5 3 -0.5 6 -2 6 c-1.5 0 -2 -1.5 -2 -3 v-6"/>
      <path d="M8.5 11 l1.5 0 M14 11 l1.5 0 M9 14 l1 0 M14 14 l1 0" stroke={POSTER.clay}/>
    </BIcon>
  );
}

// 11 · Stomach — digestion
function Ic_Digestion() {
  return (
    <BIcon>
      <path d="M10 4 v3 c0 1 1 2 2 2 c3 0 5 1 5 4 c0 4 -3 7 -6 7 c-3 0 -5 -2 -5 -5 v-3 c0 -2 1 -3 2 -3"/>
      <path d="M12 12 q1 1 0 2 q-1 1 0 2" stroke={POSTER.clay}/>
    </BIcon>
  );
}

// 12 · Head with bolt — headaches & migraines
function Ic_Migraine() {
  return (
    <BIcon>
      <path d="M7 14 c0 -6 4 -10 8 -10 c2 0 3 1 3 3 c0 2 -1 3 -1.5 4 l-1 1 v3 c0 0.5 -0.5 1 -1 1 h-5 v3 h-2.5 z"/>
      <path d="M11 8 l-2 3 h2 l-1 3" stroke={POSTER.clay}/>
    </BIcon>
  );
}

// 13 · Knee joint — mobility & flexibility
function Ic_Mobility() {
  return (
    <BIcon>
      <path d="M9 4 q-1 3 0 5 q3 1 5 0 q1 -3 0 -5"/>
      <path d="M8 9 q1 3 3 3 q3 0 4 3"/>
      <path d="M9 12 q-1 3 -2 5 M14 14 q1 3 3 5"/>
      <circle cx="12" cy="11" r="1.3" fill={POSTER.clay} stroke="none"/>
    </BIcon>
  );
}

// 14 · Pregnant figure — pregnancy & postpartum
function Ic_Pregnancy() {
  return (
    <BIcon>
      <circle cx="11" cy="5" r="1.5"/>
      <path d="M11 6.5 q-1 2 -1 3 q0 0 3 0.5 q2.5 0.5 2.5 3 q0 2.5 -2.5 3 q-3 0.5 -3 0.5 v3"/>
      <path d="M9 14 v5"/>
      <circle cx="14" cy="12.5" r="0.9" fill={POSTER.clay} stroke="none"/>
    </BIcon>
  );
}

// 15 · Baby face — infant development
function Ic_Baby() {
  return (
    <BIcon>
      <circle cx="12" cy="12" r="7"/>
      <path d="M5 9 q2 -1 3 0 M16 9 q1 -1 3 0"/>
      <circle cx="10" cy="12" r="0.5" fill={POSTER.ink} stroke="none"/>
      <circle cx="14" cy="12" r="0.5" fill={POSTER.ink} stroke="none"/>
      <path d="M10.5 15 q1.5 1.2 3 0"/>
      <circle cx="8" cy="14.5" r="0.7" fill={POSTER.clay} stroke="none"/>
      <circle cx="16" cy="14.5" r="0.7" fill={POSTER.clay} stroke="none"/>
    </BIcon>
  );
}

// 16 · Person at desk — postural injuries prevention
function Ic_Desk() {
  return (
    <BIcon>
      <circle cx="9" cy="6" r="1.4"/>
      <path d="M9 7.5 q-1 2 -0.5 4 q0.5 1 2 1 h3"/>
      <path d="M8.5 12.5 v5 M10 12.5 v5"/>
      <path d="M13 11 h6 v2 h-6 z"/>
      <path d="M15 13 v5 M17 13 v5"/>
      <path d="M4 19 h16"/>
    </BIcon>
  );
}

// 17 · Circular arrows — recovery acceleration
function Ic_Recovery() {
  return (
    <BIcon>
      <path d="M19 9 a7 7 0 0 0 -12 -2"/>
      <path d="M7 7 l0 -3 M7 7 l3 0"/>
      <path d="M5 15 a7 7 0 0 0 12 2"/>
      <path d="M17 17 l0 3 M17 17 l-3 0"/>
      <circle cx="12" cy="12" r="0.8" fill={POSTER.clay} stroke="none"/>
    </BIcon>
  );
}

// 18 · Heart with ECG — cardiovascular health
function Ic_Heart() {
  return (
    <BIcon>
      <path d="M12 20 c-5 -3 -8 -7 -8 -11 c0 -3 2 -5 4.5 -5 c1.5 0 2.5 1 3.5 2
               c1 -1 2 -2 3.5 -2 c2.5 0 4.5 2 4.5 5 c0 4 -3 8 -8 11 z"/>
      <path d="M6 12 h2 l1 -2 l2 4 l2 -3 l1 1 h3" stroke={POSTER.clay}/>
    </BIcon>
  );
}

// 19 · Brain — concentration & focus
function Ic_Focus() {
  return (
    <BIcon>
      <path d="M8 6 c-2 0 -3.5 1.5 -3.5 3 c0 1 0.5 2 1.5 2 c-1 0 -1.5 1 -1.5 2
               c0 2 2 3 4 2.5 c0 2 1.5 3 3.5 3 c2 0 3.5 -1 3.5 -3
               c2 0.5 4 -0.5 4 -2.5 c0 -1 -0.5 -2 -1.5 -2 c1 0 1.5 -1 1.5 -2
               c0 -1.5 -1.5 -3 -3.5 -3 c0 -1 -1 -2 -2.5 -2 s-2.5 1 -2.5 2 c0 -1 -1 -2 -2.5 -2 z"/>
      <path d="M12 8 v10" stroke={POSTER.clay}/>
    </BIcon>
  );
}

// 20 · Smiling face — mood
function Ic_Mood() {
  return (
    <BIcon>
      <circle cx="12" cy="12" r="8"/>
      <circle cx="9.5" cy="10.5" r="0.6" fill={POSTER.ink} stroke="none"/>
      <circle cx="14.5" cy="10.5" r="0.6" fill={POSTER.ink} stroke="none"/>
      <path d="M8 14 q4 4 8 0" stroke={POSTER.clay}/>
    </BIcon>
  );
}

// 21 · Scales — body-mind balance
function Ic_Balance() {
  return (
    <BIcon>
      <path d="M12 5 v15"/>
      <path d="M7 20 h10"/>
      <path d="M5 9 h14"/>
      <path d="M5 9 l-2 4 q2 1.5 4 0 z"/>
      <path d="M19 9 l-2 4 q2 1.5 4 0 z"/>
      <circle cx="12" cy="9" r="0.7" fill={POSTER.clay} stroke="none"/>
    </BIcon>
  );
}

// 22 · Leaf — general wellness
function Ic_Wellness() {
  return (
    <BIcon>
      <path d="M5 19 c0 -8 5 -14 14 -14 c0 9 -6 14 -14 14 z"/>
      <path d="M5 19 q7 -7 14 -14" stroke={POSTER.clay}/>
    </BIcon>
  );
}

// 23 · Sparkles — quality of life
function Ic_Quality() {
  return (
    <BIcon>
      <path d="M9 4 l1 3 l3 1 l-3 1 l-1 3 l-1 -3 l-3 -1 l3 -1 z"/>
      <path d="M16 11 l0.7 2 l2 0.7 l-2 0.7 l-0.7 2 l-0.7 -2 l-2 -0.7 l2 -0.7 z" stroke={POSTER.clay}/>
      <path d="M12 17 l0.5 1.4 l1.4 0.5 l-1.4 0.5 l-0.5 1.4 l-0.5 -1.4 l-1.4 -0.5 l1.4 -0.5 z"/>
    </BIcon>
  );
}

// 24 · Spine in circle — long-term spinal health
function Ic_SpineCircle() {
  return (
    <BIcon>
      <circle cx="12" cy="12" r="8"/>
      <ellipse cx="12" cy="6.8" rx="1.6" ry="0.7"/>
      <ellipse cx="12" cy="9.4" rx="2" ry="0.85"/>
      <ellipse cx="12" cy="12" rx="2.2" ry="0.95" fill={POSTER.clay} stroke="none"/>
      <ellipse cx="12" cy="14.6" rx="2" ry="0.85"/>
      <ellipse cx="12" cy="17.2" rx="1.6" ry="0.7"/>
    </BIcon>
  );
}

// Quirosasun wordmark — recreated as inline SVG so it's editable, not a PNG.
function Wordmark() {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:14 }}>
      <svg viewBox="0 0 24 32" width="36" height="48" fill="none"
           stroke={POSTER.ink} strokeWidth="1.1" strokeLinecap="round">
        {/* tiny side-profile face mark */}
        <path d="M8 6 q4 -3 8 0 q3 3 1 8 q-1 3 -3 4 q0 3 1 5 q-3 1 -7 1 q-2 -3 -2 -7 q-3 -3 -1 -7 q1 -2 3 -4 z"/>
        <circle cx="13" cy="13" r="0.6" fill={POSTER.ink} stroke="none"/>
        <path d="M11 16 q1 1 2 0"/>
      </svg>
      <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
        <span style={{ fontFamily:'"Cormorant Garamond", serif', fontSize:30, color:POSTER.ink, letterSpacing:0.2, lineHeight:1 }}>quirosasun</span>
        <span style={{ fontFamily:'Inter, sans-serif', fontSize:9, color:POSTER.inkSoft, letterSpacing:3, textTransform:'uppercase' }}>centro quiropráctico</span>
      </div>
    </div>
  );
}

// ─── grid cell ───────────────────────────────────────────────
function Cell({ Icon, label }) {
  return (
    <div style={{
      display:'flex', flexDirection:'column', alignItems:'center',
      gap:14, padding:'4px 6px', textAlign:'center',
    }}>
      <div style={{ height:84, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <Icon />
      </div>
      <div style={{
        fontFamily:'Inter, sans-serif', fontSize:13.5, color:POSTER.ink,
        lineHeight:1.35, letterSpacing:0.1, maxWidth:170,
      }}>
        {label}
      </div>
    </div>
  );
}

// ═══ POSTER ════════════════════════════════════════════════════════════════
const POSTER_ITEMS = [
  { Icon: Ic_Spine,        label: 'Alivia el dolor\nde espalda y cuello' },
  { Icon: Ic_Tension,      label: 'Reduce tensiones\nmusculares' },
  { Icon: Ic_Brain,        label: 'Mejora la función\ndel sistema nervioso' },
  { Icon: Ic_Sleep,        label: 'Mejora la calidad\ndel sueño' },
  { Icon: Ic_Energy,       label: 'Aumenta la energía\ny vitalidad' },
  { Icon: Ic_Posture,      label: 'Mejora la postura\ncorporal' },

  { Icon: Ic_Running,      label: 'Mejora el rendimiento\nfísico y deportivo' },
  { Icon: Ic_Shield,       label: 'Refuerza el sistema\ninmunológico' },
  { Icon: Ic_Lotus,        label: 'Disminuye el estrés\ny la ansiedad' },
  { Icon: Ic_Lungs,        label: 'Mejora la capacidad\nrespiratoria' },
  { Icon: Ic_Digestion,    label: 'Favorece la digestión\ny el tránsito intestinal' },
  { Icon: Ic_Migraine,     label: 'Reduce dolores\nde cabeza y migrañas' },

  { Icon: Ic_Mobility,     label: 'Mejora la movilidad\ny flexibilidad' },
  { Icon: Ic_Pregnancy,    label: 'Acompaña el embarazo\ny el postparto' },
  { Icon: Ic_Baby,         label: 'Favorece el desarrollo\ninfantil' },
  { Icon: Ic_Desk,         label: 'Previene lesiones\npor malas posturas' },
  { Icon: Ic_Recovery,     label: 'Acelera la recuperación\nde lesiones' },
  { Icon: Ic_Heart,        label: 'Mejora la salud\ncardiovascular' },

  { Icon: Ic_Focus,        label: 'Mejora la concentración\ny el enfoque' },
  { Icon: Ic_Mood,         label: 'Mejora el estado\nde ánimo' },
  { Icon: Ic_Balance,      label: 'Promueve el equilibrio\ndel cuerpo y la mente' },
  { Icon: Ic_Wellness,     label: 'Favorece el bienestar\ngeneral' },
  { Icon: Ic_Quality,      label: 'Mejora la calidad\nde vida' },
  { Icon: Ic_SpineCircle,  label: 'Mantiene tu columna\nsana a largo plazo' },
];

function BeneficiosPoster() {
  return (
    <div style={{
      width:'100%', height:'100%', background:POSTER.bg, color:POSTER.ink,
      padding:'70px 90px 50px', display:'flex', flexDirection:'column',
      fontFamily:'Inter, sans-serif',
    }}>
      {/* title */}
      <div style={{ textAlign:'center', marginBottom:38 }}>
        <div style={{
          fontFamily:'"Cormorant Garamond", serif', fontWeight:400,
          fontSize:62, color:POSTER.ink, letterSpacing:-0.3, lineHeight:1.05,
        }}>
          Beneficios de la quiropráctica
        </div>
        <div style={{
          marginTop:10, fontFamily:'Inter, sans-serif', fontWeight:500,
          fontSize:14, letterSpacing:4.5, color:POSTER.clay, textTransform:'uppercase',
        }}>
          Tu sistema funciona mejor, tú te sientes mejor
        </div>
      </div>

      {/* 6 × 4 grid */}
      <div style={{
        flex:1, display:'grid',
        gridTemplateColumns:'repeat(6, 1fr)',
        gridTemplateRows:'repeat(4, 1fr)',
        rowGap:18, columnGap:8, alignItems:'start',
      }}>
        {POSTER_ITEMS.map((b, i) => {
          // preserve line breaks in the label
          const lines = b.label.split('\n');
          return (
            <Cell key={i} Icon={b.Icon}
              label={lines.map((ln, j) => (
                <React.Fragment key={j}>
                  {ln}{j < lines.length - 1 && <br/>}
                </React.Fragment>
              ))}/>
          );
        })}
      </div>

      {/* footer */}
      <div style={{ marginTop:30 }}>
        <div style={{ height:1, background:POSTER.rule, marginBottom:20 }}/>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', alignItems:'center' }}>
          <Wordmark/>
          <div style={{
            textAlign:'center', fontFamily:'"Cormorant Garamond", serif',
            fontStyle:'italic', fontSize:20, color:POSTER.clay,
          }}>
            Cuidamos la línea que te sostiene.
          </div>
          <div style={{
            textAlign:'right', fontFamily:'Inter, sans-serif', fontSize:11,
            letterSpacing:3, textTransform:'uppercase', color:POSTER.ink,
          }}>
            Bilbao · quirosasun.com
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { BeneficiosPoster });
