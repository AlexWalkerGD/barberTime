import "./App.css";
import { FcGoogle } from "react-icons/fc";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet />

      {/*
      <h3 className=" font-[Jaini] flex justify-center pt-50 text-3xl text-[#6E43F0]">
        Login with:
      </h3>
      
      <button
        className="flex justify-center items-center m-auto mt-10 p-2 bg-white cursor-pointer rounded-lg 
                   shadow-[0_0_10px_rgba(128,128,128,0.8)] hover:shadow-[0_0_25px_rgba(128,128,128,0.7)] transition-shadow duration-300"
      >
        <FcGoogle size={30} />
      </button>
      
      <Footer />*/}
    </div>
  );
}

export default App;
