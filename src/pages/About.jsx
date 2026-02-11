import { aboutBanner } from "./aboutData.js";

function About() {
  return (
    <section className="hero_area pt-200 position-relative">
      <div className="curves">
        <div className="ring_curve1"></div>
        <div className="ring_curve2 d-none d-md-block"></div>
        <div className="glow_curve1"></div>
        <div className="glow_curve2"></div>
      </div>
      <div className="container">
        <div className="hero_content text-center col-xl-9 mx-auto">
          <h1 className="d-inline-block mb-30">
            <small>{aboutBanner.pagesubtitle} </small> {aboutBanner.pagetitle}
          </h1>
          <h2 className="fs-4 mb-4">{aboutBanner.title}</h2>
          <p className="mb-0 mb-xl-5">{aboutBanner.description}</p>
        </div>
      </div>
    </section>
  );
}

export default About;