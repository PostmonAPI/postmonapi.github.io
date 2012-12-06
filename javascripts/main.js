$(function(){
	$("#result_content").hide();

	$("#submit").click(function() {
		var result = $.getJSON("http://api.postmon.com.br/cep/" + $("#cep").val());

		console.log(result);

		$("#result_content").show("slow");
	});
});