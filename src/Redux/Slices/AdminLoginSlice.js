import { createSlice } from "@reduxjs/toolkit";

export const AdLoginSlice = createSlice({
  name: "adLogin",
  initialState: {value:{bool: false, id: null}},
  reducers: {
    currAdLog: (state, action) => {
      state.value = action.payload;
    }
  },
});


export const { currAdLog } = AdLoginSlice.actions;

export default AdLoginSlice.reducer;
