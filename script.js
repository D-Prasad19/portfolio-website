$(document).ready(function () {
  // Sticky navbar & scroll-up button visibility logic
  $(window).on('scroll', function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // Scroll-up action
  $('.scroll-up-btn').on('click', function () {
    $('html').animate({ scrollTop: 0 }, function() {
      $('html').css("scrollBehavior", "auto");
    });
  });

  // Smooth scroll menu items config
  $('.navbar .menu li a').on('click', function () {
    $('html').css("scrollBehavior", "smooth");
    $('.navbar .menu').removeClass("active");
    $('.menu-btn i').removeClass("active");
  });

  // Responsive mobile menu toggle (Fix: Removed nested ready state)
  $('.menu-btn').on('click', function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  // Typing dynamic configuration strings
  if ($('.typing').length) {
    new Typed(".typing", {
      strings: ["Full Stack Python Developer", "Data Science Enthusiast", "PowerBI Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }

  if ($('.typing-2').length) {
    new Typed(".typing-2", {
      strings: ["Full Stack Developer", "Data Science Enthusiast", "PowerBI Developer", "Data Analyst"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }

  // Owl Carousel Initialization
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false }
    }
  });
});
