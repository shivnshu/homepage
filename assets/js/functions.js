function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + 50;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

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

    $(window).scroll(function () {
       $('.animateItUp').each(function () {
          if (isScrolledIntoView(this) === true) {
              $(this).addClass('animated fadeInUp visible')
          }
       });
    });

});
