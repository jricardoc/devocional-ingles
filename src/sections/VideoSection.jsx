import { useEffect, useRef } from "react";
import "./VideoSection.css";

const VideoSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="video section" ref={sectionRef}>
      <div className="video__bg">
        <div className="video__gradient-top"></div>
        <div className="video__gradient-bottom"></div>
      </div>

      <div className="container">
        <div className="video__header reveal">
          <div className="video__titles">
            <h2 className="video__title">
              The book gives you <span className="gradient-text">clarity</span>
            </h2>
            <h2 className="video__title">
              The lessons give you <span className="gradient-text">vision</span>
            </h2>
          </div>
        </div>

        <div className="video__content reveal">
          <p className="video__description">
            These 10 lessons exist because for some, just reading is not enough.
            You need to see the process.
          </p>
          <p className="video__description">
            See how the Bible connects with the mind, how neuroscience explains
            the pattern and gives you a method.
          </p>
          <p className="video__highlight">
            This is where faith stops being just inspiration and becomes{" "}
            <strong>conscious reconstruction</strong>.
          </p>
          <p className="video__description">
            This is where you learn how to transform any common trigger into a
            real path of transformation.
          </p>
        </div>

        <div className="video__cta reveal">
          <a
            href="#buy"
            title="Go to purchase section"
            className="btn btn--primary btn--large"
          >
            GET BOOK + 10 LESSONS
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
