export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-satoshi text-5xl font-bold leading-[1.3] tracking-tight sm:text-6xl lg:text-7xl">
          Stop Scrubbing.
          <br />
          <span className="text-neutral-500">Instantly Find the Action.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-text-secondary sm:mt-10 sm:text-xl">
          Automatically detect interesting motion in hours of static footage.
          Filter out the noise, visualize the activity, and export your clips in
          seconds. Native. Private. Optimized for Apple Silicon.
        </p>
      </div>

      {/* Hero video */}
      <div className="mt-16 w-full max-w-[1200px] sm:mt-20">
        <div className="overflow-hidden rounded-2xl bg-surface sm:rounded-3xl">
          <div className="relative aspect-video w-full">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              poster="/images/hero-poster.jpg"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="/videos/hero-demo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/5 to-accent/15 [video[autoplay]~&]:hidden">
              <p className="text-sm text-text-secondary">
                Demo video coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
