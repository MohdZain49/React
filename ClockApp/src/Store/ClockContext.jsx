import { createContext, useContext, useState, useEffect } from "react";

export const ClockContext = createContext({
  time: new Date(),
  timeFormat: "12 hours",
});

export const ClockContextProvider = ({ children }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ClockContext.Provider value={{ time }}>
      {children}
    </ClockContext.Provider>
  );
};

export const useClockContext = () => {
  return useContext(ClockContext);
};
