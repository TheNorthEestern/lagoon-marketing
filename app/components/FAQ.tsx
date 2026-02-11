"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What video formats does Lagoon support?",
    answer:
      "H.264, HEVC, AV1, and most common video formats. See documentation for the full list.",
  },
  {
    question: "How does motion detection work?",
    answer:
      "Lagoon analyzes pixel changes between frames to identify interesting moments. You can adjust sensitivity in settings.",
  },
  {
    question: "Does Lagoon work offline?",
    answer:
      "Yes, completely. All processing happens on your Mac. No internet required.",
  },
  {
    question: "How long does analysis take?",
    answer:
      "Typically 1\u20132 minutes per hour of video on Apple Silicon. Depends on video quality and your Mac\u2019s specs.",
  },
  {
    question: "Can I adjust sensitivity?",
    answer:
      "Yes. Toggle between Fast, Balanced, and Accurate modes. Fine-tune the motion detection threshold to your needs.",
  },
  {
    question: "What if I have a large file?",
    answer:
      "Lagoon is optimized for files up to 6+ hours. Processing time scales linearly with video length.",
  },
  {
    question: "Can I export individual clips or full compilations?",
    answer:
      "Both. Export each detected segment separately, or compile them into a single video with custom transitions.",
  },
  {
    question: "What macOS versions are supported?",
    answer:
      "macOS 14 and later. Optimized for Apple Silicon (M1, M2, M3, M4).",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Try Lagoon free for 7 days before committing. No credit card required.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. Cancel anytime with no penalties. Lifetime purchase holders never need to worry.",
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
