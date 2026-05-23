// Six core anatomical illustrations × three style directions.
// These are EXPLORATORY style studies — geometric primitives arranged
// anatomically so the illustrator brief is concrete. Not final art.
//
// Style A — Dot diagram        (pure dots/circles, extends 3-dot brand mark)
// Style B — Fine line          (single-weight outline + Clay wash)
// Style C — Botanical-anatomical (line + seed-pod vertebrae, Katie Scott)

const ANATOMY = {
  ink:       '#2F3A23',   // bark
  inkSoft:   '#5F6F4A',   // moss
  wash:      'rgba(184, 149, 118, 0.16)', // clay 16%
  washDeep:  'rgba(184, 149, 118, 0.32)',
  washLine:  '#B89576',
  paper:     '#EDE7DA',
};

// ─────────────────────────── Frame helper ───────────────────────────
function AnatomyFrame({ children, w = 280, h = 420, wash = 'oval', label }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%"
         preserveAspectRatio="xMidYMid meet"
         xmlns="http://www.w3.org/2000/svg"
         style={{ display: 'block' }}>
      {wash === 'oval' && (
        <ellipse cx={w/2} cy={h/2} rx={w*0.40} ry={h*0.43} fill={ANATOMY.wash} />
      )}
      {wash === 'blob' && (
        <path d={`M ${w*0.2} ${h*0.15} Q ${w*0.05} ${h*0.5} ${w*0.25} ${h*0.85}
                  Q ${w*0.6} ${h*1.0} ${w*0.85} ${h*0.75}
                  Q ${w*1.0} ${h*0.4} ${w*0.75} ${h*0.1}
                  Q ${w*0.5} ${h*0.02} ${w*0.2} ${h*0.15} Z`}
              fill={ANATOMY.wash} />
      )}
      {children}
      {label && (
        <text x={w/2} y={h - 14} textAnchor="middle"
              fontFamily='"IBM Plex Mono", monospace'
              fontSize="9" fill={ANATOMY.ink} opacity="0.45"
              letterSpacing="1.8">
          {label}
        </text>
      )}
    </svg>
  );
}

// =====================================================================
// STYLE A — DOT DIAGRAM
// Pure circles. Anatomy reduced to schematic dot maps.
// =====================================================================

function A_Cervical() {
  return (
    <AnatomyFrame label="01 · CERVICAL">
      {/* 7 vertebrae, each a 3-dot cluster (transverse + body + spinous) */}
      {[0,1,2,3,4,5,6].map(i => {
        const y = 100 + i * 32;
        // gentle forward lordosis
        const dx = Math.sin((i+1) * 0.5) * 8;
        const cx = 140 + dx;
        const r  = 4.5 + i * 0.6;
        return (
          <g key={i}>
            <circle cx={cx - 22} cy={y} r={r * 0.55} fill={ANATOMY.ink} opacity="0.55"/>
            <circle cx={cx}      cy={y} r={r}        fill={ANATOMY.ink} />
            <circle cx={cx + 22} cy={y} r={r * 0.55} fill={ANATOMY.ink} opacity="0.55"/>
            <circle cx={cx + 38} cy={y - 2} r={r * 0.35} fill={ANATOMY.washLine}/>
          </g>
        );
      })}
      {/* base — first thoracic suggestion */}
      <circle cx="146" cy="334" r="6" fill={ANATOMY.ink} opacity="0.25"/>
    </AnatomyFrame>
  );
}

function A_FullSpine() {
  // 24 vertebrae in S-curve. Cervical(7) thoracic(12) lumbar(5) + sacrum dots.
  const dots = [];
  for (let i = 0; i < 24; i++) {
    const t = i / 23;
    // S-curve: lordosis-kyphosis-lordosis
    const dx = Math.sin(t * Math.PI * 2.1) * 18;
    const cx = 140 + dx;
    const cy = 50 + t * 290;
    const r  = i < 7 ? 3.5 : i < 19 ? 5 + (i - 7) * 0.4 : 7.5;
    dots.push(<circle key={i} cx={cx} cy={cy} r={r} fill={ANATOMY.ink}/>);
    // spinous nubs
    dots.push(<circle key={`s${i}`} cx={cx + 14} cy={cy - 1} r={r * 0.4}
                      fill={ANATOMY.washLine}/>);
  }
  // sacrum — descending triangle of dots
  const sacrum = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c <= r; c++) {
      const cx = 140 + (c - r/2) * 9;
      const cy = 350 + r * 9;
      sacrum.push(<circle key={`sa${r}-${c}`} cx={cx} cy={cy} r="2.5"
                          fill={ANATOMY.ink} opacity={0.85 - r*0.15}/>);
    }
  }
  return (
    <AnatomyFrame label="02 · COLUMNA">
      {dots}{sacrum}
    </AnatomyFrame>
  );
}

function A_BrainStem() {
  return (
    <AnatomyFrame label="03 · TRONCO">
      {/* cluster of dots forming the cerebrum hemisphere */}
      {Array.from({length: 38}).map((_, i) => {
        const a = (i / 38) * Math.PI * 2;
        const rr = 38 + Math.sin(i * 1.3) * 10;
        const cx = 140 + Math.cos(a) * rr;
        const cy = 130 + Math.sin(a) * rr * 0.85;
        return <circle key={i} cx={cx} cy={cy} r={2.2 + Math.cos(i*0.7)*0.8}
                       fill={ANATOMY.ink} opacity="0.78"/>;
      })}
      {/* brain stem — descending column of larger dots */}
      {[0,1,2,3,4,5].map(i => (
        <circle key={i} cx="140" cy={195 + i*22} r={6 - i*0.4}
                fill={ANATOMY.ink}/>
      ))}
      {/* cranial nerves — small dots radiating */}
      {[-1,-0.7,-0.4,0.4,0.7,1].map((a, i) => {
        const x = 140 + a * 60;
        const y = 165 + Math.abs(a) * 18;
        return <g key={i}>
          <circle cx={x} cy={y} r="2.5" fill={ANATOMY.washLine}/>
          <circle cx={x + a*8} cy={y + 8} r="1.8" fill={ANATOMY.washLine} opacity="0.7"/>
        </g>;
      })}
    </AnatomyFrame>
  );
}

function A_Sacrum() {
  return (
    <AnatomyFrame label="04 · SACRO · PELVIS">
      {/* sacrum — triangle of dots, point down */}
      {[0,1,2,3,4].map(r =>
        Array.from({length: 5 - r}).map((_, c) => {
          const cx = 140 + (c - (4-r)/2) * 14;
          const cy = 120 + r * 14;
          return <circle key={`${r}-${c}`} cx={cx} cy={cy} r={4 - r*0.4}
                         fill={ANATOMY.ink}/>;
        })
      )}
      {/* iliac wings — arcs of dots flanking */}
      {[-1, 1].map(side =>
        [0,1,2,3,4,5,6].map(i => {
          const a = (i / 6) * Math.PI * 0.7 - Math.PI * 0.35;
          const cx = 140 + side * (50 + Math.cos(a) * 45);
          const cy = 145 + Math.sin(a) * 55;
          return <circle key={`il${side}-${i}`} cx={cx} cy={cy} r="4"
                         fill={ANATOMY.ink} opacity="0.85"/>;
        })
      )}
      {/* sit bones */}
      <circle cx="100" cy="240" r="6" fill={ANATOMY.washLine}/>
      <circle cx="180" cy="240" r="6" fill={ANATOMY.washLine}/>
      {/* coccyx trail */}
      {[0,1,2].map(i =>
        <circle key={i} cx="140" cy={210 + i*10} r={2.5 - i*0.5}
                fill={ANATOMY.ink} opacity={0.7 - i*0.2}/>
      )}
    </AnatomyFrame>
  );
}

function A_Standing() {
  // Dotted side-profile silhouette.
  const pts = [
    [148, 60],[155, 70],[158, 80],[156, 95],[150, 108],  // head
    [144, 122],[142, 135],                                 // neck
    [136, 150],[133, 168],[132, 188],                     // upper back kyphosis
    [134, 208],[138, 226],[142, 244],                     // lumbar lordosis
    [144, 262],[145, 280],                                 // hip
    [142, 300],[140, 322],[140, 345],[142, 370],          // leg
  ];
  return (
    <AnatomyFrame label="05 · POSTURA · DE PIE">
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={i === 4 ? 7 : 3.2}
                fill={ANATOMY.ink}/>
      ))}
      {/* plumb line */}
      <line x1="148" y1="60" x2="148" y2="380"
            stroke={ANATOMY.washLine} strokeWidth="0.8"
            strokeDasharray="2 4"/>
      {/* feet */}
      <circle cx="135" cy="385" r="3" fill={ANATOMY.ink}/>
      <circle cx="150" cy="385" r="3" fill={ANATOMY.ink}/>
    </AnatomyFrame>
  );
}

function A_Seated() {
  // Dotted seated side-profile.
  const pts = [
    [120, 70],[128, 80],[132, 92],[130, 108],            // head
    [124, 122],[120, 138],                                // neck
    [116, 156],[114, 175],[116, 195],                    // upper back rounded
    [122, 212],[130, 226],                                // lumbar
    [144, 232],[164, 232],[184, 230],[204, 226],         // thigh forward
    [214, 240],[218, 258],[220, 278],[222, 298],         // shin down
    [222, 318],                                            // ankle
  ];
  return (
    <AnatomyFrame label="06 · POSTURA · SENTADA">
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={i === 4 ? 6 : 3.2}
                fill={ANATOMY.ink}/>
      ))}
      {/* chair seat & back */}
      <line x1="115" y1="232" x2="225" y2="232"
            stroke={ANATOMY.washLine} strokeWidth="0.9"/>
      <line x1="115" y1="155" x2="115" y2="232"
            stroke={ANATOMY.washLine} strokeWidth="0.9"/>
      {/* foot */}
      <circle cx="222" cy="322" r="3" fill={ANATOMY.ink}/>
      <circle cx="232" cy="322" r="3" fill={ANATOMY.ink}/>
    </AnatomyFrame>
  );
}

// =====================================================================
// STYLE B — FINE LINE
// Single-weight outline drawings, soft clay wash behind.
// Closest to the Hudrisier / Netter brief.
// =====================================================================

function B_Cervical() {
  return (
    <AnatomyFrame label="01 · CERVICAL">
      <g stroke={ANATOMY.ink} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {[0,1,2,3,4,5,6].map(i => {
          const y = 95 + i * 33;
          const dx = Math.sin((i+1) * 0.5) * 6;
          const cx = 140 + dx;
          const rx = 24 + i * 1.8;
          return (
            <g key={i}>
              {/* vertebral body — side profile */}
              <ellipse cx={cx} cy={y} rx={rx} ry="9"/>
              {/* spinous process — small wedge behind */}
              <path d={`M ${cx + rx - 2} ${y - 4} L ${cx + rx + 14} ${y - 7}
                        L ${cx + rx + 16} ${y + 3} L ${cx + rx - 2} ${y + 5} Z`}/>
              {/* foramen (canal) dot */}
              <circle cx={cx - 2} cy={y} r="1.2" fill={ANATOMY.ink}/>
            </g>
          );
        })}
        {/* C1 atlas — ring at top */}
        <circle cx="148" cy="78" r="11"/>
        {/* base hint of T1 */}
        <ellipse cx="148" cy="340" rx="40" ry="10" opacity="0.35"/>
      </g>
      {/* soft clay shadow under */}
      <ellipse cx="148" cy="365" rx="60" ry="6" fill={ANATOMY.washDeep}/>
    </AnatomyFrame>
  );
}

function B_FullSpine() {
  // S-curve column of vertebrae.
  const verts = [];
  for (let i = 0; i < 24; i++) {
    const t = i / 23;
    const dx = Math.sin(t * Math.PI * 2.1) * 16;
    const cx = 140 + dx;
    const cy = 50 + t * 290;
    const rx = i < 7 ? 14 + i * 0.6 : i < 19 ? 18 + (i-7) * 0.8 : 24;
    verts.push(
      <g key={i}>
        <ellipse cx={cx} cy={cy} rx={rx} ry="6"/>
        <path d={`M ${cx + rx - 1} ${cy - 2} L ${cx + rx + 9} ${cy - 4}
                  L ${cx + rx + 10} ${cy + 3} L ${cx + rx - 1} ${cy + 3} Z`}/>
      </g>
    );
  }
  return (
    <AnatomyFrame label="02 · COLUMNA">
      <g stroke={ANATOMY.ink} strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {verts}
        {/* sacrum — triangular fused mass */}
        <path d="M 118 350 L 168 350 L 158 392 L 128 392 Z"/>
        <line x1="135" y1="362" x2="151" y2="362"/>
        <line x1="133" y1="372" x2="153" y2="372"/>
        <line x1="131" y1="382" x2="155" y2="382"/>
        {/* coccyx */}
        <path d="M 140 392 Q 144 402 142 410"/>
      </g>
      <ellipse cx="142" cy="418" rx="50" ry="4" fill={ANATOMY.washDeep}/>
    </AnatomyFrame>
  );
}

function B_BrainStem() {
  return (
    <AnatomyFrame label="03 · TRONCO ENCEFÁLICO">
      <g stroke={ANATOMY.ink} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* cerebrum — irregular oval */}
        <path d="M 80 130 Q 70 80 130 70 Q 200 65 205 115 Q 210 160 175 175
                 Q 160 178 145 175 Q 130 178 115 175 Q 80 168 80 130 Z"/>
        {/* cerebellum behind */}
        <path d="M 175 165 Q 215 165 215 195 Q 210 215 180 215 Q 165 215 165 195 Z"/>
        {/* cerebellum folia */}
        <path d="M 180 175 Q 195 178 205 175"/>
        <path d="M 178 188 Q 195 192 208 188"/>
        <path d="M 178 200 Q 195 204 205 200"/>
        {/* brain stem — descending pillar */}
        <path d="M 130 175 Q 128 220 138 260 Q 142 290 145 320"/>
        <path d="M 160 175 Q 162 220 158 260 Q 156 290 155 320"/>
        {/* pons bulge */}
        <ellipse cx="145" cy="215" rx="22" ry="14"/>
        {/* medulla */}
        <path d="M 132 240 Q 145 248 158 240"/>
        {/* cranial nerves — thin filaments out the sides */}
        {[195, 210, 225, 240].map((y, i) => (
          <g key={i}>
            <path d={`M 124 ${y} Q 110 ${y-3} 90 ${y + i*2}`}/>
            <path d={`M 166 ${y} Q 180 ${y-3} 200 ${y + i*2}`}/>
          </g>
        ))}
        {/* optic chiasm */}
        <path d="M 130 160 L 145 168 L 160 160"/>
      </g>
    </AnatomyFrame>
  );
}

function B_Sacrum() {
  return (
    <AnatomyFrame label="04 · SACRO · PELVIS">
      <g stroke={ANATOMY.ink} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* iliac wings — two curved blades */}
        <path d="M 50 130 Q 30 180 60 230 Q 90 250 120 240 Q 130 200 122 150 Q 100 110 50 130 Z"/>
        <path d="M 230 130 Q 250 180 220 230 Q 190 250 160 240 Q 150 200 158 150 Q 180 110 230 130 Z"/>
        {/* sacrum — triangular wedge in middle */}
        <path d="M 122 140 L 158 140 L 168 240 L 112 240 Z"/>
        {/* sacral foramina */}
        {[0,1,2,3].map(i => (
          <g key={i}>
            <circle cx="130" cy={160 + i*18} r="2.5"/>
            <circle cx="150" cy={160 + i*18} r="2.5"/>
          </g>
        ))}
        {/* sacroiliac joints */}
        <path d="M 122 148 Q 118 195 112 240" strokeDasharray="2 3"/>
        <path d="M 158 148 Q 162 195 168 240" strokeDasharray="2 3"/>
        {/* sit bones — two rounded knobs */}
        <ellipse cx="85" cy="280" rx="22" ry="12"/>
        <ellipse cx="195" cy="280" rx="22" ry="12"/>
        {/* pubic arch */}
        <path d="M 100 285 Q 140 320 180 285"/>
        {/* coccyx tail */}
        <path d="M 140 245 Q 138 265 144 280"/>
      </g>
    </AnatomyFrame>
  );
}

function B_Standing() {
  return (
    <AnatomyFrame label="05 · POSTURA · DE PIE" w={260} h={420}>
      <g stroke={ANATOMY.ink} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* head */}
        <ellipse cx="150" cy="75" rx="26" ry="32"/>
        {/* ear */}
        <ellipse cx="160" cy="78" rx="3" ry="5"/>
        {/* neck → torso side silhouette */}
        <path d="M 142 105
                 Q 138 118 134 132
                 Q 130 150 132 175
                 Q 136 200 144 225
                 Q 150 245 152 265
                 Q 152 280 148 295
                 Q 144 315 142 340
                 Q 140 360 142 385"/>
        {/* back contour */}
        <path d="M 168 105
                 Q 176 125 174 160
                 Q 168 190 162 220
                 Q 158 245 160 268
                 Q 162 285 162 305"/>
        {/* spine indication — dotted curve along back */}
        <path d="M 156 110
                 Q 162 145 158 180
                 Q 152 215 156 250
                 Q 158 275 156 300"
              strokeDasharray="2 3" stroke={ANATOMY.washLine}/>
        {/* hip joint mark */}
        <circle cx="150" cy="265" r="3" fill={ANATOMY.washLine} stroke="none"/>
        {/* knee joint */}
        <circle cx="146" cy="335" r="2.5" fill={ANATOMY.washLine} stroke="none"/>
        {/* ankle */}
        <circle cx="144" cy="385" r="2" fill={ANATOMY.washLine} stroke="none"/>
        {/* foot */}
        <path d="M 130 388 Q 132 395 162 392"/>
        {/* plumb line */}
        <line x1="150" y1="48" x2="150" y2="395"
              stroke={ANATOMY.washLine} strokeWidth="0.7" strokeDasharray="1 4"/>
      </g>
    </AnatomyFrame>
  );
}

function B_Seated() {
  return (
    <AnatomyFrame label="06 · POSTURA · SENTADA" w={320} h={380}>
      <g stroke={ANATOMY.ink} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* head */}
        <ellipse cx="115" cy="65" rx="24" ry="29"/>
        <ellipse cx="124" cy="68" rx="2.5" ry="4"/>
        {/* torso seated side profile */}
        <path d="M 108 92
                 Q 102 110 100 130
                 Q 98 155 106 180
                 Q 116 205 130 220"/>
        {/* back curve */}
        <path d="M 132 92
                 Q 140 120 134 155
                 Q 126 185 124 210"/>
        {/* spine */}
        <path d="M 122 95
                 Q 124 130 118 170
                 Q 116 195 124 215"
              strokeDasharray="2 3" stroke={ANATOMY.washLine}/>
        {/* thigh — horizontal */}
        <path d="M 130 220 Q 170 226 215 226"/>
        <path d="M 130 240 Q 175 246 220 246"/>
        {/* knee */}
        <circle cx="218" cy="234" r="3" fill={ANATOMY.washLine} stroke="none"/>
        {/* shin down */}
        <path d="M 220 246
                 Q 226 270 230 300
                 Q 232 320 232 340"/>
        <path d="M 230 246
                 Q 238 270 244 300
                 Q 246 320 246 340"/>
        {/* ankle */}
        <circle cx="237" cy="340" r="2.5" fill={ANATOMY.washLine} stroke="none"/>
        {/* foot */}
        <path d="M 224 343 Q 226 350 258 348"/>
        {/* chair — minimal */}
        <path d="M 95 220 L 235 220" stroke={ANATOMY.washLine} strokeWidth="0.9"/>
        <path d="M 95 145 L 95 220" stroke={ANATOMY.washLine} strokeWidth="0.9"/>
        {/* hip joint mark */}
        <circle cx="128" cy="222" r="3" fill={ANATOMY.washLine} stroke="none"/>
      </g>
    </AnatomyFrame>
  );
}

// =====================================================================
// STYLE C — BOTANICAL-ANATOMICAL
// Anatomy treated like botanical specimen. Vertebrae become seed pods,
// nerves become tendrils, posture lines become stems.
// =====================================================================

function C_Cervical() {
  return (
    <AnatomyFrame label="01 · CERVICAL · spec." wash="blob">
      <g stroke={ANATOMY.ink} strokeWidth="1.15" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* central stem */}
        <path d="M 140 60 Q 138 200 144 340" />
        {/* 7 seed-pod vertebrae */}
        {[0,1,2,3,4,5,6].map(i => {
          const y = 90 + i * 35;
          const side = i % 2 === 0 ? 1 : -1;
          const cx = 140 + side * 6;
          return (
            <g key={i}>
              {/* leaf-shape pod */}
              <path d={`M ${cx} ${y - 12}
                        Q ${cx + 24} ${y - 8} ${cx + 26} ${y}
                        Q ${cx + 24} ${y + 8} ${cx} ${y + 12}
                        Q ${cx - 24} ${y + 8} ${cx - 26} ${y}
                        Q ${cx - 24} ${y - 8} ${cx} ${y - 12} Z`} />
              {/* center vein */}
              <line x1={cx - 24} y1={y} x2={cx + 24} y2={y}
                    stroke={ANATOMY.washLine} strokeWidth="0.7"/>
              {/* central seed */}
              <circle cx={cx} cy={y} r="2" fill={ANATOMY.ink}/>
              {/* small dots along vein */}
              {[-12, 12].map(dx =>
                <circle key={dx} cx={cx + dx} cy={y} r="1" fill={ANATOMY.washLine}/>
              )}
            </g>
          );
        })}
        {/* small tendrils at top */}
        <path d="M 140 60 Q 128 50 122 40" stroke={ANATOMY.washLine} strokeWidth="0.8"/>
        <path d="M 140 60 Q 152 50 158 40" stroke={ANATOMY.washLine} strokeWidth="0.8"/>
        <circle cx="122" cy="40" r="1.5" fill={ANATOMY.washLine}/>
        <circle cx="158" cy="40" r="1.5" fill={ANATOMY.washLine}/>
      </g>
    </AnatomyFrame>
  );
}

function C_FullSpine() {
  const pods = [];
  for (let i = 0; i < 22; i++) {
    const t = i / 21;
    const dx = Math.sin(t * Math.PI * 2.1) * 14;
    const cx = 140 + dx;
    const cy = 55 + t * 290;
    const rx = i < 7 ? 14 : i < 18 ? 18 + (i-7) : 22;
    pods.push(
      <g key={i}>
        <path d={`M ${cx} ${cy - 7}
                  Q ${cx + rx} ${cy - 5} ${cx + rx + 2} ${cy}
                  Q ${cx + rx} ${cy + 5} ${cx} ${cy + 7}
                  Q ${cx - rx} ${cy + 5} ${cx - rx - 2} ${cy}
                  Q ${cx - rx} ${cy - 5} ${cx} ${cy - 7} Z`} />
        <line x1={cx - rx} y1={cy} x2={cx + rx} y2={cy}
              stroke={ANATOMY.washLine} strokeWidth="0.6"/>
        <circle cx={cx} cy={cy} r="1.8" fill={ANATOMY.ink}/>
      </g>
    );
  }
  return (
    <AnatomyFrame label="02 · COLUMNA · spec." wash="blob">
      <g stroke={ANATOMY.ink} strokeWidth="1.05" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* stem behind */}
        <path d="M 140 50 Q 122 130 145 200 Q 162 270 142 360"
              stroke={ANATOMY.washLine} strokeWidth="0.8"/>
        {pods}
        {/* sacrum — a flower-like flared base */}
        <path d="M 118 355 Q 110 380 132 395 Q 152 400 170 388 Q 178 370 168 355
                 Q 156 348 142 350 Q 128 348 118 355 Z"/>
        {/* sacral 'seed grid' */}
        {[0,1,2].map(r => [0,1,2].map(c => (
          <circle key={`${r}-${c}`} cx={130 + c*14} cy={368 + r*8} r="1.5"
                  fill={ANATOMY.ink} opacity="0.7"/>
        )))}
      </g>
    </AnatomyFrame>
  );
}

function C_BrainStem() {
  return (
    <AnatomyFrame label="03 · TRONCO · spec." wash="blob">
      <g stroke={ANATOMY.ink} strokeWidth="1.15" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* cerebrum as a fruit / bulb */}
        <path d="M 140 75
                 Q 75 85 78 145
                 Q 80 195 130 200
                 Q 145 200 160 200
                 Q 210 195 212 145
                 Q 215 85 140 75 Z"/>
        {/* gyri as botanical veins */}
        <path d="M 100 110 Q 140 105 180 110" stroke={ANATOMY.washLine} strokeWidth="0.6"/>
        <path d="M 90 130 Q 140 125 190 130" stroke={ANATOMY.washLine} strokeWidth="0.6"/>
        <path d="M 88 155 Q 140 150 192 155" stroke={ANATOMY.washLine} strokeWidth="0.6"/>
        <path d="M 95 180 Q 140 175 185 180" stroke={ANATOMY.washLine} strokeWidth="0.6"/>
        {/* central seam */}
        <line x1="140" y1="80" x2="140" y2="195" stroke={ANATOMY.ink} strokeWidth="0.7"/>
        {/* brain stem as a stem */}
        <path d="M 132 200 Q 130 250 138 305"/>
        <path d="M 148 200 Q 150 250 146 305"/>
        {/* small leaves/nerves */}
        {[225, 250, 275].map((y, i) => (
          <g key={i}>
            <path d={`M 132 ${y} Q 110 ${y-4} 95 ${y+6} Q 110 ${y+10} 130 ${y+4}`}
                  stroke={ANATOMY.washLine} strokeWidth="0.7"/>
            <path d={`M 148 ${y} Q 170 ${y-4} 185 ${y+6} Q 170 ${y+10} 150 ${y+4}`}
                  stroke={ANATOMY.washLine} strokeWidth="0.7"/>
          </g>
        ))}
        {/* base — opening into spine */}
        <ellipse cx="142" cy="310" rx="14" ry="5"/>
        <circle cx="142" cy="310" r="2" fill={ANATOMY.ink}/>
      </g>
    </AnatomyFrame>
  );
}

function C_Sacrum() {
  return (
    <AnatomyFrame label="04 · SACRO · spec." wash="blob">
      <g stroke={ANATOMY.ink} strokeWidth="1.15" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* pelvis as a blossom — two flared petals */}
        <path d="M 138 110
                 Q 60 130 50 200
                 Q 55 240 100 245
                 Q 130 240 138 215 Z"/>
        <path d="M 142 110
                 Q 220 130 230 200
                 Q 225 240 180 245
                 Q 150 240 142 215 Z"/>
        {/* sacrum — central pod */}
        <path d="M 130 130
                 Q 124 180 130 230
                 Q 140 245 150 230
                 Q 156 180 150 130
                 Q 140 122 130 130 Z"/>
        {/* sacrum 'seed grid' */}
        {[0,1,2,3].map(r => [0,1].map(c => (
          <circle key={`${r}-${c}`} cx={134 + c*12} cy={150 + r*22} r="1.8"
                  fill={ANATOMY.ink}/>
        )))}
        {/* sit-bone petals */}
        <path d="M 70 260 Q 90 285 115 270 Q 120 250 95 250 Q 75 250 70 260 Z"/>
        <path d="M 210 260 Q 190 285 165 270 Q 160 250 185 250 Q 205 250 210 260 Z"/>
        {/* tendril coccyx */}
        <path d="M 140 240 Q 138 265 144 290 Q 148 305 142 320"
              stroke={ANATOMY.washLine} strokeWidth="0.8"/>
        <circle cx="142" cy="320" r="2" fill={ANATOMY.washLine}/>
      </g>
    </AnatomyFrame>
  );
}

function C_Standing() {
  return (
    <AnatomyFrame label="05 · DE PIE · spec." wash="blob" w={260} h={420}>
      <g stroke={ANATOMY.ink} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* a botanical stem-figure: body as growing plant */}
        {/* head as a flower bud */}
        <path d="M 150 50 Q 124 50 122 78 Q 122 102 150 108
                 Q 178 102 178 78 Q 176 50 150 50 Z"/>
        <line x1="150" y1="50" x2="150" y2="38" stroke={ANATOMY.washLine}/>
        <circle cx="150" cy="36" r="2" fill={ANATOMY.washLine}/>
        {/* central stem (spine) */}
        <path d="M 150 108 Q 140 200 156 290 Q 162 350 152 395"/>
        {/* leaves emerging — ribs / dermatomes */}
        {[140, 165, 190, 215].map((y, i) => {
          const side = i % 2 === 0 ? -1 : 1;
          return (
            <g key={i}>
              <path d={`M 148 ${y}
                        Q ${148 + side*40} ${y - 8} ${148 + side*60} ${y - 2}
                        Q ${148 + side*48} ${y + 6} 148 ${y + 4} Z`}
                    stroke={ANATOMY.washLine} strokeWidth="0.8"/>
              <line x1="148" y1={y} x2={148 + side*55} y2={y - 1}
                    stroke={ANATOMY.washLine} strokeWidth="0.5"/>
            </g>
          );
        })}
        {/* hip flower */}
        <path d="M 132 285 Q 122 305 148 314 Q 174 305 168 285
                 Q 150 278 132 285 Z"/>
        <circle cx="150" cy="295" r="2" fill={ANATOMY.ink}/>
        {/* roots (legs) */}
        <path d="M 142 314 Q 134 350 138 395"/>
        <path d="M 158 314 Q 166 350 162 395"/>
        {/* root tendrils */}
        {[395, 405].map(y => (
          <g key={y}>
            <path d={`M 138 ${y} L 128 ${y + 8}`} stroke={ANATOMY.washLine}/>
            <path d={`M 162 ${y} L 172 ${y + 8}`} stroke={ANATOMY.washLine}/>
          </g>
        ))}
      </g>
    </AnatomyFrame>
  );
}

function C_Seated() {
  return (
    <AnatomyFrame label="06 · SENTADA · spec." wash="blob" w={320} h={380}>
      <g stroke={ANATOMY.ink} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* head bud */}
        <path d="M 118 42 Q 92 42 90 72 Q 92 96 118 100
                 Q 144 96 144 72 Q 144 42 118 42 Z"/>
        {/* curved stem from head to hip — slumped seated curve */}
        <path d="M 118 100 Q 106 140 112 180 Q 122 210 145 222"/>
        {/* leaves on back */}
        {[125, 155, 185].map((y, i) => (
          <g key={i}>
            <path d={`M 110 ${y}
                      Q 80 ${y - 6} 65 ${y + 4}
                      Q 80 ${y + 10} 108 ${y + 4} Z`}
                  stroke={ANATOMY.washLine} strokeWidth="0.8"/>
            <line x1="108" y1={y + 2} x2="72" y2={y + 2}
                  stroke={ANATOMY.washLine} strokeWidth="0.5"/>
          </g>
        ))}
        {/* hip blossom */}
        <path d="M 128 215 Q 124 240 152 248 Q 178 240 170 215
                 Q 150 208 128 215 Z"/>
        {/* horizontal stem-thigh */}
        <path d="M 152 232 Q 200 234 245 232"/>
        {/* knee blossom */}
        <path d="M 240 222 Q 230 240 248 252 Q 268 248 264 230
                 Q 252 218 240 222 Z"/>
        {/* shin stem down */}
        <path d="M 252 248 Q 258 290 254 340"/>
        {/* foot root tendrils */}
        <path d="M 254 340 Q 250 350 240 358" stroke={ANATOMY.washLine}/>
        <path d="M 254 340 Q 260 350 274 358" stroke={ANATOMY.washLine}/>
        {/* chair line — minimal */}
        <line x1="92" y1="232" x2="180" y2="232"
              stroke={ANATOMY.washLine} strokeWidth="0.8" strokeDasharray="3 3"/>
        <line x1="92" y1="135" x2="92" y2="232"
              stroke={ANATOMY.washLine} strokeWidth="0.8" strokeDasharray="3 3"/>
      </g>
    </AnatomyFrame>
  );
}

// ─────────────────── exports ───────────────────
window.AnatomyArt = {
  A: { Cervical: A_Cervical, FullSpine: A_FullSpine, BrainStem: A_BrainStem,
       Sacrum: A_Sacrum, Standing: A_Standing, Seated: A_Seated },
  B: { Cervical: B_Cervical, FullSpine: B_FullSpine, BrainStem: B_BrainStem,
       Sacrum: B_Sacrum, Standing: B_Standing, Seated: B_Seated },
  C: { Cervical: C_Cervical, FullSpine: C_FullSpine, BrainStem: C_BrainStem,
       Sacrum: C_Sacrum, Standing: C_Standing, Seated: C_Seated },
};
window.ANATOMY = ANATOMY;
