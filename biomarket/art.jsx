// Real photos for BioMarket — curated Unsplash sources mapped to content kinds.
// Each entry uses ?auto=format&fit=crop&w=600&q=70 for consistent sizing.

const BM_PHOTOS = {
  // Producer heroes
  rosa:    'https://images.unsplash.com/photo-1569587112025-0d460e81a126?auto=format&fit=crop&w=700&q=70', // chickens in yard
  huerta:  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=700&q=70', // garden rows
  lacteos: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=700&q=70', // cow closeup
  olivo:   'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=700&q=70', // farmyard / free-range

  // Product tiles
  eggs:    'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?auto=format&fit=crop&w=500&q=70',
  lettuce: 'https://images.unsplash.com/photo-1622205313162-be1d5712a43f?auto=format&fit=crop&w=500&q=70',
  cilantro:'https://images.unsplash.com/photo-1600326145359-3a44909d1a39?auto=format&fit=crop&w=500&q=70',
  cheese:  'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=500&q=70',
  cuy:     'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=500&q=70',
  chicken: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=70',
  tomato:  'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=70',
  quail:   'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?auto=format&fit=crop&w=500&q=70',
};

// Replace HeroPhoto with a real-image version, with SVG fallback on error.
const HeroPhoto = ({ kind, theme, w = '100%', h = '100%', radius = 16 }) => {
  const src = BM_PHOTOS[kind];
  const [err, setErr] = React.useState(false);

  return (
    <div style={{
      width: w, height: h, borderRadius: radius, overflow: 'hidden',
      background: theme.surface3, position: 'relative',
    }}>
      {src && !err ? (
        <img src={src} alt=""
          onError={() => setErr(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
      ) : (
        <div style={{
          width: '100%', height: '100%',
          background: `linear-gradient(135deg, ${theme.emeraldDeep} 0%, ${theme.surface3} 100%)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: theme.textDim, fontFamily: BM_FONT?.sans || 'sans-serif', fontSize: 11,
          letterSpacing: 0.5, textTransform: 'uppercase',
        }}>{kind}</div>
      )}
    </div>
  );
};

window.HeroPhoto = HeroPhoto;
window.BM_PHOTOS = BM_PHOTOS;
