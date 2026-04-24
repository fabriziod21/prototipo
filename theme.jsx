// BioMarket — Design tokens (dark + light)
// Emerald green brand, dark-first, inspired by the reference

const BIO = {
  dark: {
    bg: '#0a1f1a',
    bgElev: '#0f2a23',
    surface: 'rgba(255,255,255,0.04)',
    surfaceStrong: 'rgba(255,255,255,0.08)',
    border: 'rgba(255,255,255,0.08)',
    borderStrong: 'rgba(255,255,255,0.14)',
    text: '#f1f7f4',
    textMuted: 'rgba(241,247,244,0.62)',
    textDim: 'rgba(241,247,244,0.42)',
    brand: '#10b981',      // emerald-500
    brandBright: '#34d399', // emerald-400
    brandDeep: '#047857',   // emerald-700
    brandSoft: 'rgba(16,185,129,0.14)',
    accent: '#fbbf24',      // yellow for ratings/highlights
    danger: '#f87171',
    yape: '#7b2cbf',
    plin: '#00c2d1',
    scrim: 'rgba(0,0,0,0.5)',
  },
  light: {
    bg: '#f3f9f5',
    bgElev: '#ffffff',
    surface: '#ffffff',
    surfaceStrong: '#ecf5ef',
    border: 'rgba(4,47,38,0.08)',
    borderStrong: 'rgba(4,47,38,0.16)',
    text: '#0a1f1a',
    textMuted: 'rgba(10,31,26,0.64)',
    textDim: 'rgba(10,31,26,0.44)',
    brand: '#047857',
    brandBright: '#10b981',
    brandDeep: '#064e3b',
    brandSoft: 'rgba(16,185,129,0.12)',
    accent: '#d97706',
    danger: '#dc2626',
    yape: '#7b2cbf',
    plin: '#00c2d1',
    scrim: 'rgba(10,31,26,0.4)',
  }
};

const FONT_STACK = '"Inter", "SF Pro Text", system-ui, -apple-system, sans-serif';
const FONT_DISPLAY = '"Inter", "SF Pro Display", system-ui, sans-serif';

function useTheme(mode) {
  return BIO[mode] || BIO.dark;
}

Object.assign(window, { BIO, FONT_STACK, FONT_DISPLAY, useTheme });
