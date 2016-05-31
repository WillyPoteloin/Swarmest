import React from 'react';

var SearchForm = React.createClass ({

	onSearchTaskChange: function(event) {
		event.preventDefault();

		var value = event.target.value;

		this.props.taskSearch.handler(value);
	},

	render() {
		return (
			<form className="form searchForm">
				<input type="text" name="search" placeholder="Task 1" value={this.props.taskSearch.value} onChange={this.onSearchTaskChange} />
				<input type="button" value="Search" />
			</form>
		);
	}
});

export default SearchForm;
