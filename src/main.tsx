// Entry point that mounts the React application
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// Render the root component
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);