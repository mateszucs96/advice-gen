import { useEffect, useState } from 'react';

function App() {
	const [advice, setAdvice] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		setIsLoading(true);
		const res = await fetch('https://api.adviceslip.com/advice');
		const data = await res.json();
		setAdvice(data.slip);
		setIsLoading(false);
		console.log(data.slip);
	};

	const giveAdvice = () => {
		fetchData();
		console.log('clciked');
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div>
					<p className="read-the-docs">{advice.id}</p>
					<p className="read-the-docs">{advice.advice}</p>
					<button onClick={giveAdvice}>click</button>
				</div>
			)}
		</div>
	);
}

export default App;
