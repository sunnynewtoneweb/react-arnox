import ProjectBanner from "../components/projects/ProjectBanner.jsx";
import ProjectlistSection from "../components/projects/ProjectlistSection.jsx";
import CtaSection from "../components/common/CtaSection";
import useSEO from "../hooks/useSEO";

function Projects() {
  useSEO({
    title: "Arnox Web LLP - Projects",
    description:
      "Learn about our passionate team of web design and development experts dedicated to crafting innovative digital solutions tailored to your needs. Discover our expertise and commitment to delivering outstanding results for your online presence.",
  });

  return (
    <>
      <ProjectBanner
        subtitle="Our work"
        title="Transforming Ideas into Digital Reality"
        description="Welcome to Arnox Web LLP, where cutting-edge web design meets robust web development. Our expertise in creating visually stunning, highly functional websites ensures that your business thrives in the digital landscape. Whether you need a custom design that aligns with your brand or a fully optimized website that delivers seamless user experiences, we’ve got you covered. "
        infoline="Explore our projects to see how we bring innovative web solutions to life with the perfect blend of creativity and technical excellence."
      />

      <ProjectlistSection />
      <CtaSection />
    </>
  );
}

export default Projects;