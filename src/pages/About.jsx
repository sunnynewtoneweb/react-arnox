import AboutBanner from "../components/about/AboutBanner";
import StorySection from "../components/about/StorySection";
import CounterSection from "../components/about/CounterSection";
import TeamSection from "../components/about/TeamSection";
import CtaSection from "../components/common/CtaSection";
import AtmosphereSection from "../components/about/AtmosphereSection";
import useSEO from "../hooks/useSEO";

function About() {
  useSEO({
    title: "Arnox Web LLP - About",
    description:
      "Learn about our passionate team of web design and development experts dedicated to crafting innovative digital solutions tailored to your needs. Discover our expertise and commitment to delivering outstanding results for your online presence.",
  });

  return (
    <>
      <AboutBanner
        subtitle="Crafting Exceptional Web Design & Development "
        pagetitle="Solutions for Your Business"
        title="Professional Web design and Web development services that help your business grow online."
        description="At Arnox Web LLP, we are passionate about building websites that not only look stunning but also perform exceptionally. Our Web design and Web development services are tailored to meet the unique needs of your business, ensuring that you stand out in today’s competitive digital landscape. Whether you need a visually striking design or a robust and scalable website, we are here to deliver quality solutions that drive results."
      />

      <StorySection />
      <CounterSection />
      <TeamSection />
      <CtaSection />
      <AtmosphereSection />
    </>
  );
}

export default About;