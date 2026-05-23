// Shared brand-guideline board layout.
// Every concept renders through this — only typography, CTA shape, and copy differ.
//
// CONFIG SHAPE
// {
//   code, name, kicker, descriptor,
//   why,                              // why this concept is different (paragraph)
//   fontHead, fontSub, fontBody, fontPull, fontLabel,
//   headStyle, subStyle, bodyStyle, pullStyle, labelStyle,   // per-element style overrides
//   typeMeta: { head:[lines], sub:[lines], body:[lines], pull:[lines], label:[lines] },
//   buttons: { radius, case ('upper'|'sentence'), tracking, primary, secondary, tertiary, ghost, ghostLabel },
//   copy: { hero, lead, tagline, mission, vision, values:[[n,h,b]…], pull, doList, dontList, postcardLine }
// }

function BrandBoard({ cfg }) {
  const c = PALETTE;
  const fontMono = FONT_MONO;
  const { fontHead, fontSub, fontBody, fontPull, fontLabel } = cfg;

  // Build a reusable button factory honouring this concept's CTA language.
  // `on` controls which surface the button sits on so the right colour pair
  // is used (light surfaces get moss/bark primary; dark surfaces invert).
  const btn = (variant, label, on = 'light') => {
    const radius = cfg.buttons.radius;
    const tt = cfg.buttons.case === 'upper' ? 'uppercase' : 'none';
    const ls = cfg.buttons.tracking || 0;
    const baseStyle = {
      padding: '16px 30px', borderRadius: radius, fontFamily: fontBody,
      fontSize: 14, fontWeight: 500, letterSpacing: ls, textTransform: tt,
      cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10,
      lineHeight: 1.1, whiteSpace: 'nowrap',
    };
    const sm = { ...baseStyle, padding: '10px 22px', fontSize: 12,
      letterSpacing: cfg.buttons.case === 'upper' ? '0.16em' : '0.04em' };

    if (on === 'dark') {
      // On Moss / Bark — bone fills, clay accents
      if (variant === 'primary')   return <button style={{ ...baseStyle, background: c.bone, color: c.bark, border: 'none' }}>{label}</button>;
      if (variant === 'secondary') return <button style={{ ...baseStyle, background: 'transparent', color: c.bone, border: `1.5px solid ${c.bone}` }}>{label}</button>;
      if (variant === 'accent')    return <button style={{ ...baseStyle, background: c.clay, color: c.bark, border: 'none' }}>{label}</button>;
      if (variant === 'ghost')     return <button style={{ ...sm, background: 'transparent', color: c.bone, border: `1px solid ${c.bone}80` }}>{label}</button>;
      if (variant === 'quiet')     return <button style={{ ...sm, background: 'rgba(255,255,255,0.08)', color: c.bone, border: 'none' }}>{label}</button>;
    }
    // Light surfaces (Bone / Cream)
    if (variant === 'primary')   return <button style={{ ...baseStyle, background: c.moss, color: c.bone, border: 'none' }}>{label}</button>;
    if (variant === 'secondary') return <button style={{ ...baseStyle, background: 'transparent', color: c.bark, border: `1.5px solid ${c.bark}` }}>{label}</button>;
    if (variant === 'dark')      return <button style={{ ...baseStyle, background: c.bark, color: c.bone, border: 'none' }}>{label}</button>;
    if (variant === 'accent')    return <button style={{ ...baseStyle, background: c.clay, color: c.bark, border: 'none' }}>{label}</button>;
    if (variant === 'ghost')     return <button style={{ ...sm, background: 'transparent', color: c.bark, border: `1px solid ${c.clay}` }}>{label}</button>;
    if (variant === 'quiet')     return <button style={{ ...sm, background: c.cream, color: c.bark, border: 'none' }}>{label}</button>;
  };

  return (
    <div style={{
      width: ARTBOARD_W, height: ARTBOARD_H,
      background: c.bone, color: c.bark,
      fontFamily: fontBody, padding: '80px 80px 160px',
      boxSizing: 'border-box', position: 'relative', overflow: 'hidden',
    }}>
      {/* ── TOP META ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
        <span style={{ fontFamily: fontMono, fontSize: 11, color: c.moss, letterSpacing: '0.18em' }}>
          {cfg.code}
        </span>
        <span style={{ fontFamily: fontMono, fontSize: 11, color: c.bark, opacity: 0.55, letterSpacing: '0.08em' }}>
          QUIROSASUN · BILBAO · v1.0 — May 2026
        </span>
      </div>

      {/* ── COVER / BRAND GUIDELINES ── */}
      <div style={{ marginBottom: 90 }}>
        <div style={{ fontFamily: fontMono, fontSize: 12, letterSpacing: '0.34em', textTransform: 'uppercase', color: c.moss, marginBottom: 28 }}>
          Brand Guidelines · {cfg.kicker}
        </div>
        <h1 style={{ fontFamily: fontHead, margin: 0, color: c.bark, ...cfg.headStyle, fontSize: 140, whiteSpace: 'pre-line' }}>
          {cfg.copy.hero}
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, marginTop: 44, alignItems: 'start' }}>
          <p style={{ fontFamily: fontBody, fontSize: 19, lineHeight: 1.6, color: c.bark, opacity: 0.85, margin: 0 }}>
            {cfg.copy.lead}
          </p>
          <div style={{ borderLeft: `1px solid ${c.clay}`, paddingLeft: 24 }}>
            <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.clay, marginBottom: 12 }}>
              Why this concept is different
            </div>
            <div style={{ fontFamily: fontSub, ...cfg.subStyle, fontSize: 22, lineHeight: 1.4, color: c.bark }}>
              {cfg.why}
            </div>
          </div>
        </div>
      </div>

      {/* ── 01 LOGO ── */}
      <SectionLabel n="01" label="Logo system — same mark across all concepts" />
      <div style={{
        background: c.cream, padding: '80px 60px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 16, position: 'relative',
      }}>
        <LogoImage h={400} blend="multiply" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 90 }}>
        <div style={{ background: c.bone, padding: 28, border: `1px solid ${c.clay}40`, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LogoImage h={120} />
        </div>
        <div style={{ background: c.cream, padding: 28, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LogoImage h={100} />
        </div>
        <div style={{ background: c.moss, padding: 28, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LogoOnDark h={100} />
        </div>
        <div style={{ background: c.bark, padding: 28, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LogoOnDark h={90} />
        </div>
      </div>

      {/* ── 02 PALETTE ── */}
      <SectionLabel n="02" label="Colour palette — shared across all concepts" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, marginBottom: 24 }}>
        <Swatch name="Bone" hex="#EDE7DA" role="Primary · 50%" />
        <Swatch name="Cream" hex="#F2F4EE" role="Surface · 20%" />
        <Swatch name="Moss" hex="#5F6F4A" role="Brand · 15%" />
        <Swatch name="Bark" hex="#2F3A23" role="Type · 10%" />
        <Swatch name="Clay" hex="#B89576" role="Accent · 5%" />
      </div>
      <div style={{ background: c.cream, padding: '20px 28px', marginBottom: 90, display: 'flex', alignItems: 'center', gap: 18 }}>
        <span style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.22em', color: c.moss }}>NOTE</span>
        <span style={{ fontFamily: fontSub, ...cfg.subStyle, fontSize: 17, color: c.bark, lineHeight: 1.4 }}>
          Bone is always the canvas. Moss carries the brand. Clay is the only warm note — illustration tone & hover state only, never a button or body text colour.
        </span>
      </div>

      {/* ── 03 TYPOGRAPHY ── */}
      <SectionLabel n="03" label={`Typography — ${cfg.typeStack}`} />
      <TypeRow tag="Headline" meta={cfg.typeMeta.head}>
        <div style={{ fontFamily: fontHead, color: c.bark, ...cfg.headStyle, fontSize: 96 }}>
          {cfg.typeMeta.headSample || cfg.copy.hero}
        </div>
      </TypeRow>
      <TypeRow tag="Subheadline" meta={cfg.typeMeta.sub}>
        <div style={{ fontFamily: fontSub, color: c.bark, ...cfg.subStyle, fontSize: 36, lineHeight: 1.25, opacity: 0.9 }}>
          {cfg.typeMeta.subSample}
        </div>
      </TypeRow>
      <TypeRow tag="Body" meta={cfg.typeMeta.body}>
        <div style={{ fontFamily: fontBody, ...cfg.bodyStyle, fontSize: 17, lineHeight: 1.65, color: c.bark, opacity: 0.88, maxWidth: 620 }}>
          {cfg.typeMeta.bodySample}
        </div>
      </TypeRow>
      <TypeRow tag="Pull quote" meta={cfg.typeMeta.pull} last={true}>
        <div style={{ fontFamily: fontPull, ...cfg.pullStyle, fontSize: 28, lineHeight: 1.35, color: c.clay, maxWidth: 700 }}>
          “{cfg.copy.pull}”
        </div>
      </TypeRow>

      {/* ── 04 BUTTONS / CTAs ── */}
      <SectionLabel n="04" label={`CTAs — ${cfg.buttons.label}`} />

      {/* Row 1 — on Bone (primary canvas) */}
      <div style={{ background: c.bone, padding: '28px 32px', marginBottom: 14, border: `1px solid ${c.clay}30` }}>
        <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.moss, marginBottom: 18 }}>
          On Bone — primary canvas
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 12 }}>
          {btn('primary', cfg.copy.cta.primary, 'light')}
          {btn('secondary', cfg.copy.cta.secondary, 'light')}
          {btn('dark', cfg.copy.cta.tertiary, 'light')}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          {btn('accent', cfg.copy.cta.accent, 'light')}
          {btn('ghost', cfg.copy.cta.ghost, 'light')}
          {btn('quiet', cfg.copy.cta.quiet, 'light')}
        </div>
      </div>

      {/* Row 2 — on Cream (secondary surface) */}
      <div style={{ background: c.cream, padding: '28px 32px', marginBottom: 14 }}>
        <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.moss, marginBottom: 18 }}>
          On Cream — secondary surface
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          {btn('primary', cfg.copy.cta.primary, 'light')}
          {btn('secondary', cfg.copy.cta.secondary, 'light')}
          {btn('accent', cfg.copy.cta.accent, 'light')}
          {btn('ghost', cfg.copy.cta.ghost, 'light')}
        </div>
      </div>

      {/* Row 3 — on Moss (brand colour) */}
      <div style={{ background: c.moss, padding: '28px 32px', marginBottom: 14 }}>
        <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.bone, opacity: 0.8, marginBottom: 18 }}>
          On Moss — brand colour
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          {btn('primary', cfg.copy.cta.primary, 'dark')}
          {btn('secondary', cfg.copy.cta.secondary, 'dark')}
          {btn('accent', cfg.copy.cta.accent, 'dark')}
          {btn('ghost', cfg.copy.cta.ghost, 'dark')}
        </div>
      </div>

      {/* Row 4 — on Bark (editorial) */}
      <div style={{ background: c.bark, padding: '28px 32px', marginBottom: 90 }}>
        <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.clay, marginBottom: 18 }}>
          On Bark — editorial / dark mode
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          {btn('primary', cfg.copy.cta.primary, 'dark')}
          {btn('secondary', cfg.copy.cta.secondary, 'dark')}
          {btn('accent', cfg.copy.cta.accent, 'dark')}
          {btn('quiet', cfg.copy.cta.quiet, 'dark')}
        </div>
      </div>

      {/* ── 05 MISSION & VISION ── */}
      <SectionLabel n="05" label="Mission · Vision" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 60 }}>
        <div>
          <div style={{ fontFamily: fontMono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.clay, marginBottom: 16 }}>Mission</div>
          <div style={{ fontFamily: fontSub, ...cfg.subStyle, fontSize: 28, lineHeight: 1.3, color: c.bark }}>
            {cfg.copy.mission}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: fontMono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.clay, marginBottom: 16 }}>Vision</div>
          <div style={{ fontFamily: fontSub, ...cfg.subStyle, fontSize: 28, lineHeight: 1.3, color: c.bark }}>
            {cfg.copy.vision}
          </div>
        </div>
      </div>

      {/* ── 06 VALUES ── */}
      <SectionLabel n="06" label="Values — five, in priority order" />
      <div style={{ marginBottom: 90, background: c.cream, padding: '36px 44px' }}>
        {cfg.copy.values.map(([n, h, b], i) => (
          <div key={n} style={{ display: 'grid', gridTemplateColumns: '60px 280px 1fr', gap: 28, padding: '22px 0', borderTop: i ? `1px solid ${c.clay}40` : 'none', alignItems: 'baseline' }}>
            <div style={{ fontFamily: fontMono, fontSize: 12, color: c.moss, opacity: 0.8 }}>{n}</div>
            <div style={{ fontFamily: fontSub, ...cfg.subStyle, fontSize: 24, color: c.bark, lineHeight: 1.1 }}>{h}</div>
            <div style={{ fontFamily: fontBody, fontSize: 15, lineHeight: 1.55, color: c.bark, opacity: 0.78 }}>{b}</div>
          </div>
        ))}
      </div>

      {/* ── 07 BACKGROUND APPLICATIONS ── */}
      <SectionLabel n="07" label="Background applications — how the wordmark sits on each surface" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 90 }}>
        <div style={{ background: c.bone, padding: '32px 26px', minHeight: 240, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: fontHead, ...cfg.headStyle, fontSize: 38, color: c.bark, lineHeight: 1.05 }}>
            {cfg.copy.tagline}
          </div>
          <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.bark, opacity: 0.65 }}>
            Bone · primary canvas
          </div>
        </div>
        <div style={{ background: c.moss, color: c.bone, padding: '32px 26px', minHeight: 240, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: fontHead, ...cfg.headStyle, fontSize: 38, color: c.bone, lineHeight: 1.05 }}>
            {cfg.copy.tagline}
          </div>
          <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.8 }}>
            Moss · brand colour
          </div>
        </div>
        <div style={{ background: c.bark, color: c.bone, padding: '32px 26px', minHeight: 240, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: fontHead, ...cfg.headStyle, fontSize: 38, color: c.bone, lineHeight: 1.05 }}>
            {cfg.copy.tagline}
          </div>
          <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.clay, opacity: 0.85 }}>
            Bark · editorial
          </div>
        </div>
      </div>

      {/* ── 08 DO / DON'T ── */}
      <SectionLabel n="08" label="Do · Don't — voice & application" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 90 }}>
        <div>
          <div style={{ fontFamily: fontMono, fontSize: 11, letterSpacing: '0.24em', color: c.moss, marginBottom: 18 }}>DO</div>
          {cfg.copy.doList.map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, padding: '12px 0', borderTop: i ? `1px solid ${c.clay}50` : 'none' }}>
              <div style={{ color: c.moss, fontFamily: fontPull, fontSize: 18, ...cfg.pullStyle, fontStyle: cfg.pullStyle?.fontStyle || 'normal' }}>✓</div>
              <div style={{ fontFamily: fontBody, fontSize: 15, lineHeight: 1.5, color: c.bark }}>{t}</div>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: fontMono, fontSize: 11, letterSpacing: '0.24em', color: c.clay, marginBottom: 18 }}>DON'T</div>
          {cfg.copy.dontList.map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, padding: '12px 0', borderTop: i ? `1px solid ${c.clay}50` : 'none' }}>
              <div style={{ color: c.clay, fontFamily: fontPull, fontSize: 18 }}>×</div>
              <div style={{ fontFamily: fontBody, fontSize: 15, lineHeight: 1.5, color: c.bark }}>{t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── footer ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: `1px solid ${c.bark}`, paddingTop: 18, marginTop: 30 }}>
        <span style={{ fontFamily: fontSub, ...cfg.subStyle, fontSize: 22, color: c.bark }}>
          {cfg.name} — {cfg.descriptor}
        </span>
        <span style={{ fontFamily: fontMono, fontSize: 11, color: c.bark, opacity: 0.6, letterSpacing: '0.14em' }}>
          QUIROSASUN · {cfg.code}
        </span>
      </div>
    </div>
  );
}

window.BrandBoard = BrandBoard;
