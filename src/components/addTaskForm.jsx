import React from 'react';
import {connect} from 'react-redux';
import {addTask} from '../actions';

var AddTaskForm = React.createClass ({

	propTypes: {
	},
	getInitialState: function() {
		return {
			task: {
				title : ""
			}
		}
	},

	onTitleChange: function(event) {
		this.setState(Object.assign({}, this.state, {
			task: {
				title: event.target.value
			}
		}));
	},

	onSubmit: function(event) {
		event.preventDefault();
		this.props.dispatch(addTask(Object.assign({}, this.state.task)));

		this.setState(Object.assign({}, this.state, {
			task: {
				title: ""
			}
		}));
	},

	render() {
		return (
			<form className="form taskForm" onSubmit={this.onSubmit}>
				<input type="text" name="task" placeholder="My Task" value={this.state.task.title} onChange={this.onTitleChange} />
				<input type="submit" value="add" />
			</form>
		);
	}
});

export default connect()(AddTaskForm);
