import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lagoon Studio - Stop scrubbing. Instantly find the action.",
  description:
    "Automatically detect interesting motion in your videos. Filter out the noise, visualize the activity, and export your clips in seconds. Native. Private. Optimized for Apple Silicon.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Lagoon Studio - Stop scrubbing. Instantly find the action.",
    description:
      "Automatically detect interesting motion in your videos. Coming soon for macOS.",
    type: "website",
    locale: "en_US",
    siteName: "Lagoon Studio",
    images: [
      {
        url: "https://lagoon.video/images/og.png",
        width: 1200,
        height: 630,
        alt: "Lagoon Studio",
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
    card: "player",
    title: "Lagoon Studio - Stop scrubbing. Instantly find the action.",
    description:
      "Automatically detect interesting motion in your videos. Coming soon for macOS.",
    images: ["https://lagoon.video/images/og.png"],
    players: [
      {
        playerUrl: "https://lagoon.video/videos/hero-demo.mp4",
        streamUrl: "https://lagoon.video/videos/hero-demo.mp4",
        width: 2032,
        height: 1192,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
