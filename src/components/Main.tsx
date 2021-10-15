import React from "react";
import { ContactForm } from "./ContactForm";
import { Intro } from "./Intro";
import { Articles } from "./Articles";
import { NpmPackages } from "./NpmPackages";

export function Main() {
  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <Intro />
            <Articles />
          </div>
          <div className="col-lg-6">
            <NpmPackages />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
