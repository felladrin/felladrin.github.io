import React from "react";
import ReactDOM from "react-dom";
import { IconContext } from "react-icons";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <Header />
      <Main />
      <Footer />
    </IconContext.Provider>
  </React.StrictMode>,
  document.body.appendChild(document.createElement("div"))
);
