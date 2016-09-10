import React from 'react';
import {connect} from 'react-redux';
import Moment from 'moment';
import Tag from './tag';
import {removeTaskAndFilter} from '../actions/index';

const mapStateToProps = (state) => {
	return {
        tags: state.tags.get('items')
	}
}

const Task = React.createClass ({
	onDelete: function(event) {
		event.preventDefault();

		this.props.dispatch(removeTaskAndFilter({
			id: this.props.task.id
		}))

	},
	render() {

		let tags = this.props.task.tags.toArray().map((tag_id) => {

			const index = this.props.tags.findIndex(function(tag) {
				return (tag.get('id') == tag_id) ? true : false
			})

			const tag = this.props.tags.get(index)

			return (
				<Tag key={tag.get('id')} tag={tag.toObject} />
			)
		})

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
					<span className="task-footer-tags">
						{tags}
					</span>
					<span className="task-footer-time">{Moment(this.props.task.creation_time, 'X').fromNow(true)}</span>
				</div>
			</div>
		)
	}
});

export default connect(mapStateToProps)(Task);
