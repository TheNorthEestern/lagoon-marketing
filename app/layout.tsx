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
      url: "https://lagoon.video/#pricing",
    },
    {
      "@type": "Offer",
      name: "Yearly",
      price: "75.00",
      priceCurrency: "USD",
      url: "https://lagoon.video/#pricing",
    },
    {
      "@type": "Offer",
      name: "Lifetime",
      price: "59.00",
      priceCurrency: "USD",
      url: "https://lagoon.video/#pricing",
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
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              websiteSchema,
              softwareSchema,
            ]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
