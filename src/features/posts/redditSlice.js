import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (sub) => {
        const response = await fetch(`https://www.reddit.com/r/${sub}.json`);
        const json = await response.json();
        return json.data.children.map((post) => post.data);
    }
);

export const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
        subreddit: 'popular',
        searchTerm: ''
    },
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchPosts.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectPosts = (state) => state.reddit.posts;
export default redditSlice.reducer;
