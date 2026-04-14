import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ReservationSection from "@/components/ReservationSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <Navigation />
      <ScrollProgress />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ReservationSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
