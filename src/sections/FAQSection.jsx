import { useState, useEffect, useRef } from "react";
import "./FAQSection.css";

const faqData = [
  {
    question: "What is the Therapeutic Devotional?",
    answer:
      "It is a devotional that combines biblical principles with techniques from neuroscience, CBT (Cognitive Behavioral Therapy), and psychoanalysis. Unlike traditional devotionals, it was created to help you understand the emotional patterns, triggers, and cycles that prevent you from growing spiritually and emotionally.",
  },
  {
    question: "How do I receive the book and lessons?",
    answer:
      "The physical book is shipped to your address with free shipping throughout Brazil. The 10 lessons are made available immediately after purchase; you receive access to an exclusive area where you can watch whenever and as many times as you want.",
  },
  {
    question: "How long does the book take to arrive?",
    answer:
      "The delivery time varies according to your region, usually between 5 to 15 business days. Once the order is dispatched, you will receive a tracking code to follow the delivery.",
  },
  {
    question: "Do the lessons complement the book?",
    answer:
      "Yes! The 10 lessons were created especially to deepen each concept in the book. They bring practical examples, more detailed explanations, and guided exercises that will enhance your transformation experience.",
  },
  {
    question: "Is there a guarantee?",
    answer:
      "Yes, we offer a full guarantee. If for any reason you are not satisfied with the product, just contact us and we will resolve the situation in the best way possible.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes! You can pay in up to 12 installments on your credit card. We also accept PIX and bank slip for cash payment.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq__item ${isOpen ? "faq__item--open" : ""}`}>
      <button
        className="faq__question"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-label={`Expand question: ${question}`}
      >
        <span>{question}</span>
        <svg
          className="faq__icon"
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
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className="faq__answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
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

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section section--dark" ref={sectionRef}>
      <div className="container">
        <div className="faq__header reveal">
          <h2 className="faq__title">
            Your questions deserve{" "}
            <span className="gradient-text">clear answers</span>
          </h2>
        </div>

        <div className="faq__list reveal">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="faq__cta reveal">
          <a
            href="#buy"
            title="Go to purchase section"
            className="btn btn--primary btn--large"
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
    </section>
  );
};

export default FAQSection;
