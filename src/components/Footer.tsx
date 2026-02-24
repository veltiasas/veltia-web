import { Linkedin, Github, Mail } from "lucide-react";
import VeltiaLogo from "@/components/brand/VeltiaLogo";

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/dino-antonelli/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/veltiasas", label: "GitHub" },
  { icon: Mail, href: "mailto:contacto@veltia.ar", label: "Email" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-carbon py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side: brand */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <VeltiaLogo
              variant="dark"
              showTagline={false}
              width={50}
              id="footer-logo"
            />
            <div>
              <p className="font-display font-bold text-xl text-gradient-brand">
                VELTIA
              </p>
              <p className="text-sm text-ice-muted mt-1">
                Tecnologia que transforma
              </p>
            </div>
          </div>

          {/* Right side: social icons */}
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-ice-muted hover:text-neon transition-colors cursor-pointer"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted">
            &copy; 2026 VELTIA SAS. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted mt-1">
            Cordoba, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
