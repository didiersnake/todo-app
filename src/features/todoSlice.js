import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

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
    addItem: {
      reducer(state, action) {
        // normally not the corrext way but here immer js manages it
        // it works only in creatSlice
        state.push(action.payload);
      },
      //handle the data structure with prepare callback
      prepare(text) {
          return {
            payload: {
              id: nanoid(),
              active: true,
              text,
            },
          };
      },
    },
  },
});

export const { addItem } = todoSlice.actions;
export const selectAllTodo = (state) => state.todo;
export default todoSlice.reducer