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
					</div>
				</div>
	}
});

export default Task;
