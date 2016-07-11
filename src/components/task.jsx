import React from 'react';
import {connect} from 'react-redux';
import Moment from 'moment';
import Tag from './tag';
import {removeTaskAndFilter} from '../actions/index';

const mapStateToProps = (state) => {
	return {
	}
}

const Task = React.createClass ({

	propTypes: {
	},

	onDelete: function(event) {
		event.preventDefault();

		this.props.dispatch(removeTaskAndFilter({
			id: this.props.task.id
		}))

	},
	render() {
		return (
			<div className="task">
				<div className="task-header">
					<a href="#" className="task-header-delete" onClick={this.onDelete}>&times;</a>
				</div>
				<div className="task-content">
					<a href="#" className="task-content-title">{this.props.task.title}</a>
					<a href="#" className="task-content-description">{this.props.task.description}</a>
				</div>
				<div className="task-footer">
					<span className="task-footer-time">{Moment(this.props.task.creation_time, 'X').fromNow(true)}</span>
				</div>
			</div>
		)
	}
});

export default connect(mapStateToProps)(Task);
