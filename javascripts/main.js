$(function(){
	function onAjaxSucess(data) {
		$("#result_content")
			.empty()
			.append(JSON.stringify(data))
			.show("slow");

	}

	function onAjaxError() {

	}

	function onSubmitClick() {
		$("#result_content").hide("slow");

		$.getJSON("http://api.postmon.com.br/cep/" + $("#cep").val()).
				sucess(onAjaxSucess).
				error(onAjaxError);
	};

	$("#result_content").hide();

	$("#submit").click(onSubmitClick);
});