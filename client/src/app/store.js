import { configureStore } from '@reduxjs/toolkit';
import carsSlice from './features/carsSlice';



const store = configureStore({
	reducer: {
		cars: carsSlice
	}
})

export default store;