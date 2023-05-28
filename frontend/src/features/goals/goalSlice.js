import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import goalService from "./goalService"

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

//Create new goal
export const createGoal = createAsyncThunk(
  "goals/create", //this is just how it will show on redux (arbitrary to the codes elsewhere)
  async (goalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token; // thunkAPI can get anything you want, this gets the user token
      return await goalService.createGoal(goalData, token);
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
); //the first line -> TAKES IN OUR ACTION NAME, and goal data inside the function which is just a text

//Get User Goals
export const getGoals = createAsyncThunk(
  "goals/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token; // thunkAPI can get anything you want, this gets the user token
      return await goalService.getGoals(token); // just pass in token itself for this
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
); //getting all the goals, we are getting goals not passing anything in but we still want the thunkapi so as first argument we just put"_"

//Delete user goal
export const deleteGoal = createAsyncThunk(
  "goals/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token // thunkAPI can get anything you want, this gets the user token
      return await goalService.deleteGoal(id, token)
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
) //the first line -> TAKES IN OUR ACTION NAME, and goal data inside the function which is just a text

//below are redux reducers
export const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  // this is function that takes in a builder
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals.push(action.payload); //this is what he likes about redux because you can simply just do push. This is not a regular thing that you can do. Action.payload is just the new goal that we created, which will be sent back by the API
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getGoals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = action.payload; //this is what he likes about redux because you can simply just do push. This is not a regular thing that you can do. Action.payload is just the new goal that we created, which will be sent back by the API
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(deleteGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = state.goals.filter(
          (goal) => goal._id !== action.payload.id)
         //when we make the delete request, we just return back the id so this one needs to include the id. So action will be action.payload.id. If we do not do state.goals.filter... then we would need to refresh the page to see if the goal is deleted and payload.id is the id of the goal that we delete. So here we are filtering out the goal that has that ID.
      })
      .addCase(deleteGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = goalSlice.actions
export default goalSlice.reducer