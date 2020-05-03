import React, { useState, Fragment } from 'react';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import ToDoEditForm from './ToDoEditForm';

const App = () => {

	const todoData = [
		{ id: 1, title: 'Hooks', description: 'Create CRUD app with React Hooks', priority: 'High' },
		{ id: 2, title: 'Class', description: 'Create CRUD app w/o React Hooks', priority: 'Low' },
		{ id: 3, title: 'Suriefy', description: 'Create CRUD app with Hooks + Redux', priority: 'Medium' },
	];

	const initialToDoState = { 
		id: null, 
		title: '', 
		description: '',
		priority: ''
	}
	
	const [todos, setTodos] = useState(todoData);
	const [editing, setEditing] = useState(false);
	const [currentTodo, setCurrentTodo] = useState(initialToDoState);

	const addTodo = (todo) => {		
		todo.id = todos.length + 1;
		setTodos([...todos, todo]);
	}

	const deleteTodo = (id) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const editTodo = todo => {
		setEditing(true);
	
		setCurrentTodo({ 
			id: todo.id, 
			title: todo.title, 
			description: todo.description,
			priority: todo.priority 
		});
	}

	const updateTodo = (id, updatedTodo) => {
		setEditing(false);
	
		setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)))
	}

	return (
		<div className="container">
			<h1>CRUD with React Hooks</h1>
			<div className="flex">
				<div className="flex-column">
					{
						editing ? (
							<Fragment>
								<h2>Edit Todo</h2>
								<ToDoEditForm
									setEditing={setEditing}
									currentTodo={currentTodo}
									updateTodo={updateTodo}
								/>
							</Fragment>
						) : (
							<Fragment>
								<h2>Add Todo</h2>
								<ToDoForm addTodo={addTodo} />
							</Fragment>
						)
					}
				</div>
				<div className="flex-column">
					<h2>View Todo</h2>
					<ToDoList 
						todos={todos}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
					/>
				</div>
			</div>
		</div>
	)
}

export default App;
