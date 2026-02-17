"use client";

import { useState, useCallback } from "react";
import { motion } from "motion/react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import FeatureCarousel from "./FeatureCarousel";
import FAQ from "./FAQ";
import Pricing from "./Pricing";
import Footer from "./Footer";

const CHECKOUT_URL =
  "https://lagoonstudio.lemonsqueezy.com/checkout/buy/3cf7b5ae-1613-4142-a8cd-1555163c4eb8?embed=1";

export default function PageContent() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  const openCheckout = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    (window as any).LemonSqueezy?.Url?.Open?.(CHECKOUT_URL);
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
        {/* <section id="pricing">
          <Pricing />
        </section> */}
        <section id="download" className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Try the Public Beta
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-text-secondary">
              Lagoon Studio is in public beta. Download it free, take it for a
              spin, and help us shape the final release.
            </p>
            <a
              href={CHECKOUT_URL}
              onClick={openCheckout}
              className="mt-10 inline-block rounded-full bg-accent px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-accent-hover"
            >
              Download for macOS
            </a>
            <p className="mt-4 text-sm text-text-secondary">
              Requires macOS 14 or later. Optimized for Apple Silicon.
            </p>
          </div>
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
