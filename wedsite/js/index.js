
$("a").click(function(){	
	$(this).css({"text-decoration":"none"});
})
/* 商品分类 */
$(document).ready(function(){
	$(".navItemsBox .mainNav .pop").mouseover(function(){
		$(this).parent().css({"background-color":"white","color":"red"})
	})
	$(".navItemsBox .mainNav .pop").mouseout(function(){
		$(this).parent().css({"background-color":"","color":""})
	})
})



