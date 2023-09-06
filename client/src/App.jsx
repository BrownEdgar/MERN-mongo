


import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Layouts from './components/Layouts/Layouts';
import Home from './pages/Home/Home';
import Cars from './pages/Cars/Cars';
import Login from './pages/Login/Login';
import Addpost from './pages/Addpost/Addpost';
import Car from './pages/Car/Car';

function App() {

	const router = createBrowserRouter(
		createRoutesFromElements(

			<Route path="/" element={<Layouts />}>
				<Route index element={<Home />} />
				<Route path='cars' element={<Cars />} />
				<Route path='cars/:id' element={<Car/>} />
				<Route path='login' element={<Login />} />
				<Route path='addCars' element={<Addpost/>} />
				<Route path="*" element={<Navigate to='/' replace />} />

			</Route>

		)
	)

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
