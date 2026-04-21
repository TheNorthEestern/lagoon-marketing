"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What video formats does Lagoon support?",
    answer:
      "Lagoon supports H.264, HEVC, AV1, and most common video container formats including MP4, MKV, and WebM. It uses hardware-accelerated decoding on Apple Silicon, so even high-resolution podcast or stream recordings process efficiently.",
  },
  {
    question: "How does Lagoon find the clip-worthy moments?",
    answer:
      "Lagoon analyzes every frame for conversational motion: hand gestures, lean-ins, reactions, on-camera action. It flags the segments that rise above a tunable threshold. Choose between Fast, Balanced, and Accurate modes to trade speed for thoroughness, and adjust sensitivity to match the energy of your content.",
  },
  {
    question: "Does Lagoon work offline?",
    answer:
      "Yes, completely. All analysis happens locally on your Mac. Your files never leave your device and no internet connection is required. The only network requests Lagoon makes are for license validation and checking for app updates.",
  },
  {
    question: "How long does analysis take?",
    answer:
      "Analysis is fast thanks to hardware-accelerated decoding on Apple Silicon. Exact times vary with recording length, resolution, and your chosen analysis mode. Fast mode prioritizes speed; Accurate mode examines more frames for thorough results.",
  },
  {
    question: "Can I adjust what counts as a moment?",
    answer:
      "Yes. Toggle between Fast, Balanced, and Accurate modes, and fine-tune the sensitivity slider to match your content. Lower thresholds catch subtle movement like small gestures or lean-ins; higher thresholds focus only on significant action.",
  },
  {
    question: "Will this work on a multi-hour podcast or stream recording?",
    answer:
      "Yes. Analysis scales linearly with length, and Apple Silicon hardware decoding keeps it fast. Lagoon runs in the background, so you can keep editing, recording, or streaming while it works through a three-hour episode or an eight-hour VOD.",
  },
  {
    question: "Can I export individual clips or a compilation?",
    answer:
      "Yes. Export each moment individually, or select multiple at once. Exports are standard MP4 files that open in any editor or media player, with configurable padding around each clip so you keep the setup and payoff.",
  },
  {
    question: "Does Lagoon add captions or reframe clips for TikTok?",
    answer:
      "No. Lagoon outputs standard MP4s at your source resolution. Use your editor, or the platform's native tools, to add captions and reframe to 9:16. Lagoon's job is to find the moments; your editor's job is to finish them.",
  },
  {
    question: "Can Lagoon publish directly to YouTube, TikTok, or Instagram?",
    answer:
      "No. Clips land in a folder on your Mac. You publish the way you already do: through your editor, scheduler, or the platform itself. Lagoon stays focused on the part that takes the longest: finding what's worth clipping.",
  },
  {
    question: "How does Lagoon compare to Opus, Cliphi, and other cloud clipping tools?",
    answer:
      "Different scope. Lagoon finds the moments locally on your Mac and hands you clean MP4s. Cloud tools handle captioning, reframing, and publishing too, but they need your footage uploaded to their servers and meter your processing minutes. Pick Lagoon when privacy, cost predictability, or speed-to-start matter; pick a cloud tool when you need the full social-publishing stack.",
  },
  {
    question: "What macOS versions are supported?",
    answer:
      "Lagoon requires macOS 14 (Sonoma) or later and an Apple Silicon Mac (M1 or newer). It is built as a native SwiftUI application optimized specifically for Apple Silicon hardware.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Try Lagoon free for 7 days with full functionality. No credit card required to start your trial. After the trial, choose from monthly ($8.99/mo), yearly ($75/yr), or lifetime ($59) plans.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. Cancel your monthly or yearly subscription anytime with no penalties or hidden fees. If you choose the lifetime option, it is a one-time purchase with no recurring charges.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Questions, answered.
        </h2>

        <div className="mt-16 space-y-0 divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium pr-4">{faq.question}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`faq-answer ${openIndex === index ? "open" : ""}`}
              >
                <div>
                  <p className="mt-4 text-text-secondary">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
