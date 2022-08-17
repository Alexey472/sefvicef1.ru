

$(function () {
  
  $(".main__slider-block").slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  })

  $(".main__reviews-slider").slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })


});

$(function () {
  
  $('.burger').on('click', function (e) {
    e.preventDefault()
    $('.header__inner-nav').toggleClass('header__inner-nav--open')
  })


});

