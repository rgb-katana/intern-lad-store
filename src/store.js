import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./features/ProductList/productListSlice";
import cartReducer from "./features/Cart/cartSlice";

const store = configureStore({
  reducer: {
    productList: productListReducer,
    cart: cartReducer,
  },
});

export default store;
