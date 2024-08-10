import { useClockContext } from "../Store/ClockContext";

const DateSection = () => { 
  const { time } = useClockContext();
   let dayName = time.toLocaleString("default", { weekday: "long" });
   let monthName = time.toLocaleString("default", { month: "long" });
    return (
      <div className="date-section">
        {`${monthName}, ${dayName} ${time.getDate()}`}
      </div>
    );
}

export default DateSection;