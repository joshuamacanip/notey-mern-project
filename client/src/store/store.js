import { notesReducers } from "../features/notes";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    notes: notesReducers,
  },
});

export default store;
