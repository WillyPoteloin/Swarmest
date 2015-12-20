import React from 'react';
import Task from './task';

var TasksPannel = React.createClass ({

	render() {
		var tasks = this.props.tasks.map(function(task) {
			return (
				<Task key={task.id} title={task.title} tag={task.tag} />
			);
		});

		return (
			<div className="tasks_pannel">
				{tasks}
			</div>
		);
	}
});

export default TasksPannel;