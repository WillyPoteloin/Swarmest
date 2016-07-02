import React from 'react';
import AddTaskForm from './addTaskForm';
import AddSearchForm from './searchForm';

var Toolbar = React.createClass ({

	render() {
		return (
			<div className="toolbar">
				<AddTaskForm />
				<AddSearchForm />
			</div>
		);
	}
});

export default Toolbar;
