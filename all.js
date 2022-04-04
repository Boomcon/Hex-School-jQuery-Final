$(document).ready(function() {

  $(".menu > li > a").click(function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(this).parent().find(".fold-item").slideToggle();
    $(this).parent().siblings().find(".fold-item").slideUp();
    $(this).parent().siblings().find("a").removeClass("active");
  });

  $(".menu .fold-item > li > a").click(function(event) {
    event.preventDefault();
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 300,
    loop: true,
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
    },
    
    effect: "coverflow",
    rotate: 30,
    slideShadows: false
    
  });

  lightbox.option({
    positionFromTop: 20,
    wrapAround: true,
    fadeDuration: 1000,
    resizeDuration: 500
  });
  
  $(".top a").click(function(e) {
    e.preventDefault();
    $("html , body").animate({
      scrollTop: 0
    }, 1000);
  });
  
});