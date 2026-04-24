// Line icons — minimal, 1.5 stroke, matches BioMarket quiet aesthetic
const Icon = ({ d, size = 20, stroke = 'currentColor', fill = 'none', sw = 1.7, children, vb = 24 }) => (
  <svg width={size} height={size} viewBox={`0 0 ${vb} ${vb}`} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {d && <path d={d} />}
    {children}
  </svg>
);

const IconSearch = (p) => <Icon {...p} vb={24}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></Icon>;
const IconBasket = (p) => <Icon {...p}><path d="M3 8h18l-2 11a2 2 0 0 1-2 1.7H7a2 2 0 0 1-2-1.7L3 8z"/><path d="M8 8l2-5M16 8l-2-5"/></Icon>;
const IconLocation = (p) => <Icon {...p}><path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></Icon>;
const IconNav = (p) => <Icon {...p}><path d="M3 11l18-8-8 18-2-8-8-2z"/></Icon>;
const IconChat = (p) => <Icon {...p}><path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.3A8 8 0 1 1 21 12z"/></Icon>;
const IconStar = ({ size = 14, fill = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}><path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.2L12 17.8 5.6 21.6l1.7-7.2L1.7 9.5l7.4-.6z"/></svg>
);
const IconLeaf = (p) => <Icon {...p}><path d="M5 21c0-9 7-16 16-16-1 9-7 16-16 16z"/><path d="M5 21c3-3 6-5 10-7"/></Icon>;
const IconEgg = (p) => <Icon {...p}><path d="M12 3c4 0 7 6 7 11a7 7 0 1 1-14 0c0-5 3-11 7-11z"/></Icon>;
const IconCarrot = (p) => <Icon {...p}><path d="M14 10l6-6M16 4h4v4"/><path d="M14 10c3 3 0 10-4 11s-10-7-9-10 6-3 9-1 4 0 4 0z"/></Icon>;
const IconMilk = (p) => <Icon {...p}><path d="M9 3h6v3l2 4v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V10l2-4V3z"/></Icon>;
const IconCheese = (p) => <Icon {...p}><path d="M3 12l8-7 10 7v8H3v-8z"/><circle cx="8" cy="16" r="0.8" fill="currentColor"/><circle cx="14" cy="15" r="0.8" fill="currentColor"/></Icon>;
const IconHome = (p) => <Icon {...p}><path d="M3 11l9-8 9 8v10H3V11z"/></Icon>;
const IconMap = (p) => <Icon {...p}><path d="M9 3L3 5v16l6-2 6 2 6-2V3l-6 2-6-2z"/><path d="M9 3v16M15 5v16"/></Icon>;
const IconUser = (p) => <Icon {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7"/></Icon>;
const IconPlus = (p) => <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>;
const IconArrowLeft = (p) => <Icon {...p}><path d="M15 5l-7 7 7 7M8 12h13"/></Icon>;
const IconArrowRight = (p) => <Icon {...p}><path d="M9 5l7 7-7 7M16 12H3"/></Icon>;
const IconCheck = (p) => <Icon {...p}><path d="M5 12l5 5L20 7"/></Icon>;
const IconClose = (p) => <Icon {...p}><path d="M6 6l12 12M18 6L6 18"/></Icon>;
const IconCamera = (p) => <Icon {...p}><path d="M4 8h3l2-3h6l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z"/><circle cx="12" cy="13" r="4"/></Icon>;
const IconClock = (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>;
const IconPhone = (p) => <Icon {...p}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></Icon>;
const IconFilter = (p) => <Icon {...p}><path d="M3 5h18l-7 9v6l-4-2v-4L3 5z"/></Icon>;
const IconSend = (p) => <Icon {...p}><path d="M4 12l17-9-5 19-4-8-8-2z"/></Icon>;
const IconShield = (p) => <Icon {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/></Icon>;
const IconBolt = (p) => <Icon {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></Icon>;
const IconSettings = (p) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></Icon>;

Object.assign(window, {
  IconSearch, IconBasket, IconLocation, IconNav, IconChat, IconStar, IconLeaf,
  IconEgg, IconCarrot, IconMilk, IconCheese, IconHome, IconMap, IconUser,
  IconPlus, IconArrowLeft, IconArrowRight, IconCheck, IconClose, IconCamera,
  IconClock, IconPhone, IconFilter, IconSend, IconShield, IconBolt, IconSettings,
});
