// Anatomical illustration system board.
// Lays out three style directions + application mockups (Instagram, web, print).

const ANAT_SECTION_W = 1320;
const ANAT_SECTION_H = 5400;

// ─────────────────────────── helpers ───────────────────────────

function AnatLabel({ n, label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', gap: 16,
      borderTop: `1px solid ${PALETTE.bark}`, paddingTop: 16, marginBottom: 28,
    }}>
      <div style={{ fontFamily: FONT_MONO, fontSize: 12, color: PALETTE.bark,
                    opacity: 0.55, letterSpacing: '0.08em' }}>{n}</div>
      <div style={{ fontSize: 13, color: PALETTE.bark, letterSpacing: '0.22em',
                    textTransform: 'uppercase' }}>{label}</div>
    </div>
  );
}

function DrawingTile({ children, name, codeLabel, tone = 'cream' }) {
  const bg = tone === 'bone' ? PALETTE.bone : tone === 'moss' ? PALETTE.moss :
             tone === 'bark' ? PALETTE.bark : PALETTE.cream;
  const fg = tone === 'moss' || tone === 'bark' ? PALETTE.bone : PALETTE.bark;
  return (
    <div style={{
      background: bg, padding: '18px 16px 14px',
      border: `1px solid ${PALETTE.clay}30`,
      display: 'flex', flexDirection: 'column', alignItems: 'stretch',
      aspectRatio: '3 / 4',
    }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', minHeight: 0 }}>
        {children}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between',
                    borderTop: `1px solid ${fg}25`, paddingTop: 8, marginTop: 8 }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: 9,
                       letterSpacing: '0.18em', color: fg, opacity: 0.7 }}>
          {codeLabel}
        </span>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                       fontSize: 14, color: fg }}>{name}</span>
      </div>
    </div>
  );
}

// ─────────────────── Style row (6 drawings) ───────────────────

function StyleDirectionRow({ letter, name, brief, refer, set }) {
  const items = [
    { key: 'Cervical',  name: 'cervical',          code: '01' },
    { key: 'FullSpine', name: 'columna',           code: '02' },
    { key: 'BrainStem', name: 'tronco',            code: '03' },
    { key: 'Sacrum',    name: 'sacro · pelvis',    code: '04' },
    { key: 'Standing',  name: 'de pie',            code: '05' },
    { key: 'Seated',    name: 'sentada',           code: '06' },
  ];
  return (
    <div style={{ marginBottom: 80 }}>
      {/* header strip */}
      <div style={{
        display: 'grid', gridTemplateColumns: '120px 1fr 1fr',
        gap: 40, alignItems: 'baseline', marginBottom: 28,
        borderTop: `1px solid ${PALETTE.clay}`, paddingTop: 20,
      }}>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11,
                        letterSpacing: '0.22em', color: PALETTE.moss }}>
            DIRECCIÓN {letter}
          </div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 56, color: PALETTE.bark, lineHeight: 1, marginTop: 6 }}>
            {letter}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 32, color: PALETTE.bark, lineHeight: 1.1 }}>
            {name}
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.55,
                        color: PALETTE.bark, opacity: 0.78, marginTop: 12, maxWidth: 480 }}>
            {brief}
          </div>
        </div>
        <div style={{ borderLeft: `1px solid ${PALETTE.clay}80`, paddingLeft: 18 }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.clay,
                        letterSpacing: '0.22em', marginBottom: 8 }}>
            REFERENCIAS
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: 14, lineHeight: 1.5,
                        color: PALETTE.bark, opacity: 0.8 }}>
            {refer}
          </div>
        </div>
      </div>

      {/* 6-up grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8 }}>
        {items.map(it => {
          const Cmp = set[it.key];
          return (
            <DrawingTile key={it.key} name={it.name} codeLabel={`${letter}·${it.code}`}>
              <Cmp />
            </DrawingTile>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────── Instagram tiles ───────────────────

function InstagramTile({ children, caption, sub, tone = 'bone' }) {
  const bg = tone === 'bone' ? PALETTE.bone : tone === 'moss' ? PALETTE.moss :
             tone === 'bark' ? PALETTE.bark : tone === 'clay' ? PALETTE.clay : PALETTE.cream;
  const fg = tone === 'moss' || tone === 'bark' ? PALETTE.bone : PALETTE.bark;
  return (
    <div style={{
      background: bg, aspectRatio: '1 / 1', position: 'relative',
      overflow: 'hidden', border: `1px solid ${PALETTE.clay}30`,
    }}>
      {/* IG corner stub */}
      <div style={{
        position: 'absolute', top: 12, right: 12, zIndex: 3,
        fontFamily: FONT_MONO, fontSize: 8, letterSpacing: '0.2em',
        color: fg, opacity: 0.5,
      }}>@QUIROSASUN</div>
      {children}
      {caption && (
        <div style={{
          position: 'absolute', left: 22, right: 22, bottom: 22, zIndex: 4,
        }}>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 28,
            lineHeight: 1.1, color: fg, fontWeight: 400,
          }}>
            {caption}
          </div>
          {sub && (
            <div style={{
              fontFamily: FONT_MONO, fontSize: 9, letterSpacing: '0.22em',
              color: fg, opacity: 0.65, marginTop: 10,
            }}>{sub}</div>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────────── application mockups ───────────────────

function ApplicationsBlock() {
  const A = window.AnatomyArt;
  return (
    <div style={{ marginBottom: 60 }}>
      <AnatLabel n="04" label="Applications — how the drawings live in the wild" />

      <div style={{
        fontFamily: 'Cormorant Garamond, serif', fontSize: 36, lineHeight: 1.15,
        color: PALETTE.bark, maxWidth: 760, marginBottom: 40,
      }}>
        Same drawing, three behaviours: <em style={{ color: PALETTE.moss }}>hero</em> (it
        is the page), <em style={{ color: PALETTE.moss }}>texture</em> (it lives behind
        the type), and <em style={{ color: PALETTE.moss }}>mark</em> (it sits small,
        like a stamp).
      </div>

      {/* ─── Instagram grid — 3 across, two rows ─── */}
      <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.moss,
                    letterSpacing: '0.22em', marginBottom: 14 }}>
        INSTAGRAM · 6 TILES · BOOK-LIKE GRID
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6,
                    marginBottom: 50 }}>
        {/* hero tile — full-bleed cervical */}
        <InstagramTile tone="bone" caption="Lo que sostiene tu cabeza."
                       sub="CERVICAL · POST 01">
          <div style={{ position: 'absolute', inset: '8% 30% 32% 30%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <A.B.Cervical />
          </div>
        </InstagramTile>

        {/* texture tile — full spine as background, text over */}
        <InstagramTile tone="cream" caption="La columna no es recta. Es una S."
                       sub="COLUMNA · POST 02">
          <div style={{ position: 'absolute', inset: '5% 35% 5% 35%',
                        opacity: 0.45 }}>
            <A.A.FullSpine />
          </div>
        </InstagramTile>

        {/* mark tile — small standing posture top, big quote */}
        <InstagramTile tone="moss">
          <div style={{ position: 'absolute', top: 30, left: '50%',
                        transform: 'translateX(-50%)', width: 130 }}>
            <svg viewBox="0 0 260 420" width="100%" style={{ filter: 'invert(96%) sepia(8%) saturate(160%) hue-rotate(13deg)' }}>
              <A.B.Standing />
            </svg>
          </div>
          <div style={{ position: 'absolute', bottom: 24, left: 22, right: 22,
                        fontFamily: 'Cormorant Garamond, serif', fontSize: 26,
                        lineHeight: 1.15, color: PALETTE.bone }}>
            Tu postura es una conversación entre la gravedad y tú.
          </div>
          <div style={{ position: 'absolute', bottom: 12, left: 22,
                        fontFamily: FONT_MONO, fontSize: 9, letterSpacing: '0.22em',
                        color: PALETTE.clay }}>
            POSTURA · POST 03
          </div>
        </InstagramTile>

        {/* mark tile — brain stem corner */}
        <InstagramTile tone="bark">
          <div style={{ position: 'absolute', top: 24, right: 24, width: 110,
                        opacity: 0.85,
                        filter: 'invert(96%) sepia(8%) saturate(160%) hue-rotate(13deg)' }}>
            <A.B.BrainStem />
          </div>
          <div style={{ position: 'absolute', bottom: 24, left: 22, right: 22,
                        fontFamily: 'Cormorant Garamond, serif', fontSize: 28,
                        fontStyle: 'italic', lineHeight: 1.1, color: PALETTE.bone }}>
            El dolor no siempre vive donde duele.
          </div>
          <div style={{ position: 'absolute', bottom: 12, left: 22,
                        fontFamily: FONT_MONO, fontSize: 9, letterSpacing: '0.22em',
                        color: PALETTE.clay }}>
            NEURO · POST 04
          </div>
        </InstagramTile>

        {/* texture tile — sacrum centered, type above */}
        <InstagramTile tone="bone">
          <div style={{ position: 'absolute', inset: '20% 22% 8% 22%', opacity: 0.55 }}>
            <A.C.Sacrum />
          </div>
          <div style={{ position: 'absolute', top: 28, left: 22, right: 22,
                        fontFamily: 'Cormorant Garamond, serif', fontSize: 30,
                        lineHeight: 1.1, color: PALETTE.bark }}>
            Sentarse no es descansar.
          </div>
          <div style={{ position: 'absolute', bottom: 16, left: 22,
                        fontFamily: FONT_MONO, fontSize: 9, letterSpacing: '0.22em',
                        color: PALETTE.moss }}>
            SACRO · POST 05
          </div>
        </InstagramTile>

        {/* mark tile — seated posture clay bg */}
        <InstagramTile tone="clay" caption="Ocho horas. ¿Cómo está tu cadera?"
                       sub="SENTADA · POST 06">
          <div style={{ position: 'absolute', inset: '12% 8% 30% 8%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <A.A.Seated />
          </div>
        </InstagramTile>
      </div>

      {/* ─── Web hero ─── */}
      <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.moss,
                    letterSpacing: '0.22em', marginBottom: 14 }}>
        HOME PAGE · HERO BLOCK · ILLUSTRATION SITS BEHIND TYPE
      </div>
      <div style={{
        background: PALETTE.bone, padding: '70px 60px 70px',
        marginBottom: 24, position: 'relative', minHeight: 560, overflow: 'hidden',
        border: `1px solid ${PALETTE.clay}30`,
      }}>
        {/* big spine drawing right side, low opacity */}
        <div style={{ position: 'absolute', right: '-2%', top: 20, bottom: 20,
                      width: 340, opacity: 0.55 }}>
          <A.C.FullSpine />
        </div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 700 }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, letterSpacing: '0.24em',
                        color: PALETTE.moss, marginBottom: 28 }}>
            QUIROSASUN · BILBAO
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 88, lineHeight: 1.0,
            color: PALETTE.bark, margin: 0, fontWeight: 400,
          }}>
            Volver a tu<br/>
            <em style={{ color: PALETTE.moss }}>cuerpo.</em>
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: 19, lineHeight: 1.55,
                      color: PALETTE.bark, opacity: 0.8, maxWidth: 460,
                      marginTop: 28 }}>
            Quiropráctica suave, sin manipulación brusca. Para cervicales,
            lumbares, posturas que se han ido apagando.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 34 }}>
            <button style={{
              background: PALETTE.moss, color: PALETTE.bone, border: 'none',
              padding: '16px 30px', borderRadius: 4, fontFamily: 'Inter',
              fontSize: 14, fontWeight: 500,
            }}>Reservar primera visita</button>
            <button style={{
              background: 'transparent', color: PALETTE.bark,
              border: `1.5px solid ${PALETTE.bark}`, padding: '16px 30px',
              borderRadius: 4, fontFamily: 'Inter', fontSize: 14, fontWeight: 500,
            }}>Cómo trabajo</button>
          </div>
        </div>
      </div>

      {/* ─── Web section divider — illustration as quiet rule ─── */}
      <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.moss,
                    letterSpacing: '0.22em', marginBottom: 14, marginTop: 50 }}>
        WEB · SECTION DIVIDER · ILLUSTRATION AS QUIET RULE BETWEEN BLOCKS
      </div>
      <div style={{ background: PALETTE.cream, padding: '50px 60px',
                    marginBottom: 50, border: `1px solid ${PALETTE.clay}30` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32,
                      marginBottom: 36 }}>
          <div style={{ flex: '0 0 110px' }}>
            <A.B.BrainStem />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11,
                          letterSpacing: '0.22em', color: PALETTE.moss }}>03 — CÓMO TRABAJO</div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 42,
                          color: PALETTE.bark, lineHeight: 1.1, marginTop: 6 }}>
              No empezamos con la espalda. Empezamos con la historia.
            </div>
          </div>
          <div style={{ flex: '0 0 1px', height: 90, background: PALETTE.clay }}/>
          <div style={{ flex: '0 0 220px', fontFamily: 'Inter', fontSize: 14,
                        lineHeight: 1.55, color: PALETTE.bark, opacity: 0.8 }}>
            Una primera visita son 50 minutos. Casi la mitad es escuchar — qué te
            duele, desde cuándo, qué ya has probado, qué te dejas en silencio.
          </div>
        </div>
      </div>

      {/* ─── Print: business card back + intake folder cover ─── */}
      <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.moss,
                    letterSpacing: '0.22em', marginBottom: 14 }}>
        PRINT · BUSINESS CARD BACK · INTAKE FOLDER · WORKSHOP POSTER
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14,
                    marginBottom: 24 }}>
        {/* business card back — clay, small spine */}
        <div style={{ background: PALETTE.clay, aspectRatio: '85 / 55',
                      padding: 24, position: 'relative', overflow: 'hidden',
                      border: `1px solid ${PALETTE.clay}` }}>
          <div style={{ position: 'absolute', right: -10, top: -10, bottom: -10,
                        width: 130, opacity: 0.85,
                        filter: 'brightness(0.65) saturate(0.7)' }}>
            <A.B.FullSpine />
          </div>
          <div style={{ position: 'relative', zIndex: 2, height: '100%',
                        display: 'flex', flexDirection: 'column',
                        justifyContent: 'space-between' }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif',
                          fontSize: 26, color: PALETTE.bark, lineHeight: 1.1 }}>
              Quirosasun
            </div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 9,
                          letterSpacing: '0.22em', color: PALETTE.bark, opacity: 0.85 }}>
              QUIROPRÁCTICA · BILBAO<br/>
              sara@quirosasun.com
            </div>
          </div>
        </div>

        {/* intake folder cover — bone, brain stem */}
        <div style={{ background: PALETTE.bone, aspectRatio: '85 / 55',
                      padding: 24, position: 'relative', overflow: 'hidden',
                      border: `1px solid ${PALETTE.bark}40` }}>
          <div style={{ position: 'absolute', left: '50%',
                        transform: 'translateX(-50%)', top: 12, bottom: 28,
                        width: 130 }}>
            <A.C.BrainStem />
          </div>
          <div style={{ position: 'absolute', bottom: 18, left: 24, right: 24,
                        textAlign: 'center' }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif',
                          fontSize: 16, fontStyle: 'italic', color: PALETTE.bark }}>
              ficha · {' '}
              <span style={{ fontFamily: FONT_MONO, fontSize: 9,
                             letterSpacing: '0.22em' }}>QUIROSASUN</span>
            </div>
          </div>
        </div>

        {/* business card back v2 — bark / dark */}
        <div style={{ background: PALETTE.bark, aspectRatio: '85 / 55',
                      padding: 24, position: 'relative', overflow: 'hidden',
                      border: `1px solid ${PALETTE.bark}` }}>
          <div style={{ position: 'absolute', left: -20, top: -10, bottom: -10,
                        width: 130, opacity: 0.55,
                        filter: 'invert(96%) sepia(8%) saturate(160%) hue-rotate(13deg)' }}>
            <A.A.Sacrum />
          </div>
          <div style={{ position: 'relative', zIndex: 2, height: '100%',
                        display: 'flex', flexDirection: 'column',
                        justifyContent: 'space-between', alignItems: 'flex-end',
                        textAlign: 'right' }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif',
                          fontSize: 18, color: PALETTE.bone, fontStyle: 'italic' }}>
              Sara Quirós
            </div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 9,
                          letterSpacing: '0.22em', color: PALETTE.clay }}>
              D.C. · BILBAO<br/>+34 ___ ___ ___
            </div>
          </div>
        </div>
      </div>

      {/* ─── Workshop poster ─── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14,
                    marginBottom: 40 }}>
        <div style={{ background: PALETTE.cream, aspectRatio: '2 / 3',
                      padding: 30, position: 'relative', overflow: 'hidden',
                      border: `1px solid ${PALETTE.clay}30`,
                      display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10,
                        letterSpacing: '0.24em', color: PALETTE.moss }}>
            TALLER · MAYO 26
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center',
                        justifyContent: 'center', margin: '24px 0' }}>
            <div style={{ width: '85%' }}>
              <A.B.Cervical />
            </div>
          </div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 28, lineHeight: 1.05, color: PALETTE.bark }}>
            Cervicales del oficinista.
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: 11, lineHeight: 1.55,
                        color: PALETTE.bark, opacity: 0.8, marginTop: 12 }}>
            Sábado, 18.30h · plaza Indautxu · 15€
          </div>
        </div>

        <div style={{ background: PALETTE.moss, aspectRatio: '2 / 3',
                      padding: 30, position: 'relative', overflow: 'hidden',
                      color: PALETTE.bone, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10,
                        letterSpacing: '0.24em', color: PALETTE.clay }}>
            TALLER · JUNIO 12
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center',
                        justifyContent: 'center', margin: '24px 0',
                        filter: 'invert(96%) sepia(8%) saturate(160%) hue-rotate(13deg)' }}>
            <div style={{ width: '85%' }}>
              <A.C.Standing />
            </div>
          </div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 28, lineHeight: 1.05, fontStyle: 'italic' }}>
            Cómo estás de pie.
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: 11, lineHeight: 1.55,
                        opacity: 0.88, marginTop: 12 }}>
            Sábado, 11.00h · plaza Indautxu · 15€
          </div>
        </div>

        <div style={{ background: PALETTE.bone, aspectRatio: '2 / 3',
                      padding: 30, position: 'relative', overflow: 'hidden',
                      border: `1px solid ${PALETTE.clay}30`,
                      display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10,
                        letterSpacing: '0.24em', color: PALETTE.moss }}>
            TALLER · JULIO 03
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center',
                        justifyContent: 'center', margin: '24px 0' }}>
            <div style={{ width: '92%' }}>
              <A.B.Seated />
            </div>
          </div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 28, lineHeight: 1.05, color: PALETTE.bark }}>
            Sentarse <em style={{ color: PALETTE.moss }}>bien.</em>
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: 11, lineHeight: 1.55,
                        color: PALETTE.bark, opacity: 0.8, marginTop: 12 }}>
            Sábado, 18.30h · plaza Indautxu · 15€
          </div>
        </div>
      </div>

      {/* ─── Single big anatomical hero (intake folder full bleed) ─── */}
      <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.moss,
                    letterSpacing: '0.22em', marginBottom: 14 }}>
        TREATMENT ROOM WALL · A2 PRINT · ONE DRAWING, LARGE, QUIET
      </div>
      <div style={{
        background: PALETTE.cream, padding: '60px 80px', minHeight: 520,
        position: 'relative', overflow: 'hidden',
        border: `1px solid ${PALETTE.clay}30`,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center',
      }}>
        <div style={{ height: 460, display: 'flex', alignItems: 'center',
                      justifyContent: 'center' }}>
          <div style={{ height: '100%', aspectRatio: '2 / 3' }}>
            <A.C.FullSpine />
          </div>
        </div>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11,
                        letterSpacing: '0.24em', color: PALETTE.moss, marginBottom: 18 }}>
            COLUMNA VERTEBRAL · 33 PIEZAS · UNA HISTORIA
          </div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 54,
                        lineHeight: 1.05, color: PALETTE.bark, fontWeight: 400 }}>
            Eres una <em style={{ color: PALETTE.moss }}>arquitectura</em>{' '}
            que aprende a sostenerse.
          </div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10,
                        letterSpacing: '0.24em', color: PALETTE.clay, marginTop: 30 }}>
            QUIROSASUN · BILBAO
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────── master section ───────────────────

function AnatomicalIllustrationBoard() {
  const A = window.AnatomyArt;
  return (
    <div style={{
      width: ANAT_SECTION_W, height: ANAT_SECTION_H,
      background: PALETTE.bone, color: PALETTE.bark,
      fontFamily: 'Inter', padding: '80px 80px 120px',
      boxSizing: 'border-box', position: 'relative', overflow: 'hidden',
    }}>
      {/* top meta */}
      <div style={{ display: 'flex', justifyContent: 'space-between',
                    alignItems: 'baseline', marginBottom: 48 }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.moss,
                       letterSpacing: '0.18em' }}>
          IL · ANATOMICAL ILLUSTRATION SYSTEM
        </span>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.bark,
                       opacity: 0.55, letterSpacing: '0.08em' }}>
          QUIROSASUN · BILBAO · v1.0 — May 2026
        </span>
      </div>

      {/* cover */}
      <div style={{ marginBottom: 80 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 12, letterSpacing: '0.34em',
                      textTransform: 'uppercase', color: PALETTE.moss, marginBottom: 28 }}>
          The single most important brand investment
        </div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', margin: 0,
                     color: PALETTE.bark, fontSize: 110, lineHeight: 0.98,
                     fontWeight: 400, letterSpacing: '-0.01em' }}>
          The anatomical<br/>
          <em style={{ color: PALETTE.moss }}>illustration set.</em>
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr',
                      gap: 60, marginTop: 44, alignItems: 'start' }}>
          <p style={{ fontFamily: 'Inter', fontSize: 19, lineHeight: 1.6,
                      color: PALETTE.bark, opacity: 0.85, margin: 0 }}>
            Six drawings — cervical spine, full vertebral column, brain stem &amp;
            cranial nerves, sacrum &amp; pelvis, standing posture, seated posture —
            become the connective tissue of the whole brand. Instagram tiles, web
            section dividers, intake folder covers, treatment room wall art,
            business card backs, workshop posters. Below are three style
            directions to choose between before commissioning final hand-drawn art.
          </p>
          <div style={{ borderLeft: `1px solid ${PALETTE.clay}`, paddingLeft: 24 }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 10,
                          letterSpacing: '0.22em', textTransform: 'uppercase',
                          color: PALETTE.clay, marginBottom: 12 }}>
              Style brief (carried over)
            </div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                          fontSize: 22, lineHeight: 1.4, color: PALETTE.bark }}>
              Fine line. Subtle warm wash using Clay #B89576 as a tone. Drawings
              must hold at postage-stamp and at wall-size. Reference: Cécile
              Hudrisier, Katie Scott, the older Frank Netter plates done quietly.
            </div>
          </div>
        </div>
      </div>

      <AnatLabel n="01" label="Direction A · Dot diagram — extends the 3-vertebra brand mark" />
      <StyleDirectionRow
        letter="A"
        name="Dot diagram"
        brief="Pure circles. Anatomy reduced to its schematic essentials — a direct extension of the three-vertebra dot motif already in the brand mark. Reads small as well as it reads large. Most modern. Lowest commission cost. Risk: feels diagrammatic, less warm."
        refer="James Lambert · Bauhaus pictograms · medical icon sets done well"
        set={window.AnatomyArt.A}
      />

      <AnatLabel n="02" label="Direction B · Fine line — closest to the brief" />
      <StyleDirectionRow
        letter="B"
        name="Fine line"
        brief="Single-weight outline. Soft Clay wash sitting behind the form like an old printed plate. This is the closest match to the brief: Hudrisier softness, Netter restraint. Highest legibility as anatomy. Reads as ‘clinical but quiet’."
        refer="Cécile Hudrisier · Frank Netter (toned down) · older Spanish medical engravings"
        set={window.AnatomyArt.B}
      />

      <AnatLabel n="03" label="Direction C · Botanical-anatomical — the boldest" />
      <StyleDirectionRow
        letter="C"
        name="Botanical-anatomical"
        brief="Vertebrae drawn as seed pods. Nerves as tendrils. The body as something growing, not something broken. Most distinctive of the three. Hardest to commission well — needs an illustrator who can hold both registers. Most ‘Sara’."
        refer="Katie Scott · Ernst Haeckel’s plates · old herbal manuscripts"
        set={window.AnatomyArt.C}
      />

      <ApplicationsBlock />

      {/* ─── next steps strip ─── */}
      <div style={{
        background: PALETTE.bark, color: PALETTE.bone, padding: '40px 48px',
        marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: 32,
      }}>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.clay,
                        letterSpacing: '0.22em', marginBottom: 10 }}>NEXT · 01</div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20,
                        lineHeight: 1.2, fontStyle: 'italic' }}>
            Pick one direction. A, B, or C. Don’t mix.
          </div>
        </div>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.clay,
                        letterSpacing: '0.22em', marginBottom: 10 }}>NEXT · 02</div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20,
                        lineHeight: 1.2, fontStyle: 'italic' }}>
            Commission illustrator. 1.5–4k€ for set of six.
          </div>
        </div>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.clay,
                        letterSpacing: '0.22em', marginBottom: 10 }}>NEXT · 03</div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20,
                        lineHeight: 1.2, fontStyle: 'italic' }}>
            Deliverables: SVG + 600dpi PNG, each in 3 sizes.
          </div>
        </div>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.clay,
                        letterSpacing: '0.22em', marginBottom: 10 }}>NEXT · 04</div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20,
                        lineHeight: 1.2, fontStyle: 'italic' }}>
            Then the 5 icons (spine, hand, pin, clock, letter).
          </div>
        </div>
      </div>

      {/* footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between',
                    alignItems: 'baseline', borderTop: `1px solid ${PALETTE.bark}`,
                    paddingTop: 18, marginTop: 30 }}>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22,
                       fontStyle: 'italic', color: PALETTE.bark }}>
          Anatomical illustration set — three style directions
        </span>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.bark,
                       opacity: 0.6, letterSpacing: '0.14em' }}>
          QUIROSASUN · IL
        </span>
      </div>
    </div>
  );
}

window.ANAT_SECTION_W = ANAT_SECTION_W;
window.ANAT_SECTION_H = ANAT_SECTION_H;
window.AnatomicalIllustrationBoard = AnatomicalIllustrationBoard;
