$(window).on('load', function() {
	$('.sf-menu').superfish();

   
  
}); 
 $('.slide-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsiveClass: true,
        
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            600: {
                    items: 1,
                    dots: true,
                    nav: false
                },
                1000: {
                    items: 1,
                    dots: true,
                    nav: false,
                    loop: true
                }
        }
    });