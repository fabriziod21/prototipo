// BioMarket theme tokens — dark emerald + light variant
const BM_THEMES = {
  dark: {
    name: 'dark',
    // surfaces
    bg: '#071613',          // outer
    surface: '#0d2520',     // app surface
    surface2: '#133029',    // raised card
    surface3: '#1a3d34',    // chip/input
    line: 'rgba(255,255,255,0.06)',
    lineStrong: 'rgba(255,255,255,0.12)',

    // text
    text: '#eaf5f1',
    textDim: '#9fb6ae',
    textMute: '#6b847c',

    // brand
    emerald: '#16b981',
    emeraldDeep: '#059669',
    emeraldGlow: 'rgba(22,185,129,0.18)',
    emeraldSoft: 'rgba(22,185,129,0.10)',

    // accents
    gold: '#d9b26b',
    terracotta: '#d97757',
    yape: '#7b3fe4',
    plin: '#06b6d4',
    danger: '#ef6a5a',

    // shadows / gradients
    heroGrad: 'linear-gradient(180deg, #0f2e27 0%, #071613 100%)',
    cardGrad: 'linear-gradient(180deg, rgba(22,185,129,0.06) 0%, rgba(22,185,129,0) 60%)',

    // status bar content
    statusFg: '#eaf5f1',
  },
  light: {
    name: 'light',
    bg: '#f3efe7',
    surface: '#fbf8f1',
    surface2: '#ffffff',
    surface3: '#f0ebdf',
    line: 'rgba(10,40,30,0.08)',
    lineStrong: 'rgba(10,40,30,0.16)',

    text: '#0c1f18',
    textDim: '#4a6158',
    textMute: '#7a8e85',

    emerald: '#0f8f66',
    emeraldDeep: '#066d4d',
    emeraldGlow: 'rgba(15,143,102,0.14)',
    emeraldSoft: 'rgba(15,143,102,0.08)',

    gold: '#a37c2c',
    terracotta: '#b85a3e',
    yape: '#7b3fe4',
    plin: '#0891b2',
    danger: '#c14b3a',

    heroGrad: 'linear-gradient(180deg, #e7e0cf 0%, #f3efe7 100%)',
    cardGrad: 'linear-gradient(180deg, rgba(15,143,102,0.05) 0%, rgba(15,143,102,0) 60%)',

    statusFg: '#0c1f18',
  },
};

// Fonts
const BM_FONT = {
  display: "'Instrument Serif', 'Times New Roman', serif",
  sans: "'Geist', 'Geist Sans', ui-sans-serif, system-ui, -apple-system, sans-serif",
  mono: "'Geist Mono', ui-monospace, monospace",
};

window.BM_THEMES = BM_THEMES;
window.BM_FONT = BM_FONT;
