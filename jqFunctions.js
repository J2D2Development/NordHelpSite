$(document).ready(function() {
	//
	//smooth scroll to top button
	//
	$(window).scroll(function() {
		if($(this).scrollTop() > 200) {
			$('.backToTop').fadeIn();
		} else {
			$('.backToTop').fadeOut();
		}
	});
	$('.backToTop').click(function() {
		$('html, body').animate({scrollTop: 0}, 800);
		return false;
	});
});