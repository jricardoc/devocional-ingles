import { useEffect, useRef } from "react";
import "./AuthorSection.css";

const AuthorSection = () => {
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
    <section className="author section section--light" ref={sectionRef}>
      <div className="container">
        <div className="author__content">
          {/* Author Image */}
          <div className="author__image reveal">
            <div className="author__image-wrapper">
              <img
                src="https://i.imgur.com/2ekQMrE.jpeg"
                alt="Marcelle Costa - Psychologist and creator of the Therapeutic Devotional"
                width="320"
                height="320"
              />
            </div>
          </div>

          {/* Author Content */}
          <div className="author__text reveal">
            <h2 className="author__title">
              Who is <span className="gradient-text">Marcelle Costa</span>
            </h2>

            <div className="author__bio">
              <p>
                Marcelle Costa is a Christian psychologist, cognitive-behavioral
                therapist, and researcher of neuroscience applied to
                spirituality.
              </p>

              <p>
                For over 10 years, she has been helping people understand the
                mental processes behind faith and transform beliefs into
                behavior.
              </p>

              <p>
                Creator of the Biblical Neurotherapy method, Marcelle believes
                that true mental healing comes when science and faith walk
                together.
              </p>
            </div>

            {/* Signature Quote */}
            <blockquote className="author__quote">
              <p className="author__quote-text">
                "Renewing the mind is an act of faith, and also of awareness."
              </p>
              <footer className="author__quote-author">— Marcelle Costa</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
