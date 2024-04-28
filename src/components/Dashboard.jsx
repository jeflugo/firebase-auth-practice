import { Link } from 'react-router-dom'
import { useStateContext } from '../context/StateContext'

function Dashboard() {
	const { user, logoutUser } = useStateContext()
	return (
		<div>
			<h2 className='mb-4 text-3xl'>Welcome to your account {user}</h2>
			<p>
				There's nothing to do except
				<Link
					onClick={logoutUser}
					to='/'
					className='ml-1 text-blue-800 hover:text-blue-600 hover:underline'
				>
					Logout
				</Link>
			</p>
		</div>
	)
}

export default Dashboard
