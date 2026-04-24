// Feed / Vitrina principal — comprador

const FeedScreen = ({ theme, onOpenProducer, onOpenCart, cartCount, onOpenProduct }) => {
  const [cat, setCat] = React.useState('todos');
  const [q, setQ] = React.useState('');
  const producersScrollRef = React.useRef(null);
  const categoriesScrollRef = React.useRef(null);

  React.useEffect(() => {
    const attach = (el) => {
      if (!el) return () => {};
      const onWheel = (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      };
      el.addEventListener('wheel', onWheel, { passive: false });
      return () => el.removeEventListener('wheel', onWheel);
    };
    const d1 = attach(producersScrollRef.current);
    const d2 = attach(categoriesScrollRef.current);
    return () => { d1(); d2(); };
  }, []);

  const filtered = BM_PRODUCTS_HOY.filter(p => {
    if (cat === 'todos') return true;
    const map = { huevos: 'Huevos', verduras: 'Verduras', aves: 'Aves', lacteos: 'Lácteos', hierbas: 'Hierbas' };
    return p.tag === map[cat];
  }).filter(p => !q || p.name.toLowerCase().includes(q.toLowerCase()));

  const featuredProducers = BM_PRODUCERS.slice(0, 4);

  return (
    <div style={{ background: theme.bg, flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingBottom: 12 }}>
      {/* Hero header */}
      <div style={{ padding: '18px 20px 14px', background: theme.heroGrad, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <div style={{
              fontFamily: BM_FONT.display, fontSize: 32, color: theme.text,
              letterSpacing: -0.5, lineHeight: 1,
            }}>
              Bio<span style={{ color: theme.emerald, fontStyle: 'italic' }}>Market</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, color: theme.textDim, fontFamily: BM_FONT.sans, fontSize: 11.5, fontWeight: 500, letterSpacing: 0.8, textTransform: 'uppercase' }}>
              <Icons.pin size={12}/> Pachacámac · 2 km
              <span style={{ color: theme.emerald, marginLeft: 4 }}>·</span>
              <Icons.gps size={11} stroke={theme.emerald}/>
              <span style={{ color: theme.emerald }}>GPS</span>
            </div>
          </div>
          <button onClick={onOpenCart} style={{
            position: 'relative', background: theme.surface2, border: `1px solid ${theme.line}`,
            width: 44, height: 44, borderRadius: 14, color: theme.text,
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}>
            <Icons.basket size={20}/>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute', top: -4, right: -4, background: theme.terracotta, color: '#fff',
                fontSize: 10, fontWeight: 700, fontFamily: BM_FONT.sans,
                minWidth: 18, height: 18, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px',
                border: `2px solid ${theme.surface2}`,
              }}>{cartCount}</span>
            )}
          </button>
        </div>

        {/* Search */}
        <div style={{
          background: theme.surface2, border: `1px solid ${theme.line}`, borderRadius: 14,
          padding: '11px 14px', display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <Icons.search size={18} stroke={theme.textDim}/>
          <input
            value={q} onChange={e => setQ(e.target.value)}
            placeholder="Buscar productos, vecinos…"
            style={{
              flex: 1, background: 'transparent', border: 'none', outline: 'none',
              color: theme.text, fontFamily: BM_FONT.sans, fontSize: 14,
            }}
          />
          <button style={{ background: 'transparent', border: 'none', color: theme.textDim, cursor: 'pointer', padding: 0 }}>
            <Icons.filter size={18}/>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div ref={categoriesScrollRef} style={{ padding: '14px 0 6px', overflowX: 'auto', overflowY: 'hidden', cursor: 'grab' }}>
        <div style={{ display: 'flex', gap: 8, padding: '0 20px', width: 'max-content' }}>
          {BM_CATEGORIES.map(c => {
            const Ic = Icons[c.icon];
            const active = cat === c.id;
            return (
              <button key={c.id} onClick={() => setCat(c.id)} style={{
                background: active ? theme.emerald : theme.surface2,
                border: `1px solid ${active ? theme.emerald : theme.line}`,
                color: active ? '#fff' : theme.text,
                padding: '9px 14px', borderRadius: 100, cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 7,
                fontFamily: BM_FONT.sans, fontSize: 13, fontWeight: 600,
                whiteSpace: 'nowrap',
              }}>
                <Ic size={15} sw={active ? 2 : 1.6}/>
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hoy en el barrio — horizontal producer cards */}
      <div style={{ padding: '16px 20px 8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
          <h2 style={{ margin: 0, color: theme.text, fontFamily: BM_FONT.display, fontSize: 22, fontWeight: 400, letterSpacing: -0.3 }}>
            Hoy en el barrio
          </h2>
          <span style={{ color: theme.emerald, fontSize: 11.5, fontFamily: BM_FONT.sans, fontWeight: 600, letterSpacing: 0.6, textTransform: 'uppercase' }}>
            <Icons.bolt size={11} stroke={theme.emerald} style={{verticalAlign:-1, marginRight:3}}/>
            Fresco hoy
          </span>
        </div>
      </div>
      <div
        ref={producersScrollRef}
        style={{
          overflowX: 'auto', overflowY: 'hidden', paddingBottom: 4,
          WebkitOverflowScrolling: 'touch', cursor: 'grab',
        }}>
        <div style={{ display: 'flex', gap: 12, padding: '0 20px', width: 'max-content' }}>
          {featuredProducers.map(p => (
            <button key={p.id} onClick={() => onOpenProducer(p.id)} style={{
              width: 220, background: theme.surface, border: `1px solid ${theme.line}`,
              borderRadius: 20, overflow: 'hidden', padding: 0, cursor: 'pointer', textAlign: 'left',
              scrollSnapAlign: 'start', flexShrink: 0,
            }}>
              <div style={{ height: 110, position: 'relative' }}>
                <HeroPhoto kind={p.hero} theme={theme} radius={0}/>
                <div style={{
                  position: 'absolute', top: 10, left: 10, background: 'rgba(7,22,19,0.75)',
                  backdropFilter: 'blur(6px)', color: theme.text,
                  padding: '4px 9px', borderRadius: 100, fontSize: 10.5, fontWeight: 600,
                  fontFamily: BM_FONT.sans, letterSpacing: 0.3,
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                }}>
                  <Icons.pin size={10}/> {p.distance}
                </div>
                {p.verified && (
                  <div style={{
                    position: 'absolute', top: 10, right: 10, background: theme.emerald,
                    width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icons.check size={13} sw={2.5} stroke="#fff"/>
                  </div>
                )}
              </div>
              <div style={{ padding: '12px 14px 14px' }}>
                <div style={{ color: theme.text, fontFamily: BM_FONT.sans, fontSize: 14, fontWeight: 600, marginBottom: 3 }}>
                  {p.name}
                </div>
                <div style={{ color: theme.textDim, fontSize: 11.5, fontFamily: BM_FONT.sans, lineHeight: 1.4, marginBottom: 10 }}>
                  {p.tagline}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <RatingPill theme={theme} rating={p.rating} small/>
                  <span style={{ color: theme.emerald, fontSize: 10.5, fontFamily: BM_FONT.sans, fontWeight: 600, letterSpacing: 0.3 }}>
                    {p.openNow}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Products grid */}
      <div style={{ padding: '22px 20px 12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
          <h2 style={{ margin: 0, color: theme.text, fontFamily: BM_FONT.display, fontSize: 22, fontWeight: 400, letterSpacing: -0.3 }}>
            Disponible ahora
          </h2>
          <span style={{ color: theme.textMute, fontSize: 11, fontFamily: BM_FONT.sans, fontWeight: 500 }}>
            {filtered.length} productos
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {filtered.map(prod => {
            const producer = BM_PRODUCERS.find(pp => pp.id === prod.producerId);
            return (
              <button key={prod.id} onClick={() => onOpenProduct(prod.id)} style={{
                background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 18,
                overflow: 'hidden', padding: 0, cursor: 'pointer', textAlign: 'left',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ aspectRatio: '1.1', position: 'relative' }}>
                  <HeroPhoto kind={prod.photo} theme={theme} radius={0}/>
                  <div style={{
                    position: 'absolute', bottom: 8, left: 8, background: 'rgba(7,22,19,0.82)',
                    backdropFilter: 'blur(6px)', color: theme.emerald,
                    padding: '3px 8px', borderRadius: 100, fontSize: 10, fontWeight: 700,
                    fontFamily: BM_FONT.sans, letterSpacing: 0.3, textTransform: 'uppercase',
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                  }}>
                    <Icons.dot size={8} stroke={theme.emerald}/>
                    {prod.fresh}
                  </div>
                </div>
                <div style={{ padding: '10px 12px 12px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: theme.text, fontFamily: BM_FONT.sans, fontSize: 13.5, fontWeight: 600, lineHeight: 1.25, marginBottom: 2 }}>
                    {prod.name}
                  </div>
                  <div style={{ color: theme.textMute, fontSize: 10.5, fontFamily: BM_FONT.sans, marginBottom: 8 }}>
                    {producer.name.split(' ').slice(0,3).join(' ')} · {producer.distance}
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div>
                      <span style={{ color: theme.text, fontFamily: BM_FONT.display, fontSize: 20, fontWeight: 400 }}>
                        S/ {prod.price}
                      </span>
                      <span style={{ color: theme.textMute, fontSize: 10, fontFamily: BM_FONT.sans, marginLeft: 4 }}>
                        / {prod.unit}
                      </span>
                    </div>
                    <span style={{
                      width: 28, height: 28, borderRadius: 10, background: theme.emeraldSoft,
                      color: theme.emerald, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icons.plus size={16} sw={2.2}/>
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

window.FeedScreen = FeedScreen;
