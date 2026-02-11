import { projectItems } from "./projectData.js";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function ProjectSlider() {
  const colorClasses = ["yellow", "blue", "dark_yellow", "purple"];
  return (
    <>
      <Splide
        options={{
          type: false,
          arrows: true,
          pagination:false,
          focus: 'left',
          start: 0,
          perPage: 2,
          perMove: 1,
          gap: '50px',
          breakpoints: {
            1579: {
              start: 1,
              perPage: 2,
              perMove: 1,
              gap: '30px',
            },
            991: {
              start: 1,
              perPage: 2,
              perMove: 1,
              gap: '30px',
            },
            767: {
              start: 1,
              perPage: 2,
              perMove: 1,
            },
            575: {
              start: 1,
              perPage: 1,
              perMove: 1,
              focus: 'center',
            },
          },
        }}
      >
        {projectItems.map((item, index) => {
          const colorClass =
            index % 5 === 0
              ? ""
              : colorClasses[(index - 1) % colorClasses.length];
          // const colorClass =
          //   index === 0
          //     ? ""
          //     : colorClasses[(index - 1) % colorClasses.length];
          return (
            <SplideSlide key={item.id}>
              <div className="splide__slide__container">

                <div className={`project_item ${colorClass}`}>
                  <div className="project_item_curve"></div>
                  <figure>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="d-block w-100"
                      loading="lazy"
                    />
                  </figure>
                </div>

                <div className="detail">
                  <div className="row justify-content-between">
                    <div className="col-lg-auto">
                      <h5 className="text-uppercase mb-4">{item.title}</h5>
                    </div>
                    <div className="col-lg-auto">
                      <a
                        href={item.linkurl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="more-info-link"
                      >
                        {item.linktext}
                      </a>
                    </div>
                  </div>
                  <h6 className="text-uppercase mb-2 mb-lg-3 fw-normal">
                    {item.tag}
                  </h6>
                </div>

              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
}

export default ProjectSlider;