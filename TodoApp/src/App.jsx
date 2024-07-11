import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import TodoInput from "./Components/TodoInput";
import TodoItems from "./Components/TodoItems";

function App() {
  return (
    <center>
      <div className="container">
        <AppName></AppName>
        <TodoInput></TodoInput>
        <TodoItems></TodoItems>
      </div>
    </center>
  );
}

export default App;
