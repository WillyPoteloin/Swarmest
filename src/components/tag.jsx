import React from 'react';

var Tag = React.createClass ({

	render() {
		return <span className="tag" style={{backgroundColor: this.props.color}} title={this.props.title} id={this.props.id}></span>
	}
});

export default Tag;