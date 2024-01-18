import { configureStore } from '@reduxjs/toolkit'
import ViewReducer from "../Slices/ViewSlice"
import acsReducer from "../Slices/AcsSlice"
import userReducer from "../Slices/UsersSlice"
import loginReducer from "../Slices/LoginSlic"
import adLoginReducer from "../Slices/AdminLoginSlice"



const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    // Handle write errors
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer:{
    view: ViewReducer,
    acs: acsReducer,
    user: userReducer,
    login:loginReducer,
    adminLogin:adLoginReducer
  },
  preloadedState, 
})

store.subscribe(() => {
  saveState(store.getState()); // Save state whenever it changes
});

export default store;