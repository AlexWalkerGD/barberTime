import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [service, setService] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [barber, setBarber] = useState(null);

  const resetBooking = () => {
    setService(null);
    setDate(null);
    setTime(null);
    setBarber(null);
  };

  return (
    <BookingContext.Provider
      value={{
        service,
        date,
        time,
        barber,
        setService,
        setDate,
        setTime,
        setBarber,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
