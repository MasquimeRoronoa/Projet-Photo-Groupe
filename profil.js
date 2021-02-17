$(document).ready(function() {
	var humeur = $('#humeur')
	var humeurcontenue = $('#humeur').val()
	var Enregistrer = $('#enregist')

	$('#btnProfil').click(() =>{
		$('#contain').hide()
		$('#footer').hide()
		$('#form').hide()
		$('#biographie').show()
	})


	Enregistrer.click(function (event) {
			if (humeur.show()) {
				Enregistrer.val('Modifier')
				humeur.hide()
			}
			else if (humeur.hide()){
				humeur.show()
			}
		})
})