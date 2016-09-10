import * as actionTypes from '../constants/index'
import {fromJS} from 'immutable'

// Define initial state
const initialState = fromJS({
    items: [
        {
            id: 1,
            title: 'My Tag',
            color: '#0277BD'
        },
        {
            id: 2,
            title: 'Second Tag',
            color: '#FF8A65'
        }
    ],
    filtered_items: null,
    filter_value: "",
    selected_items: []
})

const tags = (state = initialState, action) => {
    let index, tags, filtered_tags, selected_tags
    switch (action.type) {
        case actionTypes.ADD_TAG:
            return state.set('items', state.get('items').push(fromJS(action.tag)))
        case actionTypes.REMOVE_TAG:
			tags = state.get('items')
			index = tags.findIndex((elem) => {
				return (elem.id == action.id) ? true : false
			})
			if(index != -1) tags = tags.splice(index, 1)
            return state.set('items', tags)
        case actionTypes.SELECT_TAG:
			selected_tags = state.get('selected_items')
			index = selected_tags.findIndex((id) => {
				return (id == action.id) ? true : false
			})
			if(index == -1) selected_tags = selected_tags.push(action.id)
            return state.set('selected_items', selected_tags)
        case actionTypes.UNSELECT_TAG:
			selected_tags = state.get('selected_items')
			index = selected_tags.findIndex((id) => {
				return (id == action.id) ? true : false
			})
			if(index != -1) selected_tags = selected_tags.splice(index, 1)
            return state.set('selected_items', selected_tags)
        case actionTypes.FILTER_TAGS:
			filtered_tags = (action.value) ? state.get('items') : null
			if(filtered_tags) {
				const regexp = new RegExp(action.value, 'i')
				filtered_tags = filtered_tags.filter((tag) => {
					return (regexp.test(tag.title)) ? true : false
				});
			}
            const new_state = state.set('filtered_items', filtered_tags)
            return new_state.set('filter_value', action.value)
        default:
            return state
    }
}

export default tags
