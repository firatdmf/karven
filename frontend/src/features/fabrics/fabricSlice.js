import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fabricService from "./fabricService";

//these are the states for the redux
const initialState = {
  fabrics: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create new Fabric
export const createFabric = createAsyncThunk(
  //below just shows in the redux for information notification classsification purposes
  "fabrics/create",
  async (fabricData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token; // thunkAPI can get anything you want, this gets the user token
      return await fabricService.createFabric(fabricData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
); //the first line -> TAKES IN OUR ACTION NAME, and fabric data inside the function which is just a text

//Get User Fabrics
export const getFabrics = createAsyncThunk(
  "fabrics/getAll",
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token; // thunkAPI can get anything you want, this gets the user token
      // return await fabricService.getFabrics(token); // just pass in token itself for this
      return await fabricService.getFabrics(); // just pass in token itself for this
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
); //getting all the fabrics, we are getting fabrics not passing anything in but we still want the thunkapi so as first argument we just put"_"





export const getFabric = createAsyncThunk(
  "fabrics/getFabric",
  async (id, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token; // thunkAPI can get anything you want, this gets the user token
      // return await fabricService.getFabrics(token); // just pass in token itself for this
      return await fabricService.getFabric(id); 
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
);


//Delete user fabric
export const deleteFabric = createAsyncThunk(
  "fabrics/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token; // thunkAPI can get anything you want, this gets the user token
      return await fabricService.deleteFabric(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
); //the first line -> TAKES IN OUR ACTION NAME, and fabric data inside the function which is just a text

export const fabricSlice = createSlice({
  name: "fabric", //idk how much this name matters
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  // this is function that takes in a builder
  extraReducers: (builder) => {
    builder
      .addCase(createFabric.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createFabric.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.fabrics.push(action.payload) //this is what he likes about redux because you can simply just do push. This is not a regular thing that you can do. Action.payload is just the new fabric that we created, which will be sent back by the API
      })
      .addCase(createFabric.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getFabrics.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFabrics.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.fabrics = action.payload //this is what he likes about redux because you can simply just do push. This is not a regular thing that you can do. Action.payload is just the new fabric that we created, which will be sent back by the API
      })
      .addCase(getFabrics.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      // ---------
      .addCase(getFabric.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFabric.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.fabric = action.payload //this is what he likes about redux because you can simply just do push. This is not a regular thing that you can do. Action.payload is just the new fabric that we created, which will be sent back by the API
      })
      .addCase(getFabric.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      // --------

      .addCase(deleteFabric.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteFabric.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.fabrics = state.fabrics.filter(
          (fabric) => fabric._id !== action.payload.id
        )
        //when we make the delete request, we just return back the id so this one needs to include the id. So action will be action.payload.id. If we do not do state.fabrics.filter... then we would need to refresh the page to see if the fabric is deleted and payload.id is the id of the fabric that we delete. So here we are filtering out the fabric that has that ID.
      })
      .addCase(deleteFabric.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      });
  },
});

export const { reset } = fabricSlice.actions
export default fabricSlice.reducer
