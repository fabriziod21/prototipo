// Producer detail screen

const ProducerScreen = ({ theme, producerId, onBack, onChat, onAddToCart, onOpenProduct }) => {
  const p = BM_PRODUCERS.find(x => x.id === producerId) || BM_PRODUCERS[0];
  const items = BM_PRODUCTS_HOY.filter(x => x.producerId === p.id);

  return (
    <div style={{ flex: 1, overflowY: 'auto', background: theme.bg, position: 'relative' }}>
      {/* Hero */}
      <div style={{ position: 'relative', height: 220 }}>
        <HeroPhoto kind={p.hero} theme={theme} radius={0}/>
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, rgba(7,22,19,0.4) 0%, rgba(7,22,19,0) 40%, ${theme.bg} 100%)`,
        }}/>
        <div style={{
          position: 'absolute', top: 14, left: 16, right: 16, display: 'flex', justifyContent: 'space-between',
        }}>
          <button onClick={onBack} style={iconBtn(theme)}><Icons.arrowL size={18}/></button>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={iconBtn(theme)}><Icons.share size={18}/></button>
            <button style={iconBtn(theme)}><Icons.heart size={18}/></button>
          </div>
        </div>
      </div>

      {/* Card pulled up */}
      <div style={{ padding: '0 18px', marginTop: -48, position: 'relative' }}>
        <div style={{
          background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 24,
          padding: '18px 18px 16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 16, flexShrink: 0,
              background: `linear-gradient(145deg, ${theme.emerald}, ${theme.emeraldDeep})`,
              color: '#fff', fontFamily: BM_FONT.display, fontSize: 20,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{p.avatar}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <div style={{ flex: 1, minWidth: 0, color: theme.text, fontFamily: BM_FONT.display, fontSize: 22, fontWeight: 400, letterSpacing: -0.3, lineHeight: 1.15 }}>
                  {p.name}
                </div>
                {p.verified && (
                  <span style={{
                    flexShrink: 0, marginTop: 4,
                    background: theme.emeraldSoft, color: theme.emerald,
                    padding: '3px 8px', borderRadius: 100, fontSize: 10, fontWeight: 700,
                    fontFamily: BM_FONT.sans, letterSpacing: 0.4, textTransform: 'uppercase',
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                  }}>
                    <Icons.check size={10} sw={2.5} stroke={theme.emerald}/>
                    Vecino
                  </span>
                )}
              </div>
              <div style={{ color: theme.textDim, fontSize: 12, fontFamily: BM_FONT.sans, marginTop: 4 }}>
                {p.since}
              </div>
            </div>
          </div>

          <div style={{ color: theme.text, fontFamily: BM_FONT.sans, fontSize: 13.5, lineHeight: 1.55, marginBottom: 14 }}>
            {p.tagline}. Criado sin agroquímicos, con alimento balanceado y mucho cariño. Entrego en bicicleta o pasas a recoger.
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
            background: theme.surface2, border: `1px solid ${theme.line}`, borderRadius: 16,
            padding: '10px 0', marginBottom: 14,
          }}>
            {[
              { label: 'Cercanía', value: p.distance, icon: Icons.pin },
              { label: 'Valoración', value: p.rating, icon: Icons.starFill },
              { label: 'Reseñas', value: p.reviews, icon: Icons.chat },
            ].map((s, i) => (
              <div key={i} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                padding: '0 6px',
                borderRight: i < 2 ? `1px solid ${theme.line}` : 'none',
              }}>
                <s.icon size={13} stroke={theme.emerald}/>
                <div style={{ color: theme.text, fontFamily: BM_FONT.display, fontSize: 17, fontWeight: 400, whiteSpace: 'nowrap' }}>{s.value}</div>
                <div style={{ color: theme.textMute, fontSize: 10, fontFamily: BM_FONT.sans, letterSpacing: 0.3, textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Open status */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '10px 12px', background: theme.emeraldSoft, borderRadius: 12,
            marginBottom: 12,
          }}>
            <Icons.clock size={15} stroke={theme.emerald}/>
            <span style={{ color: theme.emerald, fontFamily: BM_FONT.sans, fontSize: 12.5, fontWeight: 600 }}>
              {p.openNow}
            </span>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <BMButton theme={theme} variant="primary" onClick={onChat}
              icon={<Icons.chat size={16}/>} style={{ flex: 1 }}>
              Coordinar por chat
            </BMButton>
            <BMButton theme={theme} variant="ghost" style={{ width: 48, padding: 0, height: 44 }}>
              <Icons.phone size={16}/>
            </BMButton>
          </div>
        </div>
      </div>

      {/* Products */}
      <div style={{ padding: '22px 20px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
          <h3 style={{ margin: 0, color: theme.text, fontFamily: BM_FONT.display, fontSize: 20, fontWeight: 400 }}>
            Lo que tiene hoy
          </h3>
          <span style={{ color: theme.emerald, fontSize: 11, fontFamily: BM_FONT.sans, fontWeight: 600, letterSpacing: 0.6, textTransform: 'uppercase' }}>
            Stock en vivo
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {items.map(it => (
            <div key={it.id} style={{
              background: theme.surface, border: `1px solid ${theme.line}`,
              borderRadius: 16, padding: 10, display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ width: 62, height: 62, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
                <HeroPhoto kind={it.photo} theme={theme} radius={0}/>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: theme.text, fontFamily: BM_FONT.sans, fontSize: 14, fontWeight: 600 }}>
                  {it.name}
                </div>
                <div style={{ color: theme.textDim, fontSize: 11.5, fontFamily: BM_FONT.sans, marginTop: 2 }}>
                  {it.fresh} · quedan {it.stock} {it.unit}{it.stock > 1 ? 's' : ''}
                </div>
                <div style={{ color: theme.text, fontFamily: BM_FONT.display, fontSize: 17, marginTop: 4 }}>
                  S/ {it.price}
                  <span style={{ color: theme.textMute, fontFamily: BM_FONT.sans, fontSize: 10.5, marginLeft: 4 }}>
                    /{it.unit}
                  </span>
                </div>
              </div>
              <button onClick={() => onAddToCart(it.id)} style={{
                background: `linear-gradient(145deg, ${theme.emerald}, ${theme.emeraldDeep})`,
                color: '#fff', border: 'none', width: 40, height: 40, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                boxShadow: `0 6px 14px ${theme.emeraldGlow}`,
              }}>
                <Icons.plus size={18} sw={2.2}/>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const iconBtn = (theme) => ({
  width: 38, height: 38, borderRadius: 12,
  background: 'rgba(7,22,19,0.75)', backdropFilter: 'blur(6px)',
  border: `1px solid rgba(255,255,255,0.1)`,
  color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
});

window.ProducerScreen = ProducerScreen;
