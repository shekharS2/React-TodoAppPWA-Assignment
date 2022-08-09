import { useEffect, useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

import './App.css';

//get data from local storage
const getLocalItems = () => {
  let todosStrData = localStorage.getItem('todos');
  if(todosStrData) {
    return JSON.parse(todosStrData);
  } else {
    return [];
  }
}

function App() {
	const [todos, updateTodos] = useState(getLocalItems());
	const [completeFilterOn, updateCompleteFilterOn] = useState(false);
	const [incompleteFilterOn, updateIncompleteFilterOn] = useState(false);
	const [filteredTodos, updateFilteredTodos] = useState([]);

	const handleShowComplete = () => {
		updateFilteredTodos(
			todos.filter(todo => todo.isComplete === true)
		);
		updateCompleteFilterOn(true);
		updateIncompleteFilterOn(false);
    };

    const handleShowIncomplete = () => {
		updateFilteredTodos(
			todos.filter(todo => todo.isComplete === false)
		);
		updateIncompleteFilterOn(true);
		updateCompleteFilterOn(false);
    }
	
	const handleFilterReset = () => {
		updateCompleteFilterOn(false);
		updateIncompleteFilterOn(false);
	}
	
  //add todos to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  

	return <>
		<div className='app'>
			<div className='app-container'>
				<NewTodo updateTodos={updateTodos} />
				<div className='todo-filters'>
					<p className={!completeFilterOn && !incompleteFilterOn ? 'each-filter active' : 'each-filter'} onClick={handleFilterReset} >Show All Tasks</p>
					<p className={incompleteFilterOn ? 'each-filter active' : 'each-filter'} onClick={handleShowIncomplete} >Show Incomplete Tasks</p>
					<p className={completeFilterOn ? 'each-filter active' : 'each-filter'} onClick={handleShowComplete} >Show Completed Tasks</p>
				</div>
				<Todos 
					todos={todos} 
					updateTodos={updateTodos} 
					filteredTodos={filteredTodos} 
					updateFilteredTodos={updateFilteredTodos} 
					completeFilterOn={completeFilterOn}
					incompleteFilterOn={incompleteFilterOn}
					handleFilterReset={handleFilterReset}
				/>
			</div>
		</div>
	</>;
}

export default App;
