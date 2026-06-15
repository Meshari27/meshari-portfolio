function Contact() {
  return (
    <section className="about-section">
      <div className="about-header">
        <p className="small-title">Get In Touch</p>
        <h1>Contact</h1>
      </div>

      <p>
        You can reach me through the contact information below.
      </p>

      <div className="info-grid">
        <article className="info-card">
          <h3>Phone</h3>
          <p>
            <a className="contact-link" href="tel:+966542694425">
              +966542694425
            </a>
          </p>
        </article>

        <article className="info-card">
          <h3>Email</h3>
          <p>
            <a className="contact-link" href="mailto:meshari.thubyani@gmail.com">
              meshari.thubyani@gmail.com
            </a>
          </p>
        </article>

        <article className="info-card">
          <h3>LinkedIn</h3>
          <p>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/meshari-althubyani/"
              target="_blank"
              rel="noreferrer"
            >
              My LinkedIn Profile
            </a>
          </p>
        </article>

        <article className="info-card">
          <h3>GitHub</h3>
          <p>
            <a
              className="contact-link"
              href="https://github.com/Meshari27"
              target="_blank"
              rel="noreferrer"
            >
              My GitHub Profile
            </a>
          </p>
        </article>
      </div>
    </section>
  );
}

export default Contact;