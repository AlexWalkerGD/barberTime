const Booking = () => {
  return (
    <div>
      <h1 className=" font-[Jaini] flex justify-center pt-7 text-4xl text-[#6E43F0]">
        BarberTime
      </h1>
      <h2 className="flex pl-5 pt-10 italic text-lg text-[#858585]">
        Seu agendamento
      </h2>
      <div className=" border-1 border-zinc-500/50 rounded-2xl mx-3 py-5 mt-2 flex flex-row justify-between">
        <div className="text-[#6E43F0] pl-3 ">
          <p>Segunda-feira</p>
          <p>15 de Agosto - às 15:00 horas</p>
          <p>Pagamento em loja.</p>
        </div>
        <div className="pr-3 flex items-end ">
          <img src="../public/confirmLogo.png" alt="" width={40} />
        </div>
      </div>

      <p className="pt-16  text-[#6E43F0] text-center text-lg pb-2  font-medium ">
        Escolha o barbeiro
      </p>

      <div className=" border-1 border-zinc-500/50 rounded-2xl mx-3 py-10 px-30 flex flex-col gap-4 text-[#6E43F0] font-semibold">
        <div className=" border-1 border-zinc-500/50 rounded-2xl mx-3 py-5 flex flex-row items-center pl-3 gap-2 ">
          <img src="../public/contact.png" alt="" width={40} />
          <h3>Barbeiro 1</h3>
        </div>
        <div className=" border-1 border-zinc-500/50 rounded-2xl mx-3 py-5 flex flex-row items-center pl-3 gap-2 ">
          <img src="../public/contact.png" alt="" width={40} />
          <h3>Barbeiro 1</h3>
        </div>
        <div className=" border-1 border-zinc-500/50 rounded-2xl mx-3 py-5 flex flex-row items-center pl-3 gap-2 ">
          <img src="../public/contact.png" alt="" width={40} />
          <h3>Barbeiro 1</h3>
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

export default Booking;
