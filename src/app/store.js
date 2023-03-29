import todoSlice from "../features/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        todo : todoSlice,
    }
})
