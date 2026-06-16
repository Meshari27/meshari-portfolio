function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.email.value;
    const message = form.message.value;
    fetch("http://localhost:5000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });

    alert("Message sent successfully");
    form.reset();
  }
  return (
    <section className="about-section">
      <div className="about-header">
        <p className="small-title">Get In Touch</p>
        <h1>Contact</h1>
      </div>

      <p>You can reach me through the contact information below.</p>

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
            <a
              className="contact-link"
              href="mailto:meshari.thubyani@gmail.com"
            >
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

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Leave a Message</h2>

        <label htmlFor="messageEmail">Email</label>
        <input id="messageEmail" name="email" type="email" />

        <label htmlFor="messageText">Message</label>
        <textarea id="messageText" name="message" rows={6}></textarea>

        <button type="submit" className="primary-button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;