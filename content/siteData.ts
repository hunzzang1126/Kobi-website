// ============================================================
// Kobi Restaurant — All Site Content
// Single source of truth for all text, links, and menu data.
// Update content here — never scatter strings across components.
// ============================================================

export interface MenuItem {
  name: string;
  nameKo: string;
  description?: string;
  price: string;
  /** For items with multiple size/price options (e.g. draft beer) */
  variants?: { label: string; price: string }[];
}

export interface MenuCategory {
  id: string;
  label: string;
  labelKo: string;
  /** Optional note shown below category header */
  note?: string;
  noteKo?: string;
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
  subtitle: "THORNHILL",
  description:
    "Premium Korean BBQ crafted over open flame — an experience built around charcoal, craft, and soul.",
  address: "100 Steeles Ave W",
  city: "Thornhill, ON L4J 2L1",
  phone: "(289) 597-1548",
  phoneRaw: "tel:+12895971548",
  email: "hello@kobitoronto.com",
  hours: [
    { days: "Tuesday — Monday", time: "11:30 AM — 11 PM" },
  ],
  mapUrl: "https://maps.google.com/?q=100+Steeles+Ave+W+Thornhill+ON",
  established: "2024",
} as const;

// —— External Links ——
export const LINKS = {
  reservation: "tel:+12895971548",
  instagram: "https://instagram.com/kobitornto",
  googleMaps: "https://maps.google.com/?q=100+Steeles+Ave+W+Thornhill+ON+L4J+2L1",
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
    "No shortcuts. No compromises. Just fire, smoke, and soul.",
  ],
} as const;

// —— Menu Data ——
export const MENU_CATEGORIES: MenuCategory[] = [
  // ── 1. Side Menu ──
  {
    id: "sides",
    label: "Side Menu",
    labelKo: "사이드 메뉴",
    items: [
      { name: "Seafood Pancake with Chives", nameKo: "해물 부추전", price: "$16.99" },
      { name: "Tteokgalbi (Marinated Wagyu Patty)", nameKo: "떡갈비", price: "$13.99" },
      { name: "Tteokbokki (Korean Rice Cakes in Spicy Sauce)", nameKo: "떡볶이", price: "$13.99" },
      { name: "Deep-Fried Eel with Citrus Soy Sauce", nameKo: "장어 유린기", price: "$24.99" },
      { name: "Deep-Fried Octopus with Sweet and Sour Sauce", nameKo: "낙지탕수육", price: "$35.99" },
    ],
  },
  // ── 2. Soup with White Sotbap ──
  {
    id: "soup",
    label: "Soup",
    labelKo: "식사류",
    note: "Served with white Sotbap",
    noteKo: "흰 솥밥 포함",
    items: [
      { name: "Hangover Soup", nameKo: "우거지 해장국", price: "$21.99" },
      { name: "Beef Rib Soup", nameKo: "갈비탕", price: "$24.99" },
      { name: "Pork Kimchi Soup", nameKo: "돼지 김치찌개", price: "$20.99" },
      { name: "Spicy Tofu Soup with Seafood and Pork", nameKo: "순두부찌개", price: "$20.99" },
      { name: "Spicy Beef Intestine Soup", nameKo: "곱창 뚝배기", price: "$23.99" },
      { name: "Pork-bone Soup", nameKo: "감자탕", price: "$19.99" },
      { name: "Spicy Beef Soup", nameKo: "육개장", price: "$21.99" },
      { name: "Spicy Monkfish Stew", nameKo: "아구 매운탕", price: "$23.99" },
    ],
  },
  // ── 3. Hotpot ──
  {
    id: "hotpot",
    label: "Hotpot",
    labelKo: "전골류",
    note: "Served with white Sotbap",
    noteKo: "흰 솥밥 포함",
    items: [
      { name: "Beef Intestine Hotpot", nameKo: "곱창전골", price: "$41.99" },
      { name: "Pork Kimchi Hotpot", nameKo: "돼지고기 김치전골", price: "$39.99" },
      { name: "Galbi Hotpot", nameKo: "갈비탕 전골", price: "$61.99" },
      { name: "Pork-bone Hotpot", nameKo: "감자탕 전골", price: "$37.99" },
    ],
  },
  // ── 4. Special Sotbap ──
  {
    id: "sotbap",
    label: "Special Sotbap",
    labelKo: "스페셜 솥밥",
    note: "All sets include banchan, salad, and soup (soy-seasoned)",
    noteKo: "모든 세트에는 반찬, 샐러드, 국이 포함됩니다 (간장 양념)",
    items: [
      { name: "Steak Sotbap", nameKo: "스테이크 솥밥", price: "$23.99" },
      { name: "BBQ Eel Sotbap", nameKo: "장어 솥밥", price: "$23.99" },
      { name: "Abalone Sotbap", nameKo: "전복 솥밥", price: "$23.99" },
      { name: "Pollock Roe Sotbap", nameKo: "명란 솥밥", price: "$23.99" },
      { name: "Spicy Eggplant Sotbap", nameKo: "매콤 가지 솥밥", price: "$18.99" },
      { name: "Mushroom Sotbap", nameKo: "버섯 솥밥", price: "$21.99" },
      { name: "Extra Protein", nameKo: "단백질 추가", price: "+$10.00" },
    ],
  },
  // ── 5. Sotbap Combo ──
  {
    id: "combo",
    label: "Sotbap Combo",
    labelKo: "솥밥 콤보",
    note: "All combos include soup, japchae, and jeon",
    noteKo: "모든 콤보는 국, 잡채, 전이 포함됩니다",
    items: [
      { name: "BBQ Short Rib + Sotbap", nameKo: "LA 갈비 + 솥밥", price: "$30.00" },
      { name: "Spicy Stir-Fried Octopus + Sotbap", nameKo: "낙지볶음 + 솥밥", price: "$25.00" },
      { name: "Korean Bulgogi + Sotbap", nameKo: "뚝배기 불고기 + 솥밥", price: "$25.00" },
      { name: "Stir-Fried Spicy Pork + Sotbap", nameKo: "제육볶음 + 솥밥", price: "$23.00" },
      { name: "Braised Short Ribs + Sotbap", nameKo: "뚝배기 갈비찜 + 솥밥", price: "$27.00" },
    ],
  },
  // ── 6. BBQ ──
  {
    id: "bbq",
    label: "BBQ",
    labelKo: "구이류",
    note: "Minimum 2 servings · Includes rice, soup, and steamed egg",
    noteKo: "최소 2인분 이상 주문 · 밥, 국, 계란찜 제공",
    items: [
      { name: "Australian Wagyu Short Rib (200g)", nameKo: "와규 살치살", description: "30 days aged", price: "$39.99" },
      { name: "Australian Wagyu Rib Eye (220g)", nameKo: "와규 꽃등심", description: "42 days aged", price: "$50.99" },
      { name: "Wagyu Flat Iron", nameKo: "와규 부챗살", price: "$39.99" },
      { name: "Marinated Beef Rib (250g)", nameKo: "양념 갈비살", price: "$39.99" },
      { name: "Australian Wagyu Beef Rib Seasoned (200g)", nameKo: "와규 주물럭", price: "$39.99" },
      { name: "Thick Sliced Pork Belly (200g)", nameKo: "벌집 삼겹살", price: "$25.99" },
      { name: "Thin Sliced Pork Belly (200g)", nameKo: "대패 삼겹살", price: "$25.99" },
      { name: "Pork Neck (200g)", nameKo: "생목살", price: "$25.99" },
      { name: "Pork Jowl (200g)", nameKo: "항정살", price: "$27.99" },
      { name: "Beef Belly (200g)", nameKo: "우삼겹살", price: "$27.99" },
      { name: "Wagyu Platter (600g)", nameKo: "코비 소고기 한판", description: "Short Rib + Flat Iron + Rib Eye", price: "$124.99" },
      { name: "Pork Platter (500g)", nameKo: "코비 돼지 한판", description: "Neck + Belly + Jowl", price: "$52.99" },
    ],
  },
  // ── 7. Korean Eel Special ──
  {
    id: "eel",
    label: "Eel Special",
    labelKo: "장어 스페셜",
    items: [
      { name: "Salt Grilled Eel", nameKo: "소금 장어구이", description: "With side dish, egg, soup", price: "$55.00" },
      { name: "Marinated Grilled Eel", nameKo: "양념 장어구이", price: "$58.00" },
      { name: "Eel + Wagyu Short Rib + Marinated Rib", nameKo: "장어구이 + 소고기 콤보", price: "$110.00" },
      { name: "Eel + Australian Wagyu Rib Eye", nameKo: "장어구이 + 와규 꽃등심", price: "$100.00" },
    ],
  },
  // ── 8. Noodles & Dishes ──
  {
    id: "noodles",
    label: "Noodles & Dishes",
    labelKo: "면 및 요리류",
    items: [
      { name: "Spicy Braised Monkfish", nameKo: "아구찜", price: "$49.99" },
      { name: "Spicy Stir-Fried Octopus", nameKo: "낙지볶음", price: "$46.99" },
      { name: "Cold Noodle", nameKo: "물냉면", price: "$15.99" },
      { name: "Spicy Cold Noodle", nameKo: "비빔냉면", price: "$16.99" },
      { name: "Kobi Cold Noodle", nameKo: "코비냉면", price: "$17.99" },
      { name: "Kobi Cold Noodle Platter", nameKo: "코비 쟁반냉면", price: "$26.99" },
    ],
  },
  // ── 9. Spicy Chicken/Squid & Hotpot ──
  {
    id: "chicken-squid",
    label: "Chicken & Squid",
    labelKo: "닭갈비 · 샤브",
    items: [
      { name: "Spicy Chicken and Cheese", nameKo: "닭갈비", price: "$44.99" },
      { name: "Spicy Squid and Cheese", nameKo: "오징어", price: "$44.99" },
      { name: "Spicy Squid and Pork Belly with Cheese", nameKo: "오삼불고기", price: "$44.99" },
      { name: "Korean Hot Pot (2 People)", nameKo: "등촌 샤브샤브 2인", description: "Watercress, mushrooms, beef, noodles", price: "$45.99" },
      { name: "Korean Hot Pot (3 People)", nameKo: "등촌 샤브샤브 3인", description: "Watercress, mushrooms, beef, noodles", price: "$65.99" },
    ],
  },
  // ── 10. Drinks ──
  {
    id: "drinks",
    label: "Drinks",
    labelKo: "주류 · 음료",
    items: [
      { name: "Soju", nameKo: "소주", price: "$17.99 – $19.99" },
      { name: "Flavour Soju", nameKo: "과일소주", price: "$17.99" },
      { name: "Makgeolli", nameKo: "막걸리", price: "$16.99" },
      { name: "Domestic Beer", nameKo: "국산 맥주", price: "$5.99" },
      { name: "Imported Beer", nameKo: "수입 맥주", price: "$7.99 – $11.99" },
      { name: "Asahi Draft", nameKo: "아사히 생맥주", price: "Pint $6.99 / Pitcher $23.99" },
      { name: "Pop", nameKo: "탄산음료", price: "$2.50" },
    ],
  },
];

// —— Gallery ——
export const GALLERY_ITEMS = [
  { alt: "Charcoal grill with flames", aspectRatio: "3/4", src: "/images/grill-fire.jpg" },
  { alt: "Signature sotbap set from above", aspectRatio: "4/3", src: "/images/sotbap-steak.jpg" },
  { alt: "Abalone sotbap with banchan", aspectRatio: "1/1", src: "/images/sotbap-eel.jpg" },
  { alt: "Wagyu searing on binchotan", aspectRatio: "16/9", src: "/images/grill-fire.jpg" },
  { alt: "Premium sotbap presentation", aspectRatio: "3/4", src: "/images/sotbap-steak.jpg" },
  { alt: "Abalone sotbap set", aspectRatio: "4/5", src: "/images/sotbap-eel.jpg" },
] as const;
