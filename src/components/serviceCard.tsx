import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import { useUser } from "../context/UserContext";

interface ServiceCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ServiceCard = ({
  name,
  description,
  price,
  imageUrl,
}: ServiceCardProps) => {
  const { setService } = useBooking();
  const navigate = useNavigate();
  const { user, loginWithGoogle } = useUser();

  function handleReserve() {
    if (user) {
      navigate("/Bookings");
      setService(name);
    } else {
      loginWithGoogle();
    }
  }

  return (
    <div className=" text-[#6E43F0] bg-white rounded-2xl p-2 shadow-md border-1 border-zinc-500/50 my-2 mx-3  flex flex-row justify-between gap-3">
      <div className="flex gap-3 flex-row">
        <img
          src={imageUrl}
          alt={name}
          className="h-22 object-cover rounded-xl"
        />
        <div>
          <h2 className="text-medium font-semibold ">{name}</h2>
          <p className="text-sm text-zinc-400 pr-1">{description}</p>
          <p className=" font-bold text-medium">€ {price}</p>
        </div>
      </div>
      <button
        onClick={handleReserve}
        className="bg-[#DEE6FF]  hover:bg-[#bcc5e0] cursor-pointer rounded-xl my-6 px-2 text-sm font-semibold border-1 border-zinc-500/50"
      >
        Reservar
      </button>
    </div>
  );
};

export default ServiceCard;
