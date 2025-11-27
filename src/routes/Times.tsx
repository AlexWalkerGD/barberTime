import { useBooking } from "../context/BookingContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WEEK_DAYS } from "../utils/constants";
import Title from "../components/title";
import ConfirmButton from "../components/confirmButton";

const Times = () => {
  const { date, setDate, time, setTime } = useBooking();
  const [selected, setSelected] = useState("");

  const navigate = useNavigate();

  const today = new Date();
  const days = Array.from({ length: 6 }, (_, i) => {
    const day = new Date();
    day.setDate(today.getDate() + i);
    return day;
  });

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

  const bookedTimes = {
    "2025-11-27": ["14:30"],
  };

  function formatDate(date: Date) {
    return date.toISOString().split("T")[0];
  }

  const dateKey = date ? formatDate(date) : formatDate(today);
  const blocked = bookedTimes[dateKey] || [];

  function timeToDate(date: Date, time: string) {
    const [hours, minutes] = time.split(":").map(Number);
    const d = new Date(date);
    d.setHours(hours, minutes, 0, 0);
    return d;
  }

  const now = new Date();

  const currentDate = date || today;

  const availableTimes = TIME_LIST.filter((t) => {
    if (blocked.includes(t)) return false;

    if (formatDate(currentDate) === formatDate(today)) {
      return timeToDate(today, t) > now;
    }

    return true;
  });

  return (
    <div>
      <Title />
      <h2 className="flex justify-center pt-10 italic text-lg text-[#858585]">
        Agende seu horário
      </h2>

      <p className="pt-6  text-[#6E43F0] text-center text-medium pb-2  font-medium ">
        Dias Disponíveis
      </p>

      <div className="bg-[#DEE6FF] flex gap-2 p-5 mx-5 flex flex-row justify-center rounded-xl">
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
      <p className="pt-6  text-[#6E43F0] text-center text-medium pb-2  font-medium ">
        Horários
      </p>

      <div className="border border-zinc-500/50 rounded-2xl py-7 mx-5 flex flex-col gap-3">
        {availableTimes.map((t) => {
          const isSelected = selected === t;

          return (
            <div
              key={t}
              onClick={() => {
                setSelected(t);
                setTime(t);
              }}
              className={`
          rounded-xl border p-2 mx-3 font-semibold transition-all
          ${
            isSelected
              ? "bg-[#6E43F0] text-white border-[#6E43F0] scale-[1.03] shadow-lg"
              : "bg-white text-[#6E43F0] border-zinc-500/50 cursor-pointer"
          }
        `}
            >
              <p>{t}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <ConfirmButton
          disabled={!time}
          onClick={() => {
            navigate("/Bookings");
          }}
        />
      </div>
    </div>
  );
};

export default Times;
