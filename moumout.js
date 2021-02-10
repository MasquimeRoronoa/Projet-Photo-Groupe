$(document).ready(function () {
    var profilup = $('#profilup')
    var profil = $('#profil')
    $('#profilup').click(function (event) {
        if (profil.hide()) {
            profil.show()
        } else {
            profil.show
            profil.hide()
        }

        console.log(event)
    })
})