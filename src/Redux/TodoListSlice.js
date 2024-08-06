import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            { id: 1, text: 'Task1', completed: true },
            { id: 2, text: 'Task2', completed: false },
            { id: 3, text: 'Task3', completed: true },
            { id: 4, text: 'Task4', completed: false },
        ],
        taskText: '',
        tasksFilter: 'all'
    },
    reducers: {
        ChangeTaskText: (state, action) => {
            state.taskText = action.payload;
        },
        AddTask: (state) => {
            let task = {
                id: Date.now(),
                text: state.taskText,
                completed: false
            };
            state.tasks.push(task);
            state.taskText = '';
        },
        DeleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        ChangeTaskState: (state, action) => {
            state.tasks = state.tasks.map(task =>
                task.id === action.payload
                    ? { ...task, completed: !task.completed }
                    : task
            );
        },
        DeleteAll: (state) => {
            state.tasks = [];
        },
        SortTasks: (state) => {
            state.tasks = state.tasks.sort((a, b) => a.text.localeCompare(b.text));
        },
        SortReverse: (state) => {
            state.tasks = state.tasks.sort((a, b) => b.text.localeCompare(a.text));
        },
        FilterTasks: (state, action) => {
            state.tasksFilter = action.payload;
        }
    }
});

export const {
    ChangeTaskText,
    AddTask,
    DeleteTask,
    ChangeTaskState,
    DeleteAll,
    SortTasks,
    SortReverse,
    FilterTasks
} = taskSlice.actions;
export default taskSlice.reducer;