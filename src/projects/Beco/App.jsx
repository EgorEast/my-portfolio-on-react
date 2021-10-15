import React from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import './styles/App.scss';

const App = () => {
	return (
		<>
			<Sidebar />
			<MainContent />
		</>
	);
};

export default App;
