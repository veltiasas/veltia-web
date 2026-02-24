import type { Metadata } from "next";
import { Inter, Rajdhani, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "VELTIA | Tecnologia que transforma",
  description:
    "Servicios IT e IA para empresas. Transformacion digital, agentes inteligentes, modernizacion legacy, FinOps y consultoria. Cordoba, Argentina.",
  openGraph: {
    title: "VELTIA - Tecnologia que transforma",
    description:
      "Automatizamos procesos, implementamos IA y optimizamos tu infraestructura cloud.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${rajdhani.variable} ${robotoMono.variable} font-body bg-midnight text-ice antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
