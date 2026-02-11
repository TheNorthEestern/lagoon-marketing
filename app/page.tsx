import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import FeatureCarousel from "./components/FeatureCarousel";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <section id="features">
        <FeatureCarousel />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <div className="section-divider" />
      <section id="pricing">
        <Pricing />
      </section>
      <div className="flex justify-center pt-0 pb-20">
        <img
          src="/images/lagoon.jpg"
          alt="Lagoon Studio"
          className="app-icon h-40 w-40 md:h-56 md:w-56"
        />
      </div>
      <Footer />
    </>
  );
}
