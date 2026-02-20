import BannerCurves from "../common/BannerCurves";
import { Link } from "react-router-dom";

function ProjectBanner({ subtitle, infoline, title, description, buttons }) {
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
            {infoline && (
            <span class="lbl-tag mx-xl-5">{infoline}</span>
            )}
            {buttons?.length > 0 && (
              <div className="btn-group justify-content-center mt-lg-4 gap-3 gap-md-4">
                {buttons.map((btn, index) => (
                  btn.link.startsWith("http") ? (
                    <a
                      key={index}
                      href={btn.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btns"
                    >
                      <span className="px-4">
                        {btn.text}
                      </span>
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={btn.link}
                      className={`btns btn_${btn.type || ""}`}
                    >
                      <span className="px-4">
                        {btn.text}
                      </span>
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectBanner;