import { useBooking } from "../context/BookingContext";
import { formatFullDate } from "../utils/date";
import { MONTHS } from "../utils/constants";

const Confirmation = () => {
  const { date, time, barber } = useBooking();

  const monthName = date ? MONTHS[date.getMonth()] : "";

  return (
    <div className="text-[#6E43F0]">
      <h1 className=" font-[Jaini]  flex justify-center pt-7 text-4xl ">
        BarberTime
      </h1>
      <h1 className="flex justify-center pt-15 text-2xl  font-semibold">
        Agendamento Confirmado
      </h1>
      <p className="flex justify-center pt-10 mx-15 text-lg  ">
        Seu agendamento está confirmado para o dia {formatFullDate(date)}, às{" "}
        {time} horas com o {barber}.
      </p>
      <div className="border italic border-zinc-500/50 rounded-2xl py-2 mt-5 mx-15 px-2">
        <p className="flex justify-center text-medium  text-center">
          Você receberá uma resposta automática por email do agendamento.
        </p>
      </div>
      <div className="pt-20 flex justify-center">
        <img src="/image.png" alt="" width={200} />
      </div>
      <h3 className=" text-xl pt-20 px-15 text-center">
        A BarberTime agradece a sua preferência. Nos vemos em breve!
      </h3>
    </div>
  );
};

export default Confirmation;
