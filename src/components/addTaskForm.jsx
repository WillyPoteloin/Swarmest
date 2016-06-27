import React from 'react';
import {connect} from 'react-redux';
import {addTaskAndFilter} from '../actions';

const mapStateToProps = (state) => {
	return {
	}
}

const AddTaskForm = React.createClass ({

	propTypes: {
	},
	getInitialState: function() {
		return {
			task: {
				title : "",
				tag: null
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

		if(this.state.task.title == '' || /^\s+$/i.test(this.state.task.title)) return false;

		this.props.dispatch(addTaskAndFilter(Object.assign({}, {
			task: this.state.task
		})));

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

export default connect(mapStateToProps)(AddTaskForm);
