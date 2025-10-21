$(function () {
  //ハンバーガーメニュー
  $(".hambuger").click(function () {
    $(".hambuger").toggleClass("open");
    $(".header_nav-sp").fadeToggle();
  });

  //slick
  // $(".mainvisual").slick({
  //   arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   dots: true
  // });
  // $(".gallery-list").slick({
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: false,
  //         autoplay: true,
  //         autoplaySpeed: 2000
  //       }
  //     }
  //   ]
  // });
});
