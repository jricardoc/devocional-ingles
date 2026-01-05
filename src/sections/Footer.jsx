import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <h3 className="footer__logo">
              <span className="gradient-text">Psychologists</span> Collection
            </h3>
            <p className="footer__description">
              Psychologists Collection is a brand specialized in practical
              resources for psychologists and therapists, focusing on materials
              applicable to clinical practice, professional ethics, and
              continuous development. Our commitment is to deliver clarity,
              responsibility, and real usefulness to every client.
            </p>
          </div>

          <div className="footer__info">
            <div className="footer__contact">
              <p>
                <strong>CNPJ:</strong> 50.486.581.0001-91
              </p>
              <p>
                <strong>Support Email:</strong>{" "}
                recursosbiblicosterapeutas@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="footer__legal">
          <div className="footer__legal-section">
            <h4>Legal Notice</h4>
            <p>
              This site does not guarantee specific results. Professional
              development and results in practice depend on individual factors
              such as experience, work context, content application, and
              consistency.
            </p>
            <p>
              The available materials are educational and informational in
              nature and do not replace academic training, clinical supervision,
              guidelines from your Professional Council, or technical support
              when needed.
            </p>
          </div>

          <div className="footer__legal-section">
            <h4>Protection and Security</h4>
            <p>
              This site uses standard SSL encryption, ensuring safe browsing and
              purchasing. All transactions are processed through trusted payment
              platforms, with data protection and secure operations.
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2025 Psychologists Collection – All rights reserved.
          </p>
          <p className="footer__developer">
            Developed by{" "}
            <a
              href="https://jricardodev.com.br"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit RICCS website"
            >
              RICCS
            </a>{" "}
            /{" "}
            <a
              href="https://www.instagram.com/jricardodev/"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow @jricardodev on Instagram"
            >
              @jricardodev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
