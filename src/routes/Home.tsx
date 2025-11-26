import Services from "../services";
import ServiceCard from "../components/serviceCard";

const Home = () => {
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
    </div>
  );
};

export default Home;
