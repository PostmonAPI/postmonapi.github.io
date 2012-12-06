$(function(){
	function onAjaxSuccess(data) {
		$("#result_content")
			.empty()
			.append("<p>" +
					"<label>Logradouro: </label>" + data.data.logradouro + 
				"</p><p>" +
					"<label>Bairro: </label>" + data.data.bairro + 
				"</p><p>" +
				"<label>Cidade: </label>" + data.data.cidade + 
				"</p><p>" +
				"<label>Estado: </label>" + data.data.estado + 
				"</p>")
			.show("slow");
	}

	function onAjaxError() {

	}

	function onSubmitClick() {
		$("#result_content").hide("slow");

		$.getJSON("http://api.postmon.com.br/cep/" + $("#cep").val()).
				success(onAjaxSuccess).
				error(onAjaxError);
	};

	$("#result_content").hide();

	$("#submit").click(onSubmitClick);
});