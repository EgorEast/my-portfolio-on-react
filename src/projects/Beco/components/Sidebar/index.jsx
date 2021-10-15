import React, { useContext } from 'react';
import { Context } from '../../App';
import Category from './Category/Index';
import './sidebar.scss';

const categories = [
	{ categoryName: 'catalogue', status: 'active', heading: 'Каталог' },
	{ categoryName: 'health', status: 'default', heading: 'Здоровье' },
	{ categoryName: 'beauty', status: 'default', heading: 'Красота' },
	{ categoryName: 'entertainment', status: 'default', heading: 'Развлечения' },
	{ categoryName: 'car', status: 'default', heading: 'Авто' },
];

const Sidebar = () => {
	const { isClosedSidebar, changeStateSidebar } = useContext(Context);
	return (
		<div className={`sidebar ${isClosedSidebar ? 'closed' : 'open'}`}>
			<div className='sidebar-container'>
				<div className='company'>
					<div className='company-logo'></div>
					<div className='company-name'>BECO</div>
				</div>
				<div className='categories'>
					{categories.map((category) => (
						<Category
							key={category.categoryName}
							categoryName={category.categoryName}
							status={category.status}
							heading={category.heading}
						/>
					))}
				</div>
			</div>
			<button
				className='closing-opening-sidebar-button'
				onClick={changeStateSidebar}
			></button>
		</div>
	);
};

export default Sidebar;
