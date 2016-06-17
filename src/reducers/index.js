// Define initial state
const initialState = {
	tasks: []
}

// Reducer
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [
                    ...state.tasks,
                    action.task
                ]
            }
            break;
        case 'REMOVE_TASK':
			let tasks = [...state.tasks]
			tasks.splice(tasks.findIndex((elem) => {
				return (elem.id == action.id) ? true : false
			}), 1)
            return {
                tasks: tasks
            }
            break;
        default:
            return state;

    }
}

export default appReducer;
