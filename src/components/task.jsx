import React from 'react';
import Tag from './tag';

var Task = React.createClass ({

	render() {
		return	<div className="task">
					<div className="header">
						<span className="delete">&times;</span>
					</div>
					<div className="content">
						<span className="title">{this.props.title}</span>
					</div>
					<div className="footer">
						<Tag id={this.props.id} title={this.props.tag.title} color={this.props.tag.color}/>
					</div>
				</div>
	}
});

export default Task;