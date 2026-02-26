import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BioSpores from "@/components/BioSpores";
import BioNetwork from "@/components/BioNetwork";
import Services from "@/components/Services";
import WhyVeltia from "@/components/WhyVeltia";
import HowWeWork from "@/components/HowWeWork";
import Metrics from "@/components/Metrics";
import GreenOps from "@/components/GreenOps";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BioSpores />
      <Navbar />
      <Hero />
      <BioNetwork variant={1} />
      <Services />
      <BioNetwork variant={2} flip />
      <WhyVeltia />
      <BioNetwork variant={3} />
      <HowWeWork />
      <BioNetwork variant={1} flip />
      <Metrics />
      <GreenOps />
      <BioNetwork variant={2} />
      <CaseStudies />
      <BioNetwork variant={3} flip />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
