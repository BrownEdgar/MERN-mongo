


import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react';
import Layouts from './components/Layouts/Layouts';
import Home from './pages/Home/Home';
import Cars from './pages/Cars/Cars';
import Login from './pages/Login/Login';
import Addpost from './pages/Addpost/Addpost';
import Car from './pages/Car/Car';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3000/auth/login/success", {
        method: "GET",
        credentials: "include",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log('resObject.user', resObject.user)
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        })
    };
    getUser();
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<Layouts user={user} />}>
        <Route index element={<Home />} />
        <Route path='cars' element={<Cars />} />
        <Route path='cars/:id' element={<Car />} />
        <Route path='login' element={<Login />} />
        <Route path='addCars' element={<Addpost />} />
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
