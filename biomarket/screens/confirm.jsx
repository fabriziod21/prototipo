// Confirmation / success screen after placing order or publishing

const ConfirmScreen = ({ theme, kind, onDone, data }) => {
  const isOrder = kind === 'order';
  return (
    <div style={{ flex: 1, background: theme.bg, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px 24px', textAlign: 'center', position: 'relative' }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', width: 300, height: 300, borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.emeraldGlow} 0%, transparent 70%)`,
          top: '20%', left: '50%', transform: 'translateX(-50%)',
        }}/>

        {/* Check mark circle */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            width: 104, height: 104, borderRadius: '50%',
            background: `linear-gradient(145deg, ${theme.emerald}, ${theme.emeraldDeep})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 20px 50px ${theme.emeraldGlow}`,
            marginBottom: 24,
          }}>
            <Icons.check size={52} sw={2.4} stroke="#fff"/>
          </div>
        </div>

        <h1 style={{
          margin: 0, color: theme.text, fontFamily: BM_FONT.display,
          fontSize: 32, fontWeight: 400, letterSpacing: -0.5, lineHeight: 1.1, zIndex: 1,
        }}>
          {isOrder ? 'Pedido confirmado' : 'Publicado al barrio'}
        </h1>
        <p style={{
          margin: '10px 0 24px', color: theme.textDim, fontFamily: BM_FONT.sans,
          fontSize: 14, lineHeight: 1.5, maxWidth: 300, zIndex: 1,
        }}>
          {isOrder
            ? 'Tu vecina te envió un Yape. La canasta estará lista en 15–25 min.'
            : `Tus vecinos en 2 km verán "${data?.title || 'tu producto'}" en su vitrina ahora mismo.`}
        </p>

        <div style={{
          background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 18,
          padding: 14, width: '100%', maxWidth: 320, zIndex: 1,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 42, height: 42, borderRadius: 12,
            background: isOrder ? theme.yape : theme.emeraldSoft,
            color: isOrder ? '#fff' : theme.emerald,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: BM_FONT.display, fontWeight: 600,
          }}>
            {isOrder ? 'Y' : <Icons.bolt size={18}/>}
          </div>
          <div style={{ flex: 1, textAlign: 'left' }}>
            <div style={{ color: theme.text, fontFamily: BM_FONT.sans, fontSize: 13, fontWeight: 600 }}>
              {isOrder ? 'Pago por Yape confirmado' : 'Ya estás en la vitrina'}
            </div>
            <div style={{ color: theme.textDim, fontSize: 11.5, fontFamily: BM_FONT.sans, marginTop: 1 }}>
              {isOrder ? 'Chacra de Doña Rosa te contactará' : '14 vecinos están viendo tu publicación'}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '12px 16px 14px' }}>
        <BMButton theme={theme} size="lg" onClick={onDone} style={{ width: '100%' }}>
          {isOrder ? 'Ver mi pedido' : 'Volver a la vitrina'}
        </BMButton>
      </div>
    </div>
  );
};

window.ConfirmScreen = ConfirmScreen;
