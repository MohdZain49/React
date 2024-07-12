import { useContext } from "react";
import TodoItemsContext from "../Store/TodoItemsContext";

const TodoItems = () => {
  const { todoList, deleteTodoItem } = useContext(TodoItemsContext);
  return (
    <div>
      {todoList.map((todo) => (
        <div className="todoItemsContainer" key={todo.id}>
          <div className="todoLabel">{todo.todoLabel}</div>
          <div className="dueDate">{todo.dueDate}</div>
          <button
            className="deleteButton"
            onClick={() => deleteTodoItem(todo.id)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoItems;
