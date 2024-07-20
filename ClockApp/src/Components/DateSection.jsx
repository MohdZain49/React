import { useClockContext } from "../Store/ClockContext";

const DateSection = () => { 
  const { time } = useClockContext();
   let dayName = time.toLocaleString("default", { weekday: "long" });
   let dateName = time.toLocaleString("default", { month: "long" });
    return (
      <div className="date-section">
        {`${dateName}, ${dayName} ${time.getDay()}`}
      </div>
    );
}

export default DateSection;