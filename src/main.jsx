import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { Honeybadger, HoneybadgerErrorBoundary } from "@honeybadger-io/react";

const config = {
  apiKey: import.meta.env.VITE_HONEYBADGER_API_KEY || "hbp_wTGPvuHiV4jmhEgoSAYq9Zf9kFBMsU2lYdto",
  environment: import.meta.env.MODE || "production",
};

const honeybadger = Honeybadger.configure(config);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HoneybadgerErrorBoundary honeybadger={honeybadger}>
      <App />
    </HoneybadgerErrorBoundary>
  </React.StrictMode>
);
