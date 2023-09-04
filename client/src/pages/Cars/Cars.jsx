import { useSelector } from 'react-redux'


export default function Cars() {
		const cars = useSelector(state => state.cars);
	return (
		<div>
			<h1>Cars page</h1>
		</div>
	)
}
