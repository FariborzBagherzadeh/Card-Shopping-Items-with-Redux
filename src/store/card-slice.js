import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { itemsList: [], totalQuantity: 0, showCart: false },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const exsistingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (exsistingItem) {
        exsistingItem.quantity++;
        exsistingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart() {},
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
