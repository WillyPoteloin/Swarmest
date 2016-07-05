import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {addTaskAndFilter} from '../actions';

const mapStateToProps = (state) => {
	return {
	}
}

const AddTaskForm = React.createClass ({

	propTypes: {
	},
	getInitialState: function() {
		return {
			task: {
				title : "",
				tag: null
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
	afterOpenModal: function() {
		this.input_focus.focus()
	},
	onTitleChange: function(event) {
		this.setState(Object.assign({}, this.state, {
			task: {
				title: event.target.value
			}
		}));
	},

	onSubmit: function(event) {
		event.preventDefault();

		if(this.state.task.title == '' || /^\s+$/i.test(this.state.task.title)) return false;

		this.props.dispatch(addTaskAndFilter(Object.assign({}, {
			task: this.state.task
		})));

		this.setState(Object.assign({}, this.state, {
			task: {
				title: ""
			}
		}));

		this.closeModal(event)
	},

	render() {
		return (
			<div>
				<form className="form">
					<input type="button" value="Add task" onClick={this.openModal} />
				</form>
				<Modal className="modal-content" overlayClassName="modal" isOpen={this.state.modal.isOpen} onAfterOpen={this.afterOpenModal}>
					<h4 className="modal-content-title">Add task</h4>
					<form className="form taskForm" onSubmit={this.onSubmit}>
						<label>Task's name</label>
						<input type="text" name="task" placeholder="My Task" value={this.state.task.title} ref={ref => {this.input_focus = ref}} onChange={this.onTitleChange} />
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

export default connect(mapStateToProps)(AddTaskForm);
