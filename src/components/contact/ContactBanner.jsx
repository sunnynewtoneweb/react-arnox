import BannerCurves from "../common/BannerCurves";

function ContactBanner({ subtitle, title, description }) {
  return (
    <section className="hero_area pt-200 pb-120 position-relative">
      <BannerCurves />

      <div className="container">
        <div className="hero_content text-center col-xl-9 mx-auto">
          <h1 className="sec-sub-title mb-2">
            <small>{subtitle}</small>
          </h1>

          <h2 className="fw-bolder mb-30">{title}</h2>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default ContactBanner;