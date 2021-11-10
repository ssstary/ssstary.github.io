// JavaScript Document
function play_video(Addr) {
			var videoElement = document.getElementById("cf_video");
			var description = document.getElementById("desc");
			description.innerHTML = "";
			videoElement.src= "";
			videoElement.src = Addr;

		}
$(document).ready(function(){
	
	var $inner_list = document.getElementById("vis_wrap");
	var $inner_list_li = $inner_list.getElementsByTagName("div");
	var click_Event = true;
	var si_01 = null;
	var cnt_num = 0;

	(function init(){
			$inner_list.insertBefore($inner_list_li[$inner_list_li.length - 1], $inner_list.firstChild);
			$inner_list.style.transformX= "-100%";
	})();
	
	function move_ul(_direction){
			click_Event = false;
			stop_si();
			$inner_list.style.transformX = _direction == "prev" ? "0" : "-200%";
				$inner_list.style.transition = "all 0.3s";
				setTimeout(function(){
					if(_direction == "prev"){
						$inner_list.insertBefore($inner_list_li[$inner_list_li.length - 1], $inner_list.firstChild);
					}
					else{
						$inner_list.insertBefore($inner_list_li[0], $inner_list.lastChild);
					}
					$inner_list.style.marginLeft = "-100%";
					$inner_list.style.transition = "none";
					click_Event = true;
					start_si();
				}, 300);
	}
	
	for(var i = 0; i < $inner_list_li.length; i++){
			$inner_list_li[i].index = i;
			$inner_list_li[i].onclick = function(){
				var src = this.children[0].children[0].getAttribute("src");
				var idx = this.index;
				console.log(src);
				src = src.slice(0, src.length -6);
				console.log(src);
				src = src + idx + ".jpg"
				console.log(src);
				$image.setAttribute("src", src);
			}
		}

		function start_si(){
			if(si_01 !=0){
				clearInterval(si_01);
			}
			si_01 = setInterval(function(){move_ul("next");console.log(si_01)}, 1000);
		}
		function stop_si(){
			if(si_01 !=0){
				clearInterval(si_01);
			}
			si_01 = 0;
		}
		start_si();

});