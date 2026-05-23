// Quirosasun icon system — 10 icons × 3 style directions.
// Viewbox is consistent 24×24. Stroke 1.4 (fine line) at draw size.
// Dotted style extends the 3-vertebra brand mark.

const ICON = {
  ink:     '#2F3A23',  // bark
  inkSoft: '#5F6F4A',  // moss
  clay:    '#B89576',
};

// helpers — same viewbox & stroke for all
function I({ children, size = 56, color = ICON.ink, sw = 1.4 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size}
         fill="none" stroke={color} strokeWidth={sw}
         strokeLinecap="round" strokeLinejoin="round"
         xmlns="http://www.w3.org/2000/svg"
         style={{ display: 'block' }}>
      {children}
    </svg>
  );
}

// =====================================================================
// STYLE 1 — DOTTED · built from circles, extends the 3-vertebra mark
// =====================================================================

// 1 · spine
function D1_Spine({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <circle cx="12" cy="5"  r="1.2" fill={color}/>
      <circle cx="12" cy="9"  r="1.6" fill={color}/>
      <circle cx="12" cy="13" r="2.0" fill={color}/>
      <circle cx="12" cy="17" r="1.6" fill={color}/>
      <circle cx="12" cy="20.5" r="1.2" fill={color}/>
    </I>
  );
}

// 2 · hand (palm + 5 fingertips)
function D1_Hand({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      {/* palm — cluster of dots */}
      <circle cx="12" cy="15" r="1.6" fill={color}/>
      <circle cx="9"  cy="14" r="1" fill={color}/>
      <circle cx="15" cy="14" r="1" fill={color}/>
      <circle cx="12" cy="18" r="1" fill={color}/>
      {/* fingertips */}
      <circle cx="6.5" cy="9"  r="1.1" fill={color}/>
      <circle cx="9"   cy="6"  r="1.1" fill={color}/>
      <circle cx="12"  cy="5"  r="1.1" fill={color}/>
      <circle cx="15"  cy="6"  r="1.1" fill={color}/>
      <circle cx="17.5" cy="9" r="1.1" fill={color}/>
    </I>
  );
}

// 3 · pin (location)
function D1_Pin({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      {/* teardrop of dots */}
      <circle cx="12" cy="5"  r="1.2" fill={color}/>
      <circle cx="9"  cy="7"  r="1.2" fill={color}/>
      <circle cx="15" cy="7"  r="1.2" fill={color}/>
      <circle cx="8"  cy="10" r="1.2" fill={color}/>
      <circle cx="16" cy="10" r="1.2" fill={color}/>
      <circle cx="10" cy="13" r="1.2" fill={color}/>
      <circle cx="14" cy="13" r="1.2" fill={color}/>
      <circle cx="12" cy="16" r="1.2" fill={color}/>
      <circle cx="12" cy="19" r="0.7" fill={color}/>
      {/* center */}
      <circle cx="12" cy="9" r="1.6" fill="none" stroke={color}/>
    </I>
  );
}

// 4 · clock
function D1_Clock({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      {/* 12 dots around */}
      {Array.from({length: 12}).map((_, i) => {
        const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const x = 12 + Math.cos(a) * 8;
        const y = 12 + Math.sin(a) * 8;
        const r = i % 3 === 0 ? 1 : 0.7;
        return <circle key={i} cx={x} cy={y} r={r} fill={color}/>;
      })}
      {/* hands */}
      <line x1="12" y1="12" x2="12" y2="7" />
      <line x1="12" y1="12" x2="15.5" y2="13.5" />
      <circle cx="12" cy="12" r="1" fill={color}/>
    </I>
  );
}

// 5 · letter / mail
function D1_Mail({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      {/* envelope dots */}
      {[[5,8],[12,8],[19,8],[5,12],[19,12],[5,16],[12,16],[19,16]].map(([x,y],i) =>
        <circle key={i} cx={x} cy={y} r="1" fill={color}/>
      )}
      {/* flap V */}
      <circle cx="8"  cy="10" r="0.8" fill={color}/>
      <circle cx="16" cy="10" r="0.8" fill={color}/>
      <circle cx="12" cy="13" r="1.2" fill={color}/>
    </I>
  );
}

// 6 · calendar
function D1_Calendar({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      {/* hangers */}
      <circle cx="8"  cy="5" r="0.9" fill={color}/>
      <circle cx="16" cy="5" r="0.9" fill={color}/>
      {/* 3×4 dot grid */}
      {[0,1,2,3].map(r => [0,1,2,3].map(c => (
        <circle key={`${r}-${c}`} cx={6 + c*4} cy={9 + r*3} r="0.9" fill={color}/>
      )))}
    </I>
  );
}

// 7 · phone
function D1_Phone({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      {/* handset traced in dots */}
      {[[7,4.5],[6,7],[6,10],[7.5,12.5],[10,14],[13,15.5],[15.5,16.5],
        [17.5,16.5],[19,15],[19.5,13]].map(([x,y],i) =>
        <circle key={i} cx={x} cy={y} r="1" fill={color}/>
      )}
    </I>
  );
}

// 8 · whatsapp / chat bubble
function D1_Chat({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      {/* bubble outline of dots */}
      {[[6,6],[9,5],[12,5],[15,5],[18,6],[19,9],[19,12],[18,15],
        [15,16],[12,16],[10,17],[8,19],[8,17],[6,16],[5,13],[5,9]].map(([x,y],i) =>
        <circle key={i} cx={x} cy={y} r="0.9" fill={color}/>
      )}
      {/* three dots inside */}
      <circle cx="9"  cy="11" r="0.9" fill={color}/>
      <circle cx="12" cy="11" r="0.9" fill={color}/>
      <circle cx="15" cy="11" r="0.9" fill={color}/>
    </I>
  );
}

// 9 · document
function D1_Document({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      {/* page corner dots */}
      {[[7,4],[12,4],[15,4]].map(([x,y],i) =>
        <circle key={`top${i}`} cx={x} cy={y} r="0.9" fill={color}/>
      )}
      <circle cx="17" cy="6" r="0.9" fill={color}/>
      {[[7,20],[12,20],[17,20]].map(([x,y],i) =>
        <circle key={`bot${i}`} cx={x} cy={y} r="0.9" fill={color}/>
      )}
      <circle cx="7"  cy="11" r="0.9" fill={color}/>
      <circle cx="7"  cy="15" r="0.9" fill={color}/>
      <circle cx="17" cy="11" r="0.9" fill={color}/>
      <circle cx="17" cy="15" r="0.9" fill={color}/>
      {/* text lines as dots */}
      {[[9,8],[12,8],[15,8],[9,12],[12,12],[15,12],[9,16],[12,16]].map(([x,y],i) =>
        <circle key={`tx${i}`} cx={x} cy={y} r="0.7" fill={color} opacity="0.55"/>
      )}
    </I>
  );
}

// 10 · person
function D1_Person({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      {/* head */}
      <circle cx="12" cy="7" r="2.3" fill={color}/>
      {/* shoulders / body dots */}
      <circle cx="8"  cy="13" r="1.1" fill={color}/>
      <circle cx="12" cy="13" r="1.4" fill={color}/>
      <circle cx="16" cy="13" r="1.1" fill={color}/>
      <circle cx="9.5" cy="17" r="1.1" fill={color}/>
      <circle cx="12"  cy="17" r="1.1" fill={color}/>
      <circle cx="14.5" cy="17" r="1.1" fill={color}/>
      <circle cx="10.5" cy="20.5" r="0.9" fill={color}/>
      <circle cx="13.5" cy="20.5" r="0.9" fill={color}/>
    </I>
  );
}

// =====================================================================
// STYLE 2 — FINE LINE · clean outline, rounded caps
// =====================================================================

function D2_Spine({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <ellipse cx="12" cy="6"  rx="2.4" ry="1.1"/>
      <ellipse cx="12" cy="10" rx="3.0" ry="1.3"/>
      <ellipse cx="12" cy="14" rx="3.4" ry="1.4"/>
      <ellipse cx="12" cy="18" rx="3.0" ry="1.3"/>
      <ellipse cx="12" cy="21.4" rx="2.4" ry="1.1"/>
    </I>
  );
}

function D2_Hand({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      {/* palm */}
      <path d="M 7 14
               C 7 11, 7 9, 8 8
               L 8 12
               M 10 12 L 10 6 C 10 5, 11 5, 11 6 L 11 12
               M 13 12 L 13 5 C 13 4, 14 4, 14 5 L 14 12
               M 16 12 L 16 6 C 16 5, 17 5, 17 6 L 17 12.5
               M 7 14 C 7 19, 11 21, 12.5 21
               C 16 21, 17 18, 17 14"/>
    </I>
  );
}

function D2_Pin({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <path d="M 12 21 C 7 14, 5 11, 5 8.5
               C 5 5.5, 8 3.5, 12 3.5
               C 16 3.5, 19 5.5, 19 8.5
               C 19 11, 17 14, 12 21 Z"/>
      <circle cx="12" cy="9" r="2.4"/>
    </I>
  );
}

function D2_Clock({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <circle cx="12" cy="12" r="8.5"/>
      <line x1="12" y1="12" x2="12" y2="7" />
      <line x1="12" y1="12" x2="15.5" y2="13.5" />
      {/* tick marks at 12, 3, 6, 9 */}
      <line x1="12" y1="3.5" x2="12" y2="4.5"/>
      <line x1="20.5" y1="12" x2="19.5" y2="12"/>
      <line x1="12" y1="20.5" x2="12" y2="19.5"/>
      <line x1="3.5" y1="12" x2="4.5" y2="12"/>
    </I>
  );
}

function D2_Mail({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <rect x="3.5" y="6" width="17" height="12" rx="1"/>
      <path d="M 3.5 7.5 L 12 13 L 20.5 7.5"/>
    </I>
  );
}

function D2_Calendar({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <rect x="3.5" y="5.5" width="17" height="15" rx="1"/>
      <line x1="3.5" y1="10" x2="20.5" y2="10"/>
      <line x1="8"  y1="3" x2="8"  y2="7"/>
      <line x1="16" y1="3" x2="16" y2="7"/>
      {/* date dots */}
      <circle cx="8"   cy="14" r="0.6" fill={color}/>
      <circle cx="12"  cy="14" r="0.6" fill={color}/>
      <circle cx="16"  cy="14" r="0.6" fill={color}/>
      <circle cx="8"   cy="17" r="0.6" fill={color}/>
      <circle cx="12"  cy="17" r="0.6" fill={color}/>
    </I>
  );
}

function D2_Phone({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <path d="M 5.5 5
               C 5.5 4, 6.5 3.5, 7.5 4
               L 9 6
               C 9.5 7, 9 8, 8.5 8.5
               L 7.5 9.5
               C 8 12, 12 16, 14.5 16.5
               L 15.5 15.5
               C 16 15, 17 14.5, 18 15
               L 20 16.5
               C 20.5 17.5, 20 18.5, 19 18.5
               C 12 19, 5 12, 5.5 5 Z"/>
    </I>
  );
}

function D2_Chat({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <path d="M 4 11
               C 4 7, 7.5 5, 12 5
               C 16.5 5, 20 7, 20 11
               C 20 15, 16.5 17, 12 17
               L 8 20
               L 9 17
               C 6 16, 4 14, 4 11 Z"/>
      <circle cx="9"  cy="11" r="0.6" fill={color}/>
      <circle cx="12" cy="11" r="0.6" fill={color}/>
      <circle cx="15" cy="11" r="0.6" fill={color}/>
    </I>
  );
}

function D2_Document({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <path d="M 6 3.5 L 15 3.5 L 18.5 7 L 18.5 20.5 L 6 20.5 Z"/>
      <path d="M 15 3.5 L 15 7 L 18.5 7"/>
      <line x1="9"  y1="11" x2="15.5" y2="11"/>
      <line x1="9"  y1="14" x2="15.5" y2="14"/>
      <line x1="9"  y1="17" x2="13"   y2="17"/>
    </I>
  );
}

function D2_Person({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <circle cx="12" cy="7.5" r="3"/>
      <path d="M 4.5 21
               C 4.5 16, 8 13.5, 12 13.5
               C 16 13.5, 19.5 16, 19.5 21"/>
    </I>
  );
}

// =====================================================================
// STYLE 3 — LINE + CLAY ACCENT · signature: one element filled in Clay
// =====================================================================

function D3_Spine({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <ellipse cx="12" cy="6"  rx="2.4" ry="1.1"/>
      <ellipse cx="12" cy="10" rx="3.0" ry="1.3"/>
      <ellipse cx="12" cy="14" rx="3.4" ry="1.4" fill={ICON.clay} stroke="none"/>
      <ellipse cx="12" cy="18" rx="3.0" ry="1.3"/>
      <ellipse cx="12" cy="21.4" rx="2.4" ry="1.1"/>
    </I>
  );
}

function D3_Hand({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <path d="M 7 14
               C 7 11, 7 9, 8 8
               L 8 12
               M 10 12 L 10 6 C 10 5, 11 5, 11 6 L 11 12
               M 13 12 L 13 5 C 13 4, 14 4, 14 5 L 14 12
               M 16 12 L 16 6 C 16 5, 17 5, 17 6 L 17 12.5
               M 7 14 C 7 19, 11 21, 12.5 21
               C 16 21, 17 18, 17 14"/>
      {/* clay palm dot — energy point */}
      <circle cx="12" cy="16.5" r="1.4" fill={ICON.clay} stroke="none"/>
    </I>
  );
}

function D3_Pin({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <path d="M 12 21 C 7 14, 5 11, 5 8.5
               C 5 5.5, 8 3.5, 12 3.5
               C 16 3.5, 19 5.5, 19 8.5
               C 19 11, 17 14, 12 21 Z"/>
      {/* clay center */}
      <circle cx="12" cy="9" r="2.2" fill={ICON.clay} stroke="none"/>
    </I>
  );
}

function D3_Clock({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <circle cx="12" cy="12" r="8.5"/>
      <line x1="12" y1="12" x2="12" y2="7" />
      <line x1="12" y1="12" x2="15.5" y2="13.5" />
      <line x1="12" y1="3.5" x2="12" y2="4.5"/>
      <line x1="20.5" y1="12" x2="19.5" y2="12"/>
      <line x1="12" y1="20.5" x2="12" y2="19.5"/>
      <line x1="3.5" y1="12" x2="4.5" y2="12"/>
      <circle cx="12" cy="12" r="1.2" fill={ICON.clay} stroke="none"/>
    </I>
  );
}

function D3_Mail({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <rect x="3.5" y="6" width="17" height="12" rx="1"/>
      {/* clay flap */}
      <path d="M 3.5 7.5 L 12 13 L 20.5 7.5 L 12 6 Z"
            fill={ICON.clay} stroke="none"/>
      <path d="M 3.5 7.5 L 12 13 L 20.5 7.5"/>
    </I>
  );
}

function D3_Calendar({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <rect x="3.5" y="5.5" width="17" height="15" rx="1"/>
      <line x1="3.5" y1="10" x2="20.5" y2="10"/>
      <line x1="8"  y1="3" x2="8"  y2="7"/>
      <line x1="16" y1="3" x2="16" y2="7"/>
      {/* clay-highlighted date */}
      <circle cx="12" cy="14" r="2.2" fill={ICON.clay} stroke="none"/>
      {/* other dates */}
      <circle cx="8"   cy="14" r="0.6" fill={color}/>
      <circle cx="16"  cy="14" r="0.6" fill={color}/>
      <circle cx="8"   cy="17.5" r="0.6" fill={color}/>
      <circle cx="12"  cy="17.5" r="0.6" fill={color}/>
      <circle cx="16"  cy="17.5" r="0.6" fill={color}/>
    </I>
  );
}

function D3_Phone({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <path d="M 5.5 5
               C 5.5 4, 6.5 3.5, 7.5 4
               L 9 6
               C 9.5 7, 9 8, 8.5 8.5
               L 7.5 9.5
               C 8 12, 12 16, 14.5 16.5
               L 15.5 15.5
               C 16 15, 17 14.5, 18 15
               L 20 16.5
               C 20.5 17.5, 20 18.5, 19 18.5
               C 12 19, 5 12, 5.5 5 Z"
            fill={ICON.clay} fillOpacity="0.35"/>
    </I>
  );
}

function D3_Chat({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <path d="M 4 11
               C 4 7, 7.5 5, 12 5
               C 16.5 5, 20 7, 20 11
               C 20 15, 16.5 17, 12 17
               L 8 20
               L 9 17
               C 6 16, 4 14, 4 11 Z"/>
      {/* clay center dot */}
      <circle cx="12" cy="11" r="0.9" fill={ICON.clay} stroke="none"/>
      <circle cx="9"  cy="11" r="0.6" fill={color}/>
      <circle cx="15" cy="11" r="0.6" fill={color}/>
    </I>
  );
}

function D3_Document({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      <path d="M 6 3.5 L 15 3.5 L 18.5 7 L 18.5 20.5 L 6 20.5 Z"/>
      {/* clay folded corner */}
      <path d="M 15 3.5 L 15 7 L 18.5 7 Z"
            fill={ICON.clay} stroke="none"/>
      <path d="M 15 3.5 L 15 7 L 18.5 7"/>
      <line x1="9"  y1="11" x2="15.5" y2="11"/>
      <line x1="9"  y1="14" x2="15.5" y2="14"/>
      <line x1="9"  y1="17" x2="13"   y2="17"/>
    </I>
  );
}

function D3_Person({ size, color = ICON.ink }) {
  return (
    <I size={size} color={color}>
      {/* clay-filled head */}
      <circle cx="12" cy="7.5" r="3" fill={ICON.clay} stroke="none"/>
      <circle cx="12" cy="7.5" r="3"/>
      <path d="M 4.5 21
               C 4.5 16, 8 13.5, 12 13.5
               C 16 13.5, 19.5 16, 19.5 21"/>
    </I>
  );
}

// ─────────────────── exports ───────────────────
window.IconLib = {
  D1: { Spine: D1_Spine, Hand: D1_Hand, Pin: D1_Pin, Clock: D1_Clock,
        Mail: D1_Mail, Calendar: D1_Calendar, Phone: D1_Phone,
        Chat: D1_Chat, Document: D1_Document, Person: D1_Person },
  D2: { Spine: D2_Spine, Hand: D2_Hand, Pin: D2_Pin, Clock: D2_Clock,
        Mail: D2_Mail, Calendar: D2_Calendar, Phone: D2_Phone,
        Chat: D2_Chat, Document: D2_Document, Person: D2_Person },
  D3: { Spine: D3_Spine, Hand: D3_Hand, Pin: D3_Pin, Clock: D3_Clock,
        Mail: D3_Mail, Calendar: D3_Calendar, Phone: D3_Phone,
        Chat: D3_Chat, Document: D3_Document, Person: D3_Person },
};
window.ICON_COLORS = ICON;
