import { useEffect, useRef, useState } from "react";
import { counterItems } from "./counterData";

function CounterSec() {
  const [startCounter, setStartCounter] = useState(false);
  const [counts, setCounts] = useState(
    counterItems.map(() => 0)
  );

  const sectionRef = useRef(null);

  // 👇 Scroll detect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounter(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 👇 Counter logic
  useEffect(() => {
    if (!startCounter) return;

    const duration = 2000;
    const intervalTime = 16;

    const intervals = counterItems.map((item, index) => {
      let start = 0;
      const increment = item.number / (duration / intervalTime);

      return setInterval(() => {
        start += increment;

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] =
            start >= item.number
              ? item.number
              : Math.floor(start);
          return updated;
        });

        if (start >= item.number) {
          clearInterval(intervals[index]);
        }
      }, intervalTime);
    });

    return () => intervals.forEach(clearInterval);
  }, [startCounter]);

  return (
    <section
      ref={sectionRef}
      className="pb-120 text-center about_counter"
    >
      <div className="container">
        <div className="row">
          {counterItems.map((item, index) => {
            const mb = index < 2 ? "mb-2 mb-md-0" : "";
            const borderStart = index % 2 !== 0 ? "border-start" : "";
            const borderEnd = index === 1 ? "border-end" : "";

            return (
              <div
                key={item.id}
                className={`col-md-3 col-6 pt-2 pt-lg-1 ${mb} ${borderStart} ${borderEnd}`}
              >
                <strong className="counter_numbers themeGradient">
                  {counts[index]}
                  {item.suffix}
                </strong>

                <h6 className="text-uppercase dark fw-bold mb-3 mb-lg-4">
                  {item.title}
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CounterSec;
