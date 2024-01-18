import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "login",
  initialState: {value:{bool: false}},
  reducers: {
    currLog: (state, action) => {
      state.value = action.payload;
    }
  },
});


export const { currLog } = LoginSlice.actions;

export default LoginSlice.reducer;
