import React, { useState } from 'react';

const ToDoEditForm = (props) => {
	
	const [todo, setTodo] = useState(props.currentTodo);

	const handleInputChange = (e) => {

		const { name, value } = e.target

    	setTodo({ 
			...todo,
			[name]: value 
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();

        props.updateTodo(todo.id, todo);
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label>Title</label>
				<input 
					type="text" 
					name="title" 
					value={todo.title} 
					onChange={handleInputChange} 
				/>
			</div>
			<div className="form-group">
				<label>Description</label>
				<input 
					type="text" 
					name="description" 
					value={todo.description} 
					onChange={handleInputChange} 
				/>
			</div>
			<div className="form-group">
				<label>Priority</label>
				<select 
					name="priority" 
					value={todo.priority} 
					onChange={handleInputChange} 
				>
					<option value="">Choose Priority</option>
					<option value="High">High</option>
					<option value="Medium">Medium</option>
					<option value="Low">Low</option>
				</select>
			</div>
			<div className="form-group">
				<button onClick={() => props.setEditing(false)}>Cancel</button>
				<button>Update Todo</button>
			</div>
		</form>
	)
}

export default ToDoEditForm;
