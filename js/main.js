

$(function () {
  
  $(".main__slider-block").slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  })

  $(".main__reviews-slider").slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1
  })


});

$(function () {
  
  $('.burger').on('click', function (e) {
    e.preventDefault()
    $('.header__inner-nav').toggleClass('header__inner-nav--open')
  })


});

