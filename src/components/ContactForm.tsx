import React, { ChangeEvent } from "react";
import { restore, createEvent, combine } from "effector";
import { useStore } from "effector-react";

const nameInputChanged = createEvent<ChangeEvent<HTMLInputElement>>();
const emailInputChanged = createEvent<ChangeEvent<HTMLInputElement>>();
const messageTextareaChanged = createEvent<ChangeEvent<HTMLTextAreaElement>>();

const nameInputStore = restore(
  nameInputChanged.map(({ target }) => target.value),
  ""
);
const emailInputStore = restore(
  emailInputChanged.map(({ target }) => target.value),
  ""
);
const messageTextareaStore = restore(
  messageTextareaChanged.map(({ target }) => target.value),
  ""
);
const isSubmitButtonDisabledStore = combine({
  nameInput: nameInputStore,
  emailInput: emailInputStore,
  messageTextarea: messageTextareaStore,
}).map(({ nameInput, emailInput, messageTextarea }) =>
  [nameInput, emailInput, messageTextarea].some(({ length }) => length === 0)
);

export function ContactForm() {
  const isSubmitButtonDisabled = useStore(isSubmitButtonDisabledStore);

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
              onChange={nameInputChanged}
              data-test-id="contact-form-name-input"
            />
          </div>
          <div className="col">
            <label>Your Email</label>
            <input
              name="entry.1273651383"
              type="text"
              placeholder="Type your email"
              onChange={emailInputChanged}
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
              onChange={messageTextareaChanged}
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
