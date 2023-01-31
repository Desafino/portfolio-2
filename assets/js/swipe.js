(() => {
  const outerSwipe = new Swiper(".outer-swipe", {
    loop: true,
    nested: true,
    navigation: {
      nextEl: ".swiper-button-next", // 「次へ」ボタン要素のクラス
      prevEl: ".swiper-button-prev", // 「前へ」ボタン要素のクラス
    },
    pagination: {
      el: ".swiper-pagination", //必須の設定：ページネーションのclass指定
      type: "bullets",
      clickable: "clickable",
    },
  });
})();

(() => {
  const innerSwipe = new Swiper(".inner-swipe", {
    loop: true,
    centeredSlides: true, //アクティブなスライドを中央に表示
    slidesPerView: 1, //スライダーコンテナにスライドを3枚同時表示
    spaceBetween: 15, //スライド間の距離を16pxに

    mousewheel: {
      invert: false,
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      780: {
        slidesPerView: 2,
      },
    },
  });
})();
