import { useDispatch, useSelector } from 'react-redux'
import { getAsyncCars } from '../../app/features/carsSlice';
import { useEffect } from 'react';

import './Cars.css'


export default function Cars() {
  const cars = useSelector(state => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncCars())
  }, [])

  return (
    <div>
      <h1>Cars page</h1>
      {cars.data.length === 0 ? <span>no cars</span>
        : (
          <>
            <img src={cars.data[0].img} alt="" />
          </>
        )}

    </div>
  )
}
