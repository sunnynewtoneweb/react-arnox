import { useEffect, useRef } from "react";

function ScrollToTopProgress() {
  const progressWrapRef = useRef(null);
  const progressPathRef = useRef(null);

  useEffect(() => {
    const progressWrap = progressWrapRef.current;
    const progressPath = progressPathRef.current;

    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;

      progressPath.style.strokeDashoffset = progress;

      if (scroll > 50) {
        progressWrap.classList.add("active-progress");
      } else {
        progressWrap.classList.remove("active-progress");
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="progress-wrap"
      ref={progressWrapRef}
      onClick={scrollToTop}
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          ref={progressPathRef}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        />
      </svg>
    </div>
  );
}

export default ScrollToTopProgress;