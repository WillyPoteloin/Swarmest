import React from 'react';

var SearchForm = React.createClass ({

	onSearchTaskChange: function(event) {
		event.preventDefault();

		var value = event.target.value;

		this.props.taskSearch.handler(value);
	},
	onSearchTaskSubmit: function(event) {
		event.preventDefault();
	},

	render() {
		return (
			<form className="form searchForm" onSubmit={this.onSearchTaskSubmit}>
				<input type="text" name="search" placeholder="Rechercher" value={this.props.taskSearch.value} onChange={this.onSearchTaskChange} />
			</form>
		);
	}
});

export default SearchForm;
