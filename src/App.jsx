import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

function App() {
	return (
		<div className='mx-auto w-[500px]'>
			<h1 className='mb-5 text-center text-5xl font-bold'>Great page</h1>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</div>
	)
}

export default App
