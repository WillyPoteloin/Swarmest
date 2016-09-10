import React from 'react';
import Task from './task';

const TasksList = React.createClass ({

	render() {
			let tasks = this.props.filtered_tasks || this.props.tasks
			console.log(tasks)
			tasks = tasks.toArray().map((task) => {
				return (
					<Task key={task.get('id')} task={task.toObject()} />
				);
			});

		return (
			<div className="tasks">
				{tasks}
			</div>
		)
	}
});

export default TasksList;
