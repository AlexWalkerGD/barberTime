import { useBooking } from "../context/BookingContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatFullDate } from "../utils/date";
import { WEEK_NAMES } from "../utils/constants";
import Title from "../components/title";
import ConfirmButton from "../components/confirmButton";

const Booking = () => {
  const { date, time, barber, setBarber } = useBooking();
  const [selected, setSelected] = useState(barber || "");
  const navigate = useNavigate();

  const barbers = ["Bruno", "Jorge", "Hugo"];

  const handleSelect = (name: string) => {
    setSelected(name);
    setBarber(name);
  };

  return (
    <div className="text-[#6E43F0]">
      <Title />
      <h2 className="flex pl-5 pt-10 italic text-lg text-[#858585]">
        Seu agendamento
      </h2>
      <div className=" border border-zinc-500/50 rounded-2xl mx-3 py-5 mt-2 flex flex-row justify-between">
        <div className=" pl-3 ">
          <p>{WEEK_NAMES[date?.getDay() || 0]}</p>
          <p>
            {formatFullDate(date)} - às {time} horas
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

      <div className=" border border-zinc-500/50 rounded-2xl mx-3 py-10 px-30 flex flex-col gap-4 font-semibold">
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
        <ConfirmButton
          onClick={() => {
            navigate("/Confirmation");
          }}
          disabled={!barber}
        />
      </div>
    </div>
  );
};

export default Booking;
