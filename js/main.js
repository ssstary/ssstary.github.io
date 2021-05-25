$(document).ready(function(){
	$('section').click(function(){
		if($(this).hasClass('cardRotate')){
			$('.cardRotate').removeClass('cardRotate').addClass('backRotate');
		}else{
			$('section').removeClass('on');
			$('.cardRotate').addClass('backRotate').removeClass('cardRotate');
			$(this).addClass('cardRotate').removeClass('backRotate');
		}
	});

	$('.contents_group .card3').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		}else{
			$('.card').removeClass('on');
			$(this).addClass('on');
		}
	});

});  