import type { Metadata } from "next";
import MenuPageContent from "@/components/pages/MenuPageContent";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { MENU_CATEGORIES } from "@/content/siteData";

export const metadata: Metadata = {
  title: "Menu — KOBI Korean BBQ Thornhill | Wagyu, Sotbap & Charcoal Grill",
  description:
    "Full menu with prices at KOBI, Korean BBQ in Thornhill (Yonge & Steeles). Australian wagyu charcoal BBQ, stone-pot sotbap, Korean soups, hotpot, grilled eel, and soju.",
};

// Menu structured data — lets Google show menu details in search results
const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "KOBI Menu",
  inLanguage: "en-CA",
  hasMenuSection: MENU_CATEGORIES.map((category) => ({
    "@type": "MenuSection",
    name: category.label,
    ...(category.note ? { description: category.note } : {}),
    hasMenuItem: category.items.map((item) => {
      const priceMatch = item.price.match(/^\$([\d,]+\.?\d*)$/);
      return {
        "@type": "MenuItem",
        name: item.name,
        ...(item.description ? { description: item.description } : {}),
        ...(priceMatch
          ? {
              offers: {
                "@type": "Offer",
                price: priceMatch[1],
                priceCurrency: "CAD",
              },
            }
          : {}),
      };
    }),
  })),
};

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <Navigation />
      <ScrollProgress />
      <main>
        <MenuPageContent />
      </main>
      <Footer />
    </>
  );
}
