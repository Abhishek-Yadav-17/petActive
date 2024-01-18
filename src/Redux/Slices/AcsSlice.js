import { createSlice } from "@reduxjs/toolkit";

export const AcsSlice = createSlice({
  name: "acs",
  initialState: {},
  reducers: {
    updtItem: (state, action) => {
      console.log("Acs Item", action.payload);
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updtItem } = AcsSlice.actions;

export default AcsSlice.reducer;
