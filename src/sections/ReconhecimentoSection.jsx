import { useState, useEffect, useRef } from "react";
import "./ReconhecimentoSection.css";

const ReconhecimentoSection = () => {
  const sectionRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const images = [
    "https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-4.jpeg",
    "https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-5.jpeg",
    "https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-6.jpeg",
    "https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-7.jpeg",
    "https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-8.jpeg",
    "https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-9.jpeg",
    "https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-10.jpeg",
    "https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-11.jpeg",
    "https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-12.jpeg",
    "https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-13.jpeg",
    "https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-1.jpeg",
    "https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-2.jpeg",
    "https://www.acervodopsicologo.com/wp-content/uploads/2025/12/acervo-3.jpeg",
  ];

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  // Scroll reveal animation
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

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay || expandedImage) return;
    const interval = setInterval(() => nextImage(), 5000);
    return () => clearInterval(interval);
  }, [autoPlay, expandedImage, images.length]);

  // Touch handlers for swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setAutoPlay(false);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextImage();
    if (distance < -minSwipeDistance) prevImage();
  };

  // Get visible images for carousel (2 at a time)
  const getVisibleImages = () => {
    const secondIndex = (currentImageIndex + 1) % images.length;
    return [
      { url: images[currentImageIndex], index: currentImageIndex },
      { url: images[secondIndex], index: secondIndex },
    ];
  };

  return (
    <section className="reconhecimento section section--dark" ref={sectionRef}>
      <div className="container">
        <div className="reconhecimento__header reveal">
          <h2 className="reconhecimento__title">
            Recognition that{" "}
            <span className="gradient-text">money can't buy</span>
          </h2>
          <p className="reconhecimento__subtitle">
            People who applied what they learned and saw real results: thoughts
            that finally started to organize, emotional crises that lost their
            power, and a mind increasingly aligned with God.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="reconhecimento__carousel reveal"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="reconhecimento__carousel-wrapper">
            {getVisibleImages().map((imgObj, idx) => (
              <div
                key={`${imgObj.index}-${idx}`}
                className="reconhecimento__carousel-item"
              >
                <img
                  src={imgObj.url}
                  alt={`Community testimonial ${imgObj.index + 1}`}
                  width="400"
                  height="400"
                  onClick={() => setExpandedImage(imgObj.url)}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  draggable="false"
                />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            className="reconhecimento__nav reconhecimento__nav--prev"
            aria-label="Previous testimonial"
            onClick={() => {
              prevImage();
              setAutoPlay(false);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="reconhecimento__nav reconhecimento__nav--next"
            aria-label="Next testimonial"
            onClick={() => {
              nextImage();
              setAutoPlay(false);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dots indicators */}
          <div className="reconhecimento__dots">
            {images.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setAutoPlay(false);
                }}
                className={`reconhecimento__dot ${
                  index === currentImageIndex
                    ? "reconhecimento__dot--active"
                    : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reconhecimento__cta reveal">
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
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Modal for expanded image */}
      {expandedImage && (
        <div
          className="reconhecimento__modal"
          onClick={() => setExpandedImage(null)}
        >
          <button
            className="reconhecimento__modal-close"
            aria-label="Close expanded image"
            onClick={() => setExpandedImage(null)}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <img
            src={expandedImage}
            alt="Expanded community testimonial"
            width="800"
            height="800"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ReconhecimentoSection;
