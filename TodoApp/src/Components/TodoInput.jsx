import { useRef } from "react";
import TodoItemsContext from "../Store/TodoItemsContext";
import { useContext } from "react";

const TodoInput = () => {
  const todoMessage = useRef();
  const todoDueDate = useRef();
  const { addTodoItem } = useContext(TodoItemsContext);

  const addTodo = (event) => {
    event.preventDefault();
    let todoLableElement = todoMessage.current.value;
    let todoDueDateElement = todoDueDate.current.value;

    if (todoLableElement && todoDueDateElement) {
      addTodoItem({
        id: Date.now(),
        todoLabel: todoLableElement,
        dueDate: todoDueDateElement,
      });
      todoMessage.current.value = "";
      todoDueDate.current.value = "";
    }
  };

  return (
    <form onSubmit={addTodo}>
      <div className="input-container">
        <input
          type="text"
          className="labelInput"
          placeholder="Enter the todo"
          ref={todoMessage}
        />
        <input type="date" className="dateInput" ref={todoDueDate} />
        <button className="addButton" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
