import "./App.css";
import { ClockContextProvider } from "./Store/ClockContext";
import TimeFormat from "./Components/TimeFormat";
import TimeSection from "./Components/TimeSection";
import DateSection from "./Components/DateSection";

function App() {
  
  return (
    <ClockContextProvider>
      <div className="container">
        <h1 className="clock-heading">Digital Clock</h1>
        <div className="card">
          <TimeFormat/>
          <TimeSection/>
          <DateSection/>
        </div>
      </div>
    </ClockContextProvider>
  );
}

export default App;
