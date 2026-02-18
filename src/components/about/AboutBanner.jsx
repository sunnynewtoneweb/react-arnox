import BannerCurves from "../common/BannerCurves";

function AboutBanner({ subtitle, pagetitle, title, description }) {
  return (
    <section className="hero_area pt-200 position-relative">
      <BannerCurves />

      <div className="container">
        <div className="hero_content text-center col-xl-9 mx-auto">
          <h1 className="d-inline-block mb-30">
            <small>{subtitle}</small> {pagetitle}
          </h1>

          <h2 className="fs-4 mb-4">{title}</h2>
          <p className="mb-0 mb-xl-5">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutBanner;