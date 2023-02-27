import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducer: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now().toString() });
    },
    remove: (state, action) => {
      state.filter(toDo => toDo.id !== action.payload);
    },
  },
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
