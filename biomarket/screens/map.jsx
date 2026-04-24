// Mapa — vecinos cercanos with bottom sheet

const MapScreen = ({ theme, onOpenProducer, onBack }) => {
  const [selected, setSelected] = React.useState('p1');
  const current = BM_PRODUCERS.find(p => p.id === selected);

  // Positions on the map — % coords
  const pins = [
    { id: 'p1', x: 32, y: 42 },
    { id: 'p4', x: 48, y: 35 },
    { id: 'p2', x: 62, y: 58 },
    { id: 'p3', x: 28, y: 70 },
  ];

  const isDark = theme.name === 'dark';

  return (
    <div style={{ flex: 1, background: theme.bg, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      {/* Map */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.06)'} strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="400" height="600" fill={isDark ? '#0a1f1a' : '#e8e3d3'}/>
          <rect width="400" height="600" fill="url(#grid)"/>
          {/* river */}
          <path d="M-20 180 Q100 220 200 200 T420 280" stroke={isDark ? '#13403a' : '#b8c9c2'} strokeWidth="28" fill="none" opacity="0.9"/>
          {/* parks */}
          <path d="M60 360 Q120 340 180 380 L170 450 Q100 470 50 440 Z" fill={isDark ? '#0d3a2e' : '#cfdfc6'} opacity="0.7"/>
          <circle cx="300" cy="120" r="50" fill={isDark ? '#0d3a2e' : '#cfdfc6'} opacity="0.7"/>
          {/* streets */}
          {[80, 160, 240, 320, 400, 480].map(y => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} stroke={isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)'} strokeWidth="1.5"/>
          ))}
          {[80, 160, 240, 320].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="600" stroke={isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)'} strokeWidth="1.5"/>
          ))}
          {/* user radius */}
          <circle cx="200" cy="300" r="130" fill={theme.emerald} opacity="0.08"/>
          <circle cx="200" cy="300" r="130" fill="none" stroke={theme.emerald} strokeWidth="1" strokeDasharray="3 4" opacity="0.5"/>
          {/* user */}
          <circle cx="200" cy="300" r="14" fill={theme.emerald} opacity="0.25"/>
          <circle cx="200" cy="300" r="8" fill={theme.emerald}/>
          <circle cx="200" cy="300" r="3" fill="#fff"/>
        </svg>

        {/* Pins */}
        {pins.map(pin => {
          const p = BM_PRODUCERS.find(x => x.id === pin.id);
          const active = selected === pin.id;
          return (
            <button key={pin.id} onClick={() => setSelected(pin.id)} style={{
              position: 'absolute', left: `${pin.x}%`, top: `${pin.y}%`,
              transform: `translate(-50%, -100%) scale(${active ? 1.1 : 1})`,
              background: 'transparent', border: 'none', cursor: 'pointer',
              transition: 'transform 200ms',
            }}>
              <div style={{
                background: active ? theme.emerald : theme.surface,
                border: `2px solid ${theme.emerald}`,
                color: active ? '#fff' : theme.emerald,
                padding: '6px 10px 6px 8px', borderRadius: 100,
                fontFamily: BM_FONT.sans, fontSize: 11.5, fontWeight: 700,
                display: 'inline-flex', alignItems: 'center', gap: 4,
                boxShadow: active ? `0 8px 20px ${theme.emeraldGlow}` : '0 4px 10px rgba(0,0,0,0.25)',
                whiteSpace: 'nowrap',
              }}>
                <Icons.pin size={12} sw={2}/>
                {p.distance}
              </div>
              <div style={{
                width: 0, height: 0, margin: '0 auto',
                borderLeft: '5px solid transparent', borderRight: '5px solid transparent',
                borderTop: `6px solid ${theme.emerald}`,
              }}/>
            </button>
          );
        })}

        {/* Top bar */}
        <div style={{ position: 'absolute', top: 14, left: 16, right: 16, display: 'flex', gap: 10 }}>
          <button onClick={onBack} style={iconBtn(theme)}><Icons.arrowL size={18}/></button>
          <div style={{
            flex: 1, background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 14,
            padding: '10px 14px', color: theme.text, fontFamily: BM_FONT.sans, fontSize: 13,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <Icons.search size={16} stroke={theme.textDim}/>
            Radio: 2 km · 14 vecinos
          </div>
          <button style={iconBtn(theme)}><Icons.gps size={18} stroke={theme.emerald}/></button>
        </div>
      </div>

      {/* Bottom sheet */}
      <div style={{
        background: theme.surface, borderTopLeftRadius: 24, borderTopRightRadius: 24,
        padding: '12px 18px 18px', borderTop: `1px solid ${theme.line}`,
      }}>
        <div style={{ width: 36, height: 4, background: theme.lineStrong, borderRadius: 2, margin: '0 auto 14px' }}/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 54, height: 54, borderRadius: 14, overflow: 'hidden', flexShrink: 0,
          }}>
            <HeroPhoto kind={current.hero} theme={theme} radius={0}/>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ color: theme.text, fontFamily: BM_FONT.display, fontSize: 18, fontWeight: 400, lineHeight: 1.2 }}>
              {current.name}
            </div>
            <div style={{ color: theme.textDim, fontSize: 11.5, fontFamily: BM_FONT.sans, marginTop: 2 }}>
              {current.distance} · {current.barrio.split('·')[0]}
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
              <RatingPill theme={theme} rating={current.rating} small/>
              <span style={{
                background: theme.emeraldSoft, color: theme.emerald,
                padding: '2px 7px', borderRadius: 100, fontSize: 10.5, fontWeight: 600,
                fontFamily: BM_FONT.sans,
              }}>{current.openNow}</span>
            </div>
          </div>
          <BMButton theme={theme} onClick={() => onOpenProducer(current.id)} size="sm"
            iconRight={<Icons.arrowR size={14}/>}>
            Ver
          </BMButton>
        </div>
      </div>
    </div>
  );
};

window.MapScreen = MapScreen;
