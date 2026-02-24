import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyVeltia from "@/components/WhyVeltia";
import HowWeWork from "@/components/HowWeWork";
import Metrics from "@/components/Metrics";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyVeltia />
      <HowWeWork />
      <Metrics />
      <CaseStudies />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
