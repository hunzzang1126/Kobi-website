import type { Metadata } from "next";
import AboutPageContent from "@/components/pages/AboutPageContent";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "About — KOBI Korean BBQ Thornhill | Born from Fire",
  description:
    "The story behind KOBI — charcoal-fired Korean BBQ in Thornhill. Our philosophy, our craft, and our dedication to fire-forged Korean BBQ.",
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
