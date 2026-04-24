// Publicación Express — productor, 3 pasos rápidos

const PublishScreen = ({ theme, onBack, onPublished }) => {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    category: 'Huevos', photo: 'eggs',
    title: 'Huevos de corral', unit: 'docena', price: 14, stock: 6,
    note: 'Puestos hoy temprano',
  });

  const cats = [
    { id: 'Huevos', icon: 'egg', photo: 'eggs' },
    { id: 'Verduras', icon: 'carrot', photo: 'lettuce' },
    { id: 'Aves', icon: 'chicken', photo: 'chicken' },
    { id: 'Lácteos', icon: 'cheese', photo: 'cheese' },
    { id: 'Hierbas', icon: 'leaf', photo: 'cilantro' },
  ];

  return (
    <div style={{ flex: 1, background: theme.bg, display: 'flex', flexDirection: 'column' }}>
      {/* header */}
      <div style={{ padding: '14px 16px 4px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={step === 1 ? onBack : () => setStep(step - 1)} style={{
          background: 'transparent', border: 'none', color: theme.text, cursor: 'pointer', padding: 4,
        }}><Icons.arrowL size={22}/></button>
        <div style={{ flex: 1 }}>
          <div style={{ color: theme.textMute, fontSize: 10.5, fontFamily: BM_FONT.sans, letterSpacing: 0.6, textTransform: 'uppercase' }}>
            Publicación express · {step}/3
          </div>
          <div style={{ color: theme.text, fontFamily: BM_FONT.display, fontSize: 22, fontWeight: 400, letterSpacing: -0.3, marginTop: 2 }}>
            {step === 1 ? 'Qué tienes hoy' : step === 2 ? 'Foto y descripción' : 'Precio y stock'}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 3 }}>
          {[1,2,3].map(i => (
            <div key={i} style={{
              width: i === step ? 16 : 6, height: 6, borderRadius: 3,
              background: i <= step ? theme.emerald : theme.lineStrong,
              transition: 'all 240ms',
            }}/>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 8px' }}>
        {step === 1 && (
          <>
            <div style={{ color: theme.textDim, fontSize: 13, fontFamily: BM_FONT.sans, marginBottom: 16, lineHeight: 1.55 }}>
              Elige la categoría. Tus vecinos podrán filtrarlo por aquí.
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {cats.map(c => {
                const Ic = Icons[c.icon];
                const active = form.category === c.id;
                return (
                  <button key={c.id} onClick={() => setForm({ ...form, category: c.id, photo: c.photo })} style={{
                    background: theme.surface,
                    border: `1.5px solid ${active ? theme.emerald : theme.line}`,
                    borderRadius: 16, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10,
                    cursor: 'pointer', position: 'relative', minHeight: 110,
                  }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 12,
                      background: active ? theme.emerald : theme.emeraldSoft,
                      color: active ? '#fff' : theme.emerald,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Ic size={20}/>
                    </div>
                    <div style={{ color: theme.text, fontFamily: BM_FONT.sans, fontSize: 14, fontWeight: 600 }}>{c.id}</div>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div style={{
              height: 190, borderRadius: 18, overflow: 'hidden', position: 'relative',
              background: theme.surface, border: `1px dashed ${theme.lineStrong}`,
              marginBottom: 14,
            }}>
              <HeroPhoto kind={form.photo} theme={theme} radius={0}/>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(7,22,19,0.1) 0%, rgba(7,22,19,0.6) 100%)',
                display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: 14,
              }}>
                <button style={{
                  background: 'rgba(7,22,19,0.75)', backdropFilter: 'blur(6px)',
                  border: `1px solid rgba(255,255,255,0.12)`, color: '#fff',
                  padding: '8px 14px', borderRadius: 100,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: BM_FONT.sans, fontSize: 12.5, fontWeight: 600, cursor: 'pointer',
                }}>
                  <Icons.camera size={14}/> Cambiar foto
                </button>
              </div>
            </div>
            <FieldLabel theme={theme}>Título</FieldLabel>
            <Field theme={theme} value={form.title} onChange={v => setForm({ ...form, title: v })}/>
            <FieldLabel theme={theme}>Nota rápida</FieldLabel>
            <Field theme={theme} value={form.note} onChange={v => setForm({ ...form, note: v })}
              placeholder='Ej: "puestos hoy", "cosecha del sábado"'/>
          </>
        )}

        {step === 3 && (
          <>
            <FieldLabel theme={theme}>Precio por {form.unit}</FieldLabel>
            <div style={{
              background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 14,
              padding: 14, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ color: theme.textDim, fontFamily: BM_FONT.display, fontSize: 22 }}>S/</span>
              <input type="number" value={form.price} onChange={e => setForm({ ...form, price: +e.target.value })} style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                color: theme.text, fontFamily: BM_FONT.display, fontSize: 34, fontWeight: 400,
              }}/>
              <select value={form.unit} onChange={e => setForm({ ...form, unit: e.target.value })} style={{
                background: theme.surface3, border: `1px solid ${theme.line}`, color: theme.text,
                padding: '8px 10px', borderRadius: 10, fontFamily: BM_FONT.sans, fontSize: 13,
              }}>
                {['docena','media docena','unidad','kg','½ kg','atado','manojo'].map(u => <option key={u}>{u}</option>)}
              </select>
            </div>

            <FieldLabel theme={theme}>Cuánto tienes disponible</FieldLabel>
            <div style={{
              background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 14,
              padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14,
            }}>
              <button onClick={() => setForm({ ...form, stock: Math.max(0, form.stock - 1) })} style={stepBtn(theme)}>
                <Icons.minus size={16}/>
              </button>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ color: theme.text, fontFamily: BM_FONT.display, fontSize: 32 }}>{form.stock}</div>
                <div style={{ color: theme.textMute, fontSize: 10.5, fontFamily: BM_FONT.sans }}>
                  {form.unit}{form.stock !== 1 ? 's' : ''} disponibles
                </div>
              </div>
              <button onClick={() => setForm({ ...form, stock: form.stock + 1 })} style={stepBtn(theme)}>
                <Icons.plus size={16}/>
              </button>
            </div>

            {/* Summary */}
            <div style={{
              background: theme.emeraldSoft, border: `1px solid ${theme.emerald}33`, borderRadius: 16,
              padding: 14, display: 'flex', gap: 10, alignItems: 'center',
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, overflow: 'hidden' }}>
                <HeroPhoto kind={form.photo} theme={theme} radius={0}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: theme.text, fontFamily: BM_FONT.sans, fontSize: 13, fontWeight: 600 }}>{form.title}</div>
                <div style={{ color: theme.emerald, fontFamily: BM_FONT.display, fontSize: 18 }}>
                  S/ {form.price} <span style={{ color: theme.textDim, fontFamily: BM_FONT.sans, fontSize: 11 }}>/{form.unit}</span>
                </div>
              </div>
              <div style={{ color: theme.textDim, fontSize: 11, fontFamily: BM_FONT.sans, textAlign: 'right' }}>
                Stock<br/>
                <span style={{ color: theme.text, fontFamily: BM_FONT.display, fontSize: 18 }}>{form.stock}</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Bottom cta */}
      <div style={{ padding: '12px 16px 14px', borderTop: `1px solid ${theme.line}`, background: theme.surface }}>
        <BMButton theme={theme} size="lg"
          onClick={() => step === 3 ? onPublished(form) : setStep(step + 1)}
          iconRight={step === 3 ? <Icons.check size={18} sw={2.5}/> : <Icons.arrowR size={16}/>}
          style={{ width: '100%' }}>
          {step === 3 ? 'Publicar ahora' : 'Continuar'}
        </BMButton>
        {step === 1 && (
          <div style={{ textAlign: 'center', color: theme.textMute, fontSize: 11, fontFamily: BM_FONT.sans, marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            <Icons.bolt size={11}/> Publica en menos de 10 segundos
          </div>
        )}
      </div>
    </div>
  );
};

const FieldLabel = ({ theme, children }) => (
  <div style={{ color: theme.textMute, fontSize: 11, fontFamily: BM_FONT.sans, fontWeight: 600, letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 6 }}>
    {children}
  </div>
);
const Field = ({ theme, value, onChange, placeholder }) => (
  <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
    style={{
      width: '100%', background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 14,
      padding: '12px 14px', color: theme.text, fontFamily: BM_FONT.sans, fontSize: 14, outline: 'none',
      marginBottom: 14, boxSizing: 'border-box',
    }}/>
);
const stepBtn = (theme) => ({
  width: 38, height: 38, borderRadius: 10,
  background: theme.surface3, border: `1px solid ${theme.line}`, color: theme.text,
  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
});

window.PublishScreen = PublishScreen;
