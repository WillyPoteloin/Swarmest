import React from 'react'
import {connect} from 'react-redux'
import Tag from './tag'

const mapStateToProps = (state) => {
    return {
        tags: state.tags.items,
        filtered_tags: state.tags.filtered_items
    }
}

const TagsList = React.createClass({
    render(){

        let tags = this.props.filtered_tags || this.props.tags

        tags = tags.map((tag) => {
            return <Tag key={tag.id} tag={tag} />
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
