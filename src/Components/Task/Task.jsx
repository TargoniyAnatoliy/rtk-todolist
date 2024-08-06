import './Task.css';
import { useDispatch } from 'react-redux';
import { DeleteTask, ChangeTaskState } from '../../Redux/TodoListSlice';

const Task = ({ task }) => {
    let dispatch = useDispatch();
    const DeleteTaskHandler = () => {
        dispatch(DeleteTask(task.id));
    };

    const ChangeTaskStateHandler = () => {
        dispatch(ChangeTaskState(task.id));
    }

    return (
        <div className={task.completed ? 'TaskCompleted' : 'Task'} onClick={() => ChangeTaskStateHandler()}>
            <input type="checkbox" checked={task.completed} />
            <p>{task.text}</p>
            <button onClick={() => DeleteTaskHandler()}>Delete</button>
        </div>
    )
}

export default Task;