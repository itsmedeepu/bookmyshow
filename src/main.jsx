import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BookingcontextProvider from "./assets/store/BoookingContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookingcontextProvider>
      <App />
    </BookingcontextProvider>
  </StrictMode>
);
