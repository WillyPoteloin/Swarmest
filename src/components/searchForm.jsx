import React from 'react';

var SearchForm = React.createClass ({

	render() {
		return (
			<form className="form searchForm">
				<input type="text" name="search" placeholder="Task 1" />
				<input type="button" value="Search" />
			</form>
		);
	}
});

export default SearchForm;