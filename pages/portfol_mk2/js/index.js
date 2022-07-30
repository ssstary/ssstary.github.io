$(document).ready(function () {
  

  var dir='next';
  var num=0;

  $('.indicator_bar > button').first().addClass('on');
  $('.indicator_bar > button').click(function(){
    $('.indicator_bar > button').removeClass('on');
    $(this).addClass('on');
    var i=$(this).index();
    var n=-(i*100);
    $('.item_list').animate({
      left: n+"%"
    },'slow');
  });
  $('.next').click(function(){
    dir='next';
    num=num+1;
    if(num>2){
      num=0
    }
    $('.indicator_bar > button').eq(num).trigger('click')
  });
  $('.prev').click(function(){
    dir=-'next';
    num=num-1;
    if(num<0){
      num=2
    }
    $('.indicator_bar > button').eq(num).trigger('click')
  });

  $(".item_list > li:first-child").mouseenter(function () {
    $(".item_bg").css("background-color", "#211");
  });
  $(".item_list > li:nth-child(2)").mouseenter(function () {
    $(".item_bg").css("background-color", "#923");
  });
  $(".item_list > li:nth-child(3)").mouseenter(function () {
    $(".item_bg").css("background-color", "#461");
  });
  $(".item_list > li:nth-child(4)").mouseenter(function () {
    $(".item_bg").css("background-color", "#015");
  });
  $(".item_list > li:nth-child(5)").mouseenter(function () {
    $(".item_bg").css("background-color", "#198");
  });
  $(".item_list > li:last-child").mouseenter(function () {
    $(".item_bg").css("background-color", "#501");
  });

});
$(window)
  .resize(function () {
    if (window.innerWidth < 500) {
    } else {
    }
  })
  .resize();
