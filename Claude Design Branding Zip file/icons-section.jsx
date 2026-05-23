// Quirosasun icon system board — three style directions + applications.

const ICONS_SECTION_W = 1320;
const ICONS_SECTION_H = 3800;

// Names + labels for the 10 icons (in fixed order)
const ICON_LIST = [
  { key: 'Spine',    es: 'columna',    en: 'spine' },
  { key: 'Hand',     es: 'mano',       en: 'hand' },
  { key: 'Pin',      es: 'ubicación',  en: 'location' },
  { key: 'Clock',    es: 'horario',    en: 'time' },
  { key: 'Mail',     es: 'email',      en: 'mail' },
  { key: 'Calendar', es: 'reserva',    en: 'calendar' },
  { key: 'Phone',    es: 'teléfono',   en: 'phone' },
  { key: 'Chat',     es: 'whatsapp',   en: 'chat' },
  { key: 'Document', es: 'ficha',      en: 'document' },
  { key: 'Person',   es: 'paciente',   en: 'person' },
];

// ─────────────────────────── helpers ───────────────────────────

function IconLabel({ n, label }) {
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

function IconCell({ Cmp, name, code }) {
  return (
    <div style={{
      background: PALETTE.cream, aspectRatio: '1 / 1.05',
      border: `1px solid ${PALETTE.clay}30`,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'flex-start',
      padding: '22px 10px 12px',
    }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', minHeight: 0 }}>
        <Cmp size={56}/>
      </div>
      <div style={{ textAlign: 'center', borderTop: `1px solid ${PALETTE.clay}30`,
                    paddingTop: 8, marginTop: 6, width: '100%' }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                      fontSize: 14, color: PALETTE.bark }}>{name}</div>
        <div style={{ fontFamily: FONT_MONO, fontSize: 8.5,
                      letterSpacing: '0.2em', color: PALETTE.moss,
                      marginTop: 2, opacity: 0.85 }}>{code}</div>
      </div>
    </div>
  );
}

// ─────────────────── style direction row ───────────────────

function IconDirectionRow({ letter, name, brief, mood, set }) {
  return (
    <div style={{ marginBottom: 70 }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '120px 1fr 1fr',
        gap: 40, alignItems: 'baseline', marginBottom: 24,
        borderTop: `1px solid ${PALETTE.clay}`, paddingTop: 20,
      }}>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11,
                        letterSpacing: '0.22em', color: PALETTE.moss }}>
            STIL {letter}
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
            MOOD
          </div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                        fontSize: 18, lineHeight: 1.4, color: PALETTE.bark }}>
            {mood}
          </div>
        </div>
      </div>

      {/* 10-icon grid — 5 across × 2 rows */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
        {ICON_LIST.map((it, i) => {
          const Cmp = set[it.key];
          return (
            <IconCell key={it.key} Cmp={Cmp} name={it.es}
                      code={`${letter}·${String(i+1).padStart(2,'0')}`} />
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────── sizing strip ───────────────────

function SizingStrip({ set }) {
  const Spine = set.Spine;
  const Pin = set.Pin;
  const Clock = set.Clock;
  const sizes = [16, 24, 32, 48, 72, 120];
  return (
    <div style={{ background: PALETTE.cream, padding: '40px 48px', marginBottom: 60,
                  border: `1px solid ${PALETTE.clay}30` }}>
      <div style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: '0.22em',
                    color: PALETTE.moss, marginBottom: 28 }}>
        SCALING · 16PX TO 120PX · SAME ICON, SAME PROPORTIONS
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 50,
                    justifyContent: 'space-between' }}>
        {sizes.map(s => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column',
                                alignItems: 'center', gap: 12 }}>
            <Pin size={s}/>
            <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.bark,
                          opacity: 0.6, letterSpacing: '0.18em' }}>{s}PX</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────── applications ───────────────────

function IconApplications() {
  const I = window.IconLib;
  const D = I.D3; // signature direction for applications

  return (
    <div style={{ marginBottom: 60 }}>
      <IconLabel n="05" label="Applications — Icons in der Wildbahn" />

      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 36,
                    lineHeight: 1.15, color: PALETTE.bark, maxWidth: 760,
                    marginBottom: 40 }}>
        Icons sind <em style={{ color: PALETTE.moss }}>Wegweiser</em>, nicht
        Dekoration. Sie laufen klein im Footer, mittel im Kontakt-Block und
        groß als Section-Marker. Immer dieselbe Familie.
      </div>

      {/* ─── 1 · top navigation ─── */}
      <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.moss,
                    letterSpacing: '0.22em', marginBottom: 14 }}>
        TOP NAVIGATION · 18PX · BESIDE LINKS
      </div>
      <div style={{ background: PALETTE.bone, padding: '20px 40px',
                    marginBottom: 40, border: `1px solid ${PALETTE.clay}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26,
                      color: PALETTE.bark, fontStyle: 'italic' }}>
          Quirosasun
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {[
            [D.Pin, 'Bilbao'],
            [D.Clock, 'lun–vie 9–19'],
            [D.Chat, 'WhatsApp'],
            [D.Calendar, 'Reservar'],
          ].map(([Ic, label], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Ic size={20}/>
              <span style={{ fontFamily: 'Inter', fontSize: 14, color: PALETTE.bark }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 2 · contact info block ─── */}
      <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.moss,
                    letterSpacing: '0.22em', marginBottom: 14 }}>
        CONTACT BLOCK · 32PX · ICONS AS ANCHORS FOR EACH ROW
      </div>
      <div style={{ background: PALETTE.bone, padding: '40px 48px',
                    marginBottom: 40, border: `1px solid ${PALETTE.clay}30`,
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }}>
        {[
          [D.Pin, 'Dirección', 'Plaza Indautxu 4, 3º · 48011 Bilbao'],
          [D.Clock, 'Horario', 'Lunes a viernes · 9.00–14.00 / 16.00–20.00'],
          [D.Phone, 'Teléfono', '+34 ___ ___ ___'],
          [D.Mail, 'Email', 'hola@quirosasun.com'],
          [D.Chat, 'WhatsApp', 'Respondo en menos de 24h'],
          [D.Calendar, 'Reservar', 'Primera visita · 50 minutos · 65€'],
        ].map(([Ic, label, value], i) => (
          <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start',
                                paddingBottom: i < 4 ? 18 : 0,
                                borderBottom: i < 4 ? `1px solid ${PALETTE.clay}40` : 'none' }}>
            <div style={{ flex: '0 0 32px', paddingTop: 2 }}>
              <Ic size={32}/>
            </div>
            <div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 10,
                            letterSpacing: '0.22em', color: PALETTE.moss,
                            textTransform: 'uppercase' }}>{label}</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22,
                            color: PALETTE.bark, marginTop: 6, lineHeight: 1.2 }}>
                {value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ─── 3 · info cards (services) ─── */}
      <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.moss,
                    letterSpacing: '0.22em', marginBottom: 14 }}>
        INFO CARDS · 48PX · ICONS HEADLINE EACH CARD
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 8, marginBottom: 40 }}>
        {[
          [D.Person, 'Primera visita', '50 minutos. La mitad escuchando, la otra mitad probando.'],
          [D.Spine, 'Sesión de seguimiento', '35 minutos. Trabajo específico sobre lo que ya conocemos.'],
          [D.Document, 'Informe escrito', 'A petición. Para llevar a tu médico o fisio.'],
        ].map(([Ic, head, body], i) => (
          <div key={i} style={{ background: PALETTE.cream, padding: '32px 28px',
                                border: `1px solid ${PALETTE.clay}30` }}>
            <Ic size={48}/>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26,
                          color: PALETTE.bark, lineHeight: 1.15, marginTop: 22 }}>
              {head}
            </div>
            <div style={{ fontFamily: 'Inter', fontSize: 14, lineHeight: 1.55,
                          color: PALETTE.bark, opacity: 0.78, marginTop: 12 }}>
              {body}
            </div>
          </div>
        ))}
      </div>

      {/* ─── 4 · footer ─── */}
      <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.moss,
                    letterSpacing: '0.22em', marginBottom: 14 }}>
        FOOTER · 20PX · ON BARK / DARK MODE
      </div>
      <div style={{ background: PALETTE.bark, color: PALETTE.bone,
                    padding: '32px 48px', marginBottom: 40,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22,
                      fontStyle: 'italic' }}>Quirosasun · Bilbao</div>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {[D.Pin, D.Mail, D.Phone, D.Chat].map((Ic, i) => (
            <Ic key={i} size={20} color={PALETTE.bone}/>
          ))}
        </div>
        <div style={{ fontFamily: FONT_MONO, fontSize: 10,
                      letterSpacing: '0.22em', color: PALETTE.clay }}>
          © 2026 · MMVI
        </div>
      </div>

      {/* ─── 5 · color usage on different backgrounds ─── */}
      <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.moss,
                    letterSpacing: '0.22em', marginBottom: 14 }}>
        COLOR USAGE · SAME ICON, FOUR SURFACES
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 8 }}>
        {[
          { bg: PALETTE.bone, label: 'On Bone', fg: PALETTE.bark, sub: 'primary' },
          { bg: PALETTE.cream, label: 'On Cream', fg: PALETTE.bark, sub: 'secondary' },
          { bg: PALETTE.moss, label: 'On Moss', fg: PALETTE.bone, sub: 'brand' },
          { bg: PALETTE.bark, label: 'On Bark', fg: PALETTE.bone, sub: 'editorial' },
        ].map((c, i) => (
          <div key={i} style={{ background: c.bg, color: c.fg, padding: '32px 24px',
                                aspectRatio: '1 / 0.9',
                                display: 'flex', flexDirection: 'column',
                                justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <D.Spine size={36} color={c.fg}/>
              <D.Pin size={36} color={c.fg}/>
              <D.Clock size={36} color={c.fg}/>
              <D.Person size={36} color={c.fg}/>
            </div>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22,
                            fontStyle: 'italic' }}>{c.label}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 10,
                            letterSpacing: '0.22em', opacity: 0.7, marginTop: 4,
                            textTransform: 'uppercase' }}>{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────── master section ───────────────────

function IconSystemBoard() {
  return (
    <div style={{
      width: ICONS_SECTION_W, height: ICONS_SECTION_H,
      background: PALETTE.bone, color: PALETTE.bark,
      fontFamily: 'Inter', padding: '80px 80px 120px',
      boxSizing: 'border-box', position: 'relative', overflow: 'hidden',
    }}>
      {/* top meta */}
      <div style={{ display: 'flex', justifyContent: 'space-between',
                    alignItems: 'baseline', marginBottom: 48 }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.moss,
                       letterSpacing: '0.18em' }}>
          IC · ICON SYSTEM
        </span>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.bark,
                       opacity: 0.55, letterSpacing: '0.08em' }}>
          QUIROSASUN · BILBAO · v1.0 — May 2026
        </span>
      </div>

      {/* cover */}
      <div style={{ marginBottom: 70 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 12, letterSpacing: '0.34em',
                      textTransform: 'uppercase', color: PALETTE.moss, marginBottom: 28 }}>
          Iconography · expanded from 5 to 10
        </div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', margin: 0,
                     color: PALETTE.bark, fontSize: 110, lineHeight: 0.98,
                     fontWeight: 400 }}>
          Ten icons,<br/>
          <em style={{ color: PALETTE.moss }}>three families.</em>
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr',
                      gap: 60, marginTop: 44, alignItems: 'start' }}>
          <p style={{ fontFamily: 'Inter', fontSize: 19, lineHeight: 1.6,
                      color: PALETTE.bark, opacity: 0.85, margin: 0 }}>
            The original brief asked for five icons — spine, hand, pin, clock,
            letter. We extend the set to ten so the brand can speak to booking,
            calling, writing, filing, and people. Each icon comes in three style
            directions matching the illustration system: <em>dotted</em>,{' '}
            <em>fine line</em>, and the signature{' '}
            <em style={{ color: PALETTE.moss }}>line + clay accent</em>.
            Pick one. Don’t mix.
          </p>
          <div style={{ borderLeft: `1px solid ${PALETTE.clay}`, paddingLeft: 24 }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 10,
                          letterSpacing: '0.22em', textTransform: 'uppercase',
                          color: PALETTE.clay, marginBottom: 12 }}>
              The ten
            </div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                          fontSize: 19, lineHeight: 1.5, color: PALETTE.bark }}>
              columna · mano · ubicación · horario · email ·
              reserva · teléfono · whatsapp · ficha · paciente
            </div>
          </div>
        </div>
      </div>

      <IconLabel n="01" label="Direction 1 · Dotted — extends the 3-vertebra mark" />
      <IconDirectionRow
        letter="1"
        name="Dotted"
        brief="Built only from circles. Reads as a continuation of the spine logo. Most graphic, most modern, slightly cold up close. Best at small sizes — favicons, footer, in-line list bullets."
        mood="schematic · graphic · modern"
        set={window.IconLib.D1}
      />

      <IconLabel n="02" label="Direction 2 · Fine line — universal" />
      <IconDirectionRow
        letter="2"
        name="Fine line"
        brief="Single-weight outline, rounded caps. Quietest of the three. Safest choice — never wrong, also never striking. Best when icons appear in dense blocks (form labels, instruction sheets)."
        mood="quiet · neutral · workhorse"
        set={window.IconLib.D2}
      />

      <IconLabel n="03" label="Direction 3 · Line + clay accent — the signature" />
      <IconDirectionRow
        letter="3"
        name="Line + clay accent"
        brief="Fine line drawing with one element filled in Clay #B89576 — the centre of the pin, the palm of the hand, the head of the person. Most distinctive, most ‘Sara’. Best at medium-to-large sizes where the accent reads clearly."
        mood="warm · editorial · branded"
        set={window.IconLib.D3}
      />

      <IconLabel n="04" label="Sizing — same icon at 16, 24, 32, 48, 72, 120px" />
      <SizingStrip set={window.IconLib.D3}/>

      <IconApplications/>

      {/* ─── recommendation strip ─── */}
      <div style={{
        background: PALETTE.bark, color: PALETTE.bone, padding: '40px 48px',
        marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 2fr',
        gap: 48, alignItems: 'center',
      }}>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: PALETTE.clay,
                        letterSpacing: '0.22em', marginBottom: 10 }}>EMPFEHLUNG</div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 42,
                        lineHeight: 1.05, fontStyle: 'italic' }}>
            Direction 3.
          </div>
        </div>
        <div style={{ fontFamily: 'Inter', fontSize: 16, lineHeight: 1.6,
                      opacity: 0.9 }}>
          The clay accent is the thing that turns generic UI icons into
          <em style={{ color: PALETTE.clay }}> Quirosasun</em> icons. It echoes the
          illustration set’s clay wash, ties everything to a single warm hue, and
          gives each icon a quiet point of focus — which is, after all, the
          practice’s whole pitch.
        </div>
      </div>

      {/* footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between',
                    alignItems: 'baseline', borderTop: `1px solid ${PALETTE.bark}`,
                    paddingTop: 18, marginTop: 40 }}>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22,
                       fontStyle: 'italic', color: PALETTE.bark }}>
          Icon system — three directions, ten icons each
        </span>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: PALETTE.bark,
                       opacity: 0.6, letterSpacing: '0.14em' }}>
          QUIROSASUN · IC
        </span>
      </div>
    </div>
  );
}

window.ICONS_SECTION_W = ICONS_SECTION_W;
window.ICONS_SECTION_H = ICONS_SECTION_H;
window.IconSystemBoard = IconSystemBoard;
