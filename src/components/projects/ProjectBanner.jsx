import BannerCurves from "../common/BannerCurves";

function ProjectBanner({ subtitle, infoline, title, description }) {
  return (
    <section className="hero_area pt-200 position-relative">
      <BannerCurves />

      <div className="container">
        <div className="hero_content text-center">
          <h1 className="sec-sub-title mb-2">
            <small>{subtitle}</small>
          </h1>
          <h2 className="fw-bolder mb-30">{title}</h2>
          <div className="col-xl-9 mx-auto">
            <p className="mb-30">{description}</p>
            <span class="lbl-tag mx-xl-5">{infoline}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectBanner;