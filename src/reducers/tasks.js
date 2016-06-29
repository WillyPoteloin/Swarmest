import * as actionTypes from '../constants/index'

// Define initial state
const initialState = {
	items: [],
	filtered_items: null,
	filter_value: ""
}

const tasks = (state = initialState, action) => {
	let index, tasks, filtered_tasks
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return Object.assign({}, state, {
                items: [
                    ...state.items,
                    action.task
                ]
            })
            break;
        case actionTypes.REMOVE_TASK:
			tasks = [...state.items]
			index = tasks.findIndex((elem) => {
				return (elem.id == action.id) ? true : false
			})
			if(index != -1) tasks.splice(index, 1)
            return Object.assign({}, state, {
                items: tasks
            })
            break;
        case actionTypes.CHANGE_FILTER_VALUE:
            return Object.assign({}, state, {
                filter_value: action.value
            })
            break;
        case actionTypes.FILTER_TASKS:
			filtered_tasks = (state.filter_value) ? [...state.items] : null
			if(filtered_tasks) {
				const regexp = new RegExp(state.filter_value, 'i')
				filtered_tasks = filtered_tasks.filter((task) => {
					return (regexp.test(task.title)) ? true : false
				});
			}
            return Object.assign({}, state, {
				filtered_items: filtered_tasks,
            })
            break;
        default:
            return state;

    }
}

export default tasks
