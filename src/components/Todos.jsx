import Todo from "./Todo";

function Todos(props) {
    const handleDelete = (deletedTodoId) => {
        props.updateTodos(prev => {
            const updatedTodos = prev.filter((todo) => {
                return todo.id !== deletedTodoId;
            });
            return updatedTodos;
        });

        props.updateFilteredTodos(prev => {
            const updatedTodos = prev.filter((todo) => {
                return todo.id !== deletedTodoId;
            });
            return updatedTodos;
        });

        props.handleFilterReset();
    }

    const handleCheck = (checkedTodoId) => {
        props.updateTodos(prev => {
            const updatedTodos = prev.map((todo) => {
                if(todo.id === checkedTodoId) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete
                    };
                } else {
                    return todo;
                }
            });

            return updatedTodos;
        });

        props.updateFilteredTodos(prev => {
            const updatedFilteredTodos = prev.map((todo) => {
                if(todo.id === checkedTodoId) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete
                    };
                } else {
                    return todo;
                }
            });

            return updatedFilteredTodos;
        });

        props.handleFilterReset();
    }

    if(props.todos.length === 0) {
        return <div className="todos-empty">
            <h1 style={{color: 'red'}}>No tasks found!</h1>
        </div>
    }

    if(props.completeFilterOn && props.filteredTodos.length === 0) {
        return <div className="todos-empty">
            <h1 style={{color: 'red'}}>You have not completed any tasks.</h1>
        </div>
    }

    if(props.incompleteFilterOn && props.filteredTodos.length === 0) {
        return <div className="todos-empty" >
            <h1 style={{color: 'green'}}>Yay! You have completed all your tasks.</h1>
        </div>
    }


    return (
        <div className="all-todos">
            {!props.completeFilterOn && !props.incompleteFilterOn && props.todos && props.todos.length !== 0 && props.todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} handleDeleteTodo={handleDelete} handleCheckTodo={handleCheck} />;

            })}

            {(props.completeFilterOn || props.incompleteFilterOn) && props.filteredTodos && props.filteredTodos.length !== 0 && props.filteredTodos.map((todo) => {
                return <Todo key={todo.id} todo={todo} handleDeleteTodo={handleDelete} handleCheckTodo={handleCheck} />;
            })}
        </div>
    );
}

export default Todos;