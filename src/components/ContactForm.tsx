import React, { useState, useRef, useCallback } from "react";

export function ContactForm() {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const messageTextarea = useRef<HTMLTextAreaElement>(null);
  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const handleFieldValueChanged = useCallback(() => {
    setSubmitButtonDisabled(
      [nameInput, emailInput, messageTextarea].some((htmlElementRef) => htmlElementRef.current?.value.length === 0)
    );
  }, [nameInput, emailInput, messageTextarea]);

  return (
    <div className="card">
      <h2 className="card-title">Get in touch!</h2>
      <form
        action="https://docs.google.com/forms/d/1zGayNb5zicpGlD_mYiunk8A4-FLB7GSG-YEyxW-URfw/formResponse"
        method="POST"
      >
        <div className="form-row row-eq-spacing-sm">
          <div className="col-sm">
            <label className="required">Your Name</label>
            <input
              name="entry.605799379"
              type="text"
              placeholder="Type your name"
              className="form-control"
              ref={nameInput}
              onChange={handleFieldValueChanged}
              data-test-id="contact-form-name-input"
            />
          </div>
          <div className="col-sm">
            <label className="required">Your Email</label>
            <input
              name="entry.1273651383"
              type="text"
              placeholder="Type your email"
              className="form-control"
              ref={emailInput}
              onChange={handleFieldValueChanged}
              data-test-id="contact-form-email-input"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label className="required">Your Message</label>
            <textarea
              name="entry.1634498"
              placeholder="What do you have in mind?"
              className="form-control"
              rows={5}
              style={{ display: "block", width: "100%" }}
              ref={messageTextarea}
              onChange={handleFieldValueChanged}
              data-test-id="contact-form-message-textarea"
            ></textarea>
          </div>
        </div>
        <div className="form-row">
          <div className="col text-right">
            <button
              type="submit"
              className="btn btn-primary btn-sm btn-block"
              disabled={isSubmitButtonDisabled}
              data-test-id="contact-form-submit-button"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
