import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.body.appendChild(document.createElement("div"))
);
