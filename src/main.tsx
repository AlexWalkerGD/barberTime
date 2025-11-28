import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Home from "./routes/Home";
import Footer from "./components/footer";
import Times from "./routes/Times.tsx";
import Bookings from "./routes/Booking.tsx";
import Confirmation from "./routes/Confirmation.tsx";
import { BookingProvider } from "./context/BookingContext";
import { UserProvider } from "./context/UserContext";
import PrivateRoute from "./routes/PrivateRoute";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <BookingProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<Home />} />

              <Route
                path="/Times"
                element={
                  <PrivateRoute>
                    <Times />
                  </PrivateRoute>
                }
              />
              <Route
                path="/Bookings"
                element={
                  <PrivateRoute>
                    <Bookings />
                  </PrivateRoute>
                }
              />
              <Route
                path="/Confirmation"
                element={
                  <PrivateRoute>
                    <Confirmation />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </BookingProvider>
    </UserProvider>
  </StrictMode>
);
