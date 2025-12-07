import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import Title from "../components/title";
import { useUser } from "../context/UserContext";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ptBR } from "date-fns/locale";

interface Booking {
  id: string;
  userEmail: string;
  userName: string;
  barber: string;
  service: string;
  date: string;
  time: string;
}

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const [barbers, setBarbers] = useState<string[]>([]);
  const [selectedBarber, setSelectedBarber] = useState<string>("Todos");

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

  function formatDayFull(date: Date) {
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "short",
    });
  }

  function formatDay(date: Date) {
    const day = WEEK_DAYS[date.getDay()];
    const dayNum = date.getDate();
    const month = date.toLocaleString("pt-BR", { month: "short" });
    return `${day}, ${dayNum} ${month}`;
  }

  const handleDelete = async (bookingId: string) => {
    await deleteDoc(doc(db, "bookings", bookingId));
    setBookings(bookings.filter((b) => b.id !== bookingId));
  };

  useEffect(() => {
    const fetchBookings = async () => {
      const q = query(
        collection(db, "bookings"),
        orderBy("date", "asc"),
        orderBy("time", "asc")
      );
      const snapshot = await getDocs(q);
      const data: Booking[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Booking),
      }));
      setBookings(data);
      setLoading(false);
    };
    fetchBookings();
  }, []);

  useEffect(() => {
    if (bookings.length > 0) {
      const unique = Array.from(new Set(bookings.map((b) => b.barber)));
      setBarbers(unique);
    }
  }, [bookings]);

  const filteredBookings =
    selectedBarber === "Todos"
      ? bookings
      : bookings.filter((b) => b.barber === selectedBarber);

  const bookingsOfDay = bookings.filter(
    (b) => b.barber === selectedBarber && b.date === selectedDate
  );

  const bookingMap = {};
  bookingsOfDay.forEach((b) => {
    bookingMap[b.time] = {
      client: b.client,
      service: b.service,
    };
  });

  if (loading) return <p>Carregando reservas...</p>;

  return (
    <div className="p-6 text-[#6E43F0]">
      <div>
        <h1 className="text-3xl font-bold mb-6">Painel de Admin - Reservas</h1>
        <table className="w-full border border-zinc-300">
          <thead>
            <tr className="bg-[#DEE6FF]">
              <th className="p-2">Data</th>
              <th className="p-2">Hora</th>
              <th className="p-2">Barbeiro</th>
              <th className="p-2">Serviço</th>
              <th className="p-2">Usuário</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="text-center border-t">
                <td className="p-2">{b.date}</td>
                <td className="p-2">{b.time}</td>
                <td className="p-2">{b.barber}</td>
                <td className="p-2">{b.service}</td>
                <td className="p-2">{b.userEmail}</td>
                <button
                  className="cursor-pointer p-2 text-[#ffffff] bg-red-400"
                  onClick={() => handleDelete(b.id)}
                >
                  X
                </button>
              </tr>
            ))}
            <div></div>
          </tbody>
        </table>
      </div>

      {/*<div>
        <Title />
        <h2 className="text-2xl font-bold pt-5">Dashboard</h2>
        <p className="font-bold">Olá, {user.displayName}</p>

        <p className="pt-15 text-lg italic text-[#858585]">
          Seus horários reservados
        </p>
        <div className="flex flex-row pt-5 text-sm justify-between">
          <div className="flex flex-row gap-2 ">
            <div className="relative">
              <div
                onClick={() => setOpenCalendar(!openCalendar)}
                className="border-2 rounded-2xl px-5 py-1 cursor-pointer border-zinc-500/50 bg-white text-[#6E43F0]"
              >
                {formatDayFull(selectedDay)}
              </div>

              {openCalendar && (
                <div className="absolute top-14 z-50 bg-white shadow-xl rounded-2xl p-4">
                  <DayPicker
                    mode="single"
                    selected={selectedDay}
                    onSelect={(date) => {
                      if (date) {
                        setSelectedDay(date);
                        setOpenCalendar(false);
                      }
                    }}
                    locale={ptBR}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => setOpenDropdown((prev) => !prev)}
              className="border-2 rounded-2xl px-5 py-1  border-zinc-500/50"
            >
              De: {selectedBarber}
            </button>

            {openDropdown && (
              <div className="absolute mt-2 bg-white shadow-xl rounded-xl text-black w-full z-50">
                <div
                  className="px-4 py-2 hover:bg-zinc-100 cursor-pointer"
                  onClick={() => {
                    setSelectedBarber("Todos");
                    setOpenDropdown(false);
                  }}
                >
                  Todos
                </div>

                {barbers.map((b) => (
                  <div
                    key={b}
                    className="px-4 py-2 hover:bg-zinc-100 cursor-pointer"
                    onClick={() => {
                      setSelectedBarber(b);
                      setOpenDropdown(false);
                    }}
                  >
                    {b}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {TIME_LIST.map((time) => {
            return (
              <div
                key={time}
                className="border rounded-xl p-4 flex justify-between items-center bg-zinc-900/40"
              >
                <span className="text-lg font-medium">{time}</span>

                {bookings ? (
                  <div className="bg-red-500/20 border border-red-500 p-2 rounded-lg">
                    <p className="font-semibold">{bookings.client}</p>
                    <p className="text-sm opacity-80">{bookings.service}</p>
                  </div>
                ) : (
                  <div className="opacity-30 italic">— disponível —</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-row border-2 rounded-2xl px-5 mt-5 border-zinc-500/50">
          <div>
            {filteredBookings.map((b) => (
              <div className="flex flex-row">
                <div key={b.id} className="flex flex-col py-2">
                  <div className="py-1">{b.time}</div>
                </div>

                <div className="flex flex-col gap-8 font-semibold">
                  {filteredBookings.map((b) => (
                    <div
                      key={b.id}
                      className="flex flex-row justify-between py-2"
                    >
                      <div>{b.time}</div>
                      <div>{b.userName}</div>
                      <div>{b.service}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default AdminDashboard;
