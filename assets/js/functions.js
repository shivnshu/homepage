function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + 50;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(function (){


      $('.mobile-nav-toggle').click(function(){
        var status = $(this).hasClass('is-open');
        if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
        else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
      });

      $('.blog-link').click(function () {
          $('.home-section').css('display', 'none');
          $('.blog-section').css("display", "block");
          $(".blog-link").css("color", "rgba(128, 0, 0, 1)");
        //   console.log($('.home-section').css("display"));
      });


	$('a[href^="#"]').click(function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, 500);
	    }
	});

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

       $('.animateItLeft').each(function () {
          if (isScrolledIntoView(this) === true) {
              $(this).addClass('animated fadeInLeft visible')
          }
       });

       $('.animateItRight').each(function () {
          if (isScrolledIntoView(this) === true) {
              $(this).addClass('animated fadeInRight visible')
          }
       });

       if(!isScrolledIntoView("#about-section")){
           $(".btn-1").css("color", "rgba(128, 0, 0, 0.5)");
       }

       if(isScrolledIntoView("#about-section")){
           $(".btn-1").css("color", "rgba(128, 0, 0, 1)");
           $(".btn-2").css("color", "rgba(128, 0, 0, 0.5)");
       }

       if(isScrolledIntoView("#skills-section")){
           $(".btn-1").css("color", "rgba(128, 0, 0, 0.5)");
           $(".btn-2").css("color", "rgba(128, 0, 0, 1)");
           $(".btn-3").css("color", "rgba(128, 0, 0, 0.5)");
       }

       if(isScrolledIntoView("#projects-section")){
           $(".btn-2").css("color", "rgba(128, 0, 0, 0.5)");
           $(".btn-3").css("color", "rgba(128, 0, 0, 1)");
           $(".btn-4").css("color", "rgba(128, 0, 0, 0.5)");
       }

       if(isScrolledIntoView("#education-section")){
           $(".btn-3").css("color", "rgba(128, 0, 0, 0.5)");
           $(".btn-4").css("color", "rgba(128, 0, 0, 1)");
           $(".btn-5").css("color", "rgba(128, 0, 0, 0.5)");
       }

       if(isScrolledIntoView("#achievements-section-btn")){
           $(".btn-4").css("color", "rgba(128, 0, 0, 0.5)");
           $(".btn-5").css("color", "rgba(128, 0, 0, 1)");
           $(".btn-6").css("color", "rgba(128, 0, 0, 0.5)");
       }

       if(isScrolledIntoView("#contact-section")){
           $(".btn-5").css("color", "rgba(128, 0, 0, 0.5)");
           $(".btn-6").css("color", "rgba(128, 0, 0, 1)");
       }

       var wScroll = $(window).scrollTop() + 50;

       $('section.topBar').css('background-position','center '+ wScroll*0.8 + 'px');

    });

});
