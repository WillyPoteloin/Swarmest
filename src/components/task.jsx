import React from 'react';
import {connect} from 'react-redux';
import Tag from './tag';
import {removeTask} from '../actions/index';

const Task = React.createClass ({

	propTypes: {
	},

	onDelete: function(event, taskId) {
		event.preventDefault();

		this.props.dispatch(removeTask(Object.assign({}, taskId)))

	},
	render() {
		return	<div className="task">
					<div className="header">
						<a href="#" className="delete" onClick={() => {this.onDelete(event, this.props.task.id)}}>&times;</a>
					</div>
					<div className="content">
						<a href="#" className="title">{this.props.task.title}</a>
					</div>
					<div className="footer">
					</div>
				</div>
	}
});

export default connect()(Task);
