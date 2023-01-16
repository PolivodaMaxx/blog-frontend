import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { postsReducer } from './slices/posts';
import { fullPostReducer } from './slices/fullPost';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    fullPost: fullPostReducer,
  },
});

export default store;
