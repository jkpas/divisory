$(document).ready(function(){

 
	$('.bxslider').bxSlider({
  		pager: true
  	});

	$('.bxslider2').bxSlider({
  		pager: false,
  		infiniteLoop: true,
  		displaySlideQty: 6
  	});

	$(".header_nav>ul>li>a,.hover_menu").mouseover(function() {
		$(".hover_menu").css( "display", "block" )		
		})
		.mouseout(function() {
	    $(".hover_menu").css( "display", "none" )
	});
	
	// $(".header_nav>ul>item1>a").mouseover(function() {
	// 	$(".header_nav>ul>item1>span").css( "display", "block" )		
	// 	})
	// 	.mouseout(function() {
	//     $(".header_nav>ul>item1>span").css( "display", "none" )
	// });
	// $(".header_nav>ul>item2>a").mouseover(function() {
	// 	$(".header_nav>ul>item2>span").css( "display", "block" )		
	// 	})
	// 	.mouseout(function() {
	//     $(".header_nav>ul>item2>span").css( "display", "none" )
	// });
	// $(".header_nav>ul>item3>a").mouseover(function() {
	// 	$(".header_nav>ul>item3>span").css( "display", "block" )		
	// 	})
	// 	.mouseout(function() {
	//     $(".header_nav>ul>item3>span").css( "display", "none" )
	// });
	// $(".header_nav>ul>item4>a").mouseover(function() {
	// 	$(".header_nav>ul>item4>span").css( "display", "block" )		
	// 	})
	// 	.mouseout(function() {
	//     $(".header_nav>ul>item4>span").css( "display", "none" )
	// });
	// $(".header_nav>ul>item5>a").mouseover(function() {
	// 	$(".header_nav>ul>item5>span").css( "display", "block" )		
	// 	})
	// 	.mouseout(function() {
	//     $(".header_nav>ul>item5>span").css( "display", "none" )
	// });	

});


