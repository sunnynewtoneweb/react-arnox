import { useEffect, useRef, useState } from "react";

function CounterCard({ title, number, suffix, description }) {
  const [count, setCount] = useState(0);
  const [startCounter, setStartCounter] = useState(false);
  const counterRef = useRef(null);

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

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCounter) return;

    let start = 0;
    const duration = 2000;
    const increment = number / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= number) {
        start = number;
        clearInterval(counter);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [startCounter, number]);

  return (
    <div ref={counterRef} className="counter__item">
      <h6 className="text-uppercase dark fw-bold mb-4">
        {title}
      </h6>

      <strong className="counter_numbers themeGradient">
        {count}{suffix}
      </strong>

      <p className="mb-0">
        {description}
      </p>
    </div>
  );
}

export default CounterCard;
