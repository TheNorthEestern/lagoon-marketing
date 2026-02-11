const personas = [
  {
    title: "Podcasters",
    description: "Extract the best moments from your long-form audio",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    title: "Streamers",
    description: "Turn marathon streams into highlight reels",
    icon: (
      <svg
        className="h-10 w-10"
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
    title: "Video Editors",
    description: "Process client footage 10x faster",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 4V2m0 2a2 2 0 110 4m0-4a2 2 0 100 4m10-4V2m0 2a2 2 0 110 4m0-4a2 2 0 100 4M3 20h18M3 10h18M3 14h18"
        />
      </svg>
    ),
  },
  {
    title: "Content Creators",
    description: "Find b-roll instantly. No more endless scrubbing",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function UseCases() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Made for Creators
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="group rounded-2xl border border-border bg-white p-8 text-center transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-surface text-text-secondary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                {persona.icon}
              </div>
              <h3 className="text-xl font-semibold">{persona.title}</h3>
              <p className="mt-2 text-text-secondary">{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
