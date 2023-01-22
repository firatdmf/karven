//This is a file for redux state storages
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import goalReducer from '../features/goals/goalSlice';
import fabricReducer from '../features/fabrics/fabricSlice';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    goals:goalReducer,
    fabrics:fabricReducer,
  },
});
