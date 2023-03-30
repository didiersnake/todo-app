import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
  {
    id: 1,
    active: false,
    text: "learn react",
  },
  {
    id: 2,
    active: true,
    text: "learn javascript",
  },
  {
    id: 3,
    active: true,
    text: "learn css",
  },
];


const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

    }
})


export const selectAllTodo = (state) => state.todo;
export default todoSlice.reducer