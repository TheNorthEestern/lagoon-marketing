"use client";

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";

const CHECKOUT_URL =
  "https://lagoonstudio.lemonsqueezy.com/checkout/buy/3cf7b5ae-1613-4142-a8cd-1555163c4eb8?embed=1";

export default function Hero({ onIntroComplete }: { onIntroComplete?: () => void }) {
  const [introPlaying, setIntroPlaying] = useState(true);
  const [introScale, setIntroScale] = useState(1);
  const [introCenterY, setIntroCenterY] = useState(0);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [measured, setMeasured] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const el = videoContainerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth * 0.8;
    const vh = window.innerHeight * 0.8;
    const scale = Math.max(1, Math.min(vw / rect.width, vh / rect.height));
    setIntroScale(scale);

    const videoCenterY = rect.top + rect.height / 2;
    const viewportCenterY = window.innerHeight / 2;
    setIntroCenterY(viewportCenterY - videoCenterY);

    setMeasured(true);
  }, []);

  useEffect(() => {
    if (!measured) return;
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        setAutoplayBlocked(true);
        setIntroPlaying(false);
        onIntroComplete?.();
      });
    }
  }, [measured, onIntroComplete]);

  useEffect(() => {
    if (!measured || autoplayBlocked) return;

    const timer = setTimeout(() => {
      setIntroPlaying(false);
      onIntroComplete?.();
    }, 4000);
    return () => clearTimeout(timer);
  }, [measured, onIntroComplete, autoplayBlocked]);

  const openCheckout = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    (window as any).LemonSqueezy?.Url?.Open?.(CHECKOUT_URL);
  }, []);

  const showIntro = introPlaying && !autoplayBlocked;

  // First render: plain div for measurement, invisible until useLayoutEffect fires
  if (!measured) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6">
        <div ref={videoContainerRef} className="w-full max-w-[1200px]">
          <div className="aspect-video w-full">
            <video
              ref={videoRef}
              className="h-full w-full object-contain"
              poster="/images/hero-poster.jpg"
              playsInline
              muted
              loop
            >
              <source src="/videos/hero-demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="mx-auto mt-2 max-w-4xl text-center sm:mt-3 opacity-0">
          <h1 className="font-satoshi text-5xl font-bold leading-[1.3] tracking-tight sm:text-6xl lg:text-7xl">
            Stop Scrubbing.
            <br />
            Instantly Find the Action.
          </h1>
          <p className="font-satoshi mx-auto mt-8 max-w-2xl text-lg text-text-secondary sm:mt-10 sm:text-xl">
            Automatically detect interesting motion in hours of static footage.
            Filter out the noise, visualize the activity, and export your clips in
            seconds. Native. Private. Optimized for Apple Silicon.
          </p>
          <a
            href={CHECKOUT_URL}
            onClick={openCheckout}
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-hover sm:mt-10 sm:px-8 sm:py-3.5 sm:text-base"
          >
            Download the Beta
          </a>
          <p className="mt-3 text-xs text-text-secondary">
            macOS 14+ &middot; Apple Silicon optimized
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6">
      {/* Hero video */}
      <motion.div
        className="w-full max-w-[1200px]"
        initial={autoplayBlocked ? { opacity: 1, scale: 1, y: 0, marginTop: 4 } : { opacity: 0, scale: introScale, y: introCenterY, marginTop: 0 }}
        animate={
          showIntro
            ? { opacity: 1, scale: introScale, y: introCenterY, marginTop: 0 }
            : { opacity: 1, scale: 1, y: 0, marginTop: 4 }
        }
        transition={autoplayBlocked ? { duration: 0 } : {
          opacity: { duration: 0.5, ease: "linear" },
          scale: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
          y: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
          marginTop: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
        }}
      >
        <div className="aspect-video w-full">
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            poster="/images/hero-poster.jpg"
            playsInline
            muted
            loop
          >
            <source src="/videos/hero-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      <motion.div
        className="mx-auto mt-2 max-w-4xl text-center sm:mt-3"
        initial={autoplayBlocked ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={showIntro ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        transition={autoplayBlocked ? { duration: 0 } : { duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <h1 className="font-satoshi text-5xl font-bold leading-[1.3] tracking-tight sm:text-6xl lg:text-7xl">
          Stop Scrubbing.
          <br />
          Instantly Find the Action.
        </h1>
        <p className="font-satoshi mx-auto mt-8 max-w-2xl text-lg text-text-secondary sm:mt-10 sm:text-xl">
          Automatically detect interesting motion in hours of static footage.
          Filter out the noise, visualize the activity, and export your clips in
          seconds. Native. Private. Optimized for Apple Silicon.
        </p>
        <a
          href={CHECKOUT_URL}
          onClick={openCheckout}
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-hover sm:mt-10 sm:px-8 sm:py-3.5 sm:text-base"
        >
          Download the Beta
        </a>
        <p className="mt-3 text-xs text-text-secondary">
          macOS 14+ &middot; Apple Silicon optimized
        </p>
      </motion.div>
    </section>
  );
}
