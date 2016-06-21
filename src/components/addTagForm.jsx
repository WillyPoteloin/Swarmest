import React from 'react';
import ColorSelector from './colorSelector';

const AddTagForm = React.createClass ({
	getInitialState: function() {
		return {
			title: "",
			color: "#4DB6AC"
		}
	},
	onChangeTitle: function(event) {
		event.preventDefault();

		this.setState(Object.assign({}, this.state, {
			title: event.target.value
		}));
	},
	onColorChange: function(color) {
		event.preventDefault();

		this.setState(Object.assign({}, this.state, {
			color: color
		}))
	},
	onSubmit: function(event) {
		event.preventDefault();

		if(this.state.title == '' || /^\s+$/i.test(this.state.title)) return false;

		this.setState({
			title: "",
			color: "#4DB6AC"
		})
	},
	render() {
		return (
			<form className="form tagForm" onSubmit={this.onSubmit}>
				<input type="text" value={this.state.title} name="tag" placeholder="My Tag" onChange={this.onChangeTitle} />
				<ColorSelector color={this.state.color} onColorChange={this.onColorChange} />
				<input type="submit" value="add" />
			</form>
		);
	}
});

export default AddTagForm;
