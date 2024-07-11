const TodoInput = () => {
    return (
      <form >
        <div className="input-container">
          <input
            type="text"
            className="labelInput"
            placeholder="Enter the todo"
          />
          <input type="date" className="dateInput" />
          <button className="addButton">Add</button>
        </div>
      </form>
    );
};

export default TodoInput;
