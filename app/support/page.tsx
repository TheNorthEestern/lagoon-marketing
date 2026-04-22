import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Support - Lagoon Studio",
  description:
    "Get help with Lagoon Studio. Contact support, find system requirements, and troubleshoot common issues.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support - Lagoon Studio",
    description:
      "Get help with Lagoon Studio. Contact support, find system requirements, and troubleshoot common issues.",
    url: "https://lagoon.video/support",
  },
  twitter: {
    title: "Support - Lagoon Studio",
    description:
      "Get help with Lagoon Studio. Contact support, find system requirements, and troubleshoot common issues.",
  },
};

export default function Support() {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Support
        </h1>
        <p className="mt-2 text-lg text-text-secondary">
          We&rsquo;re here to help.
        </p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-neutral-300">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Contact us
            </h2>
            <p className="mt-3">
              Questions, bug reports, or feature requests? Email us at{" "}
              <a
                href="mailto:support@lagoon.video"
                className="underline decoration-accent/50 underline-offset-4 hover:decoration-accent"
              >
                support@lagoon.video
              </a>{" "}
              and we&rsquo;ll get back to you within two business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              System requirements
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>macOS 14 (Sonoma) or later</li>
              <li>Apple Silicon Mac (M1 or newer)</li>
              <li>At least 4&nbsp;GB of free disk space</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Common questions
            </h2>

            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  What file formats can Lagoon open?
                </h3>
                <p className="mt-2">
                  MP4, MOV, and M4V files work out of the box. MKV, WebM, AVI,
                  and other advanced formats are supported via bundled FFmpeg.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Where are my video files sent?
                </h3>
                <p className="mt-2">
                  Nowhere. All analysis runs on your Mac. No file contents are
                  uploaded anywhere.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  How long is the free trial?
                </h3>
                <p className="mt-2">
                  7 days, full functionality, no credit card required. The
                  trial starts automatically on first launch.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  How do I restore a previous purchase?
                </h3>
                <p className="mt-2">
                  Mac App Store version: open <strong>Settings</strong> &rarr;{" "}
                  <strong>General</strong> and click <strong>Restore Purchases</strong>.
                  Make sure you&rsquo;re signed into the same Apple Account used
                  for the original purchase.
                </p>
                <p className="mt-2">
                  Direct download version: paste your license key in{" "}
                  <strong>Settings</strong> &rarr; <strong>License</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Analysis is slow. What can I do?
                </h3>
                <p className="mt-2">
                  Try <strong>Fast</strong> or <strong>Balanced</strong> analysis
                  speed instead of Accurate. These sample every 5th or every 3rd
                  frame respectively, which is much faster and usually catches
                  the same moments.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Exported clips are too short or cut off.
                </h3>
                <p className="mt-2">
                  Use the clip padding control at the bottom of the segment list
                  to add 3, 5, or 10 seconds of buffer before and after each
                  detected moment.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Legal
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>
                <a
                  href="/privacy"
                  className="underline decoration-accent/50 underline-offset-4 hover:decoration-accent"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="underline decoration-accent/50 underline-offset-4 hover:decoration-accent"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
