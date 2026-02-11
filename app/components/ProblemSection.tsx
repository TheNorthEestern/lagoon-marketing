const painPoints = [
  {
    title: "Manual Hunting",
    description: "Hours spent scrubbing timelines frame by frame",
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    title: "Wasted Footage",
    description: "Most of the video never sees the light of day",
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
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Repetitive Work",
    description: "Same tedious process, every single day",
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
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Finding the Good Moments
          <br />
          <span className="text-text-secondary">Takes Forever</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-text-secondary">
          Podcasters, streamers, and content creators waste hours manually
          scrubbing through footage to find interesting moments. You record. You
          wait. You hunt for the clips worth using.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-border bg-white p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface text-text-secondary">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold">{point.title}</h3>
              <p className="mt-2 text-text-secondary">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
