import React from 'react';
import './coupon-content.scss';

const CouponContent = ({ title, description, data, essence, pictureName }) => {
	return (
		<div className='content'>
			<div className='information'>
				<div className='coupon-name'>
					<div className='title'>{title}</div>
					<div className='description'>{description}</div>
				</div>
				<div className='bonus-type'>
					<div className='data'>{data}</div>
					<div className='essence'>{essence}</div>
				</div>
			</div>
			<div className={`picture ${pictureName}`}></div>
		</div>
	);
};

export default CouponContent;
