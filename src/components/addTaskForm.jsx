import React from 'react';
import {connect} from 'react-redux';
import {addTaskAndFilter} from '../actions';

const mapStateToProps = (state) => {
	return {
		filter_value: state.filter_value
	}
}

const AddTaskForm = React.createClass ({

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
		this.props.dispatch(addTaskAndFilter(Object.assign({}, {
			task: this.state.task,
			filter_value: this.props.filter_value
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
