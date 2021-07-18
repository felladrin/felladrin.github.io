import React from "react";
import { IconContext } from "react-icons";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export const App = () => (
  <React.StrictMode>
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <div className="page-wrapper with-navbar with-navbar-fixed-bottom">
        <Header />
        <Main />
        <Footer />
      </div>
    </IconContext.Provider>
  </React.StrictMode>
);
