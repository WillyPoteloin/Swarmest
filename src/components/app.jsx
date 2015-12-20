import React from 'react';
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
	addTask() {
		var state = this.state;
		state.tasks.push({id: (state.tasks.length + 1), title: "Task " + (state.tasks.length + 1), tag:{id: 3, color:"red", title:"Tag 3"}});
		this.setState(state);
	},
	render() {
		return	<div className="content">
					<header>
						<h1>Swarmest</h1>
					</header>
					<div className="toolbar row">
						<div className="columns small-6">
							<form className="new-task">
								<input type="text" name="task" placeholder="+ Nouvelle tache" />
								<a href="#" onClick={this.addTask}>Ajouter une tâche</a>
							</form>
						</div>
						<div className="columns small-4">
							<form className="new-tag">
								<div className="columns small-10">
									<input type="text" name="tag" placeholder="+ Nouveau tag" />
								</div>
								<div className="columns small-2">
									<div className="color-picker"></div>
									<input type="hidden" className="tag_color" value="#EFEFEF" />
								</div>
							</form>
						</div>
					</div>
					<div className="filters row">
						<div className="columns small-6">
							<label className="hide-completed">
								<input type="checkbox"/>
								Masquer les tâches complétées
							</label>
						</div>
						<div className="columns small-6">
							<ul className="tags">
							</ul>
						</div>
					</div>
					<TasksPannel tasks={this.state.tasks} />
				</div>
	}
});

export default App;