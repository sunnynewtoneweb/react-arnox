import ServiceBanner from "../components/services/ServiceBanner";
import ServiceSection from "../components/services/ServiceSection";
import FaqSection from "../components/services/FaqSection";
import CtaSection from "../components/common/CtaSection";
import useSEO from "../hooks/useSEO";

function Service() {
  useSEO({
    title: "Mobile and Web Design & Web Development Services",
    description:
      "Expert web design, full-stack development, mobile app development, branding strategy, and scalable website solutions built for performance and security.",
  });

  return (
    <>
      <ServiceBanner
        subtitle="Our Services "
        title="Transforming Ideas into Digital Experiences"
        description="As experts in Web design and Web development, we craft tailored digital solutions to elevate your online presence. Whether you need a responsive website or a complex web application, our team delivers with creativity, precision, and innovation. Let's build a seamless digital experience that reflects your brand and meets your business goals."
      />
      <ServiceSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

export default Service;