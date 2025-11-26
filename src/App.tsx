import "./App.css";
import { FcGoogle } from "react-icons/fc";
import Footer from "./components/footer";
import Services from "./services";
import ServiceCard from "./components/serviceCard";

function App() {
  return (
    <div className="flex flex-col px-5  max-w-full ">
      <h1 className=" font-[Jaini] flex justify-center pt-7 text-4xl text-[#6E43F0]">
        BarberTime
      </h1>

      <h2 className="flex justify-center py-4 italic text-lg text-[#858585]">
        Escolha um serviço
      </h2>

      <div className="bg-[#DEE6FF]  rounded-xl flex">
        <p className="py-2 px-6 text-center text-[#6E43F0] font-medium ">
          Bem-vindo a nossa barbearia, aqui fazemos diversos serviços e você
          pode fazer um agendamento a qualquer hora em qualquer lugar.
        </p>
      </div>

      <p className="pt-6  text-[#6E43F0] text-center text-lg pb-2  font-medium ">
        Serviços
      </p>

      <div className="border-1 border-zinc-500/50 rounded-2xl py-7">
        {Services.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            description={service.description}
            price={service.price}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>

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
