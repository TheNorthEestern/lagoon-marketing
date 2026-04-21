const differentiators = [
  {
    title: "Nothing uploads",
    description: "Your footage stays on your Mac.",
    subtext:
      "Unreleased episodes, sponsor reads, embargoed interviews. None of it leaves your computer. No cloud queue, no account required.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "A native app, not a web app",
    description: "Built in SwiftUI for Apple Silicon.",
    subtext:
      "Scrubs multi-hour 4K recordings like local files, because they are local files. Hardware-accelerated decoding, minimal CPU impact.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Buy it once",
    description: "No monthly upload credits.",
    subtext:
      "No \"minutes processed\" meter, no tiered plans for your biggest episodes. $59 for lifetime access, or pay monthly if you prefer.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m0-10a9 9 0 110 18 9 9 0 010-18z"
        />
      </svg>
    ),
  },
];

export default function WhyLagoon() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          The private way to find your next clip.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-text-secondary">
          Most clipping tools need your raw footage on someone else&rsquo;s server. Lagoon doesn&rsquo;t.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 font-medium">{item.description}</p>
              <p className="mt-2 text-sm text-text-secondary">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
