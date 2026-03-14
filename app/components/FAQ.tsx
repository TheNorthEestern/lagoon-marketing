"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What video formats does Lagoon support?",
    answer:
      "Lagoon supports H.264, HEVC, AV1, and most common video container formats including MP4, MKV, and WebM. It uses hardware-accelerated decoding on Apple Silicon, so even high-resolution footage processes efficiently.",
  },
  {
    question: "How does motion detection work?",
    answer:
      "Lagoon analyzes pixel changes between frames to identify moments with significant movement. You can choose between Fast, Balanced, and Accurate analysis modes depending on your needs, and fine-tune the motion detection threshold to filter out unwanted noise like camera shake or subtle lighting changes.",
  },
  {
    question: "Does Lagoon work offline?",
    answer:
      "Yes, completely. All video analysis and processing happens locally on your Mac. Your files never leave your device and no internet connection is required. The only network requests Lagoon makes are for license validation and checking for app updates.",
  },
  {
    question: "How long does analysis take?",
    answer:
      "Analysis is fast thanks to hardware-accelerated decoding on Apple Silicon. Exact times vary with video length, resolution, and your chosen analysis mode. Fast mode prioritizes speed, while Accurate mode examines more frames for thorough results.",
  },
  {
    question: "Can I adjust sensitivity?",
    answer:
      "Yes. Toggle between Fast, Balanced, and Accurate analysis modes, and fine-tune the motion detection threshold slider to match your content. Lower thresholds catch subtle movement, while higher thresholds focus on significant action.",
  },
  {
    question: "What if I have a large file?",
    answer:
      "Lagoon handles large files with ease. Processing time scales linearly with video length, and Apple Silicon hardware acceleration keeps things moving. You can continue using your Mac normally while analysis runs in the background.",
  },
  {
    question: "Can I export individual clips or full compilations?",
    answer:
      "Yes. Export each detected segment individually, or select multiple segments to export at once. Exported clips are saved as standard MP4 files that work with any video editor or media player.",
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
          Questions? We Have Answers
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
