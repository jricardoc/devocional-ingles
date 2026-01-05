import { useEffect, useRef } from "react";
import "./MethodSection.css";

const MethodSection = () => {
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

    const elements = sectionRef.current?.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="method section section--dark" ref={sectionRef}>
      <div className="container">
        <div className="method__header reveal">
          <h2 className="method__title">
            You don't need more{" "}
            <span className="gradient-text">motivation</span>
          </h2>
          <p className="method__subtitle">You need clarity</p>
        </div>

        <div className="method__content">
          <div className="method__text reveal-left">
            <p className="method__intro">
              Here you don't just receive verses. You learn to use biblical
              principles with techniques from <strong>neuroscience</strong>,{" "}
              <strong>CBT</strong> and <strong>psychoanalysis</strong> to see
              what almost no one sees:
            </p>

            <ul className="method__list">
              <li>
                <span className="method__bullet"></span> the trigger
              </li>
              <li>
                <span className="method__bullet"></span> the pattern
              </li>
              <li>
                <span className="method__bullet"></span> the root
              </li>
              <li>
                <span className="method__bullet"></span> the emotional meaning
                behind the cycle
              </li>
            </ul>

            <p className="method__conclusion">
              That's why this devotional doesn't turn you into just another
              person inspired for 5 minutes…
              <strong>
                {" "}
                it transforms you into someone who finally has a method to
                change from the inside.
              </strong>
            </p>

            <a
              href="#buy"
              title="Go to purchase section"
              className="btn btn--primary btn--large method__cta"
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

          <div className="method__image reveal-right">
            <div className="method__image-wrapper">
              <img
                src="https://www.acervodopsicologo.com/wp-content/uploads/2025/12/bannersemfundo-ingles.webp"
                alt="Therapeutic Devotional book cover"
                width="450"
                height="540"
              />
              <div className="method__image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
