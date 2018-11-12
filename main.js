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



  // HERE IS THE DAY AUTO MATED THANNNG

  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "sunday";
  weekday[1] = "monday";
  weekday[2] = "tuesday";
  weekday[3] = "wednesday";
  weekday[4] = "thursday";
  weekday[5] = "friday";
  weekday[6] = "saturday";

  var today = weekday[3];

  //this is to make the select input chANGE
  $("#sched-select").val(today);
  showDaySchedual(today);

   // THIS IS THE SCHEDUAL selector

   $("#sched-select").change ( function (){

     var day = $(this).val();

     showDaySchedual(day);

   });

   function showDaySchedual(day) {

     if (day === "monday"){
       $("#monday").removeClass("display-none")
       $("#tuesday").addClass("display-none")
       $("#wednesday").addClass("display-none")
       $("#thursday").addClass("display-none")
       $("#friday").addClass("display-none")
       $("#saturday").addClass("display-none")
       $("#sunday").addClass("display-none")

     }

     if (day === "tuesday"){
       $("#tuesday").removeClass("display-none")
       $("#monday").addClass("display-none")
       $("#wednesday").addClass("display-none")
       $("#thursday").addClass("display-none")
       $("#friday").addClass("display-none")
       $("#saturday").addClass("display-none")
       $("#sunday").addClass("display-none")
     }

     if (day === "wednesday"){
       $("#wednesday").removeClass("display-none")
       $("#monday").addClass("display-none")
       $("#tuesday").addClass("display-none")
       $("#thursday").addClass("display-none")
       $("#friday").addClass("display-none")
       $("#saturday").addClass("display-none")
       $("#sunday").addClass("display-none")

     }

     if (day === "thursday"){
       $("#thursday").removeClass("display-none")
       $("#monday").addClass("display-none")
       $("#tuesday").addClass("display-none")
       $("#wednesday").addClass("display-none")
       $("#friday").addClass("display-none")
       $("#saturday").addClass("display-none")
       $("#sunday").addClass("display-none")

     }

     if (day === "friday"){
       $("#friday").removeClass("display-none")
       $("#monday").addClass("display-none")
       $("#tuesday").addClass("display-none")
       $("#wednesday").addClass("display-none")
       $("#thursday").addClass("display-none")
       $("#saturday").addClass("display-none")
       $("#sunday").addClass("display-none")

     }

      if (day === "saturday"){
        $("#saturday").removeClass("display-none")
        $("#monday").addClass("display-none")
        $("#tuesday").addClass("display-none")
        $("#wednesday").addClass("display-none")
        $("#thursday").addClass("display-none")
        $("#friday").addClass("display-none")
        $("#sunday").addClass("display-none")

          }

      if (day === "sunday"){
        $("#sunday").removeClass("display-none")
        $("#monday").addClass("display-none")
        $("#tuesday").addClass("display-none")
        $("#wednesday").addClass("display-none")
        $("#thursday").addClass("display-none")
        $("#friday").addClass("display-none")
        $("#saturday").addClass("display-none")

          }
   }


// Slider



 }); // end of doc ready
