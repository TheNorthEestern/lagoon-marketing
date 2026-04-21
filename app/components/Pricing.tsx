export default function Pricing() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Simple pricing. No upload meter.
        </h2>
        <p className="mt-4 text-center text-text-secondary">
          Less than one hour of freelance edit time. Start with a free 7-day trial. No credit card required.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Monthly */}
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">Monthly</h3>
              <div className="text-right">
                <span className="text-3xl font-bold">$8.99</span>
                <span className="text-base text-text-secondary">/mo</span>
              </div>
            </div>
            <p className="mt-3 border-t border-border pt-3 text-base text-text-secondary">
              Full access to Lagoon Studio, billed monthly.
            </p>
          </div>

          {/* Yearly — highlighted */}
          <div className="relative rounded-xl border-2 border-accent bg-surface p-6">
            <span className="absolute -top-3 left-4 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-white">
              Save 30%
            </span>
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">Yearly</h3>
              <div className="text-right">
                <span className="text-3xl font-bold">$75</span>
                <span className="text-base text-text-secondary">/yr</span>
              </div>
            </div>
            <p className="mt-3 border-t border-border pt-3 text-base text-text-secondary">
              Just $6.25/mo. Save over $32 compared to monthly.
            </p>
          </div>

          {/* Lifetime */}
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">Lifetime</h3>
              <div className="text-right">
                <span className="text-3xl font-bold">$59</span>
                <span className="text-base text-text-secondary"> once</span>
              </div>
            </div>
            <p className="mt-3 border-t border-border pt-3 text-base text-text-secondary">
              Lifetime access to Lagoon Studio with updates for 1 year.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-base text-text-secondary">
          Choose what works for you. Upgrade anytime from within the app.
        </p>
      </div>
    </section>
  );
}
