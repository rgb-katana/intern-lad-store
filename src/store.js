import { configureStore } from '@reduxjs/toolkit';
import productListReducer from './features/ProductList/productListSlice';

const store = configureStore({
  reducer: {
    productList: productListReducer,
  },
});

export default store;