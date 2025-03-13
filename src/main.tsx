import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Navigation } from "./routes/Navigation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navigation />
  </StrictMode>
);
