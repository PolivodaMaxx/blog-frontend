import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchPost = createAsyncThunk('posts/fetchPost', async (params) => {
  const { data } = await axios.get(`/posts/${params}`);
  return data;
});

const initialState = {
  post: {
    item: [],
    status: 'loading',
  },
};

const fullPostSlice = createSlice({
  name: 'fullPost',
  initialState,
  reducer: {},
  extraReducers: {
    //Получение статей

    [fetchPost.pending]: (state) => {
      state.post.item = [];
      state.post.status = 'loading';
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.post.item = action.payload;
      state.post.status = 'loaded';
    },
    [fetchPost.rejected]: (state) => {
      state.post.item = [];
      state.post.status = 'error';
    },
  },
});

export const fullPostReducer = fullPostSlice.reducer;
