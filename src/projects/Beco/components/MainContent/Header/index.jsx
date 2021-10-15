import React from 'react';
import './header.scss';

const Header = () => {
	return (
		<header className='header'>
			<div className='headline'>
				<div className='text'>Каталог</div>
			</div>
			<div className='search-container'>
				<input
					type='text'
					className='search-input icon-search'
					placeholder='Какой магазин вам нужен?'
				/>
			</div>
		</header>
	);
};

export default Header;
