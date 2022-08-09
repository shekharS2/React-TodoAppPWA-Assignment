import "../App.css";
import { v4 as uuid } from 'uuid';

function NewTodo(props) {

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target); // list of key-value pairs
        const formDataObj = Object.fromEntries(formData); // creates an object from a list of key-value pairs

        props.updateTodos(prev => {
            return [
                ...prev,
                {
                    id: uuid(),
                    name : formDataObj.name,
                    finishDate: formDataObj.date,
                    isComplete: false
                }
            ];
        })
    }

    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0,10);
        
    return (
        <form onSubmit={handleSubmitForm} className="add-todo">
            <input name="name" placeholder="Enter Task Name" required />
            <input name="date" type="date" defaultValue={date} min={date} required />
            <button type="submit"><b>ADD TASK</b></button>
        </form>
    );
}

export default NewTodo;