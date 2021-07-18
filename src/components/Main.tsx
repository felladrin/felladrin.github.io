import React from "react";
import { ContactForm } from "./ContactForm";
import { Intro } from "./Intro";

export function Main() {
  return (
    <div className="content-wrapper">
      <Intro />
      <ContactForm />
    </div>
  );
}
