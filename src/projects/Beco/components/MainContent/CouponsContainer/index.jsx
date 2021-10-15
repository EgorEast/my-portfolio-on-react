import React from 'react';
import Coupon from './Coupon';
import './coupons-container.scss';

const coupons = [
	{
		status: 'active',
		title: 'пробка на мира',
		description: 'Вечер для двоих',
		data: '-50%',
		essence: 'СКИДКА',
		pictureName: 'wine',
	},
	{
		status: 'default',
		title: 'кИНО И НЕМЦЫ',
		description: 'Бесплатный бокал пива',
		data: 'ВАРВАР',
		essence: 'ПРОМОКОД',
		pictureName: 'beer',
	},
	{
		status: 'default',
		title: 'valery cakes',
		description: 'Торт',
		data: '30%',
		essence: 'скидка',
		pictureName: 'cake',
	},
	{
		status: 'default',
		title: 'sushi sell',
		description: 'Набор “Праздник”',
		data: '45%',
		essence: 'скидка',
		pictureName: 'sushi',
	},
	{
		status: 'default',
		title: 'mangosteen',
		description: 'Фрукт в подарок',
		data: 'J130',
		essence: 'купон',
		pictureName: 'fruit',
	},
	{
		status: 'default',
		title: 'теленок табака',
		description: 'Стейк “Мачете”',
		data: '20%',
		essence: 'скидка',
		pictureName: 'stake',
	},
	{
		status: 'default',
		title: 'fire food',
		description: 'Вторая шаурма в подарок',
		data: 'ОГОНЬ',
		essence: 'промокод',
		pictureName: 'shawarma',
	},
	{
		status: 'default',
		title: 'aroma cremeria',
		description: 'Джелато “Пармезан”',
		data: '20%',
		essence: 'Скидка',
		pictureName: 'ice-cream',
	},
	{
		status: 'default',
		title: 'пробка на мира',
		description: 'Вечер для двоих',
		data: 'J130',
		essence: 'КУПОН',
		pictureName: 'wine',
	},
	{
		status: 'default',
		title: 'кИНО И НЕМЦЫ',
		description: 'Бесплатный бокал пива',
		data: 'ВАРВАР',
		essence: 'ПРОМОКОД',
		pictureName: 'beer',
	},
	{
		status: 'default',
		title: 'valery cakes',
		description: 'Торт',
		data: '30%',
		essence: 'скидка',
		pictureName: 'cake',
	},
	{
		status: 'default',
		title: 'sushi sell',
		description: 'Набор “Праздник”',
		data: '45%',
		essence: 'скидка',
		pictureName: 'sushi',
	},
];

const CouponsContainer = () => {
	return (
		<div className='coupons-container'>
			{coupons.map((coupon, index) => {
				return (
					<Coupon
						key={'coupon' + index}
						id={index + 1}
						status={coupon.status}
						title={coupon.title}
						description={coupon.description}
						data={coupon.data}
						essence={coupon.essence}
						pictureName={coupon.pictureName}
					/>
				);
			})}
			<div id='12' className='coupon default'>
				<div className='shadow'></div>
				<div className='content'>
					<div className='information'>
						<div className='coupon-name'>
							<div className='title'>sushi sell</div>
							<div className='description'>Набор “Праздник”</div>
						</div>
						<div className='bonus-type'>
							<div className='data'>45%</div>
							<div className='essence'>скидка</div>
						</div>
					</div>
					<div className='picture sushi'></div>
				</div>
				<div className='frame'></div>
			</div>
		</div>
	);
};

export default CouponsContainer;
