// Quirosasun pictorial icon ecosystem — 30 icons in editorial fine-line style.
// Matches Sara's V1 reference 1:1, same vocabulary throughout:
//   – viewbox 64×64, stroke 1.4, rounded line caps
//   – dotted accents on body/spine icons
//   – consistent visual weight across the whole set
// All icons inherit a single `color` prop so they re-tint per background.

function PI({ children, size = 72, color = '#2F3A23', sw = 1.4 }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}
         fill="none" stroke={color} strokeWidth={sw}
         strokeLinecap="round" strokeLinejoin="round"
         xmlns="http://www.w3.org/2000/svg"
         style={{ display: 'block' }}>
      {children}
    </svg>
  );
}

// ─────────────── ROW 1 ───────────────

// 01 · Alivia el dolor de espalda — back view + dotted spine
function P_Espalda({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <circle cx="32" cy="12" r="4"/>
      <path d="M 29.5 16 C 29.5 19, 29.5 21, 28 22.5"/>
      <path d="M 34.5 16 C 34.5 19, 34.5 21, 36 22.5"/>
      <path d="M 12 30 C 16 25, 22 22.5, 28 22.5 L 36 22.5 C 42 22.5, 48 25, 52 30"/>
      <path d="M 14 30 C 16 38, 18 46, 20 56"/>
      <path d="M 50 30 C 48 38, 46 46, 44 56"/>
      <path d="M 22 30 C 23 33, 24 35, 26 36" strokeWidth="0.9" opacity="0.55"/>
      <path d="M 42 30 C 41 33, 40 35, 38 36" strokeWidth="0.9" opacity="0.55"/>
      <circle cx="32" cy="25" r="1.0" fill={color}/>
      <circle cx="32" cy="30" r="1.1" fill={color}/>
      <circle cx="32" cy="35" r="1.2" fill={color}/>
      <circle cx="32" cy="40" r="1.2" fill={color}/>
      <circle cx="32" cy="45" r="1.1" fill={color}/>
      <circle cx="32" cy="50" r="1.0" fill={color}/>
    </PI>
  );
}

// 02 · Disminuye el dolor de cuello — side profile + cervical dots
function P_Cuello({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <path d="M 30 10 C 24 11, 20 16, 19 22 L 16 25 L 19 27 L 18 30 L 22 31 L 22 34"/>
      <path d="M 30 10 C 38 10, 42 16, 42 22 C 42 26, 40 29, 38 31 L 38 34"/>
      <path d="M 22 34 C 26 35, 30 35, 32 34"/>
      <path d="M 38 34 C 40 38, 42 42, 46 46"/>
      <path d="M 28 36 C 26 40, 22 44, 18 48"/>
      <circle cx="35" cy="32" r="1.1" fill={color}/>
      <circle cx="35.5" cy="36" r="1.1" fill={color}/>
      <circle cx="36" cy="40" r="1.1" fill={color}/>
      <circle cx="37" cy="44" r="1.0" fill={color}/>
      <path d="M 41 30 L 44 28" strokeWidth="0.9" opacity="0.55"/>
      <path d="M 41 34 L 44 35" strokeWidth="0.9" opacity="0.55"/>
    </PI>
  );
}

// 03 · Reduce los dolores de cabeza — head profile + pain rays
function P_Cabeza({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      {/* head profile, facing left */}
      <path d="M 40 18 C 32 18, 24 22, 22 30 C 22 36, 26 40, 30 42 L 30 48"/>
      <path d="M 40 18 C 46 18, 50 22, 50 28 C 50 34, 48 38, 46 40"/>
      {/* nose */}
      <path d="M 22 30 L 18 32 L 22 34"/>
      {/* mouth */}
      <line x1="24" y1="38" x2="28" y2="38" strokeWidth="0.9"/>
      {/* shoulder */}
      <path d="M 46 40 C 48 44, 50 48, 52 52"/>
      {/* pain rays radiating from forehead */}
      <line x1="32" y1="10" x2="32" y2="14"/>
      <line x1="40" y1="8"  x2="41" y2="13"/>
      <line x1="48" y1="10" x2="46" y2="14"/>
      <line x1="24" y1="10" x2="25" y2="14"/>
      <line x1="52" y1="16" x2="48" y2="18"/>
    </PI>
  );
}

// 04 · Mejora la movilidad — flexed arm with motion arc
function P_Movilidad({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      {/* upper arm */}
      <path d="M 14 50 C 18 42, 24 36, 30 32"/>
      {/* elbow */}
      <circle cx="30" cy="32" r="2.5" fill={color}/>
      {/* forearm */}
      <path d="M 30 32 C 38 30, 44 26, 48 18"/>
      {/* fist */}
      <circle cx="48" cy="18" r="3.5"/>
      {/* bicep curve hint */}
      <path d="M 22 38 C 24 34, 26 32, 28 32" strokeWidth="0.9" opacity="0.5"/>
      {/* motion arc */}
      <path d="M 38 44 Q 46 40, 50 32" strokeDasharray="2 2" opacity="0.6"/>
    </PI>
  );
}

// 05 · Mejora el rendimiento físico — running figure
function P_Rendimiento({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      {/* head */}
      <circle cx="38" cy="12" r="3.5"/>
      {/* torso */}
      <path d="M 38 16 L 32 30"/>
      {/* back arm */}
      <path d="M 32 24 L 22 30"/>
      {/* front arm bent */}
      <path d="M 35 22 L 42 26 L 40 34"/>
      {/* back leg pushing off */}
      <path d="M 32 30 L 22 38 L 14 44"/>
      {/* front leg extended */}
      <path d="M 32 30 L 38 42 L 48 50"/>
      {/* speed lines */}
      <line x1="8"  y1="20" x2="18" y2="20" strokeWidth="0.9" opacity="0.55"/>
      <line x1="10" y1="26" x2="22" y2="26" strokeWidth="0.9" opacity="0.4"/>
      <line x1="8"  y1="14" x2="14" y2="14" strokeWidth="0.9" opacity="0.4"/>
    </PI>
  );
}

// 06 · Reduce el estrés — meditation pose
function P_Estres({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      {/* halo */}
      <path d="M 18 14 Q 32 6, 46 14" strokeWidth="0.9" opacity="0.5" strokeDasharray="2 2"/>
      {/* head */}
      <circle cx="32" cy="20" r="4"/>
      {/* shoulders/arms in lap */}
      <path d="M 20 36 C 22 32, 26 28, 32 28 C 38 28, 42 32, 44 36"/>
      {/* crossed legs base */}
      <path d="M 14 50 C 18 42, 24 38, 32 38 C 40 38, 46 42, 50 50"/>
      {/* base ground */}
      <path d="M 14 50 Q 32 56, 50 50"/>
      {/* hands meeting */}
      <circle cx="32" cy="40" r="1.5" fill={color}/>
    </PI>
  );
}

// ─────────────── ROW 2 ───────────────

// 07 · Mejora la función nerviosa — brain
function P_Cerebro({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      {/* outer brain shape */}
      <path d="M 32 14
               C 24 14, 18 18, 18 26
               C 14 28, 14 36, 18 38
               C 18 44, 22 48, 28 48
               C 30 50, 34 50, 36 48
               C 42 48, 46 44, 46 38
               C 50 36, 50 28, 46 26
               C 46 18, 40 14, 32 14 Z"/>
      {/* central divide */}
      <path d="M 32 14 C 30 18, 30 22, 32 26 C 30 30, 30 34, 32 38 C 30 42, 30 46, 32 50"/>
      {/* fold lines */}
      <path d="M 22 24 Q 26 26, 28 24" strokeWidth="0.9" opacity="0.6"/>
      <path d="M 22 34 Q 26 36, 28 34" strokeWidth="0.9" opacity="0.6"/>
      <path d="M 22 42 Q 26 44, 28 42" strokeWidth="0.9" opacity="0.6"/>
      <path d="M 36 24 Q 40 26, 42 24" strokeWidth="0.9" opacity="0.6"/>
      <path d="M 36 34 Q 40 36, 42 34" strokeWidth="0.9" opacity="0.6"/>
      <path d="M 36 42 Q 40 44, 42 42" strokeWidth="0.9" opacity="0.6"/>
    </PI>
  );
}

// 08 · Mejora la calidad del sueño — moon with Z's
function P_Sueno({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <path d="M 42 16
               C 30 16, 22 24, 22 36
               C 22 48, 30 56, 42 56
               C 34 50, 30 44, 30 36
               C 30 28, 34 22, 42 16 Z"/>
      {/* z's */}
      <path d="M 44 14 L 52 14 L 44 22 L 52 22" strokeWidth="1.1"/>
      <path d="M 52 24 L 58 24 L 52 30 L 58 30" strokeWidth="0.9" opacity="0.75"/>
    </PI>
  );
}

// 09 · Aumenta la energía — battery with bolt
function P_Energia({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <rect x="20" y="14" width="24" height="40" rx="2"/>
      <rect x="27" y="10" width="10" height="4" rx="1"/>
      {/* charge bolt */}
      <path d="M 33 20 L 25 36 L 31 36 L 29 48 L 39 30 L 33 30 L 36 20 Z"
            fill={color} stroke="none"/>
    </PI>
  );
}

// 10 · Refuerza el sistema inmune — shield with plus
function P_Inmune({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <path d="M 32 10
               L 50 16
               L 50 32
               C 50 42, 42 52, 32 56
               C 22 52, 14 42, 14 32
               L 14 16 Z"/>
      <line x1="32" y1="22" x2="32" y2="40"/>
      <line x1="23" y1="31" x2="41" y2="31"/>
    </PI>
  );
}

// 11 · Mejora la digestión — stomach + intestine curl
function P_Digestion({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      {/* stomach pouch */}
      <path d="M 28 14
               C 24 14, 20 18, 20 24
               L 20 36
               C 20 44, 26 50, 34 50
               C 42 50, 46 44, 46 36
               L 46 28
               C 46 22, 42 18, 36 20"/>
      {/* fold lines suggesting digestion */}
      <path d="M 24 28 Q 30 26, 38 30" strokeWidth="0.9" opacity="0.55"/>
      <path d="M 24 36 Q 30 34, 40 38" strokeWidth="0.9" opacity="0.55"/>
      <path d="M 26 44 Q 32 42, 40 46" strokeWidth="0.9" opacity="0.55"/>
      {/* esophagus stub */}
      <path d="M 28 14 L 30 8"/>
    </PI>
  );
}

// 12 · Mejora la respiración — lungs
function P_Respiracion({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      {/* trachea */}
      <line x1="32" y1="8" x2="32" y2="22"/>
      {/* bronchi */}
      <path d="M 32 22 L 24 28"/>
      <path d="M 32 22 L 40 28"/>
      {/* left lung */}
      <path d="M 24 28
               C 16 30, 12 38, 14 48
               C 16 54, 22 54, 24 48
               L 24 28 Z"/>
      {/* right lung */}
      <path d="M 40 28
               C 48 30, 52 38, 50 48
               C 48 54, 42 54, 40 48
               L 40 28 Z"/>
      {/* inner branching */}
      <path d="M 20 36 Q 18 40, 19 46" strokeWidth="0.9" opacity="0.55"/>
      <path d="M 44 36 Q 46 40, 45 46" strokeWidth="0.9" opacity="0.55"/>
    </PI>
  );
}

// ─────────────── ROW 3 ───────────────

// 13 · Favorece la salud del corazón — heart
function P_Corazon({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <path d="M 32 52
               C 18 40, 10 30, 14 20
               C 18 12, 28 14, 32 22
               C 36 14, 46 12, 50 20
               C 54 30, 46 40, 32 52 Z"/>
      {/* small inner dot */}
      <circle cx="32" cy="28" r="1.4" fill={color}/>
    </PI>
  );
}

// 14 · Acompaña el embarazo — pregnant profile
function P_Embarazo({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      {/* head */}
      <circle cx="28" cy="14" r="3.6"/>
      {/* back line */}
      <path d="M 28 18 C 26 22, 26 28, 28 32 L 28 42 C 28 48, 30 54, 32 58"/>
      {/* front: chest → belly bulge */}
      <path d="M 28 18 C 32 22, 34 26, 36 30 C 42 32, 44 36, 44 40 C 44 44, 40 48, 32 48 L 28 46"/>
      {/* heart inside belly */}
      <path d="M 36 36
               C 34 34, 32 36, 34 38
               C 36 36, 38 36, 36 36 Z"
            fill={color} stroke="none" opacity="0.55"/>
    </PI>
  );
}

// 15 · Beneficia a bebés y niños — baby face
function P_Bebes({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <circle cx="32" cy="32" r="18"/>
      {/* hair tuft */}
      <path d="M 30 15 C 30 11, 33 10, 35 13"/>
      {/* eyes */}
      <circle cx="25" cy="30" r="1.3" fill={color}/>
      <circle cx="39" cy="30" r="1.3" fill={color}/>
      {/* smile */}
      <path d="M 26 38 Q 32 42, 38 38"/>
      {/* cheeks */}
      <circle cx="20" cy="36" r="1.1" fill={color} opacity="0.45"/>
      <circle cx="44" cy="36" r="1.1" fill={color} opacity="0.45"/>
    </PI>
  );
}

// 16 · Mejora la postura — standing side body with spine
function P_PosturaErguida({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      {/* head */}
      <circle cx="30" cy="12" r="3.6"/>
      {/* body silhouette — side */}
      <path d="M 30 16
               C 28 20, 28 26, 30 30
               C 28 36, 28 42, 30 48
               C 30 52, 30 56, 30 58"/>
      {/* chest/front */}
      <path d="M 30 16 C 34 20, 34 26, 32 30 C 34 36, 34 42, 32 48"/>
      {/* arm hint */}
      <path d="M 33 24 C 34 30, 34 36, 33 40"/>
      {/* dotted spine over body */}
      <circle cx="30" cy="20" r="1.0" fill={color}/>
      <circle cx="30" cy="26" r="1.1" fill={color}/>
      <circle cx="30" cy="32" r="1.1" fill={color}/>
      <circle cx="30" cy="38" r="1.1" fill={color}/>
      <circle cx="30" cy="44" r="1.0" fill={color}/>
      {/* ground reference */}
      <line x1="20" y1="58" x2="44" y2="58" strokeWidth="0.7" opacity="0.4"/>
    </PI>
  );
}

// 17 · Mejora la concentración — target rings
function P_Concentracion({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <circle cx="32" cy="32" r="20"/>
      <circle cx="32" cy="32" r="13"/>
      <circle cx="32" cy="32" r="6"/>
      <circle cx="32" cy="32" r="1.6" fill={color}/>
    </PI>
  );
}

// 18 · Mejora el bienestar general — circle + check
function P_BienestarGeneral({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <circle cx="32" cy="32" r="20"/>
      <path d="M 22 32 L 28 38 L 42 24"/>
    </PI>
  );
}

// ─────────────── ROW 4 ───────────────

// 19 · Previene lesiones — shield + check
function P_Lesiones({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <path d="M 32 10
               L 50 16
               L 50 32
               C 50 42, 42 52, 32 56
               C 22 52, 14 42, 14 32
               L 14 16 Z"/>
      <path d="M 22 32 L 29 39 L 42 26"/>
    </PI>
  );
}

// 20 · Acelera la recuperación — lightning bolt
function P_Recuperacion({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <path d="M 36 8
               L 20 32
               L 30 32
               L 26 56
               L 44 28
               L 34 28
               L 38 8 Z"/>
    </PI>
  );
}

// 21 · Alivia molestias por la postura — person at laptop
function P_Postura({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <circle cx="20" cy="15" r="3.6"/>
      <path d="M 20 18.6 C 17 22, 16 26, 17 30 C 18 33, 19 36, 21 38 L 21 44"/>
      <path d="M 19 28 C 26 28, 32 30, 37 33"/>
      <path d="M 36 33 L 50 33"/>
      <path d="M 38 33 L 42 25 L 50 25 L 49 33"/>
      <line x1="30" y1="36" x2="56" y2="36"/>
      <path d="M 13 36 L 13 44 L 25 44"/>
      <path d="M 21 44 L 19 56"/>
      <path d="M 25 44 L 30 50 L 30 56"/>
      <line x1="10" y1="58" x2="54" y2="58" strokeWidth="0.7" opacity="0.35"/>
    </PI>
  );
}

// 22 · Mejora la función articular — knee joint
function P_Articular({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      {/* upper bone (femur) */}
      <path d="M 22 8 C 24 16, 24 22, 28 28"/>
      <path d="M 30 8 C 30 16, 30 22, 32 28"/>
      {/* joint capsule */}
      <ellipse cx="30" cy="32" rx="8" ry="5"/>
      {/* lower bone (tibia) */}
      <path d="M 28 36 C 30 42, 32 50, 30 58"/>
      <path d="M 34 36 C 36 42, 38 50, 38 58"/>
      {/* motion arc */}
      <path d="M 42 24 Q 48 32, 44 40" strokeWidth="0.9" opacity="0.55"
            strokeDasharray="2 2"/>
    </PI>
  );
}

// 23 · Equilibra el cuerpo — balance scales
function P_Equilibrio({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      {/* central pole */}
      <line x1="32" y1="12" x2="32" y2="52"/>
      {/* crossbar */}
      <line x1="14" y1="20" x2="50" y2="20"/>
      {/* chains */}
      <path d="M 14 20 L 10 30"/>
      <path d="M 14 20 L 18 30"/>
      <path d="M 50 20 L 46 30"/>
      <path d="M 50 20 L 54 30"/>
      {/* pans */}
      <path d="M 8 30 Q 14 36, 20 30"/>
      <path d="M 44 30 Q 50 36, 56 30"/>
      {/* base */}
      <line x1="22" y1="52" x2="42" y2="52"/>
      {/* top knob */}
      <circle cx="32" cy="12" r="1.5" fill={color}/>
    </PI>
  );
}

// 24 · Mejora tu estado de ánimo — smiley face
function P_Animo({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <circle cx="32" cy="32" r="20"/>
      <circle cx="25" cy="28" r="1.5" fill={color}/>
      <circle cx="39" cy="28" r="1.5" fill={color}/>
      <path d="M 23 36 Q 32 44, 41 36"/>
    </PI>
  );
}

// ─────────────── ROW 5 ───────────────

// 25 · Mejora tu vida activa — running shoe
function P_VidaActiva({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      {/* shoe outline */}
      <path d="M 8 44
               L 8 38
               C 8 34, 12 32, 18 32
               L 22 28
               L 28 32
               L 38 32
               L 46 36
               L 54 40
               C 56 42, 56 44, 54 44 Z"/>
      {/* sole line */}
      <line x1="8" y1="44" x2="54" y2="44"/>
      {/* toe / lace hints */}
      <path d="M 22 32 L 24 36"/>
      <path d="M 28 32 L 30 36"/>
      <path d="M 34 32 L 36 36"/>
      {/* stripe */}
      <path d="M 12 36 Q 18 38, 22 36" strokeWidth="0.9" opacity="0.6"/>
    </PI>
  );
}

// 26 · Envejecimiento saludable — connected dots path
function P_Envejecimiento({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      {/* path line */}
      <path d="M 10 48 L 22 36 L 38 42 L 54 16"
            strokeDasharray="3 2.5"/>
      {/* dots at vertices */}
      <circle cx="10" cy="48" r="2.4" fill={color}/>
      <circle cx="22" cy="36" r="2.4" fill={color}/>
      <circle cx="38" cy="42" r="2.4" fill={color}/>
      <circle cx="54" cy="16" r="2.6" fill={color}/>
    </PI>
  );
}

// 27 · Conecta contigo mismo — lotus flower
function P_Conecta({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      {/* center petal */}
      <path d="M 32 16 C 28 26, 28 36, 32 44 C 36 36, 36 26, 32 16 Z"/>
      {/* left petal */}
      <path d="M 22 42 C 16 36, 14 28, 18 22 C 24 26, 28 34, 28 42 Z"/>
      {/* right petal */}
      <path d="M 42 42 C 48 36, 50 28, 46 22 C 40 26, 36 34, 36 42 Z"/>
      {/* outer petals */}
      <path d="M 14 46 C 10 44, 8 40, 9 36 C 14 38, 19 40, 22 44"/>
      <path d="M 50 46 C 54 44, 56 40, 55 36 C 50 38, 45 40, 42 44"/>
      {/* base */}
      <path d="M 16 48 Q 32 54, 48 48"/>
    </PI>
  );
}

// 28 · Regula el sistema nervioso — heart + EKG line
function P_SistemaNervioso({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <path d="M 32 52
               C 18 40, 10 30, 14 20
               C 18 12, 28 14, 32 22
               C 36 14, 46 12, 50 20
               C 54 30, 46 40, 32 52 Z"/>
      {/* EKG line punched through */}
      <path d="M 8 32 L 18 32 L 22 24 L 28 40 L 34 28 L 38 36 L 44 32 L 56 32"
            strokeWidth="1.4"
            stroke="#F2F4EE"
            style={{ paintOrder: 'stroke' }}/>
      <path d="M 8 32 L 18 32 L 22 24 L 28 40 L 34 28 L 38 36 L 44 32 L 56 32"
            strokeWidth="1.4"/>
    </PI>
  );
}

// 29 · Mejora tu calidad de vida — sliders
function P_CalidadVida({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <line x1="10" y1="20" x2="54" y2="20"/>
      <line x1="10" y1="32" x2="54" y2="32"/>
      <line x1="10" y1="44" x2="54" y2="44"/>
      <circle cx="36" cy="20" r="3.2" fill={color}/>
      <circle cx="22" cy="32" r="3.2" fill={color}/>
      <circle cx="44" cy="44" r="3.2" fill={color}/>
    </PI>
  );
}

// 30 · Salud de columna a largo plazo — vertebrae stack
function P_Columna({ size, color = '#2F3A23' }) {
  return (
    <PI size={size} color={color}>
      <ellipse cx="32" cy="10" rx="5"   ry="2.5"/>
      <ellipse cx="32" cy="18" rx="6"   ry="2.7"/>
      <ellipse cx="32" cy="26" rx="7"   ry="3"/>
      <ellipse cx="32" cy="34" rx="7"   ry="3"/>
      <ellipse cx="32" cy="42" rx="6.5" ry="2.8"/>
      <ellipse cx="32" cy="50" rx="5.5" ry="2.5"/>
      <ellipse cx="32" cy="57" rx="4.5" ry="2.2"/>
      {/* tiny side accents */}
      <path d="M 42 26 L 45 24" strokeWidth="0.9" opacity="0.5"/>
      <path d="M 42 50 L 45 52" strokeWidth="0.9" opacity="0.5"/>
    </PI>
  );
}

// ─────────────── exports ───────────────
window.PictorialIcons = {
  Espalda: P_Espalda,
  Cuello: P_Cuello,
  Cabeza: P_Cabeza,
  Movilidad: P_Movilidad,
  Rendimiento: P_Rendimiento,
  Estres: P_Estres,
  Cerebro: P_Cerebro,
  Sueno: P_Sueno,
  Energia: P_Energia,
  Inmune: P_Inmune,
  Digestion: P_Digestion,
  Respiracion: P_Respiracion,
  Corazon: P_Corazon,
  Embarazo: P_Embarazo,
  Bebes: P_Bebes,
  PosturaErguida: P_PosturaErguida,
  Concentracion: P_Concentracion,
  BienestarGeneral: P_BienestarGeneral,
  Lesiones: P_Lesiones,
  Recuperacion: P_Recuperacion,
  Postura: P_Postura,
  Articular: P_Articular,
  Equilibrio: P_Equilibrio,
  Animo: P_Animo,
  VidaActiva: P_VidaActiva,
  Envejecimiento: P_Envejecimiento,
  Conecta: P_Conecta,
  SistemaNervioso: P_SistemaNervioso,
  CalidadVida: P_CalidadVida,
  Columna: P_Columna,
};
