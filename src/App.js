import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PortfilioPage from './components/PortfilioPage';
import MemoryGame from './projects/MemoryGame';
import Beco from './projects/Beco';

function App() {
	return (
		<>
			<Router>
				<header className='my-portfolio-header'>
					<h1>
						<Link to='/'>My portfolio</Link>
					</h1>
					<p>Slobodskoy Egor Viacheslavovich</p>
				</header>
				<main>
					<Switch>
						<Route path='/memory-game'>{<MemoryGame />}</Route>
						<Route path='/beco'>{<Beco />}</Route>
						<Route exact path='/'>
							<PortfilioPage />
						</Route>
					</Switch>
				</main>
			</Router>
		</>
	);
}

export default App;
