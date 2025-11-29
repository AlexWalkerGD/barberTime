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
import AdminDashboard from "./routes/AdminDashboard.tsx";
import { useUser } from "./context/UserContext";
import { isAdmin } from "./utils/auth.ts";

const ProtectedAdminRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useUser();

  if (!user) return <p>Faça login para acessar.</p>;
  if (!isAdmin(user))
    return <p>Você não tem permissão para acessar esta página.</p>;

  return children;
};

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
                path="/admin"
                element={
                  <ProtectedAdminRoute>
                    <AdminDashboard />
                  </ProtectedAdminRoute>
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
