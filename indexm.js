$(document).ready(function(){
	
    $("#anybtn").click(function(){
        $("div").not("modal-content").addClass("modald")
        $(".content").removeClass("modald")
       
       
    });
    $(".close").click(function(){
        $(".modald").addClass("modal").removeClass("modald")
       
    });
});