import { serviceDescription } from "./serviceDescription";
import { Link } from "react-router-dom";

function ServiceSection() {
  return (
    <section className="pt-80 pb-80">
      <div className="container">
        {serviceDescription.map((service, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`row 
                ${index !== serviceDescription.length - 1 ? "border-md-bottom pb-80" : ""}
                ${index !== 0 ? "pt-80" : ""}
                text-center text-md-start 
                justify-content-between
                ${isReverse ? "" : "flex-row-reverse"}
              `}
            >
              <div className="col-md-6 col-xl-5">
                <figure className="mb-30 mb-md-0 service_list_img">
                  <Link to={`/${service.slug}`}>
                    <img
                      src={service.image}
                      width="100%"
                      alt={service.title}
                    />
                  </Link>
                </figure>
              </div>

              <div className="col-md-6 col-lg-5">
                <div className="sticky_detail">
                  <h4 className="sec-sub-title mb-4">
                    <small>{service.subtitle}</small> {service.title}
                  </h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServiceSection;
