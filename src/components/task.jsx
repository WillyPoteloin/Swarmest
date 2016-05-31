import React from 'react';
import Tag from './tag';

var Task = React.createClass ({

	propTypes: {
		deleteTask: React.PropTypes.func
	},

	onDelete: function(event) {
		event.preventDefault();
		this.props.deleteTask(this.props.task);
	},
	render() {
		return	<div className="task">
					<div className="header">
						<a href="#" className="delete" onClick={this.onDelete}>&times;</a>
					</div>
					<div className="content">
						<span className="title">{this.props.task.title}</span>
					</div>
					<div className="footer">
					</div>
				</div>
	}
});

export default Task;
