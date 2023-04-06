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
    setActiveItem:(state, action)=>{
        const { id } = action.payload;
        return state = state.map((item) => {
        return item.id === id && !item.active;
        })
      },
    // delete item from list
    deleteItem:(state, action)=>{
      const { id } = action.payload;
        return state = state.filter((item) => item.id !== id);
    },
    deleteCompleted:(state, action)=>{
        return state = state.filter((item) => item.active);
    }
  },
});

export const { addItem, deleteItem, setActiveItem, deleteCompleted } = todoSlice.actions;
export const selectAllTodo = (state) => state.todo;
export default todoSlice.reducer;
