const differentiators = [
  {
    title: "Simple",
    description: "No learning curve. Open. Detect. Export.",
    subtext:
      "Unlike traditional editors, Lagoon does one thing and does it perfectly.",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Private",
    description: "Your footage never leaves your computer.",
    subtext: "All processing happens locally. No cloud uploads. No tracking.",
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
    title: "Fast",
    description: "Optimized for Apple Silicon.",
    subtext:
      "Hardware-accelerated motion detection. Process 6-hour videos in minutes.",
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
];

export default function WhyLagoon() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Built Different
        </h2>

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
