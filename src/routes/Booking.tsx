import { useBooking } from "../context/BookingContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const { date, time, barber, setBarber } = useBooking();
  const [selected, setSelected] = useState(barber || "");

  const navigate = useNavigate();

  const weekDays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

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

  const barbers = ["Bruno", "Jorge", "Hugo"];

  const handleSelect = (name: string) => {
    setSelected(name);
    setBarber(name);
  };

  return (
    <div className="text-[#6E43F0]">
      <h1 className=" font-[Jaini] flex justify-center pt-7 text-4xl ">
        BarberTime
      </h1>
      <h2 className="flex pl-5 pt-10 italic text-lg text-[#858585]">
        Seu agendamento
      </h2>
      <div className=" border border-zinc-500/50 rounded-2xl mx-3 py-5 mt-2 flex flex-row justify-between">
        <div className=" pl-3 ">
          <p>{weekDays[date?.getDay() || 0]}</p>
          <p>
            {formattedDate} de {monthName} - às {time} horas
          </p>
          <p>Pagamento em loja.</p>
        </div>
        <div className="pr-3 flex items-end ">
          <img src="/confirmLogo.png" alt="" width={40} />
        </div>
      </div>

      <p className="pt-16 text-center text-lg pb-2  font-medium ">
        Escolha o barbeiro
      </p>

      <div className=" border-1 border-zinc-500/50 rounded-2xl mx-3 py-10 px-30 flex flex-col gap-4 font-semibold">
        {barbers.map((b) => {
          const isSelected = selected === b;

          return (
            <div
              key={b}
              onClick={() => handleSelect(b)}
              className={`
              border border-zinc-500/50 rounded-2xl py-5 flex flex-row items-center pl-3 gap-2 cursor-pointer transition-all
              ${
                isSelected
                  ? "bg-[#6E43F0] text-white scale-[1.03] shadow-lg"
                  : "bg-white text-[#6E43F0]"
              }
            `}
            >
              <img src="/contact.png" alt={b} width={40} />
              <h3>B {b}</h3>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            navigate("/Confirmation");
          }}
          disabled={!barber}
          className={`bg-[#DEE6FF] border border-zinc-500/50 p-2 px-5 rounded-xl text-[#6E43F0] font-semibold 
    ${
      !barber
        ? "opacity-50 cursor-not-allowed"
        : "hover:bg-[#bcc5e0] cursor-pointer"
    }
  `}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default Booking;
