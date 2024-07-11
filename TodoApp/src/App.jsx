import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import TodoInput from "./Components/TodoInput";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (todo) => {
    setTodoList((prev) => [...prev, todo]);
  };

  return (
    <center>
      <div className="container">
        <AppName></AppName>
        <TodoInput handleAddTodo={handleAddTodo}></TodoInput>
        <TodoItems todoList={todoList}></TodoItems>
      </div>
    </center>
  );
}

export default App;
