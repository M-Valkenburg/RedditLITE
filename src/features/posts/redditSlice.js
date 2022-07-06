import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (sub) => {
        const response = await fetch(`https://www.reddit.com/r/${sub}.json`);
        const json = await response.json();
        return json.data.children.map(post => ({
            ...post.data,
            comments: [],
            commentsLoading: false,
            commentsError: false,            
        }))
    }
);

const fetchComments = async (permalink) => {
    const response = await fetch(`https://www.reddit.com${permalink}.json`);
    const json = await response.json();
    return json[1].data.children.map(comment => comment.data)
};

export const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
        subreddit: 'popular',
        searchTerm: '',
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
        commentsPending(state, action) {
            state.posts[action.payload].commentsloading = true;
            state.posts[action.payload].commentsError = false;
        },
        commentsFulfilled(state, action) {
            state.posts[action.payload.index].commentsLoading = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        commentsRejected(state, action) {
            state.posts[action.payload].commentsLoading = false;
            state.posts[action.payload].commentsError = true;
        },
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
    }
});

export const getComments = (index, permalink) => async (dispatch) => {
    try {
        dispatch(commentsPending(index));
        const comments = await fetchComments(permalink);
        dispatch(commentsFulfilled({ index, comments }));
    } catch (error) {
        dispatch(commentsRejected(index));
    }
};

export const { 
    setSubreddit, 
    setSearchTerm, 
    setComments, 
    commentsPending, 
    commentsFulfilled, 
    commentsRejected 
} = redditSlice.actions;

export const selectPosts = (state) => state.reddit.posts;
export default redditSlice.reducer;
