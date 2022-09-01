import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getFirebaseToken, onMessageListener } from './firebase';

function App() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log('before-firebase-token');
		getFirebaseToken();
	}, []);
	useEffect(() => {
		console.log('before-onmessgaelistener');
		onMessageListener()
			.then(payload => console.log(payload))
			.catch(err => console.log(err));
	}, []);
	

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello Vite + React!</p>
				<p>
					<button type="button" onClick={() => setCount(count => count + 1)}>
						count is: {count}
					</button>
				</p>
				<p>
					Edit <code>App.jsx</code> and save to test HMR updates.
				</p>
				<p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					{' | '}
					<a
						className="App-link"
						href="https://vitejs.dev/guide/features.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vite Docs
					</a>
				</p>
			</header>
		</div>
	);
}

export default App;
