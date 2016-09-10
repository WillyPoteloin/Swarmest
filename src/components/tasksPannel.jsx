import {connect} from 'react-redux';
import TasksList from './tasksList';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.get('items'),
        filtered_tasks: state.tasks.get('filtered_items')
    }
}

const TasksPannel = connect(mapStateToProps)(TasksList)

export default TasksPannel;
