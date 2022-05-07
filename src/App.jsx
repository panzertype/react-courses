import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import { AppRouter } from './components/AppRouter/AppRouter';

function App() {
	return (
		<div className='container'>
			<div className='App'>
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
