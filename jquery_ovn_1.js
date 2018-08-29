$( document ).ready(function() {
//uppg2	
$("p").addClass("uppg3class");

//uppg3
	$("p").addClass("uppg3class");
	
//upgg4
var uppg4height = $("#uppg4-box").height();
var uppg4width = $("#uppg4-box").width();
$("#uppg4-box").html("h: " + uppg4height + "px  w: " + uppg4width + "px");
	
//uppg5
$("#uppg5-box").show("slow");

//uppg6
$("#uppg6-btn").click(function(){
$("#uppg6-box").addClass("uppg6class")
	});
	
//uppg7
$("#uppg7-btn").click(function(){
	$("#uppg7-box").animate({
		"width" : "+=100px",
		"height" : "+=100px"
	});
});







});