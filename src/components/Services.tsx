const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Egyedi webdesign",
    desc: "Személyre szabott, egyedi dizájn, amely tükrözi a stúdiód karakterét és stílusát. Sablonok helyett valódi egyediség.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobilbarát fejlesztés",
    desc: "Az ügyfeleid 80%-a mobilról keres fodrászt. Weboldalad tökéletesen működik minden eszközön – mobilon, tableten és asztali gépen.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "SEO optimalizáció",
    desc: "Legyél az első a Google keresési eredményekben \"fodrász [városod]\" keresésre. Helyi SEO-val több organikus látogatót szerezhetsz.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Online foglalási rendszer",
    desc: "Ügyfeleid 0-24 órában tudnak időpontot foglalni. Automatikus emlékeztetők, visszaigazolások, kevesebb lemondás.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Google integráció",
    desc: "Google Térkép, Google Reviews és Google My Business integráció. Ügyfeleid könnyebben megtalálnak, te pedig látod a visszajelzéseket.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Portfólió & galéria",
    desc: "Mutasd meg munkáidat egy gyönyörű galériában. A legjobb vágásaid, stílusaid látványa meggyőzi az érdeklődő ügyfeleket.",
  },
];

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">
            Szolgáltatások
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Minden, amire szükséged van
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[#a0a0a0] text-lg">
            Egy teljes csomag, amellyel profi online jelenlétet építhetsz – és az ügyfelek maguktól jönnek.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-[#111] border border-[#222] rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-all duration-300 hover:bg-[#161616]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:bg-[#D4AF37]/15 transition-colors">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
