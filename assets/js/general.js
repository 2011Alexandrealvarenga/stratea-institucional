jQuery(function() {
	jQuery(window).scroll(function () {
		if (jQuery(window).scrollTop() > 10) {
			jQuery('.main-menu').addClass('background-scroll');
		}

		else {
			jQuery('.main-menu').removeClass('background-scroll');
		}
	});
})