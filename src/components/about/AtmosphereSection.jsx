import { atmosphereDescription } from "./atmosphereDescription"
import AtmosSlider from "./AtmosSlider.jsx";

function AtmosphereSection(){
  return(
    <section className="pt-120 pb-120 bg_lightSky">
      <div className="container">
        <h4 className="sec-sub-title text-center mb-4 mb-lg-5"><small>{atmosphereDescription.samlltitle}</small> {atmosphereDescription.title}</h4>
      </div>
      <AtmosSlider />
    </section>
  );
}

export default AtmosphereSection;