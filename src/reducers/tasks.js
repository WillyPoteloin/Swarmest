import * as actionTypes from '../constants/index'

// Define initial state
const initialState = {
	items: [],
	filtered_items: null,
	filter_value: ""
}

const tasks = (state = initialState, action) => {
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
			let tasks = [...state.items]
			const index = tasks.findIndex((elem) => {
				return (elem.id == action.id) ? true : false
			})
			if(index != -1) tasks.splice(index, 1)
            return Object.assign({}, state, {
                items: tasks
            })
            break;
        case actionTypes.FILTER_TASKS:
			let filtered_tasks = (action.value) ? [...state.items] : null
			if(filtered_tasks) {
				const regexp = new RegExp(action.value, 'i')
				filtered_tasks = filtered_tasks.filter((task) => {
					return (regexp.test(task.title)) ? true : false
				});
			}
            return Object.assign({}, state, {
				filtered_items: filtered_tasks,
				filter_value: action.value
            })
            break;
        default:
            return state;

    }
}

export default tasks
