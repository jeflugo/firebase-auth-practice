import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../.firebaserc'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useStateContext } from '../context/StateContext'

const initialFormData = {
	email: '',
	password: '',
}

function Login() {
	const [formData, setFormData] = useState(initialFormData)
	const { email, password } = formData
	const navigate = useNavigate()

	const { loginUser } = useStateContext()

	const handleChange = e =>
		setFormData(prevFormData => ({
			...prevFormData,
			[e.target.name]: e.target.value,
		}))

	const handleSubmit = e => {
		e.preventDefault()

		loginUser(email, password)

		navigate('/dashboard')
	}

	return (
		<div>
			<h2 className='mb-4 text-3xl'>Sign in</h2>
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
				<button
					type='submit'
					className='mb-2 rounded-md bg-green-700 px-3 py-1 text-gray-50'
				>
					Log in
				</button>
			</form>
			<h4>
				New here?
				<Link
					to='/register'
					className='ml-1 text-blue-800 hover:text-blue-600 hover:underline'
				>
					Sign up
				</Link>
			</h4>
		</div>
	)
}

export default Login
