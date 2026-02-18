import { useParams } from "react-router-dom";
import { projectlistDescription } from "../../components/projects/projectlistDescription";

function ProjectDetail() {
  const { slug } = useParams();

  const project = projectlistDescription.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return <section className="pt-200 pb-120 position-relative text-center">
      <div className="curves">
          <div className="ring_curve1"></div>
          <div className="ring_curve2 d-none d-md-block"></div>
          <div className="glow_curve1"></div>
          <div className="glow_curve2"></div>
        </div>
        <div className="container">
          <h1 className="fw-bolder mb-30">Ooops! Project Not Found</h1>
          <p>Sorry! The requested URL was not found on this server.</p>
        </div>
      </section>;
  }

  return (
    <section className="pt-200 pb-120">
      <div className="container">

        <h1 className="fw-bold mb-4">{project.title}</h1>

        <img
          src={project.image}
          className="img-fluid mb-4"
          alt={project.title}
        />

        <p>{project.description}</p>

        <a href={project.link} target="_blank" rel="noreferrer" className="btns btn_white mt-4">
          <span className="px-lg-5">Visit Website</span>
        </a>

      </div>
    </section>
  );
}

export default ProjectDetail;