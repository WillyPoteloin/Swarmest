import React from 'react';
import Toolbar from './toolbar';
import TasksPannel from './tasksPannel';

require('./../scss/app.scss');

var App = React.createClass ({
	
	getInitialState() {
		return {
			tasks: [
				{id: 1, title: "Task 1", tag:{id: 1, color:"blue", title:"Tag 1"}},
				{id: 2, title: "Task 2", tag:{id: 1, color:"blue", title:"Tag 1"}},
				{id: 3, title: "Task 3", tag:{id: 2, color:"green", title:"Tag 2"}},
				{id: 4, title: "Task 4", tag:{id: 3, color:"red", title:"Tag 3"}},
			]
		};
	},
	render() {
		return	<div className="content">
					<header>
						<h1>Swarmest</h1>
					</header>
					<Toolbar />
					<TasksPannel tasks={this.state.tasks} />
				</div>
	}
});

export default App;