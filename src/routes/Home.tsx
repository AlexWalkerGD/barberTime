import Services from "../services";
import ServiceCard from "../components/serviceCard";
import Title from "../components/title";

const Home = () => {
  return (
    <div className="flex flex-col px-5  max-w-full text-[#6E43F0] ">
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
  );
};

export default Home;
