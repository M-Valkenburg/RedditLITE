import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSubreddits = createAsyncThunk(
    'subs/fetchSubs',
    async () => {
        const response = await fetch(`https://www.reddit.com/subreddits.json?limit=10`);
        const json = await response.json();
        return json.data.children.map((subreddit) => subreddit.data);
    }
);

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {},
    extraReducers: {
        [fetchSubreddits.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.subreddits = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchSubreddits.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectSubreddits = state => state.subreddits.subreddits;
export default subredditsSlice.reducer;
