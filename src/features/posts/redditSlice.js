import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (sub) => {
        const response = await fetch(`https://www.reddit.com/r/${sub}.json`);
        const json = await response.json();
        return json.data.children.map(post => post.data);
    }
);

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (permalink) => {
        const response = await fetch(`https://www.reddit.com${permalink}.json`);
        const json = await response.json();
        return json[1].data.children.map(comment => comment.data);
    }
);

export const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
        subreddit: 'popular',
        searchTerm: '',
        showComments: false,
        comments: [],
        commentsLoading: false,
        commentsError: false,
    },
    reducers: {
        setSubreddit(state, action) {
            state.subreddit = action.payload;
            state.searchTerm = '';
            window.scrollTo(0, 0);
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setShowComments(state) {
            state.showComments = !state.showComments;
        }
    },
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
        },
        [fetchComments.pending]: (state) => {
            state.commentsLoading = true;
            state.commentsError = false;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
            state.commentsLoading = false;
            state.commentsError = false;
        },
        [fetchComments.rejected]: (state) => {
            state.commentsLoading = false;
            state.commentsError = true;
        }
    }
});

export const { setSubreddit, setSearchTerm } = redditSlice.actions;
export const selectPosts = (state) => state.reddit.posts;
export const selectComments = (state) => state.reddit.comments;
export default redditSlice.reducer;
