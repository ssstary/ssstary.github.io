$(document).ready(function(){
	$('header ul li:nth-child(2), .clc_menu').mouseenter(function(){
		$('.clc_menu').stop().slideDown();
	}).mouseleave(function(){
		$('.clc_menu').stop().slideUp();
	});

	//////
	$('.clc_sort > li').click(function(){
		$('.clc_sort > li').removeClass('on');
		$(this).addClass('on');
		$('.clc_view > ul').hide();
		$('.clc_view > ul').eq($(this).index()).show();
	});

	$('.hamburger').click(function(){
		$('.clc_menu_mob').stop().slideToggle();
	});

	$(window).resize(function(){
		var w=$(window).width();
		if(w>=680){
			$('.clc_menu_mob').hide();
			$('.hamburger').removeClass('is-active');
		}
	});
});