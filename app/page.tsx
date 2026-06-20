import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InstagramBubble from "./components/InstagramBubble";
import About from "./components/About";
import Galeria from "./components/Galeria";
import Locations from "./components/Locations";
import MapSection from "./components/MapSection";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InstagramBubble />
      <About />
      <Galeria />
      <Locations />
      <MapSection />
      <Reviews />
      <Footer />
    </>
  );
}
