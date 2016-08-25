$(document).ready(function(){

//humburger menu
  $("#hamb-btn").click(function(){
    $(".header_nav").toggle( "slow", function(){
    });
  });

//sliders
  $("#owl-slider1").owlCarousel({
    items: 1,
    loop: true,
    navigation: true,
    navigationText : false,    
    responsiveBaseWidth: window,
    itemsDesktop: [1199,1],
    itemsDesktopSmall : [900,1],
    itemsTablet: [768,1],
    itemsMobile: [479,1]
   });

	$("#owl-brands").owlCarousel({
  	items: 5,
  	loop: true,
  	navigation: true,
 		navigationText : false,  		
    responsiveBaseWidth: window,
    itemsDesktop: [1199,4],
    itemsDesktopSmall : [900,3],
    itemsTablet: [768,2],
    itemsMobile: [479,1]
	});

 //hover menu
	$(".header_nav>ul>li>a,.hover_menu").mouseover(function() {
    if (window.matchMedia('(max-width: 900px)').matches) {
      $(".hover_menu").css( "display", "none" )  
    }
    else {
		  $(".hover_menu").css( "display", "block" )	
    }	
	})
		.mouseout(function() {
	    $(".hover_menu").css( "display", "none" )
	});

  if (window.matchMedia('(max-width: 900px)').matches) {
      $(".hover_menu").css( "display", "none" )  
  };

  //меняем текст placeholder'а на более короткий для экранов с малым разрешением
  if (window.matchMedia('(max-width: 500px)').matches) {
      $(".search_goods_form_input").attr("placeholder", "Поиск товара")   
  };
 
	
});


