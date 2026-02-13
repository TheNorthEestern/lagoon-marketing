import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-lg text-text-secondary">Lagoon Studio</p>
        <p className="mt-1 text-sm text-text-secondary">
          Effective Date: February 13, 2026
        </p>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-neutral-300">
          <p>
            Tomare LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
            explains what information Lagoon Studio (&ldquo;the Software&rdquo;)
            collects, how it is used, and your choices.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              1. Information We Collect
            </h2>
            <p className="mt-3">
              <strong>We collect minimal information.</strong> The Software does
              not include analytics, telemetry, crash reporting, or tracking of
              any kind.
            </p>
            <p className="mt-3">
              The only network requests the Software makes are:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>License key validation.</strong> When you activate or
                periodically validate a license key, the Software sends your
                license key and a device-specific instance identifier to the
                Lemon Squeezy API. This is necessary to verify your license and
                manage device activations. No other personal data is transmitted
                during this process.
              </li>
              <li>
                <strong>Update checks.</strong> The Software uses Sparkle to
                check for available updates. These requests are made to our
                server at lagoon.video and do not transmit any personal
                information beyond a standard HTTP request (your IP address is
                visible to our server as part of normal internet communication,
                but is not logged or stored).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              2. Information We Do Not Collect
            </h2>
            <p className="mt-3">
              We do not collect, store, or transmit:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Your name, email address, or contact information (this is
                handled solely by Lemon Squeezy during purchase)
              </li>
              <li>Usage data, analytics, or telemetry</li>
              <li>Crash reports or diagnostics</li>
              <li>
                File contents, project data, or media you work with in the
                Software
              </li>
              <li>Location data</li>
              <li>
                Device identifiers beyond the Lemon Squeezy instance ID used for
                license activation
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              3. Third-Party Services
            </h2>
            <p className="mt-3">
              <strong>Lemon Squeezy</strong> processes all purchases and manages
              license keys as our merchant of record. When you purchase the
              Software or activate a license key, Lemon Squeezy may collect
              information in accordance with their own privacy policy, available
              at{" "}
              <a
                href="https://www.lemonsqueezy.com/privacy"
                className="text-accent underline underline-offset-2 hover:text-accent-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.lemonsqueezy.com/privacy
              </a>
              .
            </p>
            <p className="mt-3">
              We do not share any data with other third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              4. Data Stored on Your Device
            </h2>
            <p className="mt-3">
              The Software stores the following data locally on your computer:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Your license key and activation instance ID</li>
              <li>Trial start date (if applicable)</li>
              <li>Application preferences and settings</li>
            </ul>
            <p className="mt-3">
              This data remains on your device and is not transmitted to us
              except as described in Section 1 above.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              5. Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              The Software is not directed at children under the age of 13, and
              we do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              6. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Changes will
              be posted on our website at{" "}
              <a
                href="https://lagoon.video"
                className="text-accent underline underline-offset-2 hover:text-accent-hover"
              >
                lagoon.video
              </a>{" "}
              with an updated effective date. Your continued use of the Software
              after changes are posted constitutes acceptance of the revised
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">7. Contact</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, please contact us
              at:
            </p>
            <p className="mt-3">
              Tomare LLC
              <br />
              Email:{" "}
              <a
                href="mailto:support@lagoon.video"
                className="text-accent underline underline-offset-2 hover:text-accent-hover"
              >
                support@lagoon.video
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
