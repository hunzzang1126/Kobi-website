import type { Metadata } from "next";
import LocationPageContent from "@/components/pages/LocationPageContent";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Location & Parking — KOBI Korean BBQ | Yonge & Steeles, Thornhill",
  description:
    "KOBI at 100 Steeles Ave W, Thornhill — free on-site parking, 3-minute walk from Yonge & Steeles transit. Open daily 11:30 AM–11 PM. Private dining for 8–20 guests.",
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
