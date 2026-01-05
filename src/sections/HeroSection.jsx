import { useEffect, useRef } from "react";
import "./HeroSection.css";

const HeroSection = () => {
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
    <section className="hero" ref={sectionRef}>
      <div className="hero__bg">
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__badge reveal">✨ Real Transformation</p>

          <h1 className="hero__title reveal">
            <span className="hero__title-line">THE ONLY</span>
            <span className="hero__title-line gradient-text">THERAPEUTIC</span>
            <span className="hero__title-line gradient-text">DEVOTIONAL</span>
          </h1>

          <div className="hero__image reveal">
            <div className="hero__image-wrapper">
              <img
                src="https://www.acervodopsicologo.com/wp-content/uploads/2025/12/bannersemfundo-ingles.webp"
                alt="Therapeutic Devotional book cover"
                width="500"
                height="600"
              />
              <div className="hero__image-glow"></div>
            </div>
          </div>

          <p className="hero__description reveal">
            This devotional was not made to excite you. It was made to transform
            you. You will understand why you repeat the same cycles, why certain
            thoughts dominate you, and how to use the Bible combined with
            Neuroscience as tools for emotional reconstruction. Because
            sometimes what's missing is not more prayer... it's a new way to
            organize your mind before God.
          </p>

          <a
            href="#buy"
            title="Go to purchase section"
            className="btn btn--primary btn--large hero__cta reveal animate-glow"
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

      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
};

export default HeroSection;
