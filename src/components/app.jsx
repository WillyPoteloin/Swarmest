import React from 'react';
import Toolbar from './toolbar';
import TasksPannel from './tasksPannel';

require('./../scss/app.scss');

var App = React.createClass ({

	render() {

		var tasks = (this.props.filtered_tasks) ? this.props.filtered_tasks : this.props.tasks

		return	<div className="content">
					<header>
						<h1>Swarmest</h1>
					</header>
					<Toolbar updateNewTask={this.props.updateNewTask} addNewTask={this.props.addNewTask} newTask={this.props.newTask} taskSearch={this.props.taskSearch}/>
					<TasksPannel tasks={tasks} deleteTask={this.props.deleteTask} />
				</div>
	}
});

export default App;
