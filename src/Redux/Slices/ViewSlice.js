import { createSlice } from "@reduxjs/toolkit";

export const ViewSlice = createSlice({
  name: "Cart",
  initialState: {},
  reducers: {
    addItem: (state, action) => {
      state.value = action.payload;
    },
    removeItem: (state, action) => {
      state.value = null;
    },
  },
});


export const { addItem, removeItem } = ViewSlice.actions;

export default ViewSlice.reducer;
