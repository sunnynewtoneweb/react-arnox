import { testimonialDescription } from "./testimonialData.js";
import TestimonialSlider from "./TestimonialSlider";

function TestimonialSec() {
  return(
    <section className="testimonial_area pt-120 pb-120 position-relative">
		<div className="curves d-none d-lg-block">
			<div className="glow_curve1"></div>
			<div className="sign_curve3"></div>
		</div>
		<div className="container">
			<div className="position-relative">
				<h2 className="sec-title d-none d-md-block">{testimonialDescription.title}</h2>
				<h3 className="sec-sub-title center-absolute">{testimonialDescription.subtitle}</h3>
			</div>
			<div className="testimonial_slider">
				<TestimonialSlider />
			</div>
		</div>
	</section>
  );
}
export default TestimonialSec;