import React from 'react';

const AddTagForm = React.createClass ({

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
