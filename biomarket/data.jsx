// Mock data for the BioMarket prototype.
// All distances are in meters (short) or km. Barrios de Lima.

const BM_PRODUCERS = [
  {
    id: 'p1',
    name: 'Chacra de Doña Rosa',
    tagline: 'Huevos frescos del día · gallinas de corral',
    barrio: 'Pachacámac · a 3 cuadras',
    distance: '280 m',
    rating: 4.9,
    reviews: 84,
    since: 'Vecina desde 2023',
    hero: 'rosa',      // visual token
    avatar: 'DR',
    verified: true,
    products: ['Huevos', 'Gallina', 'Cuy'],
    openNow: 'Abre hoy hasta 18:00',
  },
  {
    id: 'p2',
    name: 'Huerta Los Olivos',
    tagline: 'Verduras orgánicas · cosecha del martes',
    barrio: 'Lurín · a 6 cuadras',
    distance: '540 m',
    rating: 4.8,
    reviews: 121,
    since: 'Vecino desde 2022',
    hero: 'huerta',
    avatar: 'HO',
    verified: true,
    products: ['Verduras', 'Hierbas'],
    openNow: 'Cosecha hoy 14:00',
  },
  {
    id: 'p3',
    name: 'Lácteos del Valle',
    tagline: 'Quesos, yogurt y leche de vaca',
    barrio: 'Cieneguilla · a 1.2 km',
    distance: '1.2 km',
    rating: 4.7,
    reviews: 56,
    since: 'Vecino desde 2024',
    hero: 'lacteos',
    avatar: 'LV',
    verified: false,
    products: ['Lácteos'],
    openNow: 'Entregas mañana',
  },
  {
    id: 'p4',
    name: 'Granja El Olivo',
    tagline: 'Pollos y cuyes criados con maíz',
    barrio: 'Pachacámac · a 2 cuadras',
    distance: '180 m',
    rating: 4.8,
    reviews: 94,
    since: 'Vecina desde 2023',
    hero: 'olivo',
    avatar: 'EO',
    verified: true,
    products: ['Aves', 'Cuy'],
    openNow: 'Disponible hoy',
  },
];

const BM_PRODUCTS_HOY = [
  { id: 'e1', producerId: 'p1', name: 'Huevos de corral', unit: 'docena', price: 14, stock: 6, fresh: 'Puestos hoy', tag: 'Huevos', photo: 'eggs' },
  { id: 'v1', producerId: 'p2', name: 'Lechuga crespa', unit: 'atado', price: 3, stock: 12, fresh: 'Cosecha hoy 14:00', tag: 'Verduras', photo: 'lettuce' },
  { id: 'v2', producerId: 'p2', name: 'Culantro fresco', unit: 'manojo', price: 2, stock: 20, fresh: 'Cosecha hoy', tag: 'Hierbas', photo: 'cilantro' },
  { id: 'q1', producerId: 'p3', name: 'Queso fresco artesanal', unit: '½ kg', price: 18, stock: 4, fresh: 'Hecho ayer', tag: 'Lácteos', photo: 'cheese' },
  { id: 'c1', producerId: 'p4', name: 'Cuy entero pelado', unit: 'unidad', price: 35, stock: 3, fresh: 'Listo para el domingo', tag: 'Aves', photo: 'cuy' },
  { id: 'a1', producerId: 'p4', name: 'Pollo de corral', unit: 'unidad', price: 45, stock: 2, fresh: 'Beneficiado hoy', tag: 'Aves', photo: 'chicken' },
  { id: 'v3', producerId: 'p2', name: 'Tomate redondo', unit: 'kg', price: 6, stock: 8, fresh: 'Cosecha hoy', tag: 'Verduras', photo: 'tomato' },
  { id: 'e2', producerId: 'p1', name: 'Huevos de codorniz', unit: 'media docena', price: 8, stock: 5, fresh: 'Puestos hoy', tag: 'Huevos', photo: 'quail' },
];

const BM_CATEGORIES = [
  { id: 'todos', label: 'Todo', icon: 'grid' },
  { id: 'huevos', label: 'Huevos', icon: 'egg' },
  { id: 'verduras', label: 'Verduras', icon: 'carrot' },
  { id: 'aves', label: 'Aves y cuy', icon: 'chicken' },
  { id: 'lacteos', label: 'Lácteos', icon: 'cheese' },
  { id: 'hierbas', label: 'Hierbas', icon: 'leaf' },
];

// Chat seed — between "tú" and Doña Rosa
const BM_CHAT_SEED = [
  { id: 1, from: 'them', t: '09:12', text: 'Buenos días vecino 👋 sí tengo 2 docenas disponibles.' },
  { id: 2, from: 'me',   t: '09:13', text: '¿Puedo pasar a recogerlas en una hora?' },
  { id: 3, from: 'them', t: '09:14', text: 'Claro, la puerta verde — calle Los Eucaliptos 214.' },
];

window.BM_PRODUCERS = BM_PRODUCERS;
window.BM_PRODUCTS_HOY = BM_PRODUCTS_HOY;
window.BM_CATEGORIES = BM_CATEGORIES;
window.BM_CHAT_SEED = BM_CHAT_SEED;
