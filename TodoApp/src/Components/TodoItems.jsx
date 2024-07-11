const TodoItems = () => { 
    return (
        <div className="todoItemsContainer" >
            <div className="todoLabel" >
                interview
            </div>
            <div className="dueDate">
                13-09-2024
            </div>
            <button className="deleteButton"> 
                delete
            </button>
        </div>
    );  
}

export default TodoItems;