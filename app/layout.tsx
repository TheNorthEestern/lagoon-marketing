import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lagoon.video"),
  title: "Lagoon Studio - Stop scrubbing. Instantly find the action.",
  description:
    "Automatically detect interesting motion in your videos. Filter out the noise, visualize the activity, and export your clips in seconds. Native. Private. Optimized for Apple Silicon.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Lagoon Studio - Stop scrubbing. Instantly find the action.",
    description:
      "Automatically detect interesting motion in your videos. Filter out the noise, visualize the activity, and export your clips in seconds.",
    url: "https://lagoon.video",
    type: "website",
    locale: "en_US",
    siteName: "Lagoon Studio",
    images: [
      {
        url: "https://lagoon.video/images/og.png",
        width: 1200,
        height: 630,
        alt: "Lagoon Studio - Automatic motion detection for macOS",
      },
    ],
    videos: [
      {
        url: "https://lagoon.video/videos/hero-demo.mp4",
        type: "video/mp4",
        width: 2032,
        height: 1192,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagoon Studio - Stop scrubbing. Instantly find the action.",
    description:
      "Automatically detect interesting motion in your videos. Filter out the noise, visualize the activity, and export your clips in seconds.",
    images: ["https://lagoon.video/images/og.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lagoon Studio",
  legalName: "Tomare LLC",
  url: "https://lagoon.video",
  logo: "https://lagoon.video/images/lagoon.jpg",
  email: "support@lagoon.video",
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@lagoon.video",
    contactType: "customer support",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lagoon Studio",
  url: "https://lagoon.video",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lagoon Studio",
  operatingSystem: "macOS 14+",
  applicationCategory: "MultimediaApplication",
  description:
    "Automatically detect interesting motion in your videos. Filter out the noise, visualize the activity, and export your clips in seconds. Native. Private. Optimized for Apple Silicon.",
  url: "https://lagoon.video",
  downloadUrl:
    "https://github.com/TheNorthEestern/lagoon-releases/releases/latest/download/Lagoon-Studio.dmg",
  screenshot: "https://lagoon.video/images/features/detection.png",
  softwareVersion: "1.0.2",
  processorRequirements: "Apple Silicon",
  offers: [
    {
      "@type": "Offer",
      name: "Monthly",
      price: "8.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-03-14",
      url: "https://lagoon.video/#pricing",
    },
    {
      "@type": "Offer",
      name: "Yearly",
      price: "75.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-03-14",
      url: "https://lagoon.video/#pricing",
    },
    {
      "@type": "Offer",
      name: "Lifetime",
      price: "59.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-03-14",
      url: "https://lagoon.video/#pricing",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What video formats does Lagoon support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lagoon supports H.264, HEVC, AV1, and most common video container formats including MP4, MKV, and WebM. It uses hardware-accelerated decoding on Apple Silicon, so even high-resolution footage processes efficiently.",
      },
    },
    {
      "@type": "Question",
      name: "How does motion detection work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lagoon analyzes pixel changes between frames to identify moments with significant movement. You can choose between Fast, Balanced, and Accurate analysis modes depending on your needs, and fine-tune the motion detection threshold to filter out unwanted noise like camera shake or subtle lighting changes.",
      },
    },
    {
      "@type": "Question",
      name: "Does Lagoon work offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely. All video analysis and processing happens locally on your Mac. Your files never leave your device and no internet connection is required. The only network requests Lagoon makes are for license validation and checking for app updates.",
      },
    },
    {
      "@type": "Question",
      name: "How long does analysis take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Analysis is fast thanks to hardware-accelerated decoding on Apple Silicon. Exact times vary with video length, resolution, and your chosen analysis mode. Fast mode prioritizes speed, while Accurate mode examines more frames for thorough results.",
      },
    },
    {
      "@type": "Question",
      name: "Can I adjust sensitivity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Toggle between Fast, Balanced, and Accurate analysis modes, and fine-tune the motion detection threshold slider to match your content. Lower thresholds catch subtle movement, while higher thresholds focus on significant action.",
      },
    },
    {
      "@type": "Question",
      name: "What if I have a large file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lagoon handles large files with ease. Processing time scales linearly with video length, and Apple Silicon hardware acceleration keeps things moving. You can continue using your Mac normally while analysis runs in the background.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export individual clips or full compilations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Export each detected segment individually, or select multiple segments to export at once. Exported clips are saved as standard MP4 files that work with any video editor or media player.",
      },
    },
    {
      "@type": "Question",
      name: "What macOS versions are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lagoon requires macOS 14 (Sonoma) or later and an Apple Silicon Mac (M1 or newer). It is built as a native SwiftUI application optimized specifically for Apple Silicon hardware.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Try Lagoon free for 7 days with full functionality. No credit card required to start your trial. After the trial, choose from monthly ($8.99/mo), yearly ($75/yr), or lifetime ($59) plans.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my subscription anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cancel your monthly or yearly subscription anytime with no penalties or hidden fees. If you choose the lifetime option, it is a one-time purchase with no recurring charges.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="preload"
          href="/fonts/Satoshi-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/images/hero-poster.jpg"
          as="image"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {[organizationSchema, websiteSchema, softwareSchema, faqSchema].map(
          (schema, i) => (
            <script
              key={i}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          )
        )}
        {children}
      </body>
    </html>
  );
}
