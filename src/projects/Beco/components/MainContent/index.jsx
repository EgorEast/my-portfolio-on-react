import React, { useContext } from 'react';
import { Context } from '../../App';
import CouponsContainer from './CouponsContainer';
import Header from './Header';
import './main-content.scss';

const MainContent = () => {
	const { isClosedSidebar } = useContext(Context);
	return (
		<div className={`main-content${isClosedSidebar ? '' : ' opened-sidebar'}`}>
			<Header />
			<hr className='hr-line' />
			<CouponsContainer />
		</div>
	);
};

export default MainContent;
