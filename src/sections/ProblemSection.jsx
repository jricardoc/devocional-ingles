import { useEffect, useRef } from "react";
import "./ProblemSection.css";

const ProblemSection = () => {
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
    <section className="problem section section--dark" ref={sectionRef}>
      <div className="container">
        <div className="problem__header reveal">
          <p className="problem__intro">
            There are too many people trying to look strong…
          </p>
          <h2 className="problem__title">
            WHAT'S MISSING IS{" "}
            <span className="gradient-text">REAL RECONSTRUCTION</span>
          </h2>
        </div>

        <div className="problem__content reveal">
          <div className="problem__text">
            <p>
              What you see today is always the same thing: The same verses
              repeated by different people trying to look profound.
            </p>
            <p className="problem__highlight">
              Faith has become generic content.
            </p>
          </div>

          <div className="problem__divider"></div>

          <div className="problem__text">
            <p>
              That's why so many people feel their emotional and spiritual life
              is stagnant.
            </p>
            <p className="problem__emphasis">
              It's not a lack of God.
              <br />
              It's not a lack of prayer.
            </p>
            <p className="problem__highlight-pink">
              It's a lack of depth.
              <br />
              It's a lack of method.
              <br />
              It's a failure to face the roots.
            </p>
            <p>
              The heart is not tired of God.
              <strong> It's tired of "more of the same".</strong>
            </p>
            <p className="problem__conclusion">
              And this is exactly where you rebuild yourself: when you learn to
              look at your faith, your mind, your patterns, your story, from an
              angle you've never seen before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
