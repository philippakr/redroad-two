$(document).ready(function() {

  // This is the start of the jQuery

  // THIS IS THE SMOOTH SCROLLING CODE

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

// This the end of the smooth scroll

// THIS IS THE MOBILE BURGER MENU


   $(".burger-button").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").slideToggle();
   });

console.log("dgfdfgdfg")
   $("#nav-icon").click( function() {
     $("#nav-menu").toggleClass("nav-menu-active");
     $("#nav-menu-content").slideToggle();
     $("#nav-menu-content").toggleClass("animated");
     $("#nav-menu-content").toggleClass("fadeInRightBig");
     // $("#nav-menu-content").toggleClass("delay-2s");
   });


   // THIS IS THE APPEAR FOR THE LISTEN LIVE

     AOS.init();


  // THIS IS THE PHOTO SECTION
   





 }); // end of doc ready
