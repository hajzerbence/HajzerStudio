const portfolioItems = [
  {
    name: "Prestige Barber Shop",
    category: "Barber Shop",
    tags: ["Egyedi dizájn", "Foglalási rendszer", "SEO"],
    color: "from-amber-900/30 to-zinc-900",
    accent: "#D4AF37",
  },
  {
    name: "Elite Hair Studio",
    category: "Fodrászat",
    tags: ["Galéria", "Online foglalás", "Google Maps"],
    color: "from-slate-800/50 to-zinc-900",
    accent: "#C0C0C0",
  },
  {
    name: "The Cut Club",
    category: "Barber Shop",
    tags: ["E-shop", "Hírlevél", "Analitika"],
    color: "from-stone-800/40 to-zinc-900",
    accent: "#D4AF37",
  },
];

function MockupBrowser({
  name,
  category,
  color,
  accent,
}: {
  name: string;
  category: string;
  color: string;
  accent: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-[#222] shadow-2xl">
      {/* Browser chrome */}
      <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-3 border-b border-[#222]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-[#111] rounded-md px-3 py-1 text-xs text-[#666]">
          www.{name.toLowerCase().replace(/\s+/g, "")}.hu
        </div>
      </div>

      {/* Website preview */}
      <div className={`relative h-48 bg-gradient-to-br ${color} overflow-hidden`}>
        {/* Mock header */}
        <div className="px-6 pt-5 pb-4 flex items-center justify-between">
          <div
            className="text-sm font-bold"
            style={{ color: accent }}
          >
            {name}
          </div>
          <div className="flex gap-3">
            {["Rólunk", "Áraink", "Kapcsolat"].map((item) => (
              <div key={item} className="text-[10px] text-[#666]">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Mock hero content */}
        <div className="px-6 pt-2">
          <div className="h-3 w-32 rounded-full mb-2" style={{ backgroundColor: accent, opacity: 0.8 }} />
          <div className="h-2 w-48 bg-[#444] rounded-full mb-1.5" />
          <div className="h-2 w-40 bg-[#333] rounded-full mb-5" />
          <div
            className="inline-block text-[10px] font-semibold px-4 py-1.5 rounded-full"
            style={{ backgroundColor: accent, color: "#000" }}
          >
            Foglalás
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-[10px] text-[#a0a0a0] px-2 py-1 rounded-md border border-[#333]">
          {category}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">
            Portfólió
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Munkáink
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[#a0a0a0] text-lg">
            Nézd meg, milyen weboldalakat készítettünk fodrász és barber ügyfeleinknek.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, i) => (
            <div key={i} className="group">
              <MockupBrowser
                name={item.name}
                category={item.category}
                color={item.color}
                accent={item.accent}
              />

              {/* Info below mockup */}
              <div className="mt-4 px-1">
                <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#a0a0a0] mb-4">Készen állsz egy hasonló weboldalra?</p>
          <a
            href="#kapcsolat"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#F0CF60] text-black font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105"
          >
            Kezdjük el a projektedet
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
