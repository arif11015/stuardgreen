$(document).ready(function(){	
  $('.project_list').mixItUp({
	animation: {
		effects: 'rotateX'
	}
  }); 
	
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});

$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 1000);
return false;
});
$('#home').scrollUpMenu();	
	
	
	
	
	
	
	
	
	
	
	
});

