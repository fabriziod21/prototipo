// Carrito / Checkout screen — Yape / Plin / Contra entrega

const CartScreen = ({ theme, cart, onBack, onRemove, onPlaceOrder }) => {
  const [pay, setPay] = React.useState('yape');
  const items = cart.map(c => ({ ...BM_PRODUCTS_HOY.find(p => p.id === c.id), qty: c.qty }));
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);

  const payMethods = [
    { id: 'yape', label: 'Yape', sub: 'Pago inmediato', color: theme.yape, mark: 'Y' },
    { id: 'plin', label: 'Plin', sub: 'Pago inmediato', color: theme.plin, mark: 'P' },
    { id: 'cash', label: 'Efectivo', sub: 'Contra entrega', color: theme.gold, mark: 'S/' },
  ];

  return (
    <div style={{ flex: 1, background: theme.bg, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '14px 16px 10px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={onBack} style={{ background: 'transparent', border: 'none', color: theme.text, cursor: 'pointer', padding: 4 }}>
          <Icons.arrowL size={22}/>
        </button>
        <h1 style={{ margin: 0, color: theme.text, fontFamily: BM_FONT.display, fontSize: 26, fontWeight: 400, letterSpacing: -0.3, flex: 1 }}>
          Tu canasta
        </h1>
        <span style={{ color: theme.textDim, fontSize: 12, fontFamily: BM_FONT.sans }}>
          {items.length} {items.length === 1 ? 'artículo' : 'artículos'}
        </span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '6px 16px 16px' }}>
        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: theme.textDim, fontFamily: BM_FONT.sans, fontSize: 14 }}>
            Tu canasta está vacía
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
            {items.map(it => {
              const producer = BM_PRODUCERS.find(p => p.id === it.producerId);
              return (
                <div key={it.id} style={{
                  background: theme.surface, border: `1px solid ${theme.line}`,
                  borderRadius: 16, padding: 10, display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <div style={{ width: 56, height: 56, borderRadius: 12, overflow: 'hidden' }}>
                    <HeroPhoto kind={it.photo} theme={theme} radius={0}/>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: theme.text, fontFamily: BM_FONT.sans, fontSize: 14, fontWeight: 600 }}>{it.name}</div>
                    <div style={{ color: theme.textDim, fontSize: 11, fontFamily: BM_FONT.sans, marginTop: 1 }}>
                      {producer.name} · {producer.distance}
                    </div>
                    <div style={{ color: theme.text, fontFamily: BM_FONT.display, fontSize: 16, marginTop: 3 }}>
                      S/ {it.price * it.qty}
                      <span style={{ color: theme.textMute, fontFamily: BM_FONT.sans, fontSize: 10.5, marginLeft: 4 }}>
                        {it.qty} × {it.unit}
                      </span>
                    </div>
                  </div>
                  <button onClick={() => onRemove(it.id)} style={{
                    background: 'transparent', border: `1px solid ${theme.line}`,
                    width: 34, height: 34, borderRadius: 10, color: theme.textDim, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}><Icons.trash size={15}/></button>
                </div>
              );
            })}
          </div>
        )}

        {/* Payment method */}
        {items.length > 0 && (
          <>
            <div style={{ color: theme.textMute, fontSize: 11, fontFamily: BM_FONT.sans, fontWeight: 600, letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 10 }}>
              Método de pago
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
              {payMethods.map(m => {
                const active = pay === m.id;
                return (
                  <button key={m.id} onClick={() => setPay(m.id)} style={{
                    background: theme.surface,
                    border: `1.5px solid ${active ? theme.emerald : theme.line}`,
                    borderRadius: 14, padding: 12, display: 'flex', alignItems: 'center', gap: 12,
                    cursor: 'pointer', textAlign: 'left',
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, background: m.color,
                      color: '#fff', fontFamily: BM_FONT.display, fontSize: 16,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600,
                    }}>{m.mark}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: theme.text, fontFamily: BM_FONT.sans, fontSize: 14, fontWeight: 600 }}>{m.label}</div>
                      <div style={{ color: theme.textDim, fontSize: 11.5, fontFamily: BM_FONT.sans }}>{m.sub}</div>
                    </div>
                    <div style={{
                      width: 20, height: 20, borderRadius: '50%',
                      border: `2px solid ${active ? theme.emerald : theme.lineStrong}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {active && <div style={{ width: 10, height: 10, borderRadius: '50%', background: theme.emerald }}/>}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Delivery */}
            <div style={{
              background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 16,
              padding: 14, marginBottom: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: theme.emeraldSoft, color: theme.emerald, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icons.truck size={16}/>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: theme.text, fontFamily: BM_FONT.sans, fontSize: 13.5, fontWeight: 600 }}>Recojo a domicilio</div>
                  <div style={{ color: theme.textDim, fontSize: 11.5, fontFamily: BM_FONT.sans }}>Jr. Los Eucaliptos 214 · 280 m</div>
                </div>
                <span style={{ color: theme.emerald, fontSize: 11.5, fontFamily: BM_FONT.sans, fontWeight: 600 }}>Cambiar</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 10, borderTop: `1px solid ${theme.line}` }}>
                <Icons.clock size={14} stroke={theme.textDim}/>
                <span style={{ color: theme.textDim, fontSize: 12, fontFamily: BM_FONT.sans }}>Listo hoy en 15–25 min</span>
              </div>
            </div>
          </>
        )}
      </div>

      {items.length > 0 && (
        <div style={{
          padding: '14px 16px 14px', background: theme.surface,
          borderTop: `1px solid ${theme.line}`,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <div>
              <div style={{ color: theme.textMute, fontSize: 11, fontFamily: BM_FONT.sans, letterSpacing: 0.4, textTransform: 'uppercase' }}>Total</div>
              <div style={{ color: theme.text, fontFamily: BM_FONT.display, fontSize: 30, letterSpacing: -0.5 }}>S/ {total}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: theme.textMute, fontSize: 11, fontFamily: BM_FONT.sans, letterSpacing: 0.4, textTransform: 'uppercase' }}>Comisión</div>
              <div style={{ color: theme.emerald, fontFamily: BM_FONT.display, fontSize: 22 }}>S/ 0</div>
            </div>
          </div>
          <BMButton theme={theme} size="lg" onClick={onPlaceOrder}
            iconRight={<Icons.arrowR size={16}/>}
            style={{ width: '100%' }}>
            {pay === 'cash' ? 'Confirmar pedido' : `Pagar con ${payMethods.find(m => m.id === pay).label}`}
          </BMButton>
        </div>
      )}
    </div>
  );
};

window.CartScreen = CartScreen;
