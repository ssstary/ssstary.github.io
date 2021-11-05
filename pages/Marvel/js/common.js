$(function () {
    // header
    headerScroll();
    gnbSubdepth();

    $('header .btn_gnb').click(function(){
        $(this).hasClass('open') ? gnbClose() : gnbOpen();
    });
    moreMenu('#gnb li.more .m-depth');

    // design selectbox
    $(this).find('.nice-select').niceSelect();

    // tab
    uiTab();

    // x-scroll
    xScroll('.x-scroll');

    // checkbox All checked 
    // allChecker('.chk-all');
});

function gnbSubdepth() {
    var depth1 = $('#gnb > ul > li > a'),
        header = $('header'),
        area = $('header .header_bottom');

    depth1.mouseenter(function(){
        header.addClass('open');
    });
    area.mouseleave(function(){
        header.removeClass('open');
    });
}

function moreMenu(btn) {
    $(btn).click(function() {
        var prtLi = $(this).parent('li.more'),
            openLi = prtLi.find('.sub-depth');

        if (prtLi.hasClass('open')) {
            prtLi.removeClass('open');
            openLi.slideUp();
        } else {
            prtLi.addClass('open');
            openLi.slideDown();
        }
    });
}

function gnbOpen() {
    var gnb = $('header .nav_area'),
        menuBtn = $('header .btn_gnb'),
        dim = $('header .mob-dim');

    gnb.show();
    setTimeout(function () {
        gnb.addClass('open');
        menuBtn.addClass('open');
        dim.fadeIn(200);
    }, 100);
    scrollPrevent(true);
}

function gnbClose() {
    var gnb = $('header .nav_area'),
        menuBtn = $('header .btn_gnb'),
        dim = $('header .mob-dim');

    gnb.removeClass('open');
    menuBtn.removeClass('open');
    dim.fadeOut(200);
    setTimeout(function () {
        gnb.hide();
    }, 100);
    scrollPrevent(false);
}

function scrollPrevent(prop) {
    if ( prop == true ) {
        $('html, body').scrollTop(0);
        $('body').css({'overflow':'hidden'});
    } else {
        $('body').css({'overflow':'initial'});
    }
}

// checkbox all check
function allChecker(input) {
    var $input = $(input),
        name = $(input).attr('name');

    $input.on('change', function () {
        var $this = $(this);
        if ($this.prop("checked")) {
            $('input[name=' + name + ']').prop("checked", true);
        } else {
            $('input[name=' + name + ']').prop("checked", false);
        }
    });

    $('input[name=' + name + ']').each(function () {
        var $this = $(this);

        $this.on('change', function () {
            var total = $('input[name=' + name + ']').length;
            var chked = $('input[name=' + name + ']:checked').not($input).length + 1;
            if (chked == total) {
                $input.prop("checked", true);
            } else {
                $input.prop("checked", false);
            }
        });
    });
}

// tab
function uiTab() {
    var tab = '[data-evt*="tab"]';
    $(document).on('click', tab + ' a', function (e) {
        e.preventDefault();
        var $this = $(this);
        var wrapper = 'body';
        var id = $this.attr('href');
        var $target = $('[data-id=' + id + ']');
        var $siblings = $this.parents('li').siblings('').find('a');

        $siblings.each(function () {
            var id = $(this).attr('href');
            $(this).parents('li').removeClass('active');
            $('[data-id=' + id + ']').hide();
        });
        $this.parents('li').addClass('active');
        $target.show();

        return false;
    });
}

// iscroll 
function xScroll(obj) {
    if ( $(obj).length > 0 ) {
        new IScroll(obj , {
            scrollX : true,
            scrollY : false,
            mouseWheel : true
        });
    }
}