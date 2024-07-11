const TodoItems = ({ todoList }) => {
  return (
    <div>
          {todoList.map((todo) => (
        <div className="todoItemsContainer" key={todo.id}>
          <div className="todoLabel">{todo.todoLabel}</div>
          <div className="dueDate">{todo.dueDate}</div>
          <button className="deleteButton">delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoItems;
