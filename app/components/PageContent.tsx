"use client";

import { useState, useCallback } from "react";
import { motion } from "motion/react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import FeatureCarousel from "./FeatureCarousel";
import FAQ from "./FAQ";
import Pricing from "./Pricing";
import Footer from "./Footer";

export default function PageContent() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navigation />
      </motion.div>

      <Hero onIntroComplete={handleIntroComplete} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <section id="features">
          <FeatureCarousel />
        </section>
        {/* <section id="how-it-works">
          <HowItWorks />
        </section> */}
        <section id="faq">
          <FAQ />
        </section>
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
      </motion.div>
    </>
  );
}
