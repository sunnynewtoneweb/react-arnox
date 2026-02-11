import { serviceDescription, servicesItems } from "./serviceData.js";
import ServiceCard from "./ServiceCard";

function ServiceSec() {
  return (
    <section className="service_area pt-120 pb-120">
      <div className="container">
        <div className="position-relative">
          <h2 className="sec-title d-none d-md-block">{serviceDescription.title}</h2>
          <h3 className="sec-sub-title center-absolute">{serviceDescription.subtitle}</h3>
        </div>
        <div className="row justify-content-center">
          {servicesItems.map((service) => (
            <ServiceCard
              key={service.id}
              link={service.link}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div className="text-center">
          <a href="services.php" className="btns"><span>{serviceDescription.btn}</span></a>
        </div>
      </div>
    </section>
  );
}
export default ServiceSec;