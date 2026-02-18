import { teamItems } from "./teamDescription";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function TeamSlider() {
  return (
    <>
      <Splide
        options={{
          type: 'loop',
          arrows: true,
          pagination:false,
          perPage: 4,
			    perMove: 1,
          gap: '30px',
          breakpoints: {
            1800: {
              perPage: 4,
              perMove: 1,
            },
            1199: {
              perPage: 3,
              perMove: 1,
            },
            991: {
              perPage: 2,
              perMove: 1,
            },
            767: {
              perPage: 2,
              perMove: 1,
            },
            575: {
              perPage: 1,
              perMove: 1,
              padding: '15%',
              gap:'15px',
              focus: 'center',
            },
          },
        }}
      >
        {teamItems.map((item) => (
        <SplideSlide key={item.id}>
          <div className="splide__slide__container team_item">
            <figure>
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
            </figure>
            <div className="detail">
              <h5>{item.title}</h5>
              <span>{item.status}</span>
            </div>
          </div>
        </SplideSlide>
        ))}
      </Splide>
    </>
  );
}

export default TeamSlider;