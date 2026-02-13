export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 py-20 sm:px-6">
      {/* Hero video */}
      <div className="mt-1 w-full max-w-[1200px] sm:mt-1.5">
        <div className="aspect-video w-full">
            <video
              className="h-full w-full object-contain"
              poster="/images/hero-poster.jpg"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="/videos/hero-demo.mp4" type="video/mp4" />
            </video>
        </div>
      </div>

      <div className="mx-auto mt-2 max-w-4xl text-center sm:mt-3">
        <h1 className="font-satoshi text-5xl font-bold leading-[1.3] tracking-tight sm:text-6xl lg:text-7xl">
          Stop Scrubbing.
          <br />
          Instantly Find the Action.
        </h1>
        <p className="font-satoshi mx-auto mt-8 max-w-2xl text-lg text-text-secondary sm:mt-10 sm:text-xl">
          Automatically detect interesting motion in hours of static footage.
          Filter out the noise, visualize the activity, and export your clips in
          seconds. Native. Private. Optimized for Apple Silicon.
        </p>
      </div>
    </section>
  );
}
