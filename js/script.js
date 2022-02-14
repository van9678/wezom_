function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu__button');
	let links = menu.find('.burger-menu__link');
	let overaly = menu.find('.burger-menu__overaly');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overaly.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('burger-menu_active');

		if (menu.hasClass('burger-menu_active')) {
			$('.burger-menu').css('overflow', 'hidden');	
		} else {
			$('.burger-menu').css('overflow', 'visible');
		}
	}
}

burgerMenu('.burger-menu');


const button = document.querySelector('#button');
const content = document.querySelector('#content');

button.addEventListener("click", function () {

    content.classList.toggle('content-hidden')
});

'use strict';

$(document).ready(function(){

	$('.product-slider').slick({
		dots: true,
		vertical: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false
	});
});

$(document).ready(function(){

	$(".product-avatar").magnificPopup({
		type : 'image'
	});

});


const ratingItemsList = document.querySelectorAll('.product__rating');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
	item.addEventListener('click', () => {
		const { itemValue } = item.dataset;
		item.parentNode.dataset.totalValue = itemValue;
	})
);

$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__open').toggleClass('active');
	})
});


/* 
const ratingItemsList = document.querySelectorAll('.product__rating');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
	item.addEventListener('click', () =>
		item.parentNode.dataset.totalValue = item.dataset.itemValue
	)
);
*/