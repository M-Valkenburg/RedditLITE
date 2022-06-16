import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        try {
            const response = await fetch(`https://reddit.com/r/popular.json`);
            const json = await response.json();
            const data = json.data.children.map(post => post.data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const redditSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
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

export const selectPosts = (state) => state.posts.posts;
export const isLoading = (state) => state.posts.isLoading;
export const hasError = (state) => state.posts.hasError;
export default redditSlice.reducer;