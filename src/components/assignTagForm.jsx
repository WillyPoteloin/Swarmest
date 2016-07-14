import React from 'react'
import {connect} from 'react-redux'
import Tag from './tag'


const mapStateToProps = function(state){
	return {
		tags: state.tags.items
	}
}

const AssignTagForm = React.createClass({
    getInitialState: function(){
        return {
            value: '',
            tags: this.props.tags,
            filtered_tags: this.props.tags,
            selected_tags: []
        }
    },
    onInputChange: function(event){
        event.preventDefault()

        const value = event.target.value

        const filtered_tags = this.filterTags(this.state.tags, value)

        this.setState(Object.assign({}, this.state, {
            value: value,
            filtered_tags: filtered_tags
        }))
    },
    filterTags: function(tags, value) {
        let filtered_tags = tags

        if(!/^\s*$/.test(value)) {
            const regexp = new RegExp(value, 'i')
            filtered_tags = filtered_tags.filter((tag) => {
                return (regexp.test(tag.title))
            })
        }

        return filtered_tags
    },
    addTagClick: function(tag) {

        // Add the tag in the selected_tags array
        let selected_tags = this.state.selected_tags
        selected_tags.push(tag)

        // Remove the tag from the global tags array
        let tags = this.state.tags
        const tags_index = tags.indexOf(tag)
        if(tags_index !== -1) tags.splice(tags_index, 1)

        // Set the search value to empty
        const value = ""

        const filtered_tags = this.filterTags(tags, value)

        this.setState(Object.assign({}, this.state, {
            value: value,
            tags: tags,
            filtered_tags: filtered_tags,
            selected_tags: selected_tags
        }))

        this.input.focus()

    },
    removeTagClick: function(tag) {

        // Remove the tag from the selected_tags array
        let selected_tags = this.state.selected_tags
        const selected_tags_index = selected_tags.indexOf(tag)
        if(selected_tags_index !== -1) selected_tags.splice(selected_tags_index, 1)

        // Add the tag to the global tags array
        let tags = this.state.tags
        tags.push(tag)

        // Set the search value to empty
        const value = ""

        const filtered_tags = this.filterTags(tags, value)

        this.setState(Object.assign({}, this.state, {
            value: value,
            tags: tags,
            filtered_tags: filtered_tags,
            selected_tags: selected_tags
        }))

        this.input.focus()

    },
    render() {

        const tags = this.state.filtered_tags.map((tag, index) => {
            return (
                <div key={index} className="assign-tag-item" onClick={() => this.addTagClick(tag)}>
                    <Tag tag={tag} />
                </div>
            )
        })
        const selected_tags = this.state.selected_tags.map((tag, index) => {
            return (
                <div key={index} className="assign-tag-item selected">
                    <Tag tag={tag} />
                    <a href="#" className="assign-tag-item-remove" onClick={() => this.removeTagClick(tag)}>+</a>
                </div>
            )
        })

        return (
            <div className="assign-tag">
                <div className="assign-tag-selected">
                    {selected_tags}
                    <input className="assign-tag-selected-input" ref={(ref) => this.input = ref} value={this.state.value} type="text" placeholder="My tag" onChange={this.onInputChange} />
                </div>
                <div className="assign-tag-list">
                    {tags}
                </div>
            </div>
        )
    }
})

export default connect(mapStateToProps)(AssignTagForm)
