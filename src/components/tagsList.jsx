import React from 'react'
import {connect} from 'react-redux'
import Tag from './tag'
import AddTagForm from './addTagForm'
import {selectTag, unselectTag} from '../actions/index'

const mapStateToProps = (state) => {
    return {
        tags: state.tags.get('items'),
        filtered_tags: state.tags.get('filtered_items'),
        selected_tags: state.tags.get('selected_items')
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
        tags = tags.toArray().map((tag, index) => {
            let className = 'menu-item';
            let selected = (this.props.selected_tags.indexOf(tag.get('id')) != -1) ? true : false
            if(selected) className = className+' selected'
            let handleClick = () => {
                (selected) ? this.unselectTag(tag.get('id')) : this.selectTag(tag.get('id'))
            }
            return (
                <div key={index} className={className} onClick={handleClick}>
                    <Tag key={tag.get('id')} tag={tag.toObject()} />
                </div>
            )
        })

        return (
            <div className="menu-tags menu-section">
                <h4 className="menu-title">
                    Tags
                    <AddTagForm />
                </h4>
                <div className="menu-tags-list menu-list">
                    {tags}
                </div>
            </div>
        )
    }
})

export default connect(mapStateToProps)(TagsList)
