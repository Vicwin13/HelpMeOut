import Cards from "./Cards";
import Features from "./Features";
import { LandingPageText } from "./LandingPageText";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ReadyVideo from "./ReadyVideo";

export default function LandingPage() {
  return (
    <>
      <div>
        <ReadyVideo />
        <Navbar />
        <LandingPageText />
        <Features />
        <Cards />
        <Footer />
      </div>
    </>
  );
}
