import React from 'react';
import AddTaskForm from './addTaskForm';
import AddTagForm from './addTagForm';
import AddSearchForm from './searchForm';

var Toolbar = React.createClass ({

	render() {
		return (
			<div className="toolbar">
				<AddTaskForm {...this.props} />
				<AddSearchForm taskSearch={this.props.taskSearch} />
			</div>
		);
	}
});

export default Toolbar;
