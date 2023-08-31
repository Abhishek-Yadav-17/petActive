import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    currentUser: (state, action) => {
      console.log("Add Item", action.payload);
      state.value = action.payload;
    }
  },
});


export const { currentUser } = UserSlice.actions;

export default UserSlice.reducer;
