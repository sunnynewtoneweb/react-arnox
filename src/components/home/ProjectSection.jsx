import { projectDescription } from "./projectData.js";
import ProjectSlider from "./ProjectSlider";

function ProjectSec() {
  return(
    <section className="project_area bg_lightSky pt-120 pb-120 overflow-hidden">
      <div className="container">
        <div className="position-relative">
          <h2 className="sec-title d-none d-md-block mb-0">{projectDescription.title}</h2>
          <h3 className="sec-sub-title center-absolute">{projectDescription.subtitle}</h3>
        </div>
        <p className="sec_info text-center col-lg-8 mx-auto">{projectDescription.secparaghraph}</p>

        <div className="project_slider">
          <ProjectSlider />
          <div className="text-center text-sm-start">
            <a href="projects" className="btns"><span>{projectDescription.btn}</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProjectSec;