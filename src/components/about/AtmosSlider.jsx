import { atmosItems } from "./atmosphereDescription";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import '@splidejs/react-splide/css';

function AtmosSlider() {
  return (
    <>
      <Splide
        className="imgmarqee"
        id="imgmarqee"
        options={{
          type: "loop",
          drag: "free",
          focus: false,
          gap: 30,
          arrows: false,
          pagination: false,
          autoWidth: true,
          autoScroll: {
            speed: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
          },
          breakpoints: {
            767: { gap: 20 },
            575: { gap: 10 },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {atmosItems.map((item) => (
          <SplideSlide key={item.id}>
            <div className="splide__slide__container">
              <img src={item.image} alt={item.alt} />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}

export default AtmosSlider;