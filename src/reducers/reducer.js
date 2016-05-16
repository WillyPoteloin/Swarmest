import { VisibilityFilters } from '../actions/actions'

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
}

function todoApp(state = initialState, action) {

	switch(action.type) {

		case SET_VISIBILITY_FILTER:
			return Object.assign({}, state, {
				visibilityFilter: actions.filter
			});
		default:
			return state;

	}
	// For now, don’t handle any actions
	// and just return the state given to us.
	return state
}