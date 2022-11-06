import { createSlice } from '@reduxjs/toolkit';

import { fetchJokes } from './asyncAction';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        searchValue: '',
        currentPage: {
            page: 1,
            countPage: 0
        },
    },
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setPage(state, action) {
            state.currentPage.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        
        builder.addCase(fetchJokes.fulfilled, (state, action) => {
            state.currentPage.countPage = action.payload.total_pages;
        })
    }
});

// Action creators are generated for each case reducer function
export const { setSearchValue, setPage, setCountPage } = filterSlice.actions;

export default filterSlice.reducer;