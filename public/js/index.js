/*****전역선언****/



/*****이벤트선언****/
mainBanner();
proFile(); 
$(".modal-trigger").click(onModalShow);
$(".modal-container").click(onModalHide);
$(".modal-wrapper").click(onModalWrapperClick);
$(".modal-wrapper").find(".bt-close").click(onModalHide);

/*****이벤트콜백****/
function onModalWrapperClick(e) {
	e.stopPropagation();
}

function onModalShow(e) {
	e.preventDefault();
	$(".modal-container").css({"display":"block"});
	$(".modal-container").css("opacity");
	$(".modal-container").addClass('active');
	$("body").addClass("hide");
	$($(this).data('modal')).addClass("active");
}

function onModalHide(e) {
	$(".modal-container").removeClass('active');
	$(".modal-wrapper").removeClass('active');
	setTimeout(function(){
		$(".modal-container").css({"display":"none"});
		$("body").removeClass("hide");
	},300);
}

/*****사용자함수****/
function mainBanner() {
	var swiper = new Swiper('.main-wrapper.swiper-container', {
		loop: true,
		effect: 'fade'
	});
}

function proFile() {
	var swiper = new Swiper('.profile-wrapper.swiper-container', {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: '.profile-wrapper .bt-next',
			prevEl: '.profile-wrapper .bt-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 4
			}
		}
	});
}