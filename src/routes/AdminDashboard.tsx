import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";

interface Booking {
  id: string;
  userEmail: string;
  barber: string;
  service: string;
  date: string;
  time: string;
}

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p>Carregando reservas...</p>;

  return (
    <div className="p-6 text-[#6E43F0]">
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
  );
};

export default AdminDashboard;
