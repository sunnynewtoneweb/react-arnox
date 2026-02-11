import { technologiesDescription, technologiesItems } from "./technologiesData.js";
import TechnologieCard from "./TechnologieCard";

function TechnologiesSec() {
  return(
    <section className="technologi_area pt-120 pb-100 bg_lightSky">
      <div className="container md">
        <div className="position-relative">
          <h2 className="sec-title d-none d-md-block mb-0">{technologiesDescription.title}</h2>
          <h3 className="sec-sub-title center-absolute">{technologiesDescription.subtitle}</h3>
        </div>
        <p className="sec_info text-center col-lg-8 mx-auto">{technologiesDescription.secparaghraph}</p>

        <div className="row text-center justify-content-center">
          {technologiesItems.map((technologie) => (
            <TechnologieCard
              key={technologie.id}
              icon={technologie.icon}
              title={technologie.title}
            />
          ))}
          <div className="col-12 text-center">
            <span className="lbl-tag mt-4">{technologiesDescription.sectagline}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TechnologiesSec;