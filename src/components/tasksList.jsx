import React from 'react';
import Task from './task';

const TasksList = React.createClass ({

	render() {
			let tasks = this.props.filtered_tasks || this.props.tasks
			tasks = tasks.map((task) => {
				return (
					<Task key={task.id} task={task} />
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
