// ============================================================
// Kobi Restaurant — All Site Content
// Single source of truth for all text, links, and menu data.
// Update content here — never scatter strings across components.
// ============================================================

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export interface NavItem {
  label: string;
  href: string;
}

// —— Restaurant Info ——
export const RESTAURANT = {
  name: "KOBI",
  tagline: "Fire. Smoke. Soul.",
  subtitle: "TORONTO",
  description:
    "Premium Korean BBQ crafted over open flame. USDA Prime and above, house-made banchan, and an experience built around charcoal and craft.",
  address: "123 Queen Street West",
  city: "Toronto, ON M5H 2M9",
  phone: "+1 (416) 555-0142",
  phoneRaw: "tel:+14165550142",
  email: "hello@kobitornto.com",
  hours: [
    { days: "Monday — Wednesday", time: "5 PM — 10 PM" },
    { days: "Thursday — Saturday", time: "5 PM — 11 PM" },
    { days: "Sunday", time: "5 PM — 9 PM" },
  ],
  mapUrl: "https://maps.google.com/?q=123+Queen+Street+West+Toronto",
  established: "2024",
} as const;

// —— External Links ——
export const LINKS = {
  reservation: "#reserve",
  instagram: "https://instagram.com/kobitornto",
  googleMaps: "https://maps.google.com/?q=123+Queen+Street+West+Toronto",
} as const;

// —— Navigation ——
export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

// —— About Section ——
export const ABOUT = {
  heading: "The Art of Fire",
  paragraphs: [
    "Kobi is not a Korean BBQ restaurant. It is a study in flame — where prime cuts meet centuries-old grilling tradition, and every dish earns its place on the table.",
    "We source only USDA Prime and above. Our banchan is made in-house, daily. The charcoal is binchotan. The standards are non-negotiable.",
    "No shortcuts. No compromises. Just fire, smoke, and soul.",
  ],
} as const;

// —— Menu Data ——
export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    items: [
      {
        name: "Wagyu Tartare",
        description: "Hand-cut A5 wagyu, pine nut, sesame oil, egg yolk, rice cracker",
        price: "$32",
      },
      {
        name: "Tuna Sashimi",
        description: "Bluefin tuna, gochujang vinaigrette, perilla leaf",
        price: "$28",
      },
      {
        name: "Steamed Egg Soufflé",
        description: "Silken egg custard, anchovy broth, scallion",
        price: "$14",
      },
      {
        name: "Kimchi Pancake",
        description: "House-fermented kimchi, crisp batter, soy dipping sauce",
        price: "$18",
      },
      {
        name: "Japchae",
        description: "Sweet potato glass noodles, seasonal vegetables, sesame",
        price: "$16",
      },
    ],
  },
  {
    id: "bbq-cuts",
    label: "BBQ Cuts",
    items: [
      {
        name: "Prime Galbi",
        description: "USDA Prime bone-in short rib, house marinade, 48-hour cure",
        price: "$58",
      },
      {
        name: "Wagyu Chadolbaegi",
        description: "Paper-thin wagyu brisket, grilled to order",
        price: "$42",
      },
      {
        name: "Duroc Pork Belly",
        description: "Heritage pork, thick-cut, served with ssam wraps",
        price: "$34",
      },
      {
        name: "Prime Bulgogi",
        description: "USDA Prime ribeye, soy-pear marinade, sesame",
        price: "$38",
      },
      {
        name: "Dry-Aged Ribeye",
        description: "45-day dry-aged, whole cut, carved tableside",
        price: "$95",
      },
      {
        name: "A5 Wagyu Striploin",
        description: "Japanese A5 wagyu, 4oz portion, served with coarse salt",
        price: "$145",
      },
    ],
  },
  {
    id: "sides",
    label: "Sides & Banchan",
    items: [
      {
        name: "Banchan Selection",
        description: "Rotating selection of house-made seasonal banchan",
        price: "Complimentary",
      },
      {
        name: "Steamed Rice",
        description: "Korean short grain, stone pot, nurungji crust",
        price: "$6",
      },
      {
        name: "Doenjang Jjigae",
        description: "Fermented soybean stew, tofu, seasonal vegetables",
        price: "$16",
      },
      {
        name: "Ssam Set",
        description: "Perilla, red leaf lettuce, garlic, ssamjang",
        price: "$10",
      },
      {
        name: "Corn Cheese",
        description: "Sweet corn, mozzarella, butter, scallion",
        price: "$14",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      {
        name: "Soju Flight",
        description: "Selection of three premium sojus",
        price: "$22",
      },
      {
        name: "Makgeolli",
        description: "Unfiltered rice wine, house-selected",
        price: "$16",
      },
      {
        name: "Smoke & Ember",
        description: "Mezcal, yuzu, charcoal-infused honey, shiso",
        price: "$19",
      },
      {
        name: "Seoul Negroni",
        description: "Soju-washed Campari, sweet vermouth, gochugaru",
        price: "$18",
      },
      {
        name: "Wine Selection",
        description: "Curated list — ask your server for today's pairings",
        price: "Market",
      },
    ],
  },
];

// —— Gallery ——
export const GALLERY_ITEMS = [
  { alt: "Charcoal grill with flames", aspectRatio: "3/4" },
  { alt: "Wagyu searing on binchotan", aspectRatio: "4/3" },
  { alt: "Banchan spread from above", aspectRatio: "1/1" },
  { alt: "Interior — warm ambient lighting", aspectRatio: "16/9" },
  { alt: "Smoke rising from the grill", aspectRatio: "3/4" },
  { alt: "Cocktail with fire garnish", aspectRatio: "4/5" },
] as const;
