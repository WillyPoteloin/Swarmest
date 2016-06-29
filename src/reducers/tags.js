import * as actionTypes from '../constants/index'

// Define initial state
const initialState = {
    items: [],
    filtered_items: null,
    filter_value: "",
    selected_items: []
}

const tags = (state = initialState, action) => {
    let index, tags, filtered_tags, selected_tags
    switch (action.type) {
        case actionTypes.ADD_TAG:
            return Object.assign({}, state, {
                items: [
                    ...state.items,
                    action.tag
                ]
            })
            break;
        case actionTypes.REMOVE_TAG:
			tags = [...state.items]
			index = tags.findIndex((elem) => {
				return (elem.id == action.id) ? true : false
			})
			if(index != -1) tags.splice(index, 1)
            return Object.assign({}, state, {
                items: tags
            })
            break;
        case actionTypes.SELECT_TAG:
			selected_tags = [...state.selected_items]
			index = selected_tags.findIndex((id) => {
				return (id == action.id) ? true : false
			})
			if(index == -1) selected_tags.push(action.id)
            return Object.assign({}, state, {
                selected_items: selected_tags
            })
            break;
        case actionTypes.UNSELECT_TAG:
			selected_tags = [...state.selected_items]
			index = selected_tags.findIndex((id) => {
				return (id == action.id) ? true : false
			})
			if(index != -1) selected_tags.splice(index, 1)
            return Object.assign({}, state, {
                selected_items: selected_tags
            })
            break;
        case actionTypes.FILTER_TAGS:
			filtered_tags = (action.value) ? [...state.items] : null
			if(filtered_tags) {
				const regexp = new RegExp(action.value, 'i')
				filtered_tags = filtered_tags.filter((tag) => {
					return (regexp.test(tag.title)) ? true : false
				});
			}
            return Object.assign({}, state, {
				filtered_items: filtered_tags,
				filter_value: action.value
            })
            break;
        default:
            return state

    }

}

export default tags
