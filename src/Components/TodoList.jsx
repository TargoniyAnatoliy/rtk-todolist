import './TodoList.css';
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task/Task';
import {
    ChangeTaskText,
    AddTask,
    DeleteAll,
    SortTasks,
    SortReverse,
    FilterTasks
} from '../Redux/TodoListSlice';

const TodoList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const tasksFilter = useSelector((state) => state.tasks.tasksFilter);
    const taskText = useSelector((state) => state.tasks.taskText);

    const filteredTasks = tasks.filter(task => {
        switch (tasksFilter) {
            case 'completed':
                return task.completed;
            case 'active':
                return !task.completed;
            default:
                return true
        }
    });

    const dispatch = useDispatch();

    const OnChangeHandler = (e) => {
        dispatch(ChangeTaskText(e.target.value));
    }

    const AddTaskHandler = () => {
        dispatch(AddTask());
    }

    const DeleteAllHandler = () => {
        dispatch(DeleteAll());
    }

    const SortTasksHandler = () => {
        dispatch(SortTasks());
    }

    const SortReverseHandler = () => {
        dispatch(SortReverse());
    }

    const FilterTasksHandler = (tasksFilter) => {
        dispatch(FilterTasks(tasksFilter));
    }


    return (
        <div className='TodoList'>
            <div className='inputPanel'>
                <input type="text" onChange={(e) => OnChangeHandler(e)} value={taskText} />
                <button onClick={() => AddTaskHandler()}>Add Task</button>
                <button onClick={() => DeleteAllHandler()}>Delete All</button>
                <button onClick={() => SortTasksHandler()}>Sort</button>
                <button onClick={() => SortReverseHandler()}>Sort reverse</button>
                <button onClick={() => FilterTasksHandler('completed')}>Completed</button>
                <button onClick={() => FilterTasksHandler('active')}>Active</button>
                <button onClick={() => FilterTasksHandler('all')}>All tasks</button>
            </div>
            <div>
                {
                    filteredTasks.map((task) => <Task task={task} key={task.id} />)
                }
            </div>
        </div>
    )
}

export default TodoList;