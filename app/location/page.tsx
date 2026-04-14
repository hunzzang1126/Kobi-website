import type { Metadata } from "next";
import LocationPageContent from "@/components/pages/LocationPageContent";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Location — KOBI | Premium Korean BBQ Toronto",
  description: "Find KOBI — directions, hours, contact information, and private dining details.",
};

export default function LocationPage() {
  return (
    <>
      <Navigation />
      <ScrollProgress />
      <main>
        <LocationPageContent />
      </main>
      <Footer />
    </>
  );
}
