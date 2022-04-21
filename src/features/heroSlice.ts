import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {heroesApi} from '../services/api';

export const getHeroes = createAsyncThunk('heroes/getHeroes', async () => {
  const response = await heroesApi.get('superheroes');
  return response.data;
});

export const heroSlice = createSlice({
  name: 'heroes',
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getHeroes.pending]: state => {
      state.isLoading = true;
      state.error = false;
    },
    [getHeroes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.data = action.payload;
    },
    [getHeroes.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message || 'Unknown error';
    },
  },
});

export default heroSlice.reducer;
