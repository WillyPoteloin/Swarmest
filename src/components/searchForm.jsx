import React from 'react'
import {connect} from 'react-redux'
import {filterTasks} from '../actions/index'

const mapStateToProps = (state) => {
	return {
		filter_value: state.filter_value
	}
}

const SearchForm = React.createClass ({
	getInitialState: function() {
		return {
			value: this.props.filter_value
		}
	},
	onSearchTaskChange: function(event) {
		event.preventDefault();

		let value = event.target.value;

		this.props.dispatch(filterTasks(value))

		this.setState(Object.assign({}, this.state, {
			value: value
		}));
	},
	onSearchTaskSubmit: function(event) {
		event.preventDefault()
	},
	render() {
		return (
			<form className="form searchForm" onSubmit={this.onSearchTaskSubmit}>
				<input type="text" name="search" placeholder="Rechercher" value={this.state.value} onChange={this.onSearchTaskChange} />
			</form>
		)
	}
})

export default connect(mapStateToProps)(SearchForm)
