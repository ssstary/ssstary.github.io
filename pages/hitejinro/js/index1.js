// JavaScript Document
/*function play_video(Addr) {
			var videoElement = document.getElementById("cf_video");
			var description = document.getElementById("desc");
			description.innerHTML = "";
			videoElement.src= "";
			videoElement.src = Addr;
}*/

$(document).ready(function(){

	$("a[href = '#']").click(function(e){
		e.preventDefault();
		return false;
	});

	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
		isMobile = true;
	}

	/***** 공통 함수(start) *****/	

	// visual_Slides (class 형태) start
	function visual_Slides(_targetWrap, _slides, _has_pause, _type){
		var $wrap = _targetWrap;
		var $slides = $($wrap +" "+ _slides);
		var $pn_btns = $($wrap +" .pagination > button");
		var slide_type = _type;
		var cnt = 0;
		var si_01  = 0;

		if(slide_type == "slides"){
			$slides.removeClass('cur prev next').css("transition", "none").css("opacity", "1").fadeOut(0);
			$slides.first().css("opacity", "1").fadeIn(0);
		}

		var startX = 0;
		var endX = 0;
		var sensitive = 60;
		$($wrap).on('touchstart mousedown', function(e){
			if(!isMobile) return;
			//e.preventDafault();
			if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];//0를 쓰면 손가락 하나만 인정한다
				startX = touch.pageX
			}
			else if(e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave'){
				startX = e.pageX
			}
		});
		$($wrap).on('touchend mouseup', function(e){
			if(!isMobile) return;
			//e.preventDafault();
			if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
				endX = touch.pageX
			}
			else if(e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave'){
				endX = e.pageX
			}
			
			if(startX + sensitive < endX){
				console.log("swipe(right)");
				count_minus();
			}
			else if(startX > sensitive + endX){
				console.log("swipe(left)");
				count_plus();
			}
		});

		
		function count_plus(){
			cnt = cnt == $slides.length - 1 ? 0 : cnt + 1;
			(slide_type == "slide") ? slide_img(cnt, "all 0.4s") : fade_img(cnt);
			pagination_change(cnt);
		}
		function count_minus(){
			cnt = cnt == 0 ? $slides.length - 1 : cnt - 1;
			(slide_type == "slide") ? slide_img(cnt, "all 0.4s") : fade_img(cnt);
			pagination_change(cnt);
		}

		function fade_img(num){
			stop_si();
			$slides.fadeOut(1000);
			$slides.eq(num).fadeIn(1000, function(){
				start_si();
			});
		}

		function slide_img(num, transition_val){
			stop_si();
			var next_num = cnt == $slides.length - 1 ? 0 : cnt + 1;
			var prev_num = cnt == 0 ? $slides.length - 1 : cnt - 1;
			$slides.removeClass('cur prev next').css("transition", "none");
			if($slides.length <= 2){
				$slides.eq(num).addClass("cur").css("transition", "all 0.4s");
				if(cnt == 0){
					$slides.eq(next.num).addClass("next").css("transition", "all 0.4s");
				}
				else if(cnt == 1){
					$slides.eq(prev.num).addClass("prev").css("transition", "all 0.4s");
				}
			}
			else if($slides.length >= 3){
				$slides.eq(num).addClass("cur").css("transition", transition_val);
				$slides.eq(prev_num).addClass("prev").css("transition", "all 0.4s");
				$slides.eq(next_num).addClass("next").css("transition", "all 0.4s");
			}
			start_si();
		}

		function pagination_change(num){
			$pn_btns.removeClass("active");
			$pn_btns.eq(num).addClass("active");
		}

		function start_si(){
			if(si_01 != 0){
				clearInterval(si_01)
			}
			si_01 = setInterval(count_plus, 3000);
		}
		function stop_si(){
			if(si_01 != 0){
				clearInterval(si_01)
			}
			si_01 = 0;
		}
		start_si();
	}
	// visual_Slides (class 형태) end

	// fadeIn_both_side (response scroll, fadeIn, translateX) start
	function fadeIn_both_side(){
		var $tar_elm = $('.fadeIn_idx');
		var start_X = 200; //양옆으로 200을 빼놓는다

		var load_act = (function(){
			$tar_elm.each(function(){
				if($(this).hasClass('minus')){
					$(this).css("transform", 'translateX(' + -(start_X) +'px)');
				}
				else {
					$(this).css("transform", 'translateX(' + start_X +'px)');
				}
				$(this).css("opacity", "0");
			});
		})();

		$(window).on("scroll", function(){
			$tar_elm.each(function(){
				var scrollTop = isMobile == true ? $(window).scrollTop() + $(window).outerHeight() +50 : $(window).scrollTop() + $(window).outerHeight() -100;
				var offset = $(this).offset().top;
				var translate = start_X - (scrollTop - offset);
				var opa = (scrollTop - offset) / 150;

				if(translate <= start_X && translate >= 0){
					if($(this).hasClass('minus')){
					$(this).css("transform", 'translateX(' + -(translate) +'px)');
					}
					else {
					$(this).css("transform", 'translateX(' + translate +'px)');
					}
				}
				else if(translate > start_X){
					if($(this).hasClass('minus')){
					$(this).css("transform", 'translateX(' + -(start_X) +'px)');
					}
					else {
					$(this).css("transform", 'translateX(' + start_X +'px)');
					}
				}
				else if(translate <= 0){
					$(this).css("transform", 'translateX(0px)');
				}
				
				$(this).css("opacity", opa);
				if(opa > 1){
					$(this).css("opacity", 1);
				}
				else if(opa < 0){
					$(this).css("opacity", 0);
				}
			});
		});
	}
	
	/***** 공통 함수(end) *****/


	/***** 디바이스별 분기 *****/
	// 데스크탑
	if(!isMobile){
		

	}

	else {

		// Tablet
		if(screen.width >= 768){

			

		}

		// Mobile
		else {

			

		}
		
	}

	var slide_01 = visual_Slides(".sec_visual", ".slides", false, "slide");//맨 마지막에 호출을 한다 mobile, tablet, desktop 다 사용하려고
	var fadeIn_both_side_01 = fadeIn_both_side();
});
