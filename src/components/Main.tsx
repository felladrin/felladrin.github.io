import React from "react";
import { ContactForm } from "./ContactForm";
import { Intro } from "./Intro";
import { Articles } from "./Articles";

export function Main() {
  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <Intro />
          </div>
          <div className="col-lg-6">
            <Articles />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
