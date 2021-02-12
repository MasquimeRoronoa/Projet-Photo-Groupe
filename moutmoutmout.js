$(window).ready(function () {
    localStorage.getItem('Utilisateurs')
    var MyJson;
    var userlogin = $('#login').val()
    var usermdp = $('#mdp').val()
    var private = $('#private')
    private.hide()
    $("#connecting").submit(function (event) {
        event.preventDefault()
        if (usermdp.length < 6) {
            alert("Identifiant incorrect")

        } else if (userlogin.length < 4) {
            alert("Identifiant incorrect")
        }

    })
    $('#inscription').submit(function(event){
        event.preventDefault()
        var password = $('#passworde').val()
        var pseudo = $('#pseudo').val()
        if (password == "" || pseudo == "") {
            alert("Champs pas remplis")
        }

    })
})