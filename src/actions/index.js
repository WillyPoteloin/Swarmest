import uuid from 'node-uuid'
import Moment from 'moment';

/*
 * action types
 */

export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const FILTER_TASKS = 'FILTER_TASKS'

/*
 * action creators
 */

export function addTaskAndFilter(data) {
	data.task.id = uuid.v1();
	data.task.creation_time = Moment().format('X');
	return (dispatch) => {
		dispatch({
			type: ADD_TASK,
			task: data.task
		})
		dispatch({
			type: FILTER_TASKS,
			value: data.filter_value
		})
	}
}

export function removeTaskAndFilter(data) {
	return (dispatch) => {
		dispatch({
			type: REMOVE_TASK,
			id: data.id
		})
		dispatch({
			type: FILTER_TASKS,
			value: data.filter_value
		})
	}
}

export function addTask(task) {
	task.id = uuid.v1();
	task.creation_time = Moment().format('X');
	return { type: ADD_TASK, task: task }
}

export function removeTask(id) {
	return { type: REMOVE_TASK, id: id }
}

export function filterTasks(value) {
	return { type: FILTER_TASKS, value: value }
}
