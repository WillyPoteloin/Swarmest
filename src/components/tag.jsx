import React from 'react';

const Tag = React.createClass ({
	render() {
		return (
			<div className="tag">
				<span className="tag-color" style={{backgroundColor: this.props.tag.color}}></span>
				<span className="tag-title">{this.props.tag.title}</span>
			</div>
		)
	}
});

export default Tag;
