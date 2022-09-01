$(document).ready(function () {

    $(".h_btn").click(function () {
        $(this).toggleClass("hbtn_on");

        if ($(this).hasClass("hbtn_on")) {
            $(".popmenu_wrap").fadeIn();
        } else {
            $(".popmenu_wrap").fadeOut();
        }
    });

    $(".popmenu_wrap").click(function () {
        $(".popmenu_wrap").fadeOut();
        $(".h_btn").removeClass("hbtn_on");
    });

    var dir = "next",
        num = 0;
    var bgImgs = ["hyundai.jpg", "goldsalt.jpg", "koreauniv.jpg", "wbodam.jpg", "blueshark.jpg", "tabori.jpg"];

    $(".item_bg").first().css("background-image", "url(./images/hyundai.jpg");
    // $(".indicator_bar > li").first().addClass("on");
    // $(".indicator_bar > li").click(function () {
    //     $(".indicator_bar > li").removeClass("on");
    //     $(this).addClass("on");
    //     var i = $(this).index();
    //     var n = -(i * 100);
    //     $(".item_list").animate(
    //         {
    //             left: n + "%",
    //         },
    //         300
    //     );
    // });
    $(".swiper-prev").click(function () {
    //     dir = -"next";
        num = num - 1;
        if (num < 0) {
            num = 5;
        }
        var imgIdx = bgImgs[num];
        $(".item_bg").css("background-image", "url(./images/" + imgIdx);
    //     $(".indicator_bar > li").eq(num).trigger("click");
    });
    $(".swiper-next").click(function () {
    //     dir = "next";
        num = num + 1;
        if (num > 5) {
            num = 0;
        }
        var imgIdx = bgImgs[num];
        $(".item_bg").css("background-image", "url(./images/" + imgIdx);
    //     $(".indicator_bar > li").eq(num).trigger("click");
    });

});

$(window)
    .resize(function () {
        if (window.innerWidth < 500) {
        } else {
        }
    })
    .resize();
