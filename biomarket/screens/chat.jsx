// Chat en tiempo real con productor

const ChatScreen = ({ theme, producerId, onBack, onCheckout }) => {
  const p = BM_PRODUCERS.find(x => x.id === producerId) || BM_PRODUCERS[0];
  const [msgs, setMsgs] = React.useState(BM_CHAT_SEED);
  const [draft, setDraft] = React.useState('');
  const scroller = React.useRef(null);

  React.useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [msgs]);

  const send = () => {
    if (!draft.trim()) return;
    const text = draft;
    setMsgs(m => [...m, { id: Date.now(), from: 'me', t: 'ahora', text }]);
    setDraft('');
    setTimeout(() => {
      setMsgs(m => [...m, { id: Date.now()+1, from: 'them', t: 'ahora', text: 'Perfecto, te espero 🙌' }]);
    }, 1100);
  };

  return (
    <div style={{ flex: 1, background: theme.bg, display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{
        padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10,
        background: theme.surface, borderBottom: `1px solid ${theme.line}`,
      }}>
        <button onClick={onBack} style={{
          background: 'transparent', border: 'none', color: theme.text, cursor: 'pointer', padding: 4,
        }}><Icons.arrowL size={22}/></button>
        <div style={{
          width: 40, height: 40, borderRadius: 12,
          background: `linear-gradient(145deg, ${theme.emerald}, ${theme.emeraldDeep})`,
          color: '#fff', fontFamily: BM_FONT.display, fontSize: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{p.avatar}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: theme.text, fontFamily: BM_FONT.sans, fontSize: 15, fontWeight: 600, lineHeight: 1.2 }}>
            {p.name}
          </div>
          <div style={{ color: theme.emerald, fontSize: 11, fontFamily: BM_FONT.sans, marginTop: 1, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: theme.emerald, boxShadow: `0 0 6px ${theme.emerald}` }}/>
            En línea · {p.distance}
          </div>
        </div>
        <button style={{ background: 'transparent', border: 'none', color: theme.textDim, cursor: 'pointer' }}>
          <Icons.phone size={18}/>
        </button>
      </div>

      {/* Context banner — item being discussed */}
      <div style={{
        margin: '12px 14px 0', padding: 10, display: 'flex', alignItems: 'center', gap: 10,
        background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 14,
      }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, overflow: 'hidden' }}>
          <HeroPhoto kind="eggs" theme={theme} radius={0}/>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: theme.text, fontFamily: BM_FONT.sans, fontSize: 13, fontWeight: 600 }}>
            Huevos de corral · docena
          </div>
          <div style={{ color: theme.textDim, fontSize: 11, fontFamily: BM_FONT.sans }}>
            S/ 14 · hablando sobre este producto
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scroller} style={{ flex: 1, overflowY: 'auto', padding: '14px 14px 8px' }}>
        <div style={{
          textAlign: 'center', color: theme.textMute, fontSize: 10.5, fontFamily: BM_FONT.sans,
          letterSpacing: 0.6, textTransform: 'uppercase', margin: '4px 0 14px',
        }}>
          Hoy · Jueves
        </div>
        {msgs.map(m => (
          <div key={m.id} style={{
            display: 'flex', justifyContent: m.from === 'me' ? 'flex-end' : 'flex-start', marginBottom: 8,
          }}>
            <div style={{
              maxWidth: '78%', padding: '9px 13px',
              background: m.from === 'me'
                ? `linear-gradient(145deg, ${theme.emerald}, ${theme.emeraldDeep})`
                : theme.surface,
              color: m.from === 'me' ? '#fff' : theme.text,
              border: m.from === 'me' ? 'none' : `1px solid ${theme.line}`,
              borderRadius: 16,
              borderBottomRightRadius: m.from === 'me' ? 4 : 16,
              borderBottomLeftRadius: m.from === 'me' ? 16 : 4,
              fontFamily: BM_FONT.sans, fontSize: 13.5, lineHeight: 1.45,
            }}>
              {m.text}
              <div style={{
                fontSize: 9.5, fontFamily: BM_FONT.sans, marginTop: 3,
                color: m.from === 'me' ? 'rgba(255,255,255,0.7)' : theme.textMute,
                textAlign: 'right',
              }}>{m.t}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div style={{ padding: '4px 14px 8px', display: 'flex', gap: 6, overflowX: 'auto' }}>
        {['¿A qué hora paso?', 'Yape/Plin', '¿Dirección?', 'Voy en camino'].map(q => (
          <button key={q} onClick={() => setDraft(q)} style={{
            background: theme.surface, border: `1px solid ${theme.line}`, color: theme.textDim,
            padding: '6px 12px', borderRadius: 100, cursor: 'pointer',
            fontFamily: BM_FONT.sans, fontSize: 12, whiteSpace: 'nowrap', flexShrink: 0,
          }}>{q}</button>
        ))}
      </div>

      {/* Composer */}
      <div style={{
        padding: '10px 14px 12px', borderTop: `1px solid ${theme.line}`, background: theme.surface,
        display: 'flex', gap: 8, alignItems: 'center',
      }}>
        <BMButton theme={theme} variant="soft" size="sm" onClick={onCheckout}
          icon={<Icons.basket size={14}/>} style={{ flexShrink: 0 }}>
          Cerrar trato
        </BMButton>
        <input value={draft} onChange={e => setDraft(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Escribe un mensaje…"
          style={{
            flex: 1, background: theme.bg, border: `1px solid ${theme.line}`,
            borderRadius: 100, padding: '10px 14px',
            color: theme.text, fontFamily: BM_FONT.sans, fontSize: 13, outline: 'none',
          }}/>
        <button onClick={send} style={{
          background: `linear-gradient(145deg, ${theme.emerald}, ${theme.emeraldDeep})`,
          color: '#fff', border: 'none', width: 40, height: 40, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}><Icons.send size={16}/></button>
      </div>
    </div>
  );
};

window.ChatScreen = ChatScreen;
