import './styles/App.scss';

const categoriesCollection = document.querySelectorAll('.category');
const header = document.querySelector('.header');
const text = header.querySelector('.text');
const couponsContainer = document.querySelector('.coupons-container');
const couponsCollection = document.querySelectorAll('.coupon');

function changeClassListCategory() {
	const thisElement = this;
	const thisHeading = this.querySelector('.heading');
	categoriesCollection.forEach((element) => {
		if (element.id === thisElement.id) {
			element.classList.remove('default');
			element.classList.add('active');
			text.textContent = thisHeading.textContent;
		} else {
			element.classList.remove('active');
			element.classList.add('default');
		}
	});
}
function changeClassListCoupon() {
	const thisElement = this;
	couponsCollection.forEach((element) => {
		if (element.id === thisElement.id) {
			element.classList.remove('default');
			element.classList.add('active');
		} else {
			element.classList.remove('active');
			element.classList.add('default');
		}
	});
}

function scrollContainer() {
	if (this.oldScroll < this.scrollTop) {
		header.classList.add('scrolled-down');
		couponsContainer.classList.add('scrolled-down');
	} else {
		header.classList.remove('scrolled-down');
		couponsContainer.classList.remove('scrolled-down');
	}
	this.oldScroll = this.scrollTop;
}

categoriesCollection.forEach((element) => {
	element.onclick = changeClassListCategory;
});
couponsCollection.forEach((element) => {
	element.onclick = changeClassListCoupon;
});

couponsContainer.onscroll = scrollContainer;
