import { Link } from "react-router-dom";
import BannerCurves from "../components/common/BannerCurves";

function Error() {
  return (
    <section className="hero_area pt-200 pb-200 position-relative text-center">
      <BannerCurves />
      <div className="container">
        <div className="hero_content text-center">
          <h1 className="fw-bold mb-30">
            404 – Page Not Found
          </h1>
          <p className="mb-5">
            Sorry! The page you are looking for does not exist.
          </p>
          <Link to="/" className="btns">
            <span className="px-5">Back to Home</span>
          </Link>
        </div>
      </div>
    </section>

  );
}

export default Error;