//This is a file for redux state storages
//bring the necessary package to store some states globally in the redux/ and redux toolkit (so we can access them in every react component and make changes)
import { configureStore } from "@reduxjs/toolkit";

//Bring the reducers for each redux state
import authReducer from "../features/auth/authSlice";
import goalReducer from '../features/goals/goalSlice';
import fabricReducer from '../features/fabrics/fabricSlice';

//export those reducers as one big reducer, and give them a name for reference (keys) in redux tool kit
export const store = configureStore({
  reducer: {
    //below is where you can change the state names in the redux (displayed in redux toolkit)
    auth:authReducer,
    goals:goalReducer,
    fabrics:fabricReducer,
  },
});
