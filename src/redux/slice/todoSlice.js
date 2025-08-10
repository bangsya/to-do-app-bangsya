import { createSlice } from "@reduxjs/toolkit";
import { todos } from "../../todos";

export const todoSlice = createSlice({
    name : "todolist",
    initialState : todos,
    reducers : {
        addTodo : (state, action) => {
            const name = action.payload.name;
            const description = action.payload.description;
            const newTodo = {
                id: state.length + 1,
                judul: name,
                deskripsi: description,
                tanggal: new Date(),
                completed: false
            };
            state.push(newTodo);
        },
        checkedTodo : (state, action) => {
            const { id, completed } = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.completed = completed;
            }
        },
        updateTodo : (state, action) => {
            const { id, name, description } = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.judul = name;
                todo.deskripsi = description;
            }
        },
        removeTodo : (state, action) => {
            const {id} = action.payload;
            return state.filter(todo => todo.id !== id);
        }
    },
    selectors : {
        getTodo: (state, id) => {
            return state.find(todo => todo.id === id);
        }
    }
})

export const {addTodo, checkedTodo, updateTodo, removeTodo} = todoSlice.actions;
export const {getTodo} = todoSlice.selectors;
// export default todoSlice.reducer;