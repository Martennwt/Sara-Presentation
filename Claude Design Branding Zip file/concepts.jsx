// Shared utilities and palette for the Quirosasun brand boards.
// All three concepts share the same visual system (Bone / Cream / Moss / Bark / Clay)
// and differ only in typography, CTA language, and writing voice.

const ARTBOARD_W = 1320;
const ARTBOARD_H = 7100;

const PALETTE = {
  bone:  '#EDE7DA',
  cream: '#F2F4EE',
  moss:  '#5F6F4A',
  bark:  '#2F3A23',
  clay:  '#B89576',
  slate: '#1F211C',
};

const FONT_MONO = '"IBM Plex Mono", ui-monospace, monospace';

// ───────────── Logo image (Sara's actual logo) ─────────────
function LogoImage({ tint = null, h = 260, opacity = 1, blend = 'multiply' }) {
  // The PNG has a beige bg with mostly transparent edges (cleaned).
  // Using mix-blend-mode: multiply on light backgrounds makes any
  // residual beige drop out cleanly.
  return (
    <img
      src="assets/quirosasun-logo-clean.png"
      alt="Quirosasun logo"
      style={{
        height: h,
        width: 'auto',
        display: 'block',
        mixBlendMode: blend,
        opacity,
        filter: tint || 'none',
      }}
    />
  );
}

// For dark backgrounds — invert the colours so the dark olive logo reads as bone
function LogoOnDark({ h = 220 }) {
  return (
    <img
      src="assets/quirosasun-logo-clean.png"
      alt="Quirosasun logo"
      style={{
        height: h,
        width: 'auto',
        display: 'block',
        filter: 'invert(92%) sepia(7%) saturate(180%) hue-rotate(13deg) brightness(98%) contrast(92%)',
        mixBlendMode: 'screen',
      }}
    />
  );
}

// ───────────── Colour swatch ─────────────
function Swatch({ name, hex, role, dark = PALETTE.bark, h = 220 }) {
  return (
    <div>
      <div style={{ width: '100%', height: h, background: hex, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.04)' }} />
      <div style={{ padding: '14px 4px 0' }}>
        <div style={{ fontFamily: 'serif', fontSize: 22, color: dark }}>{name}</div>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: dark, opacity: 0.65, marginTop: 4 }}>{hex}</div>
        <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: PALETTE.moss, marginTop: 10, letterSpacing: '0.14em' }}>{role}</div>
      </div>
    </div>
  );
}

// ───────────── Section header rule ─────────────
function SectionLabel({ n, label, color = PALETTE.bark }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', gap: 16,
      borderTop: `1px solid ${color}`, paddingTop: 16, marginBottom: 36,
    }}>
      <div style={{ fontFamily: FONT_MONO, fontSize: 12, color, opacity: 0.55, letterSpacing: '0.08em' }}>{n}</div>
      <div style={{ fontSize: 13, color, letterSpacing: '0.22em', textTransform: 'uppercase' }}>{label}</div>
    </div>
  );
}

// ───────────── Typography specimen row ─────────────
function TypeRow({ tag, meta, last, children, color = PALETTE.bark, clayBorder = PALETTE.clay }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40,
      alignItems: 'baseline', paddingTop: 36, paddingBottom: 0,
      borderTop: `1px solid ${clayBorder}50`,
      borderBottom: last ? `1px solid ${clayBorder}50` : 'none',
      paddingBottom: last ? 36 : 0,
      marginBottom: last ? 90 : 36,
    }}>
      <div style={{ fontFamily: FONT_MONO, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color, opacity: 0.55, lineHeight: 1.75 }}>
        <div style={{ marginBottom: 6 }}>{tag}</div>
        {meta.map((m, i) => <div key={i} style={{ opacity: 0.85 }}>{m}</div>)}
      </div>
      <div>{children}</div>
    </div>
  );
}

// ───────────── Dermatome flow lines (decorative) ─────────────
function DermatomeLines({ color = PALETTE.clay, w = 1200, h = 120 }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} fill="none" preserveAspectRatio="none">
      {[0, 1, 2, 3, 4, 5].map(i => (
        <path
          key={i}
          d={`M 0 ${20 + i * 16} Q ${w * 0.3} ${10 + i * 16 - i * 2}, ${w * 0.6} ${20 + i * 16}  T ${w} ${18 + i * 16}`}
          stroke={color} strokeWidth={0.9} fill="none" opacity={0.55 - i * 0.05}
        />
      ))}
    </svg>
  );
}

window.PALETTE = PALETTE;
window.FONT_MONO = FONT_MONO;
window.ARTBOARD_W = ARTBOARD_W;
window.ARTBOARD_H = ARTBOARD_H;
window.LogoImage = LogoImage;
window.LogoOnDark = LogoOnDark;
window.Swatch = Swatch;
window.SectionLabel = SectionLabel;
window.TypeRow = TypeRow;
window.DermatomeLines = DermatomeLines;
