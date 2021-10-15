import React, { useState } from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import './styles/App.scss';

export const Context = React.createContext();

const App = () => {
	const [isClosedSidebar, setIsClosedSidebar] = useState(true);

	const changeStateSidebar = () => {
		if (isClosedSidebar) {
			setIsClosedSidebar(false);
		} else {
			setIsClosedSidebar(true);
		}
	};

	return (
		<div className='beco'>
			<Context.Provider value={{ isClosedSidebar, changeStateSidebar }}>
				<Sidebar />
				<MainContent />
			</Context.Provider>
		</div>
	);
};

export default App;
