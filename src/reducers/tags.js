import * as actionTypes from '../constants/index'

// Define initial state
const initialState = {
    items: [],
    filtered_items: null,
    filter_value: ""
}

const tags = (state = initialState, action) => {
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
			let tags = [...state.items]
			const index = tags.findIndex((elem) => {
				return (elem.id == action.id) ? true : false
			})
			if(index != -1) tags.splice(index, 1)
            return Object.assign({}, state, {
                items: tags
            })
            break;
        case actionTypes.FILTER_TAGS:
			let filtered_tags = (action.value) ? [...state.items] : null
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
