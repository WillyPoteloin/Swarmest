import {connect} from 'react-redux';
import TasksList from './tasksList';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.items,
        filtered_tasks: state.tasks.filtered_items
    }
}

const TasksPannel = connect(
	mapStateToProps
)(TasksList)

export default TasksPannel;
