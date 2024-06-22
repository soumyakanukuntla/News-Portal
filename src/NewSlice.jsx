import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = '7611009ac62c44038e14fe2822094dae'; 

export const fetchArticles = createAsyncThunk(
  'news/fetchArticles',
  async ({ category, page }, thunkAPI) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=10&apiKey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return { articles: data.articles, totalResults: data.totalResults };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    loading: false,
    error: null,
    totalResults: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.articles;
        state.totalResults = action.payload.totalResults;
        state.error = null;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default newsSlice.reducer;
