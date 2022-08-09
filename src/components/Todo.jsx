import { BsFillTrashFill } from "react-icons/bs";

function Todo(props) {
    const handleDelete = () => {
        props.handleDeleteTodo(props.todo.id);
    }

    const handleCheck = (e) => {
        props.handleCheckTodo(props.todo.id);
    }

    return (
    <div className="each-todo">
        <div className="todo-heading">
            <h2>{props.todo.name}</h2> 
            <div className="delete-todo" onClick={handleDelete}><BsFillTrashFill /></div>
        </div>
        <div className="todo-text-info">
            <p><b>Expected finish date: </b>{props.todo.finishDate}</p>
            <p><b>Completed: </b>{props.todo.isComplete ? 'Yes' : 'No'}</p>
        </div>
        <div className="checkbox-container">
            <p className="checkbox-label">
                Mark Complete
            </p>
            <input className="checkbox" type="checkbox" checked={props.todo.isComplete} onChange={handleCheck} />
        </div>
    </div>
  );
}

export default Todo;
