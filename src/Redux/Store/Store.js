import { configureStore } from '@reduxjs/toolkit'
import CartReducer from "../Slices/CartSlice"
import acsReducer from "../Slices/AcsSlice"
import userReducer from "../Slices/UsersSlice"

export default configureStore({
  reducer:{
    cart: CartReducer,
    acs: acsReducer,
    user: userReducer
  },
})