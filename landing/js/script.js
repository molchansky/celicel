$(document).ready(function() {
	$("#input2").focus(function(){
		$("input:even").removeClass("hidden")
	});
});