import { Formik, Form, Field, ErrorMessage } from 'formik'

import './Addpost.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Addpost() {
	const navigate = useNavigate();
	const onSubmit = (values) => {
		console.log(values);
		axios.post('http://localhost:3000/posts', values, {
			headers: {
				'accept': 'application/json',
				'Content-Type': 'multipart/form-data',
				"Access-Control-Allow-Credentials": true,
			}
		})
		navigate('/cars')
	}

	const initialValues = {
		name: "",
		img: '',
		desc: "",
		model: "",
		color: "",
		year: '',
		engine: ''
	}
	return (
		<div className='home home__colored'>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validateOnChange={false}
				validateOnBlur={true}
			>
				{(formik) => {

					return (
						<Form className='Addpost' >
							<div className="form-control">
								<label htmlFor="name">name</label>
								<Field type="text" id="name" name="name" />
								<ErrorMessage name="name" component="p" />
							</div>
							<div className="form-control">
								<label htmlFor="name">description</label>
								<Field type="text" id="desc" name="desc" />
								<ErrorMessage name="desc" component="p" />
							</div>
							<div className="form-control">
								<label htmlFor="model">model</label>
								<Field id="model" name="model" />
								<ErrorMessage name="model" component="p" />
							</div>
							<div className="form-control">
								<label htmlFor="color">color</label>
								<Field id="color" name="color" type="color"/>
								<ErrorMessage name="color" component="p" />
							</div>
							<div className="form-control">
								<label htmlFor="year">year</label>
								<Field id="year" name="year" type="number"/>
								<ErrorMessage name="year" component="p" />
							</div>
							<div className="form-control">
								<label htmlFor="engine">engine</label>
								<Field id="engine" name="engine" type="number"/>
								<ErrorMessage name="engine" component="p" />
							</div>
							<div className="form-control">
								<label htmlFor="name">post image</label>
								<input id="file" name="img" type="file" onChange={(event) => {
									formik.setFieldValue('img', event.target.files[0])
								}} />
								<ErrorMessage name="img" component="p" />
							</div>
							<div>
								<input type="submit" value='add post' />
							</div>
						</Form>
					)
				}}


			</Formik>
		</div>
	)
}
