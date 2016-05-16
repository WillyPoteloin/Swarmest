import React from 'react';
import Toolbar from './toolbar';
import TasksPannel from './tasksPannel';

require('./../scss/app.scss');

var App = React.createClass ({

	render() {
		return	<div className="content">
					<header>
						<h1>Swarmest</h1>
					</header>
					<Toolbar updateNewTask={this.props.updateNewTask} addNewTask={this.props.addNewTask} newTask={this.props.newTask}/>
					<TasksPannel tasks={this.props.tasks} />
				</div>
	}
});

export default App;
