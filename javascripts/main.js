$(function(){
	function onAjaxSuccess(data) {
		$("#result_content")
			.empty()
			.append($("<p />"))
				.html($("<label />")
					.append("Logradouro: ")
					.append(data.data.logradouro))
			.append($("<p />"))
				.html($("<label />"))
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