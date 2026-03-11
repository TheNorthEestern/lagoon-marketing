"use client";

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const DOWNLOAD_URL =
  "https://github.com/TheNorthEestern/lagoon-releases/releases/latest/download/Lagoon-Studio.dmg";

const VIDEO_SOURCES = [
  "/videos/hero-demo.mp4",
  "/videos/hero-demo-2.mp4",
  "/videos/hero-demo-3.mp4",
  "/videos/hero-demo-4.mp4",
];

const INTRO_SEEN_KEY = "lagoon-intro-seen";

interface HeroProps {
  onIntroComplete?: () => void;
  onIntroStart?: () => void;
  replayCount?: number;
}

export default function Hero({ onIntroComplete, onIntroStart, replayCount = 0 }: HeroProps) {
  const [introPlaying, setIntroPlaying] = useState(true);
  const [introScale, setIntroScale] = useState(1);
  const [introCenterY, setIntroCenterY] = useState(0);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [measured, setMeasured] = useState(false);
  const [activeSlot, setActiveSlot] = useState<"a" | "b">("a");
  const [introSeen, setIntroSeen] = useState(false);
  const queueIndexRef = useRef(0);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const slotARef = useRef<HTMLVideoElement>(null);
  const slotBRef = useRef<HTMLVideoElement>(null);
  const introTimerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const lastReplayCountRef = useRef(replayCount);

  // Dev mode: expose localStorage clear helper
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      (window as unknown as Record<string, unknown>).__clearIntroStorage = () => {
        localStorage.removeItem(INTRO_SEEN_KEY);
        console.log("Intro storage cleared. Refresh to see the intro again.");
      };
    }
  }, []);

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

    const seen = localStorage.getItem(INTRO_SEEN_KEY) === "true";
    if (seen) {
      setIntroSeen(true);
      setIntroPlaying(false);
      onIntroComplete?.();
    }

    setMeasured(true);
  }, []);

  const finishIntro = useCallback(() => {
    if (introTimerRef.current) {
      clearTimeout(introTimerRef.current);
      introTimerRef.current = null;
    }
    setIntroPlaying(false);
    setIntroSeen(true);
    localStorage.setItem(INTRO_SEEN_KEY, "true");
    onIntroComplete?.();
  }, [onIntroComplete]);

  const resetToIntro = useCallback(() => {
    // Stop both slots
    const slotA = slotARef.current;
    const slotB = slotBRef.current;
    if (slotB) {
      slotB.pause();
      slotB.removeAttribute("src");
      slotB.load();
    }
    // Reset queue and active slot
    queueIndexRef.current = 0;
    setActiveSlot("a");
    // Reset slot A to first video and restart
    if (slotA) {
      slotA.src = VIDEO_SOURCES[0];
      slotA.load();
      slotA.currentTime = 0;
      slotA.play().catch(() => {});
    }
    // Start intro
    setIntroSeen(false);
    setIntroPlaying(true);
    onIntroStart?.();
    // Auto-finish after 4s
    introTimerRef.current = setTimeout(() => {
      finishIntro();
    }, 4000);
  }, [finishIntro, onIntroStart]);

  // Watch for replay requests from parent
  useEffect(() => {
    if (replayCount > lastReplayCountRef.current && measured) {
      lastReplayCountRef.current = replayCount;
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Small delay so scroll starts before animation
      setTimeout(() => resetToIntro(), 100);
    }
  }, [replayCount, measured, resetToIntro]);

  useEffect(() => {
    if (!measured) return;
    const video = slotARef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        setAutoplayBlocked(true);
        finishIntro();
      });
    }
  }, [measured, finishIntro]);

  useEffect(() => {
    if (!measured || autoplayBlocked || introSeen) return;

    introTimerRef.current = setTimeout(() => {
      finishIntro();
    }, 4000);
    return () => {
      if (introTimerRef.current) clearTimeout(introTimerRef.current);
    };
  }, [measured, autoplayBlocked, introSeen, finishIntro]);

  const getNextSlot = useCallback(
    (current: "a" | "b") => (current === "a" ? "b" : "a"),
    []
  );

  const getSlotRef = useCallback(
    (slot: "a" | "b") => (slot === "a" ? slotARef : slotBRef),
    []
  );

  // Crossfade logic: cycle through VIDEO_SOURCES using two alternating slots
  useEffect(() => {
    const slotA = slotARef.current;
    const slotB = slotBRef.current;
    if (!slotA || !slotB) return;

    let fadeTriggered = false;

    const isLastVideo = () =>
      queueIndexRef.current === VIDEO_SOURCES.length - 1;

    const advanceToNext = (currentSlot: "a" | "b") => {
      const nextIndex = (queueIndexRef.current + 1) % VIDEO_SOURCES.length;
      const nextSlot = getNextSlot(currentSlot);
      const nextVideo = getSlotRef(nextSlot).current!;
      nextVideo.src = VIDEO_SOURCES[nextIndex];
      nextVideo.load();
      nextVideo.play().catch(() => {});
      setActiveSlot(nextSlot);
    };

    const handleTimeUpdate = (currentSlot: "a" | "b") => {
      if (fadeTriggered || isLastVideo()) return;
      const current = getSlotRef(currentSlot).current!;
      const timeLeft = current.duration - current.currentTime;
      if (timeLeft <= 2) {
        fadeTriggered = true;
        advanceToNext(currentSlot);
      }
    };

    const handleEnded = (currentSlot: "a" | "b") => {
      // Last video plays fully, then crossfade on ended
      if (isLastVideo() && !fadeTriggered) {
        fadeTriggered = true;
        advanceToNext(currentSlot);
      }
      fadeTriggered = false;
      queueIndexRef.current = (queueIndexRef.current + 1) % VIDEO_SOURCES.length;
    };

    const onSlotATimeUpdate = () => handleTimeUpdate("a");
    const onSlotBTimeUpdate = () => handleTimeUpdate("b");
    const onSlotAEnded = () => handleEnded("a");
    const onSlotBEnded = () => handleEnded("b");

    slotA.addEventListener("timeupdate", onSlotATimeUpdate);
    slotA.addEventListener("ended", onSlotAEnded);
    slotB.addEventListener("timeupdate", onSlotBTimeUpdate);
    slotB.addEventListener("ended", onSlotBEnded);

    return () => {
      slotA.removeEventListener("timeupdate", onSlotATimeUpdate);
      slotA.removeEventListener("ended", onSlotAEnded);
      slotB.removeEventListener("timeupdate", onSlotBTimeUpdate);
      slotB.removeEventListener("ended", onSlotBEnded);
    };
  }, [measured, getNextSlot, getSlotRef]);

  const showIntro = introPlaying && !autoplayBlocked;

  // First render: plain div for measurement, invisible until useLayoutEffect fires
  if (!measured) {
    return (
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6">
        <div ref={videoContainerRef} className="w-full max-w-[1200px]">
          <div className="aspect-video w-full relative">
            <video
              ref={slotARef}
              className="absolute inset-0 h-full w-full object-contain"
              poster="/images/hero-poster.jpg"
              playsInline
              muted
            >
              <source src="/videos/hero-demo.mp4" type="video/mp4" />
            </video>
            <video
              ref={slotBRef}
              className="absolute inset-0 h-full w-full object-contain opacity-0"
              playsInline
              muted
            />
          </div>
        </div>
        <div className="mx-auto mt-2 max-w-4xl text-center sm:mt-3 opacity-0">
          <h1 className="font-satoshi text-5xl font-bold leading-[1.3] tracking-tight sm:text-6xl lg:text-7xl">
            Stop scrubbing.
            <br />
            Instantly find the action.
          </h1>
          <p className="font-satoshi mx-auto mt-8 max-w-2xl text-lg text-text-secondary sm:mt-10 sm:text-xl">
            Automatically detect interesting motion in your videos.
            Filter out the noise, visualize the activity, and export your clips in
            seconds. Native. Private. Optimized for Apple Silicon.
          </p>
          <a
            href={DOWNLOAD_URL}
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-hover sm:mt-10 sm:px-8 sm:py-3.5 sm:text-base"
          >
            Download for macOS
          </a>
          <p className="mt-3 text-xs text-text-secondary">
            Free 7-day trial &middot; macOS 14+ &middot; Apple Silicon optimized
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6">
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
        <div className="aspect-video w-full relative">
          <video
            ref={slotARef}
            className="absolute inset-0 h-full w-full object-contain transition-opacity duration-1000"
            style={{ opacity: activeSlot === "a" ? 1 : 0 }}
            poster="/images/hero-poster.jpg"
            playsInline
            muted
          >
            <source src="/videos/hero-demo.mp4" type="video/mp4" />
          </video>
          <video
            ref={slotBRef}
            className="absolute inset-0 h-full w-full object-contain transition-opacity duration-1000"
            style={{ opacity: activeSlot === "b" ? 1 : 0 }}
            playsInline
            muted
          />
        </div>
      </motion.div>

      {/* Skip intro — fixed to bottom of viewport so it's visible over the scaled video */}
      <AnimatePresence>
        {showIntro && (
          <motion.button
            onClick={finishIntro}
            className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black/60 px-5 py-2 text-sm text-neutral-300 backdrop-blur-sm transition-colors hover:text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            Skip intro
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        className="mx-auto mt-2 max-w-4xl text-center sm:mt-3"
        initial={autoplayBlocked ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={showIntro ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        transition={autoplayBlocked ? { duration: 0 } : { duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <h1 className="font-satoshi text-5xl font-bold leading-[1.3] tracking-tight sm:text-6xl lg:text-7xl">
          Stop scrubbing.
          <br />
          Instantly find the action.
        </h1>
        <p className="font-satoshi mx-auto mt-8 max-w-2xl text-lg text-text-secondary sm:mt-10 sm:text-xl">
          Automatically detect interesting motion in your videos.
          Filter out the noise, visualize the activity, and export your clips in
          seconds. Native. Private. Optimized for Apple Silicon.
        </p>
        <a
          href={DOWNLOAD_URL}
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-hover sm:mt-10 sm:px-8 sm:py-3.5 sm:text-base"
        >
          Download for macOS
        </a>
        <p className="mt-3 text-xs text-text-secondary">
          Free 7-day trial &middot; macOS 14+ &middot; Apple Silicon optimized
        </p>
      </motion.div>
    </section>
  );
}
