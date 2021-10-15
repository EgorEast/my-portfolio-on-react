import React from 'react';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

const MemoryGame = () => {
	return (
		<Provider store={store}>
			<App className='memory-game' />
		</Provider>
	);
};

export default MemoryGame;
