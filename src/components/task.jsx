import React from 'react';
import Tag from './tag';

var Task = React.createClass ({

	render() {
		return	<div className="task">
					<div className="actions">
						<span className="delete">&times;</span>
						<input type="checkbox" className="toggle-checked" />
						<Tag id={this.props.id} title={this.props.tag.title} color={this.props.tag.color}/>
					</div>
					<span className="title">{this.props.title}</span>
				</div>
	}
});

export default Task;