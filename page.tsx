export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-500">
          Smart Verse Studio
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
          Building the Future of AI, Digital Publishing, Travel,
          Healthcare, Marketplace and Innovation.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black hover:scale-105 transition">
            Explore Ecosystem
          </button>

          <button className="rounded-xl border border-yellow-500 px-6 py-3 font-semibold text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
