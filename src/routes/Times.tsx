const Times = () => {
  const TIME_LIST = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
  ];

  return (
    <div>
      <h1 className=" font-[Jaini] flex justify-center pt-7 text-4xl text-[#6E43F0]">
        BarberTime
      </h1>
      <h2 className="flex justify-center pt-15 italic text-lg text-[#858585]">
        Agende seu horário
      </h2>

      <p className="pt-6  text-[#6E43F0] text-center text-medium pb-2  font-medium ">
        Dias Disponíveis
      </p>

      <div className="bg-[#DEE6FF] flex gap-2 p-5 mx-5 flex flex-row justify-center rounded-xl">
        <div className="bg-white rounded-xl border-1 border-zinc-500/50 flex flex-col px-4  items-center text-[#6E43F0] font-semibold">
          <p>dom</p>
          <h1 className="text-2xl">12</h1>
        </div>
        <div className="bg-white rounded-xl border-1 border-zinc-500/50 flex flex-col px-4  items-center text-[#6E43F0] font-semibold">
          <p>seg</p>
          <h1 className="text-2xl">13</h1>
        </div>
        <div className="bg-white rounded-xl border-1 border-zinc-500/50 flex flex-col px-4  items-center text-[#6E43F0] font-semibold">
          <p>ter</p>
          <h1 className="text-2xl">14</h1>
        </div>
        <div className="bg-white rounded-xl border-1 border-zinc-500/50 flex flex-col px-4  items-center text-[#6E43F0] font-semibold">
          <p>qua</p>
          <h1 className="text-2xl">15</h1>
        </div>
        <div className="bg-white rounded-xl border-1 border-zinc-500/50 flex flex-col px-4  items-center text-[#6E43F0] font-semibold">
          <p>qui</p>
          <h1 className="text-2xl">16</h1>
        </div>
        <div className="bg-white rounded-xl border-1 border-zinc-500/50 flex flex-col px-4  items-center text-[#6E43F0] font-semibold">
          <p>sex</p>
          <h1 className="text-2xl">17</h1>
        </div>
      </div>
      <p className="pt-6  text-[#6E43F0] text-center text-medium pb-2  font-medium ">
        Horários
      </p>

      <div className="border-1 border-zinc-500/50 rounded-2xl py-7 mx-5 flex flex-col gap-3">
        <div className="rounded-xl border-1 border-zinc-500/50 pl-2 p-1 mx-3  text-[#6E43F0] font-semibold">
          <p>14:30</p>
        </div>
        <div className="rounded-xl border-1 border-zinc-500/50 pl-2 p-1 mx-3  text-[#6E43F0] font-semibold">
          <p>14:30</p>
        </div>
        <div className="rounded-xl border-1 border-zinc-500/50 pl-2 p-1 mx-3  text-[#6E43F0] font-semibold">
          <p>14:30</p>
        </div>
        <div className="rounded-xl border-1 border-zinc-500/50 pl-2 p-1 mx-3  text-[#6E43F0] font-semibold">
          <p>14:30</p>
        </div>
        <div className="rounded-xl border-1 border-zinc-500/50 pl-2 p-1 mx-3  text-[#6E43F0] font-semibold">
          <p>14:30</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#DEE6FF] border-1 border-zinc-500/50 p-2 px-5 rounded-xl text-[#6E43F0] font-semibold">
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default Times;
