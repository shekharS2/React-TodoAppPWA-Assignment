import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

import './App.css';

function App() {
	const [todos, updateTodos] = useState([
		// {
		// 	id: uuid(),
		// 	name : "Task 1",
        //     finishDate: "2022-11-02",
		// 	isComplete: true
		// },
		// {
		// 	id: uuid(),
		// 	name : "Task 2",
        //     finishDate: "2022-11-01",
		// 	isComplete: false
		// },
		// {
		// 	id: uuid(),
		// 	name : "Task 3",
        //     finishDate: "2022-11-05",
		// 	isComplete: false
		// }
	]);

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
