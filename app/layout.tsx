import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
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
  title: "KOBI — Premium Korean BBQ | Toronto",
  description:
    "Charcoal-fired Korean BBQ in Toronto. USDA Prime cuts, house-made banchan, and an experience built around fire, smoke, and soul.",
  keywords: [
    "Korean BBQ",
    "Toronto restaurant",
    "premium BBQ",
    "KOBI",
    "wagyu",
    "charcoal grill",
  ],
  openGraph: {
    title: "KOBI — Premium Korean BBQ | Toronto",
    description:
      "Charcoal-fired Korean BBQ in Toronto. USDA Prime cuts, house-made banchan, and an experience built around fire, smoke, and soul.",
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
  name: "KOBI Toronto",
  description:
    "Premium Korean BBQ restaurant in Toronto featuring USDA Prime cuts, house-made banchan, and charcoal-fired grilling.",
  servesCuisine: "Korean BBQ",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Queen Street West",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M5H 2M9",
    addressCountry: "CA",
  },
  telephone: "+1-416-555-0142",
  priceRange: "$$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "17:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday", "Saturday"],
      opens: "17:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "17:00",
      closes: "21:00",
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
      <body>{children}</body>
    </html>
  );
}
