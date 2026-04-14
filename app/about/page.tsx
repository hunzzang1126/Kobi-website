import type { Metadata } from "next";
import AboutPageContent from "@/components/pages/AboutPageContent";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "About — KOBI | Premium Korean BBQ Toronto",
  description: "The story behind KOBI — our philosophy, our craft, and our dedication to fire-forged Korean BBQ.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <ScrollProgress />
      <main>
        <AboutPageContent />
      </main>
      <Footer />
    </>
  );
}
