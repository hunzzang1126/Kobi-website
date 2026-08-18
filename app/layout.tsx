import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kobitoronto.ca"),
  title: "KOBI — Korean BBQ in Thornhill | Premium Charcoal BBQ Toronto",
  description:
    "Charcoal-fired Korean BBQ at Yonge & Steeles, Thornhill — Australian wagyu, stone-pot sotbap, and an experience built around fire, smoke, and soul.",
  keywords: [
    "Korean BBQ",
    "Korean BBQ Thornhill",
    "Korean BBQ Toronto",
    "Korean BBQ Yonge and Steeles",
    "Korean restaurant Thornhill",
    "premium BBQ",
    "KOBI",
    "wagyu",
    "charcoal grill",
    "sotbap",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "KOBI — Korean BBQ in Thornhill | Premium Charcoal BBQ Toronto",
    description:
      "Charcoal-fired Korean BBQ at Yonge & Steeles, Thornhill — Australian wagyu, stone-pot sotbap, and an experience built around fire, smoke, and soul.",
    type: "website",
    locale: "en_CA",
    siteName: "KOBI Toronto",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Restaurant structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://www.kobitoronto.ca/#restaurant",
  name: "KOBI",
  url: "https://www.kobitoronto.ca",
  description:
    "Premium Korean BBQ restaurant in Thornhill featuring charcoal-fired grilling and an experience built around fire, smoke, and soul.",
  servesCuisine: ["Korean BBQ", "Korean"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "100 Steeles Ave W",
    addressLocality: "Thornhill",
    addressRegion: "ON",
    postalCode: "L4J 2L1",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7982,
    longitude: -79.4207,
  },
  areaServed: ["Thornhill", "North York", "Markham", "Richmond Hill", "Toronto"],
  telephone: "+1-289-597-1548",
  priceRange: "$$-$$$",
  acceptsReservations: "True",
  hasMenu: "https://www.kobitoronto.ca/menu",
  sameAs: ["https://instagram.com/kobitornto"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:30",
      closes: "23:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* beforeInteractive = injected into <head> of initial HTML, runs before ANY JS */}
        <Script src="/scroll-top.js" strategy="beforeInteractive" />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
