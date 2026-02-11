const capabilities = [
  {
    title: "Detect Motion",
    description: "Analyzes your entire video in minutes, not hours",
    detail:
      "AI-powered motion detection finds interesting moments automatically",
    image: "/images/solution-detect.jpg",
  },
  {
    title: "Visualize Activity",
    description: "Clear visual timeline shows every detected segment",
    detail: "See exactly where the action happens",
    image: "/images/solution-visualize.jpg",
  },
  {
    title: "Export Instantly",
    description:
      "Export individual clips or compile your best moments into one video",
    detail: "Get clean clips ready to use",
    image: "/images/solution-export.jpg",
  },
];

export default function SolutionSection() {
  return (
    <section className="bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Lagoon Does It{" "}
          <span className="text-accent">Automatically</span>
        </h2>

        <div className="mt-20 space-y-24">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className={`flex flex-col items-center gap-12 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Screenshot placeholder */}
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <div className="aspect-video bg-gradient-to-br from-accent/5 to-accent/10 p-8">
                    <div className="flex h-full items-center justify-center">
                      <p className="text-sm text-text-secondary">
                        Screenshot: {cap.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="w-full text-center lg:w-1/2 lg:text-left">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  {cap.detail}
                </p>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  {cap.title}
                </h3>
                <p className="mt-4 text-lg text-text-secondary">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
