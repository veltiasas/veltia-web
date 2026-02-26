import VeltiaLogo from "@/components/brand/VeltiaLogo";

const SERVICES = [
  { icon: "01", name: "Transformacion Digital", desc: "Workflows & Firma Digital" },
  { icon: "02", name: "IA & Agentes", desc: "Automatizacion Inteligente" },
  { icon: "03", name: "Modernizacion Legacy", desc: "Migracion & Refactoring" },
  { icon: "04", name: "FinOps & Cloud", desc: "Optimizacion AWS/Azure/GCP" },
  { icon: "05", name: "Consultoria", desc: "Advisory & Diagnosticos" },
];

export default function FlyerServiciosPage() {
  return (
    <div
      style={{
        width: "1080px",
        height: "1350px",
        overflow: "hidden",
        position: "relative",
        background: "#0A0E14",
        fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
      }}
    >
      {/* Background gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(0,242,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,107,53,0.06) 0%, transparent 50%)",
        }}
      />

      {/* Tech grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(0,242,255,0.03) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      {/* Diagonal accent line top-right */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "400px",
          height: "4px",
          background: "linear-gradient(90deg, transparent, #FF8C42, #00F2FF)",
          transform: "rotate(-2deg)",
          transformOrigin: "top right",
        }}
      />

      {/* === MAIN CONTENT === */}
      <div style={{ position: "relative", zIndex: 10, height: "100%", padding: "50px" }}>

        {/* TOP: Logo + Badge */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <VeltiaLogo variant="dark" showTagline={false} width={80} id="flyer-logo" />
          <div
            style={{
              padding: "8px 20px",
              borderRadius: "20px",
              border: "1px solid rgba(0,242,255,0.3)",
              fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace",
              fontSize: "11px",
              color: "#00F2FF",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Servicios IT & IA
          </div>
        </div>

        {/* TITLE */}
        <div style={{ marginTop: "40px" }}>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            <span style={{ color: "#E0F7FA" }}>SOLUCIONES</span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TECNOLOGICAS
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace",
              fontSize: "13px",
              color: "#8899AA",
              marginTop: "12px",
              letterSpacing: "1px",
            }}
          >
            Cordoba, Argentina — 2026
          </p>
        </div>

        {/* LAYOUT: Photo left + Services right */}
        <div style={{ display: "flex", gap: "40px", marginTop: "40px", height: "700px" }}>

          {/* LEFT: Dino's photo - large, with gradient overlay */}
          <div
            style={{
              width: "420px",
              height: "580px",
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              border: "1px solid rgba(0,242,255,0.15)",
              flexShrink: 0,
            }}
          >
            {/* Photo */}
            <img
              src="/dino.jpg"
              alt="Dino Antonelli"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                filter: "saturate(0) contrast(1.1) brightness(0.9)",
              }}
            />
            {/* Blue duotone overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,50,120,0.55)",
                mixBlendMode: "color",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,180,255,0.15)",
                mixBlendMode: "overlay",
              }}
            />
            {/* Gradient fade to bottom */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, transparent 0%, transparent 40%, rgba(10,14,20,0.7) 70%, rgba(10,14,20,0.95) 100%)",
              }}
            />
            {/* Name overlay at bottom */}
            <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#E0F7FA",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                DINO ANTONELLI
              </p>
              <p
                style={{
                  fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace",
                  fontSize: "13px",
                  color: "#00F2FF",
                  margin: "4px 0 0",
                  letterSpacing: "2px",
                }}
              >
                CTO — VELTIA
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#8899AA",
                  margin: "8px 0 0",
                  lineHeight: 1.4,
                }}
              >
                Arquitecto de software y especialista en IA
              </p>
            </div>
          </div>

          {/* RIGHT: Services list */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingTop: "10px" }}>

            {/* Services badge */}
            <div
              style={{
                display: "inline-block",
                alignSelf: "flex-start",
                padding: "6px 16px",
                borderRadius: "20px",
                background: "rgba(255,140,66,0.15)",
                border: "1px solid rgba(255,140,66,0.3)",
                fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace",
                fontSize: "11px",
                color: "#FF8C42",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Nuestros Servicios
            </div>

            {/* Service items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {SERVICES.map((service) => (
                <div
                  key={service.icon}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 20px",
                    borderRadius: "12px",
                    background: "rgba(26,34,45,0.5)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(0,242,255,0.1)",
                  }}
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
                      fontSize: "28px",
                      fontWeight: 700,
                      background: "linear-gradient(90deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      minWidth: "36px",
                    }}
                  >
                    {service.icon}
                  </span>
                  <div>
                    <p style={{ fontSize: "18px", fontWeight: 600, color: "#E0F7FA", margin: 0, lineHeight: 1.2 }}>
                      {service.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "12px",
                        color: "#8899AA",
                        margin: "2px 0 0",
                      }}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* LinkedIn */}
            <div style={{ marginTop: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "6px",
                  background: "rgba(0,242,255,0.1)",
                  border: "1px solid rgba(0,242,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00F2FF",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                in
              </div>
              <span
                style={{
                  fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace",
                  fontSize: "12px",
                  color: "#8899AA",
                }}
              >
                linkedin.com/in/dino-antonelli
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM: Gradient line + contact */}
        <div style={{ position: "absolute", bottom: "40px", left: "50px", right: "50px" }}>
          <div
            style={{
              width: "100%",
              height: "2px",
              background: "linear-gradient(90deg, #FF6B35, #FF8C42, #00F2FF)",
              borderRadius: "1px",
              marginBottom: "20px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace",
                fontSize: "12px",
                color: "#4A5568",
              }}
            >
              contacto@veltia.ar — veltia.ar
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#8899AA",
              }}
            >
              Tecnologia que transforma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
