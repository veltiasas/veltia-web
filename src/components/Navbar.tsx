"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import NeonButton from "@/components/ui/NeonButton";
import VeltiaLogo from "@/components/brand/VeltiaLogo";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Diferencial", href: "#diferencial" },
  { label: "Proceso", href: "#proceso" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
] as const;

const SCROLL_THRESHOLD = 50;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-carbon/60 backdrop-blur-[10px] border-b border-neon/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <VeltiaLogo
            variant="dark"
            showTagline={false}
            width={40}
            id="navbar-logo"
          />
          <span className="font-display font-bold text-xl text-gradient-brand">
            VELTIA
          </span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-ice-muted hover:text-neon transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <NeonButton href="#contacto" size="sm" variant="primary">
            Hablemos
          </NeonButton>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-ice p-2 -mr-2"
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-midnight/95 backdrop-blur-lg md:hidden">
          {/* Close button */}
          <button
            onClick={closeMobile}
            className="absolute top-4 right-6 text-ice p-2"
            aria-label="Cerrar menu"
          >
            <X size={28} />
          </button>

          {/* Mobile links */}
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="font-display text-2xl text-ice hover:text-neon transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-4">
              <NeonButton href="#contacto" size="md" variant="primary">
                Hablemos
              </NeonButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
