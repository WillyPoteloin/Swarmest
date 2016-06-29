import React from 'react'
import {connect} from 'react-redux'
import Tag from './tag'
import {selectTag, unselectTag} from '../actions/index'

const mapStateToProps = (state) => {
    return {
        tags: state.tags.items,
        filtered_tags: state.tags.filtered_items,
        selected_tags: state.tags.selected_items
    }
}

const TagsList = React.createClass({
    selectTag: function(tagId){
        this.props.dispatch(selectTag(tagId))
    },
    unselectTag: function(tagId){
        this.props.dispatch(unselectTag(tagId))
    },
    render(){

        let tags = this.props.filtered_tags || this.props.tags

        tags = tags.map((tag, index) => {
            let className = 'menu-item';
            let selected = (this.props.selected_tags.indexOf(tag.id) != -1) ? true : false
            if(selected) className = className+' selected'
            let handleClick = () => {
                (selected) ? this.unselectTag(tag.id) : this.selectTag(tag.id)
            }
            return (
                <div key={index} className={className} onClick={handleClick}>
                    <Tag key={tag.id} tag={tag} />
                </div>
            )
        })

        return (
            <div className="menu-tags menu-section">
                <h4 className="menu-title">Tags</h4>
                <div className="menu-tags-list menu-list">
                    {tags}
                </div>
            </div>
        )
    }
})

export default connect(mapStateToProps)(TagsList)
