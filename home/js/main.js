$(document).ready(function(){


// smooth scroll from li navbar about to services
 $('.links li a').click(function(){
    $('html,body').animate({
         scrollTop: $( '#' + $(this).data('value') ).offset().top +1 // 3shan ynzlna bn3oma lma ados 3la ay kelma f nav ywdena ll div ely wa5da id bta3ha
    },1000);
 });





	// var navbar= $('.navbar');
	// $(window).scroll(function(){

	// 	if($(window).scrollTop() > 600){
	// 		navbar.css("background-color", "rgba(38, 89, 160, .8)");
	// 	}
	// 	else
	// 	{
 //            navbar.css("background-color", "transparent");
	// 	}
	// });


//links add active class******************
  $('li a').click(function(){
      $(this).addClass('active').siblings().removeClass('active'); //5ly li ely ana wa2f 3leha 7otlha class active bs w shel class active mn 3nd a5watha
  });


$(window).scroll(function(){
  $('.block1').each(function(){
    if($(window).scrollTop() > $(this).offset().top){
      var block= $(this).attr('id');
      $('.navbar a').removeClass('active');
      $('.navbar li a[data-value="' +block+ '"]').addClass('active');
    }
  });
  
});





  //trigger niceScroll w dh gaybeno mn 3la elnet
   $('html').niceScroll({
   	cursorcolor: '#2659a0',
   	cursorwidth:'10px',
   	cursorborder:'1px solid #2659a0',
   	cursorborderradius: '0'
   });


   //caching the scroll top element
        var scrollButton = $("#scroll-top");
        $(window).scroll(function()
        {
          if($(this).scrollTop() >= 700){
             scrollButton.show();
          }
          else{
            scrollButton.hide();
          }
        });

        scrollButton.click(function() // 3shan lma kant gowa window w ndos 3la el sehm mknsh byrda ynzl b scroll tany
          {
             $("html,body").animate({scrollTop : 0},600);
          });


/////////////////////////////// hide placeholder on focus
var x='';
$('[placeholder]').focus(function(){

  x = $(this).attr('placeholder');

  $(this).attr('placeholder','');

}).blur(function(){

  $(this).attr('placeholder',x);
});
        
});




// loading screen
  $(window).on("load",function()
  {
    $(".loading-overlay .spinner").fadeOut(1000,function()
      {
        $(this).parent().fadeOut(1000,function()
      {
            $("body").css("overflow","auto");
            $(this).remove(); // 3shan y3ml hide l section loading
          });
      });
  });


