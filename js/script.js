// ====================
// ハンバーガーメニュー
// ====================
$(function () {
  $(".hambuger").click(function () {
    $(".hambuger").toggleClass("open");
    $(".header_nav-sp").fadeToggle();
  });
});

// ====================
// スライダー
// ====================
$(function () {
  var $slider = $(".works-list");
  var slickInitialized = false;

  function slickToggle() {
    var windowWidth = $(window).width();

    if (windowWidth >= 768) {
      // 768px以上で未初期化なら slick を起動
      if (!slickInitialized) {
        $slider.slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          centerMode: true,
          centerPadding: "15%",
          arrows: true,
          appendArrows: $(".arrow__box"),
          prevArrow: '<div class="slide-arrow prev-arrow"></div>',
          nextArrow: '<div class="slide-arrow next-arrow"></div>'
        });
        slickInitialized = true;
      }
    } else {
      // 768px未満なら slick を破棄
      if (slickInitialized) {
        $slider.slick("unslick");
        slickInitialized = false;
      }
    }
  }

  // 初期ロード時とリサイズ時にチェック
  slickToggle();
  $(window).on("resize", slickToggle);
});

// ====================
//ページトップボタン
// ====================
$(function () {
  const pageTop = $("#page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      500
    );
    return false;
  });
  // フッター手前でストップ
  $("#page-top").hide();
  $(window).on("scroll", function () {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      $("#page-top").css({
        position: "absolute",
        bottom: footHeight
      });
    } else {
      $("#page-top").css({
        position: "fixed",
        bottom: "0"
      });
    }
  });
});
