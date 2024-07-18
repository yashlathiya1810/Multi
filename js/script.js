 $(document).ready(function(){

  // sticky menu
  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 50) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
  AOS.init()

        // manu active
        $('.main_manu li a').click(function(){
            $('.main_manu li a').removeClass('active')
            $(this).addClass('active');
        })

        // banner slider
        $("#banner_slider").owlCarousel({
            items:1,
            dots:true,
            // autoplay:true,
            // autoplayTimeout:3000,
        });

        // counter
        var counters = $(".count");
        var countersQuantity = counters.length;
        var counter = [];
          
        for (i = 0; i < countersQuantity; i++) {
            counter[i] = parseInt(counters[i].innerHTML);
        }
          
        var count = function(start, value, id) {
            var localStart = start;
            setInterval(function() {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
            },5);
        }
          
        for (j = 0; j < countersQuantity; j++) {
            count(0, counter[j], j);
        }


        // accordion
        $('.accordion-list > li > .answer').hide();
    
        $('.accordion-list > li').click(function() {
          if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
          } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
          }
          return false;
        });

        // Testimonials slider
        $("#Testimonials_slider").owlCarousel({
          items:2,
          loop:true,
          dots:true,
          autoplay:true,
          autoplayTimeout:3000,
        });

         // PORTFOLIO active
         $('.protfolio_manu ul li a').click(function(){
          $('.protfolio_manu ul li a').removeClass('active')
          $(this).addClass('active');
      })

      // header sticky
      $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });
      AOS.init();
      
      // 
      new WOW().init();
            var owl = $('#slider1');
            owl.owlCarousel();
            // Listen to owl events:
            owl.on('changed.owl.carousel', function (event) {
                new WOW().init();
            });

          // bottam to top arrow
          var btn = $('.bottam_to_top_arrow');
          btn.hide();
          $(window).scroll(function() {
              if ($(window).scrollTop() > 300) {
                btn.fadeIn();
              } else {
                btn.fadeOut();
              }
          });
              btn.on('click', function(e) {
              e.preventDefault();
              $('html, body').animate({ scrollTop: 0 },
              '300');
            });
        
});