import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import TodoInput from "./Components/TodoInput";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import TodoItemsContext from "./Store/TodoItemsContext";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoItem = (todo) => {
    setTodoList((prev) => [...prev, todo]);
  };

  const deleteTodoItem = (id) => {
    setTodoList(() => todoList.filter((todo) => todo.id !== id));
  };

  return (
    <TodoItemsContext.Provider
      value={{ todoList, addTodoItem, deleteTodoItem }}
    >
      <center className="container">
        <AppName />
        <TodoInput />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
