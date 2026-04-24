// Shared UI shell for BioMarket: custom Android status bar + branded app bar + bottom nav.

const StatusBarBM = ({ theme }) => (
  <div style={{
    height: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 18px', position: 'relative', color: theme.statusFg,
    fontFamily: BM_FONT.sans, fontSize: 13, fontWeight: 500, letterSpacing: 0.2,
    flexShrink: 0,
  }}>
    <span>9:41</span>
    <div style={{ position: 'absolute', left: '50%', top: 8, transform: 'translateX(-50%)', width: 18, height: 18, borderRadius: '50%', background: '#0a0a0a' }}/>
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <svg width="14" height="10" viewBox="0 0 14 10" fill={theme.statusFg}><path d="M7 0a9 9 0 0 1 7 3l-1 1a8 8 0 0 0-12 0L0 3a9 9 0 0 1 7-3Zm0 3a6 6 0 0 1 4.5 2l-1 1a4.5 4.5 0 0 0-7 0l-1-1A6 6 0 0 1 7 3Zm0 3a3 3 0 0 1 2 .8L7 9 5 6.8A3 3 0 0 1 7 6Z"/></svg>
      <svg width="14" height="10" viewBox="0 0 14 10" fill={theme.statusFg}><path d="M1 6h2v3H1zM4 4h2v5H4zM7 2h2v7H7zM10 0h2v9h-2z"/></svg>
      <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke={theme.statusFg} strokeWidth="1">
        <rect x="0.5" y="0.5" width="18" height="9" rx="1.5"/>
        <rect x="2" y="2" width="13" height="6" rx="0.5" fill={theme.statusFg}/>
        <rect x="19.5" y="3" width="1.5" height="4" fill={theme.statusFg}/>
      </svg>
    </div>
  </div>
);

const GestureBarBM = ({ theme }) => (
  <div style={{ height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
    <div style={{ width: 128, height: 4, borderRadius: 2, background: theme.text, opacity: 0.35 }}/>
  </div>
);

// Bottom tab bar
const BottomTabs = ({ theme, current, onChange }) => {
  const items = [
    { id: 'feed',   label: 'Vitrina',  icon: 'leaf' },
    { id: 'map',    label: 'Mapa',     icon: 'map' },
    { id: 'sell',   label: 'Publicar', icon: 'plus', center: true },
    { id: 'chat',   label: 'Chats',    icon: 'chat' },
    { id: 'cart',   label: 'Carrito',  icon: 'basket' },
  ];
  return (
    <div style={{
      position: 'relative', background: theme.surface,
      borderTop: `1px solid ${theme.line}`,
      padding: '8px 6px 6px', display: 'flex', justifyContent: 'space-between',
      flexShrink: 0,
    }}>
      {items.map(it => {
        const active = current === it.id;
        if (it.center) {
          return (
            <button key={it.id} onClick={() => onChange(it.id)} style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, padding: 0,
              flex: 1, marginTop: -18,
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 18,
                background: `linear-gradient(145deg, ${theme.emerald} 0%, ${theme.emeraldDeep} 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 10px 24px ${theme.emeraldGlow}, 0 0 0 4px ${theme.surface}`,
                color: '#fff',
              }}>
                <Icons.plus size={24} sw={2}/>
              </div>
              <span style={{ fontSize: 10.5, color: theme.textDim, fontFamily: BM_FONT.sans, marginTop: 4, fontWeight: 500 }}>
                {it.label}
              </span>
            </button>
          );
        }
        const Ic = Icons[it.icon];
        return (
          <button key={it.id} onClick={() => onChange(it.id)} style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '6px 0',
            flex: 1, color: active ? theme.emerald : theme.textMute,
          }}>
            <Ic size={22} sw={active ? 2 : 1.6}/>
            <span style={{ fontSize: 10.5, fontFamily: BM_FONT.sans, fontWeight: active ? 600 : 500 }}>
              {it.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

// Phone frame
const PhoneFrame = ({ theme, children, width = 400, height = 860 }) => (
  <div style={{
    width, height, borderRadius: 44, overflow: 'hidden',
    background: theme.bg,
    border: `10px solid #0a0a0a`,
    boxShadow: '0 40px 100px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04) inset',
    display: 'flex', flexDirection: 'column', position: 'relative',
  }}>
    <StatusBarBM theme={theme}/>
    <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: theme.bg, minHeight: 0 }}>
      {children}
    </div>
    <GestureBarBM theme={theme}/>
  </div>
);

// Utility: rating pill
const RatingPill = ({ theme, rating, small }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 3,
    background: theme.emeraldSoft, color: theme.emerald,
    padding: small ? '2px 6px' : '3px 8px', borderRadius: 100,
    fontSize: small ? 11 : 12, fontWeight: 600, fontFamily: BM_FONT.sans,
  }}>
    <Icons.starFill size={small ? 10 : 12} stroke={theme.emerald}/>
    {rating}
  </span>
);

// Utility: button
const BMButton = ({ theme, children, variant = 'primary', onClick, style, size = 'md', icon, iconRight }) => {
  const sizes = { sm: { p: '8px 14px', fs: 13 }, md: { p: '12px 18px', fs: 14 }, lg: { p: '16px 22px', fs: 15 } };
  const s = sizes[size];
  const variants = {
    primary: { bg: `linear-gradient(145deg, ${theme.emerald} 0%, ${theme.emeraldDeep} 100%)`, color: '#fff', border: 'none', shadow: `0 8px 18px ${theme.emeraldGlow}` },
    ghost:   { bg: 'transparent', color: theme.text, border: `1px solid ${theme.lineStrong}`, shadow: 'none' },
    soft:    { bg: theme.emeraldSoft, color: theme.emerald, border: 'none', shadow: 'none' },
    dark:    { bg: theme.surface2, color: theme.text, border: `1px solid ${theme.line}`, shadow: 'none' },
  };
  const v = variants[variant];
  return (
    <button onClick={onClick} style={{
      background: v.bg, color: v.color, border: v.border, boxShadow: v.shadow,
      padding: s.p, borderRadius: 14, fontSize: s.fs, fontFamily: BM_FONT.sans, fontWeight: 600,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      cursor: 'pointer', ...style,
    }}>
      {icon}
      {children}
      {iconRight}
    </button>
  );
};

Object.assign(window, { PhoneFrame, BottomTabs, StatusBarBM, GestureBarBM, RatingPill, BMButton });
