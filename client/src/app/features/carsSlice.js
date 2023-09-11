import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialCarsValue = {
  data: [],
  isLoaging: 'idle',
  error: null
}
export const getAsyncCars = createAsyncThunk("getCars", async () => {
  try {
    const response = await axios("http://localhost:3000/cars")
    return response.data;
  } catch (error) {
    console.log(`error: `, error)
    return error.response.data
  }
})

const carsSlice = createSlice({
  name: "cars",
  initialState: initialCarsValue,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncCars.pending, (state) => {
      state.isLoaging = "pending"
    })
    builder.addCase(getAsyncCars.fulfilled, (state, action) => {
      console.log(`action: `, action)
      state.data = action.payload,
        state.isLoaging = "success"
    })
    builder.addCase(getAsyncCars.rejected, (state, action) => {
      return {
        data: [],
        isLoading: 'failure',
        error: action.payload
      }
    })
  }
})

export default carsSlice.reducer;