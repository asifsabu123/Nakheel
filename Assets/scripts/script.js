$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
    $(".scroll-top-btn").addClass("show");
  } else {
    $(".scroll-top-btn").removeClass("show");
  }
});

$(document).ready(function () {
  $(".scroll-top-btn").on('click', function () {
    $(window).scrollTop(0);
  })


  var swiper = new Swiper(".swiper-container", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    // autoplay: false,
    effect: "fade",
    speed: 1000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      }
    }
  });
  // $(".swiper-container").hover(function () {
  //   swiper.autoplay.stop();
  //   $(".swiper-progress-bar").removeClass("animate");
  // }, function () {
  //   swiper.autoplay.start();
  //   $(".swiper-progress-bar").addClass("animate");
  // });

  
    var video = $("video");
    var videoStatus = video.get(0);
    
  $(".play-icon").on('click', function () {

    if (videoStatus.paused) {
      video.trigger("play");
      swiper.autoplay.stop();
      $(".swiper-progress-bar").removeClass("animate");
    } else {
      video.trigger("pause");
      swiper.autoplay.start();
      $(".swiper-progress-bar").addClass("animate");
    }
  });


})

