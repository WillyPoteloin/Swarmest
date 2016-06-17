import uuid from 'node-uuid'
import Moment from 'moment';

/*
 * action types
 */

export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'

/*
 * action creators
 */

export function addTask(task) {
	task.id = uuid.v1();
	task.creation_time = Moment().format('X');
	return { type: ADD_TASK, task: task }
}

export function removeTask(id) {
	return { type: REMOVE_TASK, id: id }
}
