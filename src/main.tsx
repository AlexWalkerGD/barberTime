import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Home from "./routes/Home";
import Times from "./routes/Times.tsx";
import Bookings from "./routes/Booking.tsx";
import Confirmation from "./routes/Confirmation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/Times" element={<Times />} />
          <Route path="/Bookings" element={<Bookings />} />
          <Route path="/Confirmation" element={<Confirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
