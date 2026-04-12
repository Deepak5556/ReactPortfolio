import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { Honeybadger, HoneybadgerErrorBoundary } from "@honeybadger-io/react";
import { HelmetProvider } from "react-helmet-async";

const config = {
  apiKey: import.meta.env.VITE_HONEYBADGER_API_KEY || "hbp_wTGPvuHiV4jmhEgoSAYq9Zf9kFBMsU2lYdto",
  environment: import.meta.env.MODE || "production",
};

const honeybadger = Honeybadger.configure(config);

const container = document.getElementById("root");

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <HoneybadgerErrorBoundary honeybadger={honeybadger}>
        <App />
      </HoneybadgerErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  const root = createRoot(container);
  root.render(app);
}
