$('.slick').slick({
    autoplay: true, //「オプション名: 値」の形式で書く
    fade: true,
    arrows:false,
    autoplaySpeed: 800,//次のスライドに切り替わる待ち時間
    speed:1500,
    infinite:true
});

// ハンバーガメニュー
jQuery('.drawer-icon__bars').on('click' , function(e) {
    e.preventDefault();
    jQuery('.header_logo').toggleClass('is-active');
    jQuery('.drawer-icon__bars').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');

    return false;

});

