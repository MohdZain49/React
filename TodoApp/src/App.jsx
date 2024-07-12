import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import TodoInput from "./Components/TodoInput";
import TodoItems from "./Components/TodoItems";
import TodoItemsContextProvider from "./Store/TodoItemsContext";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="container">
        <AppName />
        <TodoInput />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
