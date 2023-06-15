import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Information Links</h2>
        <div className="social-media">
          <a href="mailto:malachi.gamblin@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/malachi-gamblin/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/malachigamblin" target="_blank">
            GitHub
          </a>
          <a
            href="https://docs.google.com/document/d/1tbFTSbM8whsBeJd1SNqbYKxpqyfFmG49oq5MXUDoyT4/edit"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
