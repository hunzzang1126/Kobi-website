import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ReservationSection from "@/components/ReservationSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import LanguageSplash from "@/components/LanguageSplash";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <LanguageSplash />
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
