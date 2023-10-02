import Cards from "./Cards";
import Features from "./Features";
import { LandingPageText } from "./LandingPageText";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
