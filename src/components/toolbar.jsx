import React from 'react';
import AddTaskForm from './addTaskForm';
import AddTagForm from './addTagForm';
// import AddSearchForm from './searchForm';

var Toolbar = React.createClass ({

	render() {
		return (
			<div className="toolbar">
				<AddTaskForm />
			</div>
		);
	}
});

export default Toolbar;
