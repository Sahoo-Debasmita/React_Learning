import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Features/Todos/todoSlice'
export const Store=configureStore({
    reducer:todoReducer
});