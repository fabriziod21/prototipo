// Minimal line icons — 1.6 stroke, rounded. No emoji.
const Icon = ({ d, size = 20, stroke = 'currentColor', fill = 'none', sw = 1.6, children, viewBox = '0 0 24 24', style }) => (
  <svg width={size} height={size} viewBox={viewBox} fill={fill} stroke={stroke} strokeWidth={sw}
    strokeLinecap="round" strokeLinejoin="round" style={style}>
    {d ? <path d={d} /> : children}
  </svg>
);

const Icons = {
  search: (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></Icon>,
  basket: (p) => <Icon {...p}><path d="M4 9h16l-1.6 9.2a2 2 0 0 1-2 1.8H7.6a2 2 0 0 1-2-1.8L4 9Z"/><path d="M9 9l2-5M15 9l-2-5"/><path d="M10 13v3M14 13v3"/></Icon>,
  map: (p) => <Icon {...p}><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/></Icon>,
  chef: (p) => <Icon {...p}><path d="M7 11a4 4 0 1 1 2-7.5A4 4 0 0 1 15 3.5 4 4 0 1 1 17 11v2H7v-2Z"/><path d="M7 13v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5"/></Icon>,
  leaf: (p) => <Icon {...p}><path d="M20 4c-9 0-15 5-15 13 0 2 1 3 3 3 8 0 13-6 13-14V4Z"/><path d="M5 20c4-6 8-9 14-12"/></Icon>,
  plus: (p) => <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>,
  camera: (p) => <Icon {...p}><path d="M3 8h4l2-3h6l2 3h4v11H3V8Z"/><circle cx="12" cy="13" r="4"/></Icon>,
  chat: (p) => <Icon {...p}><path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.6-4.6A8 8 0 1 1 21 12Z"/></Icon>,
  pin: (p) => <Icon {...p}><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Z"/><circle cx="12" cy="9.5" r="2.5"/></Icon>,
  star: (p) => <Icon {...p}><path d="M12 3.5l2.8 5.7 6.3.9-4.6 4.4 1.1 6.3L12 17.9l-5.6 2.9 1.1-6.3L3 10.1l6.3-.9L12 3.5Z"/></Icon>,
  starFill: (p) => <Icon {...p} fill="currentColor"><path d="M12 3.5l2.8 5.7 6.3.9-4.6 4.4 1.1 6.3L12 17.9l-5.6 2.9 1.1-6.3L3 10.1l6.3-.9L12 3.5Z"/></Icon>,
  arrowR: (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>,
  arrowL: (p) => <Icon {...p}><path d="M19 12H5M11 18l-6-6 6-6"/></Icon>,
  arrowUp: (p) => <Icon {...p}><path d="M12 19V5M6 11l6-6 6 6"/></Icon>,
  check: (p) => <Icon {...p}><path d="M5 12l4 4L19 6"/></Icon>,
  x: (p) => <Icon {...p}><path d="M6 6l12 12M18 6 6 18"/></Icon>,
  filter: (p) => <Icon {...p}><path d="M4 6h16M7 12h10M10 18h4"/></Icon>,
  clock: (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>,
  egg: (p) => <Icon {...p}><path d="M12 3c-4 0-7 6-7 11a7 7 0 0 0 14 0c0-5-3-11-7-11Z"/></Icon>,
  carrot: (p) => <Icon {...p}><path d="M14 4a3 3 0 0 1 6 0c0 2-2 3-4 3M13 10l7-3-8 13c-2 3-7 0-5-3l6-7Z"/><path d="M9 14l-2 2M11 17l-2 2"/></Icon>,
  chicken: (p) => <Icon {...p}><path d="M7 15a5 5 0 1 1 10 0v5H7v-5Z"/><path d="M12 10V6M10 6h4"/></Icon>,
  cheese: (p) => <Icon {...p}><path d="M3 12 14 4l7 3-2 13H5l-2-8Z"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="16" r="1"/></Icon>,
  grid: (p) => <Icon {...p}><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/></Icon>,
  heart: (p) => <Icon {...p}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/></Icon>,
  share: (p) => <Icon {...p}><path d="M12 4v12M7 9l5-5 5 5"/><path d="M5 14v5h14v-5"/></Icon>,
  phone: (p) => <Icon {...p}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z"/></Icon>,
  mic: (p) => <Icon {...p}><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></Icon>,
  send: (p) => <Icon {...p}><path d="M4 12 20 4l-6 16-3-7-7-1Z"/></Icon>,
  swap: (p) => <Icon {...p}><path d="M7 4v14M4 15l3 3 3-3M17 20V6M14 9l3-3 3 3"/></Icon>,
  user: (p) => <Icon {...p}><circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6"/></Icon>,
  dot: (p) => <Icon {...p}><circle cx="12" cy="12" r="3" fill="currentColor"/></Icon>,
  gps: (p) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></Icon>,
  bolt: (p) => <Icon {...p}><path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"/></Icon>,
  trendUp: (p) => <Icon {...p}><path d="M3 17 9 11l4 4 8-8"/><path d="M15 7h6v6"/></Icon>,
  package: (p) => <Icon {...p}><path d="M3 8 12 3l9 5v8l-9 5-9-5V8Z"/><path d="M3 8l9 5 9-5M12 13v9"/></Icon>,
  tag: (p) => <Icon {...p}><path d="M3 12V3h9l9 9-9 9-9-9Z"/><circle cx="8" cy="8" r="1.5"/></Icon>,
  trash: (p) => <Icon {...p}><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></Icon>,
  minus: (p) => <Icon {...p}><path d="M5 12h14"/></Icon>,
  sun: (p) => <Icon {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5 3.5 3.5M20.5 20.5 19 19M5 19l-1.5 1.5M20.5 3.5 19 5"/></Icon>,
  moon: (p) => <Icon {...p}><path d="M20 14A8 8 0 1 1 10 4a7 7 0 0 0 10 10Z"/></Icon>,
  truck: (p) => <Icon {...p}><path d="M3 7h11v8H3zM14 10h4l3 3v2h-7zM7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></Icon>,
};

window.Icons = Icons;
window.Icon = Icon;
