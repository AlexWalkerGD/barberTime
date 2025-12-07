import { useBooking } from "../context/BookingContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WEEK_DAYS } from "../utils/constants";
import Title from "../components/title";
import ConfirmButton from "../components/confirmButton";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const Times = () => {
  const { date, setDate, time, setTime, barber, service } = useBooking();
  const [selected, setSelected] = useState("");
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);

  const navigate = useNavigate();

  const today = new Date();
  const days = Array.from({ length: 6 }, (_, i) => {
    const day = new Date();
    day.setDate(today.getDate() + i);
    return day;
  });

  const handleBooking = async () => {
    if (!auth.currentUser) {
      toast.error("Faça login antes de agendar!");
      return;
    }

    try {
      await addDoc(collection(db, "bookings"), {
        userId: auth.currentUser.uid,
        userEmail: auth.currentUser.email,
        userName: auth.currentUser.displayName,
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

  const TIME_LIST = [
    "10:00",
    "10:45",
    "11:30",
    "12:15",
    "13:00",
    "13:45",
    "14:30",
    "15:15",
    "16:00",
    "16:45",
    "17:30",
  ];

  useEffect(() => {
    const fetchBookedTimes = async () => {
      if (!date) return;

      // Formata a data para YYYY-MM-DD
      const dateKey = date.toISOString().split("T")[0];

      try {
        const q = query(
          collection(db, "bookings"),
          where("date", "==", dateKey),
          where("barber", "==", barber)
        );

        const querySnapshot = await getDocs(q);
        const times: string[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.time) times.push(data.time); // coleta os horários já reservados
        });

        console.log("Reservas encontradas para o dia", dateKey, times);
        setBookedTimes(times);
      } catch (error) {
        console.error("Erro ao buscar reservas:", error);
      }
    };

    fetchBookedTimes();
  }, [date]);

  function formatDate(date: Date) {
    return date.toISOString().split("T")[0];
  }

  function timeToDate(date: Date, time: string) {
    const [hours, minutes] = time.split(":").map(Number);
    const d = new Date(date);
    d.setHours(hours, minutes, 0, 0);
    return d;
  }

  const now = new Date();
  const currentDate = date || today;

  const availableTimes = TIME_LIST.filter((t) => {
    if (bookedTimes.includes(t)) return false;

    if (formatDate(currentDate) === formatDate(today)) {
      return timeToDate(today, t) > now;
    }

    return true;
  });

  const isDayFullyBooked = availableTimes.length === 0;

  return (
    <div>
      <Title />
      <h2 className="flex justify-center pt-10 italic text-lg text-[#858585]">
        Agende seu horário
      </h2>

      <p className="pt-6 text-[#6E43F0] text-center text-medium pb-2 font-medium">
        Dias Disponíveis
      </p>

      <div className="bg-[#DEE6FF] flex gap-2 p-5 mx-5 flex-row justify-center rounded-xl">
        {days.map((day, index) => {
          const isSelected =
            date && new Date(date).toDateString() === day.toDateString();

          return (
            <div
              key={index}
              onClick={() => setDate(day)}
              className={`cursor-pointer bg-white rounded-xl border w-16 flex flex-col px-4 items-center text-[#6E43F0] font-semibold transition-all
          ${
            isSelected
              ? "border-[#6E43F0] scale-105 shadow-lg"
              : "border-zinc-500/50"
          }`}
            >
              <p>{WEEK_DAYS[day.getDay()]}</p>
              <h1 className="text-2xl">{day.getDate()}</h1>
            </div>
          );
        })}
      </div>

      <p className="pt-6 text-[#6E43F0] text-center text-medium pb-2 font-medium">
        Horários
      </p>

      <div className="border border-zinc-500/50 rounded-2xl py-7 mx-5 flex flex-col gap-3">
        {isDayFullyBooked ? (
          <p className="text-center text-zinc-500 font-medium">
            Não existem horários disponíveis para este dia
          </p>
        ) : (
          availableTimes.map((t) => {
            const isSelected = selected === t;

            return (
              <div
                key={t}
                onClick={() => {
                  setSelected(t);
                  setTime(t);
                }}
                className={`rounded-xl border p-2 mx-3 font-semibold transition-all
          ${
            isSelected
              ? "bg-[#6E43F0] text-white border-[#6E43F0] scale-[1.03] shadow-lg"
              : "bg-white text-[#6E43F0] border-zinc-500/50 cursor-pointer"
          }`}
              >
                <p>{t}</p>
              </div>
            );
          })
        )}
      </div>

      <div className="flex justify-center">
        <ConfirmButton disabled={!time} onClick={handleBooking} />
      </div>
    </div>
  );
};

export default Times;
