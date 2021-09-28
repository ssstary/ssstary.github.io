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
		}else{
			$('.menu_container').css({
				'right': '-50%'
			});
		};
	});

});