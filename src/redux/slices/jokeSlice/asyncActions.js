import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchJokes = createAsyncThunk('jokes/fetchJokeStatus', async (params) => {
    const { page, limitPage, searchValue } = params;

    const { data } = await axios.get(
        `https://icanhazdadjoke.com/search?page=${page}&limit=${limitPage}&term=${searchValue}`, 
        { headers: { 'Accept': 'application/json' } }
    )
    return data;
})