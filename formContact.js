$(document).ready(function () {

	$('#btnContact').click(() =>{
		$('#contain').hide()
		$('#footer').hide()
		$('#biographie').hide()
		$('#form').show()
	})

	$('#formContact').submit(submitForm)

	function submitForm (event){
		event.preventDefault()

		//récupération données
		var prenom = $('#prenom').val()
		var nom = $('#nom').val()
		var adresseMail = $('#adresseMail').val()
		var msg = $('#msg').val()
		var checkAge = $('input[name=confirmAge]').is(':checked')

		//vérifications données
		if (prenom == "" || nom == "" || adresseMail == "" || msg == "" || checkAge == false){
			alert('Tous les champs sont obligatoires')
		}
	}
})