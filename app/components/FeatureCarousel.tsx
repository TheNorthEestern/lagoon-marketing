"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";

interface FeatureSlide {
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
}

const slides: FeatureSlide[] = [
  {
    headline: "Every moment worth clipping.\nSurfaced automatically.",
    description: "Drop in a podcast or stream recording and Lagoon scans every frame for conversational motion: hand gestures, lean-ins, reactions, on-camera action. Tune the sensitivity to match your content.",
    image: "/images/features/detection.png",
    imageAlt: "Lagoon Studio showing detected clip-worthy moments in a podcast timeline",
    width: 597,
    height: 144,
  },
  {
    headline: "Your whole recording\non a single timeline.",
    description: "Every detected moment, laid out so you can scan a three-hour episode in seconds. Click any segment to preview it. Sort by time, intensity, or duration.",
    image: "/images/features/timeline.png",
    imageAlt: "Lagoon Studio timeline visualization with color-coded intensity across a long recording",
    width: 1136,
    height: 199,
  },
  {
    headline: "Clip-ready MP4s,\nstraight out.",
    description: "Export one moment or fifty, with configurable padding for context. You get clean files, ready for your editor. Not half-finished social posts.",
    image: "/images/features/export.png",
    imageAlt: "Lagoon Studio export interface showing selected moments and MP4 export options",
    width: 976,
    height: 1073,
  },
  {
    headline: "100% local.\nOn your Mac. On Apple Silicon.",
    description: "Nothing uploads. No cloud queue. Analysis runs on Apple Silicon hardware decoding, so your unreleased episodes and NDA'd footage never leave your computer.",
    image: "/images/features/performance.png",
    imageAlt: "Lagoon Studio running locally on Apple Silicon with hardware-accelerated processing",
    width: 498,
    height: 154,
  },
  {
    headline: "Fits the workflow\nyou already have.",
    description: "Exports drop into Final Cut Pro, Premiere Pro, DaVinci Resolve, or any editor that opens MP4. Captions, reframing, and publishing happen where you already do them.",
    image: "/images/features/workflow.png",
    imageAlt: "Lagoon Studio exported clips ready for use in a video editor",
    width: 671,
    height: 257,
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
          Find your next clip. Without the scrub.
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
              <div className="max-w-lg">
                <p className="whitespace-pre-line text-xl font-medium leading-snug text-neutral-200 md:text-2xl">
                  {slide.headline}
                </p>
                {slide.description && (
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400 md:text-base">
                    {slide.description}
                  </p>
                )}
              </div>
              <div className="flex flex-1 items-center justify-center pt-8">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  width={slide.width}
                  height={slide.height}
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
