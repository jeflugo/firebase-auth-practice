import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StateContext from './context/StateContext'

const root = document.getElementById('root')
createRoot(root).render(
	<StrictMode>
		<StateContext>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StateContext>
	</StrictMode>,
)
