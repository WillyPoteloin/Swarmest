import * as actionTypes from '../constants/index'
import uuid from 'node-uuid'
import Moment from 'moment'

/*
 * action creators
 */

export function addTaskAndFilter(data) {
	data.task.id = uuid.v1();
	data.task.creation_time = Moment().format('X');
	return (dispatch) => {
		dispatch({
			type: actionTypes.ADD_TASK,
			task: data.task
		})
		dispatch({
			type: actionTypes.FILTER_TASKS,
			value: data.filter_value
		})
	}
}

export function removeTaskAndFilter(data) {
	return (dispatch) => {
		dispatch({
			type: actionTypes.REMOVE_TASK,
			id: data.id
		})
		dispatch({
			type: actionTypes.FILTER_TASKS,
			value: data.filter_value
		})
	}
}

export function addTask(task) {
	task.id = uuid.v1();
	task.creation_time = Moment().format('X');
	return { type: actionTypes.ADD_TASK, task: task }
}

export function removeTask(id) {
	return { type: actionTypes.REMOVE_TASK, id: id }
}

export function filterTasks(value) {
	return { type: actionTypes.FILTER_TASKS, value: value }
}

export function addTag(tag) {
	tag.id = uuid.v1()
	tag.creation_time = Moment().format('X')
	return {type: actionTypes.ADD_TAG, tag: tag}
}
