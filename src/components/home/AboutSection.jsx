import { aboutDescription } from "./aboutData.js";
import CounterCards from "./CounterCards";
import AboutCard from "./AboutCard";

function AboutSec() {
  return (
    <section className="about_area overflow-hidden pt-120 pb-120 position-relative">
      <div className="curves">
        <div className="glow_curve2 p_right_middle"></div>
        <div className="sign_curve1 d-none d-md-block"></div>
        <div className="sign_curve2 d-none d-md-block"></div>
      </div>
      <div className="container">
        <div className="position-relative">
          <h2 className="sec-title d-none d-md-block">{aboutDescription.title}</h2>
          <h3 className="sec-sub-title center-absolute">{aboutDescription.subtitle}</h3>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <CounterCards />
          </div>
          <div className="col-lg-6">
            <AboutCard />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutSec;