import React from 'react';

const Category = ({ categoryName, status, heading }) => {
	return (
		<div id={categoryName} className={`category ${categoryName} ${status}`}>
			<div className='mark'></div>
			<div className='icon'></div>
			<div className='heading'>{heading}</div>
		</div>
	);
};

export default Category;
