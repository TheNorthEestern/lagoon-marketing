const plans = [
  {
    name: "Free Trial",
    price: "Free",
    period: "for 7 days",
    features: [
      "Full access to all features",
      "No credit card required",
      "No limitations during trial",
    ],
    cta: "Try It Free",
    highlighted: false,
  },
  {
    name: "Monthly",
    price: "$8.99",
    period: "/month",
    features: [
      "Unlimited video processing",
      "All export options",
      "Free updates",
      "Cancel anytime",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Yearly",
    price: "$75",
    period: "/year",
    badge: "Save 31%",
    features: [
      "Everything in Monthly",
      "Best value for regular users",
      "Free updates",
      "Cancel anytime",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Lifetime",
    price: "$59",
    period: "one-time",
    features: [
      "Pay once, own forever",
      "All future updates included",
      "No subscription needed",
    ],
    cta: "Buy Now",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="px-6 pt-24 pb-8 sm:pt-32 sm:pb-10">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Simple Pricing. No Surprises.
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-accent bg-accent/10 shadow-md shadow-accent/5"
                  : "border-border bg-surface"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="ml-1 text-text-secondary">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-full py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "bg-border text-foreground hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-secondary">
          Choose what works for you. Upgrade anytime. No lock-in.
        </p>
      </div>
    </section>
  );
}
