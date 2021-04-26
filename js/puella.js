$(function(){
	/*메뉴*/
	$(".gnb>ul>li").mouseover(function(){
		$(this).find(".submenu").stop().slideDown(800);
	});
	$(".gnb>ul>li").mouseout(function(){
		$(this).find(".submenu").stop().slideUp(800);
	});
	
	/*메인 슬라이드*/
	setInterval(function(){
		$("#article .main ul img").eq(2).fadeOut(1000,function(){
		$("#article .main ul img").eq(2).insertBefore("#article .main ul img:eq(0)")
		$("#article .main ul img").eq(0).fadeIn();		
		});
	},3500);
	
	/* section1  right이미지 */
	$(".oneImg li img ").mouseover(function(){
		$(this).css({transform:"scale(1.5)",cursor:"pointer"});
	});
	$(".oneImg li img ").mouseout(function(){
		$(this).css({transform:"scale(1)"});
	});
	
	/* section2  right office 이미지 */
	$(".red.Right img ").mouseover(function(){
		$(this).css({transform:"scale(1.2)",cursor:"pointer"});
	});
	$(".red.Right img ").mouseout(function(){
		$(this).css({transform:"scale(1)"});
	});
	
	/* section2  right kitchen이미지 */
	$(".kitchen.Left img ").mouseover(function(){
		$(this).css({transform:"scale(1.2)",cursor:"pointer"});
	});
	$(".kitchen.Left img ").mouseout(function(){
		$(this).css({transform:"scale(1)"});
	});
	
	/*best review*/
	$(".section3 .best>li").mouseover(function(){
		$(this).children("ul").stop().animate({"top":"-110px"},1000);
	});
	$(".section3 .best>li").mouseout(function(){
		$(this).children("ul").stop().animate({"top":"0px"});
	});
	
});//$(function(){ 끝