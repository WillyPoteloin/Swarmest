import {connect} from 'react-redux';
import TasksList from './tasksList';


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filtered_tasks: state.filtered_tasks
    }
}

const TasksPannel = connect(
	mapStateToProps
)(TasksList)

export default TasksPannel;
