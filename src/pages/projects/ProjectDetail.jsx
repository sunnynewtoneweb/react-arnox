import { useParams } from "react-router-dom";
import { projectlistDescription } from "../../components/projects/projectlistDescription";
import ProjectBanner from "../../components/projects/ProjectBanner.jsx";
import { projectMetaConfig, projectOverview } from "./projectMetaConfig.js"
import { projectApproach } from "./projectApproach.js"
import CtaSection from "../../components/common/CtaSection";

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

  const hasMetaData = projectMetaConfig.some(
    (meta) => project[meta.key]
  );
  const hasOverviewData = projectOverview.some(
    (meta) => project[meta.key]
  );
  const shouldShowSection = hasMetaData || hasOverviewData;

  const hasApproach = projectApproach.some(
    (meta) => project[meta.key]
  );

  const hasScreen = !!project.screen;
  const hasMobileScreen = !!project.mobileScreen;
  const shouldShowImageSection = hasScreen || hasMobileScreen;

  return (
    <>
      <ProjectBanner
          subtitle={project.category}
          title={project.title}
          description={project.description}
          buttons={[
            {
              text: "Visit Live Site",
              link: project.link,
            },
            {
              text: "Back to Projects",
              link: `/projects`,
              type: "secondary"
            }
          ]}
        />

      {project.screen?.trim() && (
        <section className="pt-120 lapmock_area">
          <div className="container">
            <div className="laptop-mockup">
              <img className="mockup_img" src="../images/laptop-mockup.svg" alt="laptop mockup" />
              <div className="screen">
                <img src={project.screen} alt={project.title} />
              </div>
            </div>
          </div>
        </section>
      )}

      {shouldShowSection && ( 
        <section className="pt-120"> 
          <div className="container">
            <div className="row gy-4">
              {hasMetaData && ( 
                <div className="col-lg-7 align-self-center">
                  <div className="row gy-4 gy-lg-5">
                    {projectMetaConfig.map((meta, index) => { 
                      const value = project[meta.key]; 
                      if (!value) return null; 
                        return ( 
                        <div className="col-sm-6" key={index}>
                          <div className="pdass_block"> 
                            <i> <img src={meta.icon} alt={meta.label} /> </i>
                            <div>
                              <h6>{meta.label}</h6>
                              <p>{value}</p>
                            </div>
                          </div>
                        </div>
                      ); 
                    })}
                  </div>
                </div>
              )}
              {hasOverviewData && ( 
                <div className="col-lg-5">
                  <div className="proverview_box">
                    {projectOverview.map((meta, index) => { 
                      const value = project[meta.key];
                      if (!value) return null; 
                        return ( 
                        <div className="pdass_block" key={index}>
                          <h6>{meta.label}</h6>
                          <p>{value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div> 
        </section> 
      )}

      {project.problem?.length > 0 && (
        <section className="pt-120 problem_area text-center">
          <div className="container">
            {project.problem.map((item, index) => (
              <div className="inner pt-80 pb-80" key={index}>
                <h3 className="sec-sub-title mb-30 white">Problem & Challenge</h3>
                <p className="white">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {hasApproach && (
        <section className="pt-120 approach_area">
          <div className="container">
            <h3 className="sec-sub-title mb-30 mb-lg-5 text-center">Our Strategic Approach</h3>
            <div className="row gy-4 justify-content-center">
              {projectApproach.map((meta, index) => {
                const value = project[meta.key];
                if (!value) return null;
                return (
                  <div className="col-md-4" key={index}>
                    <div className="approach_block">
                      <i>
                        <img src={meta.icon} alt={meta.label} />
                      </i>
                      <div>
                        <h6>{meta.label}</h6>
                        <p>{value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {shouldShowImageSection && ( 
        <section className="pt-120"> 
          <div className="container position-relative d-flex flex-column flex-sm-row align-items-center align-items-sm-end">
            {hasScreen && ( 
              <div className="desktop_screen">
                  <img
                    src={project.screen}
                    alt={project.title}
                  />
              </div>
            )}
            {hasMobileScreen && ( 
              <div className="mobile_screen">
                  <img
                    src={project.mobileScreen}
                    alt={project.title}
                  />
              </div>
            )}
          </div> 
        </section> 
      )}

      {project.process?.length > 0 && (
        <section className="pt-120">
          <div className="container">
            <h3 className="sec-sub-title mb-30 mb-lg-5 text-center">
              The Process
            </h3>

            <div className="process_items">
              {project.process.map((item, index) => (
                <div className="process_item" key={index}>
                  <span className="count">{item.count}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.paragraph}</p>
                  </div>
                  <div className="img">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}

export default ProjectDetail;