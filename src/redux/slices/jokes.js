import { createSlice } from '@reduxjs/toolkit';

import { fetchJokes } from './asyncAction';


export const jokeSlice = createSlice({
    name: 'jokes',
    initialState: {
        jokes: [],
        status: 'loading' // loading | success | error
    },
    reducers: {
        setJokes(state, action) {
            state.jokes = action.payload.data.results;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJokes.pending, (state) => {
            state.status = 'loading';
            state.jokes = [];
        })
        builder.addCase(fetchJokes.fulfilled, (state, action) => {
            state.status = 'success';
            state.jokes = action.payload.results;
        })
        builder.addCase(fetchJokes.rejected, (state) => {
            state.status = 'error';
            state.jokes = [];
        })
    }
});

// Action creators are generated for each case reducer function
export const { setJokes } = jokeSlice.actions;

export default jokeSlice.reducer;