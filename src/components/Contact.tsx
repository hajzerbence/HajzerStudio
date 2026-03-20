"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would send to an API
    setSubmitted(true);
  };

  return (
    <section id="kapcsolat" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">
              Kapcsolat
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Kezdjük el
              <br />
              <span className="text-gold-gradient">együtt!</span>
            </h2>
            <p className="mt-5 text-[#a0a0a0] text-lg leading-relaxed">
              Töltsd ki az űrlapot, és 24 órán belül felvesszük veled a kapcsolatot egy ingyenes, kötöttségmentes konzultáció egyeztetéséhez.
            </p>

            {/* What to expect */}
            <div className="mt-8 space-y-4">
              {[
                {
                  icon: "📞",
                  title: "Ingyenes konzultáció",
                  desc: "30 perces, kötöttségmentes hívás az igényeid megismeréséhez",
                },
                {
                  icon: "📋",
                  title: "Egyedi ajánlat",
                  desc: "Személyre szabott árajánlat, amely a saját igényeidhez igazodik",
                },
                {
                  icon: "🚀",
                  title: "Gyors kezdés",
                  desc: "Az egyeztetés után akár 7 napon belül élő weboldal",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-[#a0a0a0] text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="mt-10 pt-8 border-t border-[#1e1e1e]">
              <p className="text-[#666] text-sm mb-3">Vagy írj közvetlenül:</p>
              <a
                href="mailto:hello@hajzerstudio.hu"
                className="text-[#D4AF37] hover:text-[#F0CF60] font-medium transition-colors"
              >
                hello@hajzerstudio.hu
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-[#111] border border-[#222] rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-white text-xl font-bold mb-2">Üzenet elküldve!</h3>
                <p className="text-[#a0a0a0]">
                  Köszönjük az érdeklődésedet! 24 órán belül keresünk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#a0a0a0] mb-1.5">
                      Neved <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#222] focus:border-[#D4AF37]/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder-[#444]"
                      placeholder="Kiss János"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#a0a0a0] mb-1.5">
                      Telefonszám <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#222] focus:border-[#D4AF37]/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder-[#444]"
                      placeholder="+36 30 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#a0a0a0] mb-1.5">
                    Email cím
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#222] focus:border-[#D4AF37]/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder-[#444]"
                    placeholder="janos@studionevem.hu"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#a0a0a0] mb-1.5">
                    Vállalkozás típusa <span className="text-[#D4AF37]">*</span>
                  </label>
                  <select
                    required
                    value={form.businessType}
                    onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#222] focus:border-[#D4AF37]/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Válassz...
                    </option>
                    <option value="barber">Barber Shop</option>
                    <option value="fodrasz">Fodrászat</option>
                    <option value="unisex">Unisex szalon</option>
                    <option value="mas">Egyéb szépségszalon</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#a0a0a0] mb-1.5">
                    Üzenet (opcionális)
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#222] focus:border-[#D4AF37]/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors resize-none placeholder-[#444]"
                    placeholder="Röviden írd le, mit szeretnél – van-e már weboldalad, milyen stílust képzelsz el..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#F0CF60] text-black font-bold py-4 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02]"
                >
                  Ajánlatot kérek – ingyenesen
                </button>

                <p className="text-center text-xs text-[#555]">
                  Kötöttségmentesen – semmi nyomás, csak egy barátságos egyeztetés.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
