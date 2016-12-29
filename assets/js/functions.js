$(document).ready(function (){

    $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.button-scroll-top').fadeIn();
		} else {
			$('.button-scroll-top').fadeOut();
		}
	});

    $('#scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});
