import React from "react";

export function ContactForm() {
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
            <input name="entry.605799379" type="text" placeholder="Type your name" />
          </div>
          <div className="col">
            <label>Your Email</label>
            <input name="entry.1273651383" type="text" placeholder="Type your email" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Your Message</label>
            <textarea
              name="entry.1634498"
              placeholder="What do you have in mind?"
              rows={10}
              style={{ display: "block", width: "100%" }}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" style={{ margin: ".5em 0", width: "100%" }}>
              SUBMIT
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
