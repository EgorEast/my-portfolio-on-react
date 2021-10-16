import './App.scss';
import PortfolioPage from './components/PortfolioPage';

function App() {
	return (
		<>
			<header className='my-portfolio-header'>
				<h1>My portfolio</h1>
				<p>Slobodskoy Egor Viacheslavovich</p>
			</header>
			<main>
				<PortfolioPage />
			</main>
		</>
	);
}

export default App;
