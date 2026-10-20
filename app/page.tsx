import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Galeria from "./components/Galeria";
import Locations from "./components/Locations";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Galeria />
        <Locations />
        <Reviews />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
