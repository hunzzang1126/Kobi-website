import type { Metadata } from "next";
import GalleryPageContent from "@/components/pages/GalleryPageContent";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Gallery — KOBI | Premium Korean BBQ Toronto",
  description: "Explore the atmosphere at KOBI — fire, food, and the space where it all happens.",
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
