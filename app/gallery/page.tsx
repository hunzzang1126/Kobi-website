import type { Metadata } from "next";
import GalleryPageContent from "@/components/pages/GalleryPageContent";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Gallery — KOBI Korean BBQ Thornhill | Fire & Atmosphere",
  description:
    "Inside KOBI — charcoal grills, wagyu on open flame, stone-pot sotbap, and the room where it all happens. Korean BBQ in Thornhill, Toronto.",
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <ScrollProgress />
      <main>
        <GalleryPageContent />
      </main>
      <Footer />
    </>
  );
}
