import { useEffect, useRef } from "react";
import "./AwakeningSection.css";

const AwakeningSection = () => {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="awakening section" ref={sectionRef}>
      <div className="awakening__bg">
        <div className="awakening__gradient"></div>
      </div>

      <div className="container">
        <div className="awakening__content">
          <div className="awakening__comparison reveal">
            <div className="awakening__item awakening__item--highlight">
              <span className="awakening__label">This devotional</span>
              <h2 className="awakening__text gradient-text">
                wants you to
                <br />
                <strong>awaken</strong>
              </h2>
            </div>

            <div className="awakening__versus">
              <span>VS</span>
            </div>

            <div className="awakening__item awakening__item--muted">
              <span className="awakening__label">The world</span>
              <h2 className="awakening__text">
                wants you to
                <br />
                <strong>conform</strong>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwakeningSection;
