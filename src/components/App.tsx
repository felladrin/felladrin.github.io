import React from "react";
import { IconContext } from "react-icons";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export const App = () => (
  <React.StrictMode>
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <Header />
      <Main />
      <Footer />
    </IconContext.Provider>
  </React.StrictMode>
);
