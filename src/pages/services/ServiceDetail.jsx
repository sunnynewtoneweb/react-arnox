import { useParams } from "react-router-dom";
import { servicesData } from "./serviceData";
import FaqAccordian from "../../components/common/FaqAccordian.jsx";
import CtaSection from "../../components/common/CtaSection";

function ServiceDetail() {
  const { slug } = useParams();  
  const service = servicesData[slug];

  if (!service) {
    return <section className="pt-200 pb-120 position-relative text-center">
      <div className="curves">
          <div className="ring_curve1"></div>
          <div className="ring_curve2 d-none d-md-block"></div>
          <div className="glow_curve1"></div>
          <div className="glow_curve2"></div>
        </div>
        <div className="container">
          <h1 className="fw-bolder mb-30">Ooops! Service Not Found</h1>
          <p>Sorry! The requested URL was not found on this server.</p>
        </div>
      </section>;
  }

  return (
    <>
      <section className="hero_area pt-200 position-relative">
        <div className="curves">
          <div className="ring_curve1"></div>
          <div className="ring_curve2 d-none d-md-block"></div>
          <div className="glow_curve1"></div>
          <div className="glow_curve2"></div>
        </div>
        <div className="container">
          <div className="hero_content text-center">
            <h1 className="sec-sub-title mb-2"><small>{servicesData.mptitle}</small></h1>
            <h2 className="fw-bolder mb-30">{service.pagetitle}</h2>
            <p className="col-xl-9 mx-auto">
              {service.pagedescription}
            </p>
          </div>
        </div>
      </section>

      <section className="pt-4 pt-lg-5 pb-80">
        <div className="container">
          <figure className="mb-30 mb-lg-5"><img src={service.bannerimage} width="100%" alt="Service 1"/></figure>
          <div className="row border-md-bottom mb-5 text-center text-md-start">
            <h4 className="sec-sub-title col-md-4 mb-4">
              {service.sectitleline1}
              {service.sectitleline2 && (
                <>
                  <br className="d-none d-md-block" />
                  {service.sectitleline2}
                </>
              )}
              </h4>
            <div className={`col-md-8 ${slug === "dedicated" ? "mb-0 mb-md-4 mb-xl-5" : ""}`}>
              <p>{service.secdescription}</p>
              {service.secfeatures?.length > 0 && (
                <ul className="check_list sm mb-0 mb-md-4 mb-xl-5">
                  {service.secfeatures.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="row text-md-start text-center services_items">
            {service.serviceItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="col-md-4 mb-3 mb-md-0 icon" key={index}>
                  <i>
                    <Icon />
                  </i>

                  <h6 className="text-uppercase fw-bold mt-3 mt-md-5 mb-3">
                    {item.title}
                  </h6>

                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div className="col-lg-4 col-xl-4 col-xxl-3 pt-4">
              <div className="sticky_detail">
                <h2 className="sec-sub-title text-center text-lg-start"><small className="lh-base">{servicesData.faqsubtitle}</small> {servicesData.faqtitle}</h2>
              </div>
            </div>
            <div className="col-lg-8 col-xl-8">
              <FaqAccordian faqAccordianData={service.faq}/>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

export default ServiceDetail;
