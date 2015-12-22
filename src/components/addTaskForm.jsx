import React from 'react';

var AddTaskForm = React.createClass ({

	render() {
		return (
			<form className="form taskForm">
				<input type="text" name="task" placeholder="My Task" />
				<input type="button" value="add" />
			</form>
		);
	}
});

export default AddTaskForm;