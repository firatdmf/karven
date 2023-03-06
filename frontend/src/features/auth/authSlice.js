//Thunk functions help to do synchronous functions and update your state, usually with what you get back from the server
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//when a user logs in, or registers, we get back a json object with user details, where their json web token in it as well

//Get user from localStorage
//because local storage can only have store strings so we parse the string back into a json object
const user = JSON.parse(localStorage.getItem("user"));

//setting initial state to be an object, just pertains to the user part of our state or authentication
const initialState = {
  //if there user logged in already, set it to user, else set it to null
  user: user ? user : null,
  //Below will be a binary to see if the performed operation resulted in any errors that we get back from the server, // so we can switch it true if something is wrong
  isError: false,
  //just like above, if the operatation performed successfully we will make this true
  isSuccess: false,
  //below is for spinner component to work, when the operation is still in process
  isLoading: false,
  //We also would like to be able to send a message into the state to later check in the redux toolkit
  message: "",
};

//Register user
//below auth/register string doesn't matter what it is, just for display purposes at redux toolkit
//so registering in eventually will look like auth/register/pending or auth/register/fulfilled
export const register = createAsyncThunk(
  "auth/register",
  //the below user input comes from the register.jsx component as dispatch(register(userData)) where userData is an object (not json)
  //it contains user information: _id, name, email, and token.
  async (user, thunkAPI) => {
    try {
      //send a post request to the server and save it in localStorage with this user information via authService.js
      return await authService.register(user);
    } catch (error) {
      //if we get an error, display whichever error is thrown, and reject it via redux
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Login user
//below auth/login string doesn't matter what it is, just for display purposes at redux toolkit
//so logging in eventually will look like auth/login/pending
//the below user input comes from the register.jsx component as dispatch(register(userData)) where userData is an object (not json)
//it contains user information: _id, name, email, and token.
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    //send a post request to the server and save it in localStorage with this user information via authService.js
    return await authService.login(user);
  } catch (error) {
    //if we get an error, display whichever error is thrown, and reject it via redux
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  //as you can see we do not have store in a different variable or return anything. because we do not have to send anything to db
  //we just need to go to authService.js to remove the user object from its parent auth object in redux state
  await authService.logout();
});

//below is for redux tool kit where we see what is going on. and update our states properties.
//it will help us in error messages and see if operation is loading so we can display a spinner
export const authSlice = createSlice({
  //this name makes it accessible via useSelector() in our jsx components for example:
  //const { user, isLoading, isError, isSuccess, message } = useSelector((state)=>state.auth)
  name: "auth",
  //setting initial state to initial state by bringing from top of this file
  initialState,
  //now here comes the real work: reducers
  //reset is a default reducer so we put it in here for others, we will set an extraReducer property/key
  reducers: {
    //the below function is exported from this document below and is used in register and login components
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  //this where we reference to the above functions we created for handling requests made in files via the dispatch stuff
  extraReducers: (builder) => {
    builder
      //this is for registering, if the register function in above is pending (in process)
      .addCase(register.pending, (state) => {
        //, set the loading equal to true.
        state.isLoading = true;
      })
      //if the register function is fulfilled (executed successfully with no errors)
      .addCase(register.fulfilled, (state, action) => {
        //then set loading false
        state.isLoading = false;
        //set sucess true
        state.isSuccess = true;
        //set the "auth" state's user property equal to the result you get in return from userController.js, in this case:
        // res.status(201).json({
        //   _id: user._id,
        //   name: user.name,
        //   email: user.email,
        //   //now lets create a jwt token for the user
        //   token: generateToken(user._id), // we could have just had token and that would have been fine too
        // });
        state.user = action.payload;
      })

      //if the register function gets rejected
      .addCase(register.rejected, (state, action) => {
        //set loading equal to false
        state.isLoading = false;
        //set error equal to true
        state.isError = true;
        //set message equal to the json error object you get from userController.js (or eventually in errorMiddleware), in this case:
        //res.status(400);
        // throw new Error("Invalid user data");
        state.message = action.payload;
        //set the user state to null
        state.user = null;
      })

      //below is similar to the above logic
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })

      //The below addcase was not there we added later bc when the user logsout they have refresh the page to go into effect, this will elimate that problem
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

//we need to export below because we use it in login and register components in useEffects with dispatch(register()) by importing `import {reset} from "../features/auth/authSlice";`
export const { reset } = authSlice.actions;
//we need to export default the reducer like this for redux and its toolkit to work
export default authSlice.reducer; // when you have reducer you have to export it. It is kinda weird but anyway he said
