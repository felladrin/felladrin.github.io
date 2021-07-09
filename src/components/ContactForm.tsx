import React, { useState, useEffect } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    setSubmitButtonDisabled([name, email, message].some((field) => field.length === 0));
  }, [name, email, message]);

  return (
    <form
      action="https://docs.google.com/forms/d/1zGayNb5zicpGlD_mYiunk8A4-FLB7GSG-YEyxW-URfw/formResponse"
      method="POST"
    >
      <fieldset>
        <legend>Get in touch!</legend>
        <div className="row">
          <div className="col">
            <label>Your Name</label>
            <input
              name="entry.605799379"
              type="text"
              placeholder="Type your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-test-id="contact-form-name-input"
            />
          </div>
          <div className="col">
            <label>Your Email</label>
            <input
              name="entry.1273651383"
              type="text"
              placeholder="Type your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-test-id="contact-form-email-input"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Your Message</label>
            <textarea
              name="entry.1634498"
              placeholder="What do you have in mind?"
              rows={5}
              style={{ display: "block", width: "100%" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              data-test-id="contact-form-message-textarea"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              type="submit"
              style={{ margin: ".5em 0", width: "100%" }}
              disabled={isSubmitButtonDisabled}
              data-test-id="contact-form-submit-button"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
