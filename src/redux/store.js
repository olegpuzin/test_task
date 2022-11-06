import { configureStore } from "@reduxjs/toolkit";
import filter from './slices/filters'
import jokes from "./slices/jokes";

export const store = configureStore({
    reducer: {
        jokes,
        filter,
    }
})