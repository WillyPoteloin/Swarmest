import React from 'react';
import Task from './task';

var TasksPannel = React.createClass ({

	render() {
			var that = this;
			var tasks = this.props.tasks.map(function(task) {
			return (
				<Task key={task.id} task={task} />
			);
		});

		return (
			<div className="tasks">
				{tasks}
			</div>
		);
	}
});

export default TasksPannel;
