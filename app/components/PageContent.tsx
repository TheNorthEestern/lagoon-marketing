"use client";

import { useState, useEffect, useLayoutEffect, useCallback, useRef } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import FeatureCarousel from "./FeatureCarousel";
import UseCases from "./UseCases";
import WhyLagoon from "./WhyLagoon";
import FAQ from "./FAQ";
import Pricing from "./Pricing";
import Footer from "./Footer";

const DOWNLOAD_URL =
  "https://github.com/TheNorthEestern/lagoon-releases/releases/latest/download/Lagoon-Studio.dmg";

const INTRO_SEEN_KEY = "lagoon-intro-seen";

export default function PageContent() {
  const [introComplete, setIntroComplete] = useState(false);
  const [replayCount, setReplayCount] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Before first paint: hide nav and content if intro hasn't been seen.
  // Static HTML has no inline styles (visible to crawlers).
  // JS hides synchronously before browser paints via useLayoutEffect.
  useLayoutEffect(() => {
    const seen = localStorage.getItem(INTRO_SEEN_KEY) === "true";
    if (!seen) {
      if (navRef.current) {
        navRef.current.style.opacity = "0";
        navRef.current.style.pointerEvents = "none";
      }
      if (contentRef.current) {
        contentRef.current.style.opacity = "0";
      }
    } else {
      setIntroComplete(true);
    }
  }, []);

  // Fade in when intro completes
  useEffect(() => {
    if (introComplete) {
      if (navRef.current) {
        navRef.current.style.opacity = "1";
        navRef.current.style.pointerEvents = "auto";
      }
      if (contentRef.current) {
        contentRef.current.style.opacity = "1";
      }
    }
  }, [introComplete]);

  // Also hide when intro replays
  useEffect(() => {
    if (!introComplete) {
      if (navRef.current) {
        navRef.current.style.opacity = "0";
        navRef.current.style.pointerEvents = "none";
      }
      if (contentRef.current) {
        contentRef.current.style.opacity = "0";
      }
    }
  }, [introComplete]);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  const handleIntroStart = useCallback(() => {
    setIntroComplete(false);
  }, []);

  const handleReplayIntro = useCallback(() => {
    setReplayCount((c) => c + 1);
  }, []);

  return (
    <>
      <div
        ref={navRef}
        className="transition-opacity duration-800 ease-out"
      >
        <Navigation onReplayIntro={handleReplayIntro} />
      </div>

      <Hero
        onIntroComplete={handleIntroComplete}
        onIntroStart={handleIntroStart}
        replayCount={replayCount}
      />

      <div
        ref={contentRef}
        className="transition-opacity duration-800 ease-out"
        style={{ transitionDelay: "0.2s" }}
      >
        <section id="features">
          <FeatureCarousel />
        </section>
        {/* Social proof slot — drop in testimonials / install counts / sample clip gallery here later */}
        <section id="use-cases">
          <UseCases />
        </section>
        <section id="why-lagoon">
          <WhyLagoon />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="download" className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Try it on your next recording.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-text-secondary">
              Download Lagoon Studio for free. Full features for 7 days. No
              credit card, no upload cap. Upgrade from within the app whenever
              you&rsquo;re ready.
            </p>
            <a
              href={DOWNLOAD_URL}
              className="mt-10 inline-block rounded-full bg-accent px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-accent-hover"
            >
              Download for macOS
            </a>
            <p className="mt-4 text-sm text-text-secondary">
              Requires macOS 14 or later. Built for Apple Silicon.
            </p>
          </div>
        </section>
        <div className="flex justify-center pt-0 pb-20">
          <img
            src="/images/lagoon.jpg"
            alt="Lagoon Studio"
            width={224}
            height={224}
            loading="lazy"
            className="app-icon h-40 w-40 md:h-56 md:w-56"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
