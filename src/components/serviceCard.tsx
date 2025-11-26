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
  return (
    <div className=" bg-white rounded-2xl p-2 shadow-md border-1 border-zinc-500/50 my-2 mx-3  flex flex-row justify-between gap-3">
      <div className="flex gap-3 flex-row">
        <img
          src={imageUrl}
          alt={name}
          className="h-22 object-cover rounded-xl"
        />
        <div>
          <h2 className="text-medium font-semibold text-[#6E43F0]">{name}</h2>
          <p className="text-sm text-zinc-400 pr-1">{description}</p>
          <p className="text-[#6E43F0] font-bold text-medium">€ {price}</p>
        </div>
      </div>
      <button className="bg-[#DEE6FF] cursor-pointer text-[#6E43F0] rounded-xl my-6 px-2 text-sm font-semibold border-1 border-zinc-500/50">
        Reservar
      </button>
    </div>
  );
};

export default ServiceCard;
