import Cards from "./Cards";
import Features from "./Features";
import Footer from "./Footer";
import { LandingPageText } from "./LandingPageText";
import Navbar from "./Navbar";

export default function LandingPage() {
  return (
    <>
      <div>
        <Navbar />
        <LandingPageText />
        <Features />
        <Cards />
        <Footer />
      </div>
    </>
  );
}
