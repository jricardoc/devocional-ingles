import { useEffect, useRef } from "react";
import "./FinalCTASection.css";

const FinalCTASection = () => {
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
    <section className="final-cta section" id="buy" ref={sectionRef}>
      <div className="final-cta__bg">
        <div className="final-cta__glow final-cta__glow--1"></div>
        <div className="final-cta__glow final-cta__glow--2"></div>
      </div>

      <div className="container">
        <div className="final-cta__header reveal">
          <p className="final-cta__tagline">
            If you want to live better, this is the way
          </p>
          <h2 className="final-cta__title">
            <span>THE ONLY</span>
            <span className="gradient-text">THERAPEUTIC</span>
            <span className="gradient-text">DEVOTIONAL</span>
          </h2>
          <p className="final-cta__subtitle">
            The only way to live faith without pretending, using the greatest
            tool for transformation:
            <strong> The Applied Bible.</strong>
          </p>
        </div>

        <div className="final-cta__content">
          <div className="final-cta__image reveal">
            <img
              src="https://www.acervodopsicologo.com/wp-content/uploads/2025/12/bannersemfundo-ingles.webp"
              alt="Therapeutic Devotional book cover"
              width="400"
              height="480"
            />
          </div>

          <div className="final-cta__details reveal">
            <ul className="final-cta__features">
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Immediate and Lifetime Access
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Practical Application Journal Included
              </li>
            </ul>

            <div className="final-cta__pricing">
              <span className="final-cta__promo-tag">🔥 Launch Promotion</span>
              <span className="final-cta__price-original">from $99.90</span>
              <span className="final-cta__price-label">for only</span>
              <span className="final-cta__price">$19.90</span>
            </div>

            <a
              href="https://pay.hotmart.com/X103673386F"
              title="Buy Therapeutic Devotional on Hotmart"
              className="btn btn--primary btn--large final-cta__button animate-glow"
            >
              BUY NOW
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
      </div>
    </section>
  );
};

export default FinalCTASection;
