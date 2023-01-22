import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //Thunk functions help to do synchronous functions and update your state with what you get back from the server
import authService from "./authService";

//Get user from localStorage
const user = JSON.parse(localStorage.getItem("user")); //because local storage can only have storage so we parse it

const initialState = {
  user: user ? user : null, //if there is user-> set it to user, if not set it to null
  isError: false, // so we can switch it true if something is wrong
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
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
export const login = createAsyncThunk(
    "auth/login",
    async (user, thunkAPI) => {
      try {
        return await authService.login(user);
      } catch (error) {
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

export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout();
  });

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })


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


export const { reset } = authSlice.actions;
export default authSlice.reducer; // when you have reducer you have to export it. It is kinda weird but anyway he said
