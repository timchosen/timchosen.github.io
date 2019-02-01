$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $("#navbar").css("background" , "linear-gradient(45deg, rgba(0, 0, 128, 0.83), rgba(0, 0, 128, 0.33), rgba(0, 0, 128, 0.73))");
	    $("#navbar").css("padding-top" , "20px");
	  }

	  else{
	    $("#navbar").css("padding-top" , "50px");
		  $("#navbar").css("background" , "");  	
	  }
  })
})