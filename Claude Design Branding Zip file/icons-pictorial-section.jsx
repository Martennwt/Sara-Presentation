// Pictorial icon ecosystem — presented on two backgrounds.
// 30 icons, 1:1 with Sara's V1 reference. Each item:
//   circle outline + icon + bold label + body description.
// Two boards: BONE (default) and MOSS (dark brand green).

const PICT_SECTION_W = 1320;
const PICT_SECTION_H = 2880;

// All 30 cards, in V1 reading order (6 cols × 5 rows).
const BENEFICIOS = [
  { key: 'Espalda',           head: 'Alivia el dolor de espalda',
    body: 'Reduce el dolor lumbar, dorsal y cervical.' },
  { key: 'Cuello',            head: 'Disminuye el dolor de cuello',
    body: 'Menos tensión, rigidez y molestias cervicales.' },
  { key: 'Cabeza',            head: 'Reduce los dolores de cabeza',
    body: 'Disminuye la frecuencia e intensidad de las cefaleas.' },
  { key: 'Movilidad',         head: 'Mejora la movilidad',
    body: 'Aumenta la flexibilidad y la amplitud de movimiento.' },
  { key: 'Rendimiento',       head: 'Mejora el rendimiento físico',
    body: 'Optimiza el movimiento y la recuperación.' },
  { key: 'Estres',            head: 'Reduce el estrés',
    body: 'Favorece la relajación y el equilibrio del sistema nervioso.' },

  { key: 'Cerebro',           head: 'Mejora la función nerviosa',
    body: 'Favorece una comunicación óptima entre cerebro y cuerpo.' },
  { key: 'Sueno',             head: 'Mejora la calidad del sueño',
    body: 'Duermes más profundo y te despiertas mejor.' },
  { key: 'Energia',           head: 'Aumenta la energía',
    body: 'Menos fatiga, más vitalidad en tu día a día.' },
  { key: 'Inmune',            head: 'Refuerza el sistema inmune',
    body: 'Un sistema nervioso equilibrado apoya tus defensas.' },
  { key: 'Digestion',         head: 'Mejora la digestión',
    body: 'Favorece el funcionamiento del sistema digestivo.' },
  { key: 'Respiracion',       head: 'Mejora la respiración',
    body: 'Más capacidad pulmonar y respiración más libre.' },

  { key: 'Corazon',           head: 'Favorece la salud del corazón',
    body: 'Mejora la circulación y el equilibrio del sistema nervioso autónomo.' },
  { key: 'Embarazo',          head: 'Acompaña el embarazo',
    body: 'Alivia molestias y favorece el bienestar de mamá y bebé.' },
  { key: 'Bebes',             head: 'Beneficia a bebés y niños',
    body: 'Mejora cólicos, sueño, postura y desarrollo neurológico.' },
  { key: 'PosturaErguida',    head: 'Mejora la postura',
    body: 'Alinea la columna y ayuda a mantener hábitos saludables.' },
  { key: 'Concentracion',     head: 'Mejora la concentración',
    body: 'Un sistema nervioso en equilibrio favorece el enfoque mental.' },
  { key: 'BienestarGeneral',  head: 'Mejora el bienestar general',
    body: 'Te sientes mejor en tu cuerpo, en tu mente y en tu día a día.' },

  { key: 'Lesiones',          head: 'Previene lesiones',
    body: 'Mantiene la columna y el cuerpo en equilibrio y funcionamiento.' },
  { key: 'Recuperacion',      head: 'Acelera la recuperación',
    body: 'Disminuye los tiempos de recuperación tras lesiones.' },
  { key: 'Postura',           head: 'Alivia molestias por la postura',
    body: 'Ideal para el trabajo de oficina y el uso de pantallas.' },
  { key: 'Articular',         head: 'Mejora la función articular',
    body: 'Menos desgaste, más movilidad y confort articular.' },
  { key: 'Equilibrio',        head: 'Equilibra el cuerpo',
    body: 'Mejora la coordinación y el equilibrio postural.' },
  { key: 'Animo',             head: 'Mejora tu estado de ánimo',
    body: 'Reduce la ansiedad y promueve una sensación de bienestar.' },

  { key: 'VidaActiva',        head: 'Mejora tu vida activa',
    body: 'Te mueves mejor, con más libertad y menos limitaciones.' },
  { key: 'Envejecimiento',    head: 'Envejecimiento saludable',
    body: 'Mantiene tu columna sana y tu cuerpo funcionando mejor por más tiempo.' },
  { key: 'Conecta',           head: 'Conecta contigo mismo',
    body: 'Más conciencia corporal, más presencia y bienestar.' },
  { key: 'SistemaNervioso',   head: 'Regula el sistema nervioso',
    body: 'Favorece el equilibrio entre el sistema simpático y parasimpático.' },
  { key: 'CalidadVida',       head: 'Mejora tu calidad de vida',
    body: 'Pequeños cambios que generan grandes resultados.' },
  { key: 'Columna',           head: 'Salud de columna a largo plazo',
    body: 'Prevención, cuidado y mantenimiento para toda la vida.' },
];

// ── one card: circle outline + icon + bold label + body
function BeneficioCard({ Cmp, head, body, fg, ring }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      textAlign: 'center', padding: '0 10px',
    }}>
      <div style={{
        width: 96, height: 96, borderRadius: '50%',
        border: `1px solid ${ring}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 18,
      }}>
        <Cmp size={56} color={fg}/>
      </div>
      <div style={{
        fontFamily: 'Inter', fontWeight: 600, fontSize: 14,
        color: fg, lineHeight: 1.3, marginBottom: 8,
      }}>
        {head}
      </div>
      <div style={{
        fontFamily: 'Inter', fontWeight: 400, fontSize: 12, lineHeight: 1.55,
        color: fg, opacity: 0.72,
      }}>
        {body}
      </div>
    </div>
  );
}

// ── one full board: title strip + 6×5 grid
function BeneficiosBoard({ bg, fg, ring, accent, title, kicker }) {
  const P = window.PictorialIcons;
  return (
    <div style={{
      background: bg, color: fg, padding: '72px 80px 88px',
      fontFamily: 'Inter',
    }}>
      {/* header strip */}
      <div style={{ display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-end', marginBottom: 56,
                    borderBottom: `1px solid ${ring}`, paddingBottom: 28 }}>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: accent,
                        letterSpacing: '0.28em', textTransform: 'uppercase',
                        marginBottom: 14 }}>
            {kicker}
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', margin: 0,
                       fontSize: 64, fontWeight: 400, lineHeight: 1.0,
                       color: fg }}>
            {title}
          </h2>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                        fontSize: 22, color: fg, opacity: 0.75, marginTop: 12 }}>
            Cuidamos la línea que te sostiene.
          </div>
        </div>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11,
                      letterSpacing: '0.18em', color: fg, opacity: 0.55,
                      textAlign: 'right' }}>
          QUIROSASUN · BILBAO<br/>30 · Beneficios
        </div>
      </div>

      {/* 6 × 5 grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)',
                    rowGap: 48, columnGap: 4 }}>
        {BENEFICIOS.map(({ key, head, body }) => {
          const Cmp = P[key];
          return (
            <BeneficioCard key={key} Cmp={Cmp} head={head} body={body}
                           fg={fg} ring={ring}/>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────── master section ───────────────────
function PictorialIconBoard() {
  return (
    <div style={{
      width: PICT_SECTION_W, height: PICT_SECTION_H,
      fontFamily: 'Inter', position: 'relative', overflow: 'hidden',
    }}>
      {/* Board 1 — BONE (beige) */}
      <BeneficiosBoard
        bg={PALETTE.bone}
        fg={PALETTE.bark}
        ring={PALETTE.clay}
        accent={PALETTE.moss}
        kicker="Sobre Bone · fondo beige"
        title="Beneficios de la quiropráctica"
      />

      {/* Board 2 — MOSS (dark brand green) */}
      <BeneficiosBoard
        bg={PALETTE.moss}
        fg={PALETTE.bone}
        ring={PALETTE.clay}
        accent={PALETTE.clay}
        kicker="Sobre Moss · verde oscuro de marca"
        title="Beneficios de la quiropráctica"
      />
    </div>
  );
}

window.PICT_SECTION_W = PICT_SECTION_W;
window.PICT_SECTION_H = PICT_SECTION_H;
window.PictorialIconBoard = PictorialIconBoard;
