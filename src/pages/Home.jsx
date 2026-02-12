import Hero from "../components/home/Hero.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";
import TechnologiesSection from "../components/home/TechnologiesSection.jsx";
import AboutSection from "../components/home/AboutSection.jsx";
import ProjectSection from "../components/home/ProjectSection.jsx";
import TestimonialSection from "../components/home/TestimonialSection.jsx";
import CtaSection from "../components/home/CtaSection.jsx";
import useSEO from "../hooks/useSEO";

function Home() {
  
  useSEO({
    title: "Arnox Web – Web Design & Development Company",
    description:
      "Arnox Web is a creative web design & development company delivering modern digital solutions.",
  });

  return (
    <>
      <Hero />    
      <ServicesSection />
      <TechnologiesSection />
      <AboutSection />
      <ProjectSection />
      <TestimonialSection />
      <CtaSection />
    </>
  );
}

export default Home;