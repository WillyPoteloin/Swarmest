import { combineReducers } from 'redux'
import tasks from './tasks'
import tags from './tags'

// Reducer
const appReducer = combineReducers({
	tasks,
	tags
})

export default appReducer;
