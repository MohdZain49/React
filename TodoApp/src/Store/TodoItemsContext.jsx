import { createContext } from "react";

const TodoItemsContext = createContext({
  todoList: [],
  addTodoItem: () => {},
  deleteTodoItem: () => {},
});

export default TodoItemsContext;
