/*****전역선언****/



/*****이벤트선언****/


/*****이벤트콜백****/


/*****사용자함수****/
function mainBanner() {
	var swiper = new Swiper('.main-wrapper .swiper-container', {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});
}
	function proFile() {
		var swiper = new Swiper('.profile-wrapper swiper-container', {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			navigation: {
				nextEl: '.profile-wrapper .bt-next',
				prevEl: '.profile-wrapper .bt-prev',
			},
		});
	}