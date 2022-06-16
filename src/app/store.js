import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../features/posts/redditSlice';

export const store = configureStore({
  reducer: {
    reddit: redditReducer
  },
});
