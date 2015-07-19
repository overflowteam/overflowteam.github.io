$(function(){
	$(".card").mouseenter(function(){
	  $(this).children(".pic").addClass("pic-selected").css("background","#FF9900");
	});
	$(".card").mouseleave(function(){
	  $(this).children(".pic").removeClass("pic-selected").css("background","#27ae60");
	});
});