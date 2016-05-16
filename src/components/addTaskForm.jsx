import React from 'react';

var AddTaskForm = React.createClass ({

	propTypes: {
		newTask: React.PropTypes.object.isRequired,
		updateNewTask: React.PropTypes.func.isRequired,
		addNewTask: React.PropTypes.func.isRequired
	},

	onTitleChange: function(event) {
		this.props.updateNewTask(Object.assign({}, this.props.newTask, {title: event.target.value}));
	},

	onSubmit: function(event) {
		event.preventDefault();
		this.props.addNewTask();
	},

	render() {
		return (
			<form className="form taskForm" onSubmit={this.onSubmit}>
				<input type="text" name="task" placeholder="My Task" value={this.props.newTask.title} onChange={this.onTitleChange} />
				<input type="submit" value="add" />
			</form>
		);
	}
});

export default AddTaskForm;
