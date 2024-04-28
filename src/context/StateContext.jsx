import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import { createContext, useContext, useState } from 'react'
import { auth } from '../../.firebaserc'

const Context = createContext()

const initialUser = ''

function StateContext({ children }) {
	const [user, setUser] = useState(initialUser)

	const loginUser = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => setUser(userCredential.user.email))
			.catch(error => {})
	}
	const registerUser = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => setUser(userCredential.user.email))
			.catch(error => {})
	}
	const logoutUser = () => setUser(initialUser)

	return (
		<Context.Provider value={{ user, registerUser, loginUser, logoutUser }}>
			{children}
		</Context.Provider>
	)
}

export default StateContext

export const useStateContext = () => useContext(Context)
