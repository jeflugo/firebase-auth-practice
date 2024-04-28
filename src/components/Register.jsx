import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/StateContext'

const initialFormData = {
	email: '',
	password: '',
	password2: '',
}

function Register() {
	const [formData, setFormData] = useState(initialFormData)
	const { email, password, password2 } = formData
	const navigate = useNavigate()

	const { registerUser } = useStateContext()

	const handleChange = e =>
		setFormData(prevFormData => ({
			...prevFormData,
			[e.target.name]: e.target.value,
		}))

	const handleSubmit = e => {
		e.preventDefault()

		registerUser(email, password)

		navigate('/dashboard')
	}

	return (
		<div>
			<h2 className='mb-4 text-3xl'>Sign up</h2>
			<form onSubmit={handleSubmit}>
				<div className='mb-4 flex flex-col'>
					<label htmlFor='email'>Email</label>
					<input
						onChange={handleChange}
						className=' rounded-md border border-black px-3 py-1 focus:outline-blue-600'
						type='email'
						name='email'
						id='email'
						value={email}
						placeholder='Enter your email.'
					/>
				</div>
				<div className='mb-4 flex flex-col'>
					<label htmlFor='password'>Password</label>
					<input
						onChange={handleChange}
						className=' rounded-md border border-black px-3 py-1 focus:outline-blue-600'
						type='password'
						name='password'
						id='password'
						value={password}
						placeholder='Enter your password.'
					/>
				</div>
				<div className='mb-4 flex flex-col'>
					<label htmlFor='password2'>Reapeat your password</label>
					<input
						onChange={handleChange}
						className='rounded-md border border-black px-3 py-1 focus:outline-blue-600'
						type='password'
						name='password2'
						id='password2'
						value={password2}
						placeholder='Repeat your password.'
					/>
				</div>
				<button
					type='submit'
					className='mb-2 rounded-md bg-green-700 px-3 py-1 text-gray-50'
				>
					Create account
				</button>
			</form>
			<h4>
				Already have an account?
				<Link
					to='/'
					className='ml-1 text-blue-800 hover:text-blue-600 hover:underline'
				>
					Sign in
				</Link>
			</h4>
		</div>
	)
}

export default Register
