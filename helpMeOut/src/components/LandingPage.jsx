import Cards from "./Cards";
import Features from "./Features";
import { LandingPageText } from "./LandingPageText";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";

export default function LandingPage() {
  return (
    <>
      <div>
        <Login />
        <Navbar />
        <LandingPageText />
        <Features />
        <Cards />
        <Footer />
      </div>
    </>
  );
}
