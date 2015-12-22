import React from 'react';

var AddTagForm = React.createClass ({

	render() {
		return (
			<form className="form tagForm">
				<input type="text" name="tag" placeholder="My Tag" />
				<input type="button" value="add" />
			</form>
		);
	}
});

export default AddTagForm;