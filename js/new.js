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

	$('.card').click(function(){
		$('.cardRotate').addClass('backRotate').removeClass('cardRotate');
		$(this).addClass('cardRotate').removeClass('backRotate');
	});
});