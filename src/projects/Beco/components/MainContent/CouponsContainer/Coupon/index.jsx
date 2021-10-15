import React from 'react';
import CouponContent from './CouponContent';
import './coupon.scss';

const Coupon = ({
	id,
	status,
	title,
	description,
	data,
	essence,
	pictureName,
}) => {
	return (
		<div id={id} className={`coupon ${status}`}>
			<div className='shadow' />
			<CouponContent
				title={title}
				description={description}
				data={data}
				essence={essence}
				pictureName={pictureName}
			/>
			<div className='frame' />
		</div>
	);
};

export default Coupon;
