import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoList: [],
  addTodoItem: () => {},
  deleteTodoItem: () => {},
});

const todoItemReducer = (prevTodoList, action) => {
  let newTodoList = prevTodoList;
  if (action.type === "ADD_ITEM") {
    newTodoList = [...prevTodoList, action.payLoad];
  } else if (action.type === "DELETE_ITEM") {
    newTodoList = prevTodoList.filter((todo) => todo.id !== action.payLoad);
  }
  return newTodoList;
};

export default function TodoItemsContextProvider({ children }) {
  const [todoList, dispatchTodoList] = useReducer(todoItemReducer, []);

  const addTodoItem = (todo) => {
    dispatchTodoList({
      type: "ADD_ITEM",
      payLoad: todo,
    });
  };

  const deleteTodoItem = (id) => {
    dispatchTodoList({
      type: "DELETE_ITEM",
      payLoad: id,
    });
  };

  return (
    <TodoItemsContext.Provider
      value={{ todoList, addTodoItem, deleteTodoItem }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
}
