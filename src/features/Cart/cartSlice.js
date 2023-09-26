import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // Можно сделать пейлоад айди просто
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseItemQuantity(state, action) {
      // Можно сделать пейлоад айди просто
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseItemQuantity(state, action) {
      // тоже можно сделать пейлоад простым айди и ещё аккуратнее с последним ифом
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((accum, cur) => accum + cur.totalPrice, 0);

// export const getCart = (state) => state.cart.cart;
