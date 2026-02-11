"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

function FeatureContent({
  headline,
  description,
  bullets,
}: {
  headline: string;
  description: string;
  bullets: string[];
}) {
  return (
    <>
      <div className="mb-4 rounded-3xl bg-neutral-900 p-8 md:p-14">
        <p className="mx-auto max-w-3xl font-sans text-base text-neutral-400 md:text-2xl">
          <span className="font-bold text-neutral-200">{headline}</span>{" "}
          {description}
        </p>
        <ul className="mx-auto mt-6 max-w-3xl space-y-3">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-3 text-sm text-neutral-400 md:text-lg"
            >
              <svg
                className="mt-1 h-5 w-5 shrink-0 text-[#0ea5e9]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl bg-neutral-900 p-8 md:p-14">
        <div className="mx-auto flex aspect-video max-w-3xl items-center justify-center rounded-2xl bg-gradient-to-br from-[#0ea5e9]/5 to-[#0ea5e9]/15">
          <p className="text-sm text-neutral-500">Screenshot coming soon</p>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    category: "Core Feature",
    title: "Automatic Motion Detection",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop",
    content: (
      <FeatureContent
        headline="Stop hunting for the good moments."
        description="Lagoon's AI-powered motion detection scans your entire video and pinpoints every moment of interesting activity automatically. What used to take hours now takes minutes."
        bullets={[
          "Analyzes pixel changes between frames to find motion",
          "Toggle between Fast, Balanced, and Accurate modes",
          "Fine-tune the detection threshold to your needs",
          "Process videos up to 6+ hours long",
        ]}
      />
    ),
  },
  {
    category: "Visualization",
    title: "See Where the Action Happens",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    content: (
      <FeatureContent
        headline="A visual timeline that makes sense."
        description="Every detected segment is highlighted on a clear, intuitive timeline. Instantly see which parts of your footage contain activity and which are dead time."
        bullets={[
          "Color-coded segments on the timeline",
          "Scrub through detected moments instantly",
          "Preview clips before exporting",
          "No more guessing where the action is",
        ]}
      />
    ),
  },
  {
    category: "Export",
    title: "Export Clips in Seconds",
    src: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2940&auto=format&fit=crop",
    content: (
      <FeatureContent
        headline="From detection to delivery, fast."
        description="Export individual clips or compile your best moments into a single highlight video. Add custom transitions and get your content out the door."
        bullets={[
          "Export individual segments or full compilations",
          "Custom transitions between clips",
          "Maintains original video quality",
          "Supports H.264, HEVC, AV1 output",
        ]}
      />
    ),
  },
  {
    category: "Privacy",
    title: "Your Footage Stays on Your Mac",
    src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2940&auto=format&fit=crop",
    content: (
      <FeatureContent
        headline="100% local. Zero cloud uploads."
        description="Every frame of your video is processed entirely on your Mac. Nothing is uploaded, shared, or tracked. Your footage is your business."
        bullets={[
          "All processing happens on-device",
          "Works completely offline",
          "No accounts or sign-ins required",
          "No telemetry or usage tracking",
        ]}
      />
    ),
  },
  {
    category: "Performance",
    title: "Blazing Fast on Apple Silicon",
    src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2940&auto=format&fit=crop",
    content: (
      <FeatureContent
        headline="Hardware-accelerated. Purpose-built."
        description="Lagoon is a native macOS app optimized from the ground up for Apple Silicon. Process a 6-hour video in minutes, not hours."
        bullets={[
          "Native Apple Silicon optimization (M1\u2013M4)",
          "Hardware-accelerated video decoding",
          "Typically 1\u20132 minutes per hour of footage",
          "Runs in the background while you work",
        ]}
      />
    ),
  },
  {
    category: "Creators",
    title: "Built for Podcasters, Streamers & Editors",
    src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2940&auto=format&fit=crop",
    content: (
      <FeatureContent
        headline="One tool for every creator workflow."
        description="Whether you're clipping podcast highlights, creating stream compilations, or processing client footage, Lagoon fits right into your workflow."
        bullets={[
          "Podcasters: Extract the best moments from long-form audio",
          "Streamers: Turn marathon sessions into highlight reels",
          "Video Editors: Process client footage 10x faster",
          "Content Creators: Find b-roll instantly",
        ]}
      />
    ),
  },
];

export default function FeatureCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-4 pb-8">
        <p className="text-sm font-bold uppercase tracking-wider text-neutral-400 md:text-base">
          Motion Detection
        </p>
        <h2 className="mt-4 font-satoshi text-3xl font-bold text-neutral-200 md:text-6xl">
          Find the action.
          <br />
          Skip the rest.
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-500 md:text-xl">
          It&apos;s easy to{" "}
          <span className="font-bold text-neutral-300">
            get straight to the moments that matter.
          </span>{" "}
          With automatic motion detection, visual timelines, and instant
          exports, Lagoon lets you process hours of footage in minutes
          &mdash; all without leaving your Mac. Whether it&apos;s a quick
          highlight reel or a full content review, your footage is always in
          good hands.
        </p>
      </div>
      <Carousel items={cards} />
    </section>
  );
}
