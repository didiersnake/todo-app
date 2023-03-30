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
    //   add item to list
    addItem: {
      reducer(state, action) {
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
    // delete item from list
    deleteItem: {
      reducer(state, action) {
        const { id } = action.payload;
        state = state.filter((item) => item.id !== id);
      },
    },
  },
});

export const { addItem, deleteItem } = todoSlice.actions;
export const selectAllTodo = (state) => state.todo;
export default todoSlice.reducer;
