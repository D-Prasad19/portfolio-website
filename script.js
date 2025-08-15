$(document).ready(function () {
  // Sticky navbar on scroll
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    // Scroll-up button show/hide
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // Scroll-up button click
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    $('html').css("scrollBehavior", "auto");
  });

  // Smooth scroll on menu items
  $('.navbar .menu li a').click(function () {
    $('html').css("scrollBehavior", "smooth");
  });

  // Toggle menu/navbar
$(document).ready(function () { 
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
});

  // Typing animation - Header
  var typed = new Typed(".typing", {
    strings: ["Full Stack Python Developer", "Data Science Enthusiast", "PowerBI Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // Typing animation - About section
  var typed2 = new Typed(".typing-2", {
    strings: ["Full Stack Developer", "Data Science Enthusiast", "PowerBI Developer", "Data Analyst"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // Owl Carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});
