import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './TodoListSlice';

let store = configureStore({
    reducer: {
        tasks: taskSlice
    }
});

export default store;