"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";

interface FeatureSlide {
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
}

const slides: FeatureSlide[] = [
  {
    headline: "Automatic motion detection that finds\nevery moment worth keeping.",
    description: "",
    image: "/images/features/detection.png",
    imageAlt: "Motion detection interface",
  },
  {
    headline: "A visual timeline that shows you\nexactly where the action is.",
    description: "",
    image: "/images/features/timeline.png",
    imageAlt: "Timeline visualization",
  },
  {
    headline: "Export individual clips or full\ncompilations in seconds.",
    description: "",
    image: "/images/features/export.png",
    imageAlt: "Export interface",
  },
  {
    headline: "100% local. Hardware-accelerated.\nOptimized for Apple Silicon from the ground up.",
    description: "",
    image: "/images/features/performance.png",
    imageAlt: "Local processing on Apple Silicon",
  },
  {
    headline: "From rough cuts to highlight reels.\nFits right into your editing workflow.",
    description: "",
    image: "/images/features/workflow.png",
    imageAlt: "Video editing workflow",
  },
];

export default function FeatureCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [autoPlayResetKey, setAutoPlayResetKey] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval>>(null);

  // Start autoplay only when section is in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLDivElement>("[data-slide]");
    if (cards[index]) {
      const card = cards[index];
      const scrollLeft = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, []);

  // Track active slide via scroll position
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.querySelectorAll<HTMLDivElement>("[data-slide]");
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const dist = Math.abs(containerCenter - cardCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const resetAutoPlay = useCallback(() => {
    setAutoPlayResetKey((k) => k + 1);
  }, []);

  // Auto-play with reset support, only when in view
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return;
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % slides.length;
        scrollToIndex(next);
        return next;
      });
    }, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, isInView, scrollToIndex, autoPlayResetKey]);

  // Reset timer on manual scroll/touch
  const handleUserScroll = useCallback(() => {
    if (isAutoPlaying) resetAutoPlay();
  }, [isAutoPlaying, resetAutoPlay]);

  return (
    <section ref={sectionRef} className="w-full py-20">
      <div className="mx-auto max-w-7xl px-4 pb-12 text-center">
        <h2 className="font-satoshi text-3xl font-bold text-neutral-200 md:text-6xl">
          Let Lagoon do the scrubbing.
        </h2>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onTouchStart={handleUserScroll}
        onMouseDown={handleUserScroll}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[calc((100vw-min(85vw,1000px))/2)] pb-4 [scrollbar-width:none]"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            data-slide
            className="w-[85vw] max-w-[1000px] shrink-0 snap-center"
          >
            <div className="flex h-[500px] flex-col justify-between overflow-hidden rounded-2xl bg-neutral-900 p-8 md:h-[600px] md:p-12">
              <p className="max-w-lg whitespace-pre-line text-xl font-medium leading-snug text-neutral-200 md:text-2xl">
                {slide.headline}
              </p>
              <div className="flex flex-1 items-center justify-center pt-8">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="max-h-[340px] w-auto max-w-full rounded-lg object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)] md:max-h-[420px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots + autoplay */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { scrollToIndex(i); resetAutoPlay(); }}
              className="group relative flex h-6 items-center justify-center"
              aria-label={`Go to slide ${i + 1}`}
            >
              <motion.div
                className="rounded-full bg-neutral-500"
                animate={{
                  width: activeIndex === i ? 24 : 8,
                  opacity: activeIndex === i ? 1 : 0.4,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ height: 8 }}
              />
            </button>
          ))}
        </div>
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-colors hover:border-neutral-500 hover:text-white"
          aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isAutoPlaying ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <rect x="1" y="1" width="3.5" height="10" rx="1" />
              <rect x="7.5" y="1" width="3.5" height="10" rx="1" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2.5 1.5 L10.5 6 L2.5 10.5Z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
