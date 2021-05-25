$(document).ready(function(){
	$('.card').click(function(){
		$('.cardRotate').addClass('backRotate').removeClass('cardRotate');
		$(this).addClass('cardRotate').removeClass('backRotate');
	});

	$('.card').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		}else{
			$('.card').removeClass('on');
			$(this).addClass('on');
		}
	});
});