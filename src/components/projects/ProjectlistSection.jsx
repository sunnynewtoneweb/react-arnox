import { projectlistDescription } from "./projectlistDescription";
import { Link } from "react-router-dom";

function ProjectlistSec() {
  const colors = ["blue", "dark_yellow", "", "yellow", "purple", "orange"];
  return(
    <section className="pt-120 pb-80">
		  <div className="container">
        <div className="row gx-4 gy-5">
          {projectlistDescription.map((project, index) => (
            <div className="col-lg-6" key={index}>
              <div className={`project_item ${colors[index % colors.length]}`}>
                <div className="project_item_curve"></div>

                <div className="details">
                  <h2 className="text-uppercase sec-sub-title mb-0 lh-base">
                    <small>{project.category}</small>
                  </h2>
                  <h3 className="fw-bold mb-3">{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <figure>
                  <Link to={`/projects/${project.slug}`}>
                    <img src={project.image} loading="lazy" alt={project.title} />
                  </Link>
                  {/* <a href={project.link} target="_blank" rel="noreferrer">
                    <img
                      src={project.image}
                      loading="lazy"
                      alt={project.title}
                    />
                  </a> */}
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProjectlistSec;