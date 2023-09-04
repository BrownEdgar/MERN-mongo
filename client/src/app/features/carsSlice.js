import { createSlice } from "@reduxjs/toolkit";

const initialCarsValue = {
	data: [],
	isLoaging: 'idle',
	error: null
}

const carsSlice = createSlice({
	name: "cars",
	initialState: initialCarsValue,
	reducers: {

	},
	extraReducers: {}
})

export default carsSlice.reducer;