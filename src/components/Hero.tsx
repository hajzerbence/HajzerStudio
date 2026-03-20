export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />

      {/* Gold accent blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
          <span className="text-[#D4AF37] text-sm font-medium tracking-wide">
            Speciálisan fodrászoknak & barber shopoknak
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
          <span className="text-white">Profi weboldal,</span>
          <br />
          <span className="text-gold-gradient">több ügyfél.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#a0a0a0] leading-relaxed mb-10">
          Gyors, mobilbarát honlapok, amelyek{" "}
          <span className="text-white font-medium">új ügyfeleket hoznak</span> fodrászoknak és
          barber shopoknak – foglalási rendszerrel, Google integrációval és profi megjelenéssel.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kapcsolat"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F0CF60] text-black font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 shadow-lg shadow-[#D4AF37]/20"
          >
            Ingyenes konzultáció
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#333] hover:border-[#D4AF37]/50 text-white px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-[#D4AF37]/5"
          >
            Portfóliónk megtekintése
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-[#666]">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["P", "B", "K", "M"].map((letter, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37]/60 to-[#D4AF37]/20 border-2 border-[#0a0a0a] flex items-center justify-center text-[#D4AF37] text-xs font-bold"
                >
                  {letter}
                </div>
              ))}
            </div>
            <span>
              <span className="text-white font-semibold">20+</span> elégedett ügyfél
            </span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-[#333]" />
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span>
              <span className="text-white font-semibold">5.0</span> átlagos értékelés
            </span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-[#333]" />
          <div>
            <span className="text-white font-semibold">7 nap</span> átlagos átfutási idő
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#666] text-xs animate-bounce">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
