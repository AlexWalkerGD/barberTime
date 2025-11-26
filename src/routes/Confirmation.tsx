import { GiFireworkRocket } from "react-icons/gi";

const Confirmation = () => {
  return (
    <div>
      <h1 className=" font-[Jaini]  flex justify-center pt-7 text-4xl text-[#6E43F0]">
        BarberTime
      </h1>
      <h1 className="flex justify-center pt-15 text-2xl text-[#6E43F0] font-semibold">
        Agendamento Confirmado
      </h1>
      <p className="flex justify-center pt-10 mx-15 text-lg  text-[#6E43F0]">
        Seu agendamento está confirmado para o dia 15 de agosto, às 15:00 horas
        com o Barbeiro 1.
      </p>
      <div className="border-1 italic border-zinc-500/50 rounded-2xl py-2 mt-5 mx-15 px-2">
        <p className="flex justify-center text-medium text-[#6E43F0] text-center">
          Você receberá uma resposta automática por email do agendamento.
        </p>
      </div>
      <div className="pt-20 flex justify-center">
        <img src="../public/image.png" alt="" width={200} />
      </div>
      <h3 className=" text-[#6E43F0] text-xl pt-20 px-15 text-center">
        A BarberShop agradece a sua preferência. Nos vemos em breve!
      </h3>
    </div>
  );
};

export default Confirmation;
