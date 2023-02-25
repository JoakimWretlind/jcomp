import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components/hooks/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
);
