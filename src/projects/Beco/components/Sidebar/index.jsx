import React from 'react';
import './sidebar.scss';

const Sidebar = () => {
	return (
		<div className='sidebar closed'>
			<div className='sidebar-container'>
				<div className='company'>
					<div className='company-logo'></div>
					<div className='company-name'>BECO</div>
				</div>
				<div className='categories'>
					<div id='catalogue' className='category catalogue active'>
						<div className='mark'></div>
						<div className='icon'></div>
						<div className='heading'>Каталог</div>
					</div>
					<div id='health' className='category health default'>
						<div className='mark'></div>
						<div className='icon'></div>
						<div className='heading'>Здоровье</div>
					</div>
					<div id='beauty' className='category beauty default'>
						<div className='mark'></div>
						<div className='icon'></div>
						<div className='heading'>Красота</div>
					</div>
					<div id='entertainment' className='category entertainment default'>
						<div className='mark'></div>
						<div className='icon'></div>
						<div className='heading'>Развлечения</div>
					</div>
					<div id='car' className='category car default'>
						<div className='mark'></div>
						<div className='icon'></div>
						<div className='heading'>Авто</div>
					</div>
				</div>
			</div>
			<button className='closing-opening-sidebar-button'></button>
		</div>
	);
};

export default Sidebar;
