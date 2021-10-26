$(document).ready(function(){
	$('.h_btn').click(function(){
		$(this).toggleClass('hbtn_on');

		if($(this).hasClass('hbtn_on')){
			$('.menu_container').css({
				'right': '0'
			});
			$(this).css({
				'z-index': '31'
			});
			$('.menu_dim').css({
				'left': '0'
			});
			$('.main_wall').css({
				'width': '80%',
				'padding-right': '10px' 
			});
			$('.project_list_wrap').css({
				'width': '80%',
				'padding-right': '10px' 
			});
			$('.about_me').css({
				'width': '80%',
				'padding-right': '10px' 
			});
		}else{
			$('.menu_container').css({
				'right': '-20%'
			});
			$('.menu_dim').css({
				'left': '-80%'
			});
			$('.main_wall').css({
				'width': '100%',
				'padding-right': '0' 
			});
			$('.project_list_wrap').css({
				'width': '100%',
				'padding-right': '0' 
			});
			$('.about_me').css({
				'width': '100%',
				'padding-right': '0' 
			});
		};
	});



	$('.btn_minimize').click(function(){
		$('.mini_con').slideUp();
	});
	$('.btn_maximize').click(function(){
		$('.mini_con').slideDown();
	});

	$('.mini_con_l > ul > li').click(function(){
		$('.mini_con_l > ul > li').removeClass('mactive');
		$(this).addClass('mactive');
		$('.mini_con_r > ul > li').hide();
		$('.mini_con_r > ul > li').eq($(this).index()).show();
	});
	$('.uplist').click(function(){
		if($(this).hasClass('mactive')){
			$('.uplist').removeClass('mactive');
			$(this).next().children().slideUp();	
		}else{
			$('.uplist').removeClass('mactive');
			$(this).addClass('mactive');
			$(this).next().children().slideDown();
		}
	});

	$('.pop_click > ul > li:first-child').click(function(){
		$('.mini_con_pop.mini button').fadeIn();
		$('.mini_con_pop.mini .mcp_bg li').eq($(this).index()).fadeIn();
	});
	$('.pop_click > ul > li:nth-child(2)').click(function(){
		$('.mini_con_pop.full').css({
			'z-index' : '0'
		});
		$('.mcp_full_dim').fadeIn();
		$('.mini_con_pop.full button').fadeIn();
		$('.mini_con_pop.full .mcp_bg li').eq($(this).index()).fadeIn();
	});


	$('.mini_con_pop button').click(function(){
		$(this).fadeOut();
		$('.mini_con_pop.full').css({
			'z-index' : '-1'
		});
		$('.mcp_full_dim').fadeOut();
		$('.mini_con_pop .mcp_bg li').fadeOut();
	});

	$('.card').click(function(){
		$('.cardRotate').addClass('backRotate').removeClass('cardRotate');
		$(this).addClass('cardRotate').removeClass('backRotate');
	});
});