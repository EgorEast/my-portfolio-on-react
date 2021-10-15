import React from 'react';
import { useSelector } from 'react-redux';
import './app.scss';
import { GamePage } from './components/GamePage/GamePage';
import { StartPage } from './components/StartPage/StartPage';

function App() {
	const isGameStarted = useSelector((state) => state.game.isGameStarted);

	return (
		<div className='game-background'>
			{isGameStarted ? <GamePage /> : <StartPage />}
		</div>
	);
}

export default App;
