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

  const handleBooking = async () => {
    if (!auth.currentUser) {
      toast.error("Faça login antes de agendar!");
      return;
    }

    try {
      await addDoc(collection(db, "bookings"), {
        userId: auth.currentUser.uid,
        userEmail: auth.currentUser.email,
        barber: barber,
        service: service,
        date: date?.toISOString().split("T")[0],
        time: time,
        createdAt: new Date().toISOString(),
      });

      toast.success("Reserva confirmada com sucesso! 🎉", {
        duration: 4000,
        position: "bottom-center",
        style: {
          background: "#6E43F0",
          color: "#fff",
          fontWeight: "bold",
        },
      });

      navigate("/Confirmation");
    } catch (error) {
      console.error("Erro ao salvar agendamento:", error);
      toast.error("Ocorreu um erro ao salvar a reserva.");
    }
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
        <button
          onClick={handleBooking}
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
