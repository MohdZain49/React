import { useClockContext } from "../Store/ClockContext";

export default function TimeSection() { 
  const { time } = useClockContext();
    return (
      <div className="time-section">
        <div className="time">{time.toLocaleTimeString().slice(0, 8)}</div>
        <div className="meridiem">{time.toLocaleTimeString().slice(8, 11)}</div>
      </div>
    );
}