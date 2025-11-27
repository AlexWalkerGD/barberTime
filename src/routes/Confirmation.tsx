import { GiFireworkRocket } from "react-icons/gi";
import { useBooking } from "../context/BookingContext";

const Confirmation = () => {
  const { date, time, barber } = useBooking();

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const formattedDate = date ? `${date.getDate()}` : "";
  const monthName = date ? months[date.getMonth()] : "";

  return (
    <div className="text-[#6E43F0]">
      <h1 className=" font-[Jaini]  flex justify-center pt-7 text-4xl ">
        BarberTime
      </h1>
      <h1 className="flex justify-center pt-15 text-2xl  font-semibold">
        Agendamento Confirmado
      </h1>
      <p className="flex justify-center pt-10 mx-15 text-lg  ">
        Seu agendamento está confirmado para o dia {formattedDate} de{" "}
        {monthName}, às {time} horas com o {barber}.
      </p>
      <div className="border-1 italic border-zinc-500/50 rounded-2xl py-2 mt-5 mx-15 px-2">
        <p className="flex justify-center text-medium  text-center">
          Você receberá uma resposta automática por email do agendamento.
        </p>
      </div>
      <div className="pt-20 flex justify-center">
        <img src="../public/image.png" alt="" width={200} />
      </div>
      <h3 className=" text-xl pt-20 px-15 text-center">
        A BarberTime agradece a sua preferência. Nos vemos em breve!
      </h3>
    </div>
  );
};

export default Confirmation;
