const testimonials = [
  {
    name: "Kovács Péter",
    role: "Tulajdonos – Prestige Barber Shop, Budapest",
    avatar: "KP",
    rating: 5,
    text: "Mielőtt volt weboldalunk, csak szájról-szájra terjedt a hírünk. Azóta, hogy a HajzerStudio elkészítette a honlapunkat, heti 15-20 új ügyfelet szerzünk az online foglalási rendszeren keresztül. A beruházás megtérült az első hónapban.",
  },
  {
    name: "Nagy Zsófia",
    role: "Fodrász – Elite Hair Studio, Győr",
    avatar: "NZs",
    rating: 5,
    text: "Sosem gondoltam, hogy egy weboldal ekkora különbséget tud tenni. A portfólió oldal tökéletesen mutatja be a munkáimat, és az ügyfelek már pontosan tudják, mire számíthatnak. Nagyon profi csapat, mindent elmagyaráztak.",
  },
  {
    name: "Balogh Márton",
    role: "Barber – The Cut Club, Debrecen",
    avatar: "BM",
    rating: 5,
    text: "7 nap alatt kész volt a weboldal, pontosan ahogy ígérték. Mobilon tökéletesen működik, gyorsan tölt be, és a Google-on már az első oldalon vagyunk a 'barber debrecen' keresésre. Ajánlom mindenkinek!",
  },
];

export default function Testimonials() {
  return (
    <section id="velemenyek" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">
            Vélemények
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Amit ügyfeleink mondanak
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[#a0a0a0] text-lg">
            Fodrászok és barberek, akik már megtapasztalták a profi weboldal hatását.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#111] border border-[#222] rounded-2xl p-6 hover:border-[#D4AF37]/20 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#d0d0d0] text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#1e1e1e]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37]/60 to-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-[#666] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "20+", label: "elégedett ügyfél" },
            { value: "100%", label: "ajánlási arány" },
            { value: "7 nap", label: "átlagos átadás" },
            { value: "5.0 ★", label: "átlagos értékelés" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#111] border border-[#222] rounded-xl p-5">
              <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1">{stat.value}</div>
              <div className="text-[#a0a0a0] text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
