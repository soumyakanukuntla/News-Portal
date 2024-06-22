import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './NewSlice';
import categoryReducer from './categoryslice';
const store = configureStore({
  reducer: {
    news: newsReducer,
    category: categoryReducer,
  },
});

export default store;
