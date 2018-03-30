$(document).ready(function(){
	if (window.matchMedia('(min-width: 800px)').matches)
	{
		$("#randomid").show();
	}
	if (window.matchMedia('(max-width: 800px)').matches)
	{
		$(".fold").show();
	}
	
    $("#randomid").click(function(){
        $(".fold").slideToggle();
    });
});