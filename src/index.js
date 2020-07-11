import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppTest } from "./AppTest";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <AppTest />

    {/* <AppTest /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
