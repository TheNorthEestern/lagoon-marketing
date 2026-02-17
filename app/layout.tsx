import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lagoon Studio - Stop Scrubbing. Instantly Find the Action.",
  description:
    "Automatically detect interesting motion in hours of static footage. Filter out the noise, visualize the activity, and export your clips in seconds. Native. Private. Optimized for Apple Silicon.",
  openGraph: {
    title: "Lagoon Studio - Stop Scrubbing. Instantly Find the Action.",
    description:
      "Automatically detect interesting motion in hours of static footage. Coming soon for macOS.",
    type: "website",
    locale: "en_US",
    siteName: "Lagoon Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagoon Studio - Stop Scrubbing. Instantly Find the Action.",
    description:
      "Automatically detect interesting motion in hours of static footage. Coming soon for macOS.",
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
