import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import ColorSelector from './colorSelector';
import {addTag} from '../actions/index';

const AddTagForm = React.createClass ({
	getInitialState: function() {
		return {
			tag: {
				title: "",
				color: "#0277BD"
			},
			modal: {
				isOpen: false
			}
		}
	},
	openModal: function(event) {
		event.preventDefault();

		this.setState(Object.assign({}, this.state, {
			modal: {
				isOpen: true
			}
		}))
	},
	closeModal: function(event) {
		event.preventDefault();

		let initialState = this.getInitialState();

		this.setState(Object.assign({}, this.state, initialState))
	},
	onChangeTitle: function(event) {
		event.preventDefault();

		let tag = Object.assign({}, this.state.tag, {
			title: event.target.value
		});

		this.setState(Object.assign({}, this.state, {
			tag: tag
		}));
	},
	onColorChange: function(color) {
		event.preventDefault();

		let tag = Object.assign({}, this.state.tag, {
			color: color
		});

		this.setState(Object.assign({}, this.state, {
			tag: tag
		}))
	},
	onSubmit: function(event) {
		event.preventDefault();

		if(this.state.tag.title == '' || /^\s+$/i.test(this.state.tag.title)) return false;

		this.props.dispatch(addTag(Object.assign({}, this.state.tag)))

		this.closeModal(event);
	},
	render() {
		return (
			<div className="form-tag">
				<a href="#" className="form-tag-open" title="Add tag" onClick={this.openModal}>+</a>
				<Modal className="modal-content" overlayClassName="modal" isOpen={this.state.modal.isOpen}>
					<h4 className="modal-content-title">Add tag</h4>
					<form className="form tagForm" onSubmit={this.onSubmit}>
						<label>Tag's name</label>
						<input type="text" value={this.state.tag.title} name="tag" placeholder="My Tag" onChange={this.onChangeTitle} />
						<label>Tag's color</label>
						<ColorSelector color={this.state.tag.color} onColorChange={this.onColorChange} />
						<div className="modal-content-footer">
							<input type="submit" value="add" />
							<hr className="clear"/>
						</div>
					</form>
					<a href="#" className="modal-close" onClick={this.closeModal}>+</a>
				</Modal>
			</div>
		);
	}
});

export default connect()(AddTagForm);
