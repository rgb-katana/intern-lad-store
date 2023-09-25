import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  productList: [],
  error: '',
};

export const getProducts = createAsyncThunk(
  'productList/getProducts',
  async function (skip) {
    // Find out what items we need, conditional because if skip = 0 then the api will give all items, so we limit.

    const requestLink =
      Number(skip) === 1
        ? `https://dummyjson.com/products?limit=10`
        : `https://dummyjson.com/products?limit=10&skip=${(skip - 1) * 10}`;
    // Make a request.

    try {
      const response = await axios.get(requestLink);
      return response.data.products;
    } catch (error) {
      console.log(error);
    }
  }
);

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productList = [];
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'There was a problem fetching products. Try later.';
      }),
});

export default productListSlice.reducer;
