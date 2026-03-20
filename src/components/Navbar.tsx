"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Szolgáltatások", href: "#szolgaltatasok" },
  { label: "Portfólió", href: "#portfolio" },
  { label: "Folyamat", href: "#folyamat" },
  { label: "Vélemények", href: "#velemenyek" },
  { label: "Kapcsolat", href: "#kapcsolat" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#222]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-bold tracking-tight">
              <span className="text-gold-gradient">Hajzer</span>
              <span className="text-white">Studio</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#a0a0a0] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#kapcsolat"
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#F0CF60] text-black text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
            >
              Ajánlatot kérek
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#a0a0a0] hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü megnyitása"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#a0a0a0] hover:text-white transition-colors py-1 text-base"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kapcsolat"
              className="mt-2 inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#F0CF60] text-black font-semibold px-5 py-3 rounded-full transition-colors"
              onClick={handleLinkClick}
            >
              Ajánlatot kérek
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
