// Define initial state
const initialState = {
	tasks: [],
	filtered_tasks: null,
	filter_value: ""
}

// Reducer
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [
                    ...state.tasks,
                    action.task
                ],
				filtered_tasks: state.filtered_tasks,
				filter_value: state.filter_value
            }
            break;
        case 'REMOVE_TASK':
			let tasks = [...state.tasks]
			const index = tasks.findIndex((elem) => {
				return (elem.id == action.id) ? true : false
			})
			if(index != -1) tasks.splice(index, 1)
            return {
                tasks: tasks,
				filtered_tasks: state.filtered_tasks,
				filter_value: state.filter_value
            }
            break;
        case 'FILTER_TASKS':
			let filtered_tasks = (action.value) ? [...state.tasks] : null
			if(filtered_tasks) {
				const regexp = new RegExp(action.value, 'i')
				filtered_tasks = filtered_tasks.filter((task) => {
					return (regexp.test(task.title)) ? true : false
				});
			}
            return {
                tasks: state.tasks,
				filtered_tasks: filtered_tasks,
				filter_value: action.value
            }
            break;
        default:
            return state;

    }
}

export default appReducer;
