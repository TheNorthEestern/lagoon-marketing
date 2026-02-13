import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-lg text-text-secondary">Lagoon Studio</p>
        <p className="mt-1 text-sm text-text-secondary">
          Effective Date: February 13, 2026
        </p>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-neutral-300">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
            Lagoon Studio (&ldquo;the Software&rdquo;), developed and provided
            by Tomare LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;). By downloading, installing, or using the
            Software, you agree to be bound by these Terms.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              1. License Grant
            </h2>
            <p className="mt-3">
              We grant you a limited, non-exclusive, non-transferable, revocable
              license to use the Software on up to two (2) computers that you
              own or control, subject to these Terms. This license is for
              personal or commercial use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              2. Purchases and Payments
            </h2>
            <p className="mt-3">
              All purchases of the Software are processed by Lemon Squeezy, LLC,
              which acts as our merchant of record. Lemon Squeezy handles all
              payment processing, tax collection, and billing on our behalf.
              Your purchase is subject to Lemon Squeezy&apos;s{" "}
              <a
                href="https://www.lemonsqueezy.com/buyer-terms"
                className="text-accent underline underline-offset-2 hover:text-accent-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buyer Terms and Conditions
              </a>
              . Prices are listed on our website at{" "}
              <a
                href="https://lagoon.video"
                className="text-accent underline underline-offset-2 hover:text-accent-hover"
              >
                lagoon.video
              </a>{" "}
              and are subject to change with notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              3. License Keys
            </h2>
            <p className="mt-3">
              Upon purchase, you will receive a license key to activate the
              Software. You are responsible for keeping your license key
              confidential. Each license key may be activated on up to two (2)
              devices. You may deactivate a device at any time to free an
              activation slot. Sharing, reselling, or distributing your license
              key is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              4. Free Trial
            </h2>
            <p className="mt-3">
              We may offer a free trial period during which you can evaluate the
              Software with limited or full functionality. When the trial
              expires, continued use requires the purchase of a license. Trial
              availability and duration are at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">5. Updates</h2>
            <p className="mt-3">
              The Software may check for updates periodically via an internet
              connection. Updates are provided at our discretion and may include
              bug fixes, new features, or changes to existing features. We are
              not obligated to provide updates or to maintain backward
              compatibility.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              6. Restrictions
            </h2>
            <p className="mt-3">You may not:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Reverse engineer, decompile, or disassemble the Software, except
                to the extent permitted by applicable law.
              </li>
              <li>
                Modify, adapt, or create derivative works based on the Software.
              </li>
              <li>
                Redistribute, sublicense, lease, rent, or lend the Software to
                any third party.
              </li>
              <li>
                Remove or alter any proprietary notices, labels, or marks on the
                Software.
              </li>
              <li>Use the Software for any unlawful purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              7. Intellectual Property
            </h2>
            <p className="mt-3">
              The Software and all associated intellectual property rights are
              owned by Tomare LLC. These Terms do not transfer any ownership
              rights to you. All rights not expressly granted are reserved.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              8. Disclaimer of Warranties
            </h2>
            <p className="mt-3 uppercase">
              The Software is provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, express or
              implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement. We do not warrant that the Software will be
              uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              9. Limitation of Liability
            </h2>
            <p className="mt-3 uppercase">
              To the maximum extent permitted by applicable law, in no event
              shall Tomare LLC be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits, data,
              or goodwill, arising out of or related to your use of or inability
              to use the Software, regardless of the cause of action or the
              theory of liability. Our total liability shall not exceed the
              amount you paid for the Software in the twelve (12) months
              preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              10. Termination
            </h2>
            <p className="mt-3">
              We may terminate or suspend your license at any time if you
              violate these Terms. Upon termination, you must cease all use of
              the Software and destroy any copies in your possession. Sections
              7, 8, 9, and 11 survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              11. Governing Law
            </h2>
            <p className="mt-3">
              These Terms are governed by and construed in accordance with the
              laws of the State of New York, without regard to conflict of law
              principles. Any disputes arising under these Terms shall be
              resolved in the courts located in New York, New York.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              12. Changes to These Terms
            </h2>
            <p className="mt-3">
              We may update these Terms from time to time. We will notify you of
              material changes by posting the revised Terms on our website with
              an updated effective date. Your continued use of the Software
              after such changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">10. Contact</h2>
            <p className="mt-3">
              If you have questions about these Terms, please contact us at:
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
