import { useBooking } from "../context/BookingContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatFullDate } from "../utils/date";
import { WEEK_NAMES } from "../utils/constants";
import Title from "../components/title";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const Booking = () => {
  const { service, date, time, barber, setBarber } = useBooking();
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
      <h2 className="flex pt-10 italic text-lg justify-center text-[#858585]">
        Seu agendamento
      </h2>

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
        <button
          onClick={() => navigate("/Times")}
          disabled={!barber}
          className={`bg-[#DEE6FF] border border-zinc-500/50 p-2 px-5 rounded-xl text-[#6E43F0] font-semibold
      ${
        !barber
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-[#bcc5e0] cursor-pointer"
      }`}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default Booking;
