const features = [
  {
    icon: "⚡",
    title: "Villámgyors betöltés",
    desc: "A weboldalad kevesebb mint 2 másodperc alatt tölt be. Ez nem csak a Google értékelés szempontjából fontos, de az ügyfeleid is értékelik.",
    metric: "< 2s",
    metricLabel: "betöltési idő",
  },
  {
    icon: "📱",
    title: "Mobilon is tökéletes",
    desc: "Az ügyfeleid nagy része mobilról keres – weboldalad minden eszközön gyönyörűen jelenik meg és gyorsan működik.",
    metric: "100%",
    metricLabel: "mobilbarát",
  },
  {
    icon: "🎯",
    title: "Ügyfélszerzésre optimalizálva",
    desc: "Nem csak szép, hanem hatékony is. Minden elem az ügyfelek megszerzésére van optimalizálva: CTA gombok, foglalási rendszer, árak.",
    metric: "+40%",
    metricLabel: "több foglalás",
  },
  {
    icon: "🔒",
    title: "Biztonságos és megbízható",
    desc: "SSL tanúsítvány, rendszeres biztonsági frissítések, napi biztonsági mentések. Weboldalad biztonságban van velünk.",
    metric: "99.9%",
    metricLabel: "üzemidő",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">
              Miért mi?
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Gyors, mobilbarát,{" "}
              <span className="text-gold-gradient">ügyfélközpontú</span>
            </h2>
            <p className="mt-5 text-[#a0a0a0] text-lg leading-relaxed">
              Nem csak egy weboldalt kapod – egy ügyfélszerző eszközt. Tudjuk, hogy barberként és fodrászként az időd értékes, ezért mindent mi intézünk.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Iparági tapasztalat a szépségszektorban",
                "Magyar nyelvű támogatás és kommunikáció",
                "Folyamatos karbantartás és fejlesztés",
                "Nincs rejtett díj, átlátható árazás",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#d0d0d0] text-sm">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="#kapcsolat"
              className="mt-10 inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#F0CF60] text-black font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:scale-105"
            >
              Ingyenes konzultáció
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-[#111] border border-[#222] rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">{feature.desc}</p>
                <div>
                  <span className="text-2xl font-bold text-[#D4AF37]">{feature.metric}</span>
                  <span className="text-xs text-[#666] ml-2">{feature.metricLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
