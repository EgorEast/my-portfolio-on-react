import React from 'react';
import CouponsContainer from './CouponsContainer';
import Header from './Header';
import './main-content.scss';

const MainContent = () => {
	return (
		<div className='main-content'>
			<Header />
			<hr className='hr-line' />
			<CouponsContainer />
		</div>
	);
};

export default MainContent;
