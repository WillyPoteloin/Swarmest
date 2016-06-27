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
			type: actionTypes.FILTER_TASKS
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
			type: actionTypes.FILTER_TASKS
		})
	}
}

export function changeFilterValue(value) {
	return (dispatch) => {
		dispatch({
			type: actionTypes.CHANGE_FILTER_VALUE,
			value: value
		})
		dispatch({
			type: actionTypes.FILTER_TASKS
		})
	}
}

export function addTag(tag) {
	tag.id = uuid.v1()
	tag.creation_time = Moment().format('X')
	return {type: actionTypes.ADD_TAG, tag: tag}
}
