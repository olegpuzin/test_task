import { configureStore } from "@reduxjs/toolkit";
import filter from './slices/filterSlice/filters'
import jokes from "./slices/jokeSlice/jokes";

export const store = configureStore({
    reducer: {
        jokes,
        filter,
    }
})