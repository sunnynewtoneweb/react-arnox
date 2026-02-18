import { faqDescription } from "./faqDescription.js";
import FaqAccordian from "../common/FaqAccordian.jsx";
import { servicesFAQ } from "../common/faqAccordianData.js";

function FaqSection(){
  return(
    <section>
      <div className="container">
        <div className="row justify-content-between gy-4">
          <div className="col-lg-4 col-xl-4 col-xxl-3 pt-4">
            <div className="sticky_detail">
              <h2 className="sec-sub-title text-center text-lg-start"><small className="lh-base">{faqDescription.subtitle}</small> {faqDescription.title}</h2>
            </div>
          </div>
          <div className="col-lg-8 col-xl-8">
            <FaqAccordian faqAccordianData={servicesFAQ}/>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FaqSection;