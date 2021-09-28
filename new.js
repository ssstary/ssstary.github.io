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
				'width': '50%'
			});
		}else{
			$('.menu_container').css({
				'right': '-50%'
			});
			$('.menu_dim').css({
				'left': '-50%'
			});
			$('.project_list_wrap').css({
				'width': '100%'
			});
		};
	});

});