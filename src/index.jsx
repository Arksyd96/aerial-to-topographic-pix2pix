import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ContextProvider } from "./context";
import "./sass/main.scss";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("app")
);
