import { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { testimonialItems } from "./testimonialData";
import "@splidejs/react-splide/css";

function TestimonialSlider() {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  return (
    <>
      {/* MAIN SLIDER */}
      <Splide
        id="main-testimonial"
        options={{
          type: "fade",
          rewind: true,
          pagination: false,
          arrows: true,
          breakpoints : {
            991: {
              arrows : false,
            },
            767: {
              arrows : false,
            },
            649: {
              arrows : false,
            },
          },
        }}
        ref={mainRef}
      >
        {testimonialItems.map((item) => (
          <SplideSlide key={item.id}>
            <div className="detail">
              <div className="testi_ratings">
                <div>
                  {[...Array(item.rating)].map((_, i) => (
                    <i key={i} className="fa fa-star"></i>
                  ))}
                </div>
                <span>{item.rating}.0</span>
              </div>
              <h6>{item.review}</h6>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* THUMBNAIL SLIDER */}
      <Splide
        id="thumbnail-testimonial"
        options={{
          type: 'loop',
          direction   : 'ttb',
          height      : '450px',
          autoHeight  : true,
          start       : 3,
          perMove     : 1,
          rewind      : true,
          isNavigation: true,
          gap         : 40,
          pagination  : false,
          arrows    : false,
          perPage: 3,
          focus: "center",
          breakpoints : {
            1440: {
              start: 4,
              perPage: 4,
              perMove: 1,
            },
            1279: {
              start: 3,
              perPage: 3,
              perMove: 1,
            },
            991: {
              start: 1,
              perPage: 1,
              perMove: 1,
              direction: 'ltr',
              height: '52px',
              arrows: true,
              focus: false,
            },
            767: {
              start  : 1,
              perPage: 1,
              perMove: 1,
              gap:30,
            },
            649: {
              start  : 1,
              perPage: 1,
              perMove: 1,
              gap:30,
            },
          },
        }}
        ref={thumbsRef}
      >
        {testimonialItems.map((item) => (
          <SplideSlide key={item.id}>
            <div className="authore">
              <span className="nword">{item.initials}</span>
              <div>
                <b className="d-block">{item.name}</b>
                <small>{item.role}</small>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}

export default TestimonialSlider;