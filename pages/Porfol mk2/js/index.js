$(function() {

    $(".item_list").mousewheel(function(event, delta) {
 
       this.scrollLeft -= (delta * 30);
     
       event.preventDefault();
 
    });
 
 });