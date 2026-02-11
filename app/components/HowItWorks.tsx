const steps = [
  {
    number: "1",
    title: "Drop Your Video",
    description:
      "Select a file from your computer. Lagoon supports H.264, HEVC, AV1, and most common video formats.",
    image: "/images/step-1.jpg",
  },
  {
    number: "2",
    title: "Let Lagoon Analyze",
    description:
      "Automatic motion detection runs in the background. Watch as segments are identified in real time.",
    image: "/images/step-2.jpg",
  },
  {
    number: "3",
    title: "Export Your Clips",
    description:
      "Download individual segments or compile them into a single highlight video with custom transitions.",
    image: "/images/step-3.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Three Steps to Better Content
        </h2>

        <div className="mt-20 space-y-20">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col items-center gap-12 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Screenshot */}
              <div className="w-full lg:w-3/5">
                <div className="overflow-hidden rounded-2xl border border-border bg-background">
                  <div className="aspect-video bg-gradient-to-br from-accent/5 to-accent/15 p-8">
                    <div className="flex h-full items-center justify-center">
                      <p className="text-sm text-text-secondary">
                        Screenshot: Step {step.number}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="w-full text-center lg:w-2/5 lg:text-left">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-lg text-text-secondary">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
