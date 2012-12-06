$(function(){
	function onAjaxSuccess(data) {
		$("#result_content")
			.hide("slow", function() {
				$("#result_content")
					.empty()
					.append("<p>" +
							"<label>Logradouro: </label>" + (data.data['logradouro'] + 
						"<br />" +
							"<label>Bairro: </label>" + data.data.bairro + 
						"<br />" +
						"<label>Cidade: </label>" + data.data.cidade + 
						"<br />" +
						"<label>Estado: </label>" + data.data.estado + 
						"</p>")
					.show("slow");
				});
	}

	function onAjaxError(data) {
		$("#result_content")
			.empty()
			.append(JSON.stringify(data))
			.show("slow");
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