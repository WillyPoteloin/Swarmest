import React from 'react'
import {connect} from 'react-redux'
import Task from './task'

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.get('items'),
        filtered_tasks: state.tasks.get('filtered_items'),
		selected_tags: state.tags.get('selected_items')
    }
}

const TasksList = React.createClass ({

	filterTasksByTags: function(tasks) {
		tasks = tasks.filter((task) => {
			const findTagsInTask = this.props.selected_tags.filter((tag_id) => {
				return (task.get('tags').indexOf(tag_id) === -1) ? false : true
			})
			return (this.props.selected_tags.size == findTagsInTask.size)
		})
		return tasks
	},
	render() {

		let tasks = this.props.filtered_tasks || this.props.tasks

		if(this.props.selected_tags.size) tasks = this.filterTasksByTags(tasks);
		
		tasks = tasks.toArray().map((task) => {
			return (
				<Task key={task.get('id')} task={task.toObject()} />
			)
		})

		return (
			<div className="tasks">
				{tasks}
			</div>
		)
	}
});

export default connect(mapStateToProps)(TasksList);
