import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slice/todoSlice";

const store = configureStore({
    reducer: {
        todolist : todoSlice.reducer
    }
})

export default store;