import "./App.css";
import { FcGoogle } from "react-icons/fc";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <Outlet />
    </div>
  );
}

export default App;
