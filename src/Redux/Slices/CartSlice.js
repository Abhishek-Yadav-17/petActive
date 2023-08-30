import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      console.log("Add Item", action.payload);
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      console.log("Add Item", action.payload);
      state.pop(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = CartSlice.actions;

export default CartSlice.reducer;
