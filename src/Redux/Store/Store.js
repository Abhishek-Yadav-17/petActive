import { configureStore } from '@reduxjs/toolkit'
import CartReducer from "../Slices/CartSlice"
import acsReducer from "../Slices/AcsSlice"

export default configureStore({
  reducer:{
    cart: CartReducer,
    acs: acsReducer
  },
})