import * as actionTypes from '../constants/index'
import {fromJS} from 'immutable'

// Define initial state
const initialState = fromJS({
	items: [],
	filtered_items: null,
	filter_value: ""
})

const tasks = (state = initialState, action) => {
	let index, tasks, filtered_tasks
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return state.set('items', state.get('items').push(fromJS(action.task)))
        case actionTypes.REMOVE_TASK:
			tasks = state.get('items')
			index = tasks.findIndex((elem) => {
				return (elem.get('id') == action.id) ? true : false
			})
			if(index != -1) tasks = tasks.splice(index, 1)
            return state.set('items', tasks)
        case actionTypes.CHANGE_FILTER_VALUE:
            return state.set('filter_value', action.value)
        case actionTypes.FILTER_TASKS:
			filtered_tasks = (state.get('filter_value')) ? state.get('items') : null
			if(filtered_tasks) {
				const regexp = new RegExp(state.get('filter_value'), 'i')
				filtered_tasks = filtered_tasks.filter((task) => {
					return (regexp.test(task.get('title'))) ? true : false
				});
			}
            return state.set('filtered_items', filtered_tasks)
        default:
            return state
    }
}

export default tasks
