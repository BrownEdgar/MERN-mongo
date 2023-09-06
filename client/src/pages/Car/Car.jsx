
import React, { useState, useEffect } from 'react';
import axios from '../../axios'
import { useParams } from "react-router-dom";


const Car = () => {
  const [car, setcar] = useState({})
  const { id } = useParams();
  useEffect(() => {
    axios(`/cars/${id}`,)
      .then(res => {
        setcar(res.data.data)
      })
      .catch(err => console.log(err.response?.data?.message))
  }, [id])

  return (
    <div className="car">
      {/* <img src={car.img} alt="" className="carImg" />
      <h1 className="carTitle">{car.title}</h1>
      <p className="carDesc">{car.desc}</p>
      <p className="carLongDesc">{car.longDesc}</p> */}
    </div>
  );
};

export default Car;

