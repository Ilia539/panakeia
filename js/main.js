$(document).ready(function(){
  $('.intro__inner').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        speed: 1000
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        fade: true,
        mobileFirst: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000
      }
    }]
  });
});

 // .......SCROLL EASY...
 $(document).ready(function() {
  $('.header__link').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top + 'px'
    }, {
      duration: 1000,
      easing: 'swing'
    });
    return false;
    });
  });