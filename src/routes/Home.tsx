import Services from "../services";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/serviceCard";
import Title from "../components/title";
import { FcGoogle } from "react-icons/fc";
import { useUser } from "../context/UserContext";

const Home = () => {
  const { user, loginWithGoogle } = useUser();

  const navigate = useNavigate();

  function handleReserve() {
    if (user) {
      navigate("/");
    } else {
      loginWithGoogle();
    }
  }

  if (!user) {
    return (
      <div>
        <div className="flex justify-end">
          <img src="poste-barber.png" alt="" width={330} />
        </div>
        <h1 className="font-[Jaini] flex justify-center text-6xl text-[#6E43F0]">
          BarberTime
        </h1>
        <h3 className=" font-semibold  flex justify-center pt-30 text-2xl text-[#6E43F0]">
          Login with:
        </h3>

        <button
          className="flex justify-center items-center m-auto mt-8 p-2 bg-white cursor-pointer rounded-lg 
                   shadow-[0_0_10px_rgba(128,128,128,0.8)] hover:shadow-[0_0_25px_rgba(128,128,128,0.7)] transition-shadow duration-300"
          onClick={handleReserve}
        >
          <FcGoogle size={30} />
        </button>
        <div className="pb-50"></div>
      </div>
    );
  }
  return (
    <div className="flex flex-col px-5  max-w-full text-[#6E43F0] ">
      <div>
        <Title />
        <h2 className="flex justify-center py-4 italic text-lg text-[#858585]">
          Escolha um serviço
        </h2>
        <div className="bg-[#DEE6FF]  rounded-xl flex">
          <p className="py-2 px-6 text-center  font-medium ">
            Bem-vindo a nossa barbearia, aqui fazemos diversos serviços e você
            pode fazer um agendamento a qualquer hora em qualquer lugar.
          </p>
        </div>
        <p className="pt-6 text-center text-lg pb-2  font-medium ">Serviços</p>
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
      </div>
    </div>
  );
};

export default Home;
