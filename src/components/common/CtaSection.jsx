import { ctaDescription } from "./ctaDescription";

function CtaSec(){
  const Icon = ctaDescription.icon;
  return(
    <section className="cta_area pt-120 pb-120">
      <div className="container">
        <div className="cta_area_box pt-120 pb-120 px-3 px-md-5 text-center">
          <Icon />
          <div className="row justify-content-between g-0">
            <div className="col-xl-8 col-md-8">
              <h4 className="text-md-start fw-bold text-white mb-4 mb-md-0"><small className="d-block">{ctaDescription.smalltitle}</small> {ctaDescription.title}</h4>
            </div>
            <div className="col-lg-4 col-md-4 text-md-end align-self-center">
              <a href="contact" className="btns btn_white"><span className="px-lg-5">{ctaDescription.btn}</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSec;