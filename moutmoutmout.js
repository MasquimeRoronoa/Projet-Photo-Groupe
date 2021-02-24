$(window).ready(function () {
    var private = $('#private')
    var album = $('#fdpalbum')
    var pimg = $('#pimg')
    var coms = $('#coms')
    var titre = $('#bite')
    var titre1 = $('#bite1')
    var definition = $('#headcom')
    var definition1 = $('#headcom1')
    var bio = $('#biographie')
    var th2 = $('.th2')
    var coms2 = $('#coms2')
    var pseudo = $('#pseudo').val()
    var comment = $('#comment').val()
    var albumpics = $("#albumpics")
    var contact = $('#form')

    $('.imgfoot').click(function () {
        $('#albumpics').show()
        $('#albumpics').attr("src", $(this).attr('src'))
    })

    // Modal zoom
    $('.overlaypic').click(function () {
        $('.modal').show()
        $('.modal-content').attr("src", $(this).attr('src'))
    })
    $('.closeMe').click(function () {
        $('.modal').hide()
    })
    $(document).keydown(function (event) {
        if (event.keyCode == 27) {
            $('.overlay').hide()
        }
    })

    $('.overlaypic').click(function () {
        $('.modal2').show()
        $('.modal-content2').attr("src", $(this).attr('src'))
    })
    $('.closeMe').click(function () {
        $('.modal2').hide()
    })
    $(document).keydown(function (event) {
        if (event.keyCode == 27) {
            $('.overlay').hide()
        }
    })

    $('#inscription').submit(function (event) {
        event.preventDefault()
        var password = $('#passworde').val()
        var pseudo = $('#pseudo').val()
        if (password == "" || pseudo == "") {
            alert("Champs pas remplis")
        } else {
            // le pseudo existe il ? et si oui le mdp correspond il ?
            let pseudoExist = false
            let x
            for (x in userObj.users) {
                let actualUser = userObj.users[x]
                if (actualUser.pseudo == pseudo) {
                    pseudoExist = true
                    break;
                }
            }
            if (pseudoExist) {
                alert("Pseudo déjà existant")
            } else {
                //Etape : créateur de l'objet utilisateur :
                var user = {
                    id: uuidv4(),
                    pseudo: pseudo,
                    mdp: mdp,
                }
                //Etape d : Ajout du nouvel utilisateur dans la liste des utilisateurs
                usersObj.users.push(user);
                //Etape e : Sauvegarde dans le localStorage
                saveUsers()

                //ETAPES FACULTATIVES :
                //On va vider les champs :
                $('#registerPseudo').val("")
                $('#registerPassword').val("")
                //on va afficher le panneau de login
                displayLogin()
            }
        }

    })
    $('#thdr').click(function (event) {
        titre.text("HDR")
        definition.text("HDR c'est marrant")
    })
    $('#hklk').click(function (event) {
        titre.text("High Key / Low Key")
        definition.text("Contraste de couleur oh oh")
    })
    $('#hs').click(function (event) {
        titre.text("High Speed")
        definition.text("Equivalent de la drogue")
    })
    $('#studio').click(function (event) {
        titre.text("Studio")
        definition.text("Lieu ou tu peux vivre")
    })
    $('#pl').click(function (event) {
        titre.text("Pose Longue")
        definition.text("Une pose s'impause")
    })
    $('#ts').click(function (event) {
        titre.text("Tilt Shift")
        definition.text("Tilte Shifteux")
    })
    $('#lp').click(function (event) {
        titre.text("Light Painting")
        definition.text("Peinture claire")
    })
    $('#nb').click(function (event) {
        titre.text("Noir et Blanc")
        definition.text("Mélange de couleur oh oh")
    })
    $('#portrait').click(function (event) {
        titre.text("Portrait")
        definition.text("Visage de profil")
    })
    $('#paysage').click(function (event) {
        titre.text("Paysage")
        definition.text("Pas de profil")
    })
    $('#architecture').click(function (event) {
        titre.text("Architecture")
        definition.text("Batiment")
    })
    $('#graphisme').click(function (event) {
        titre.text("Graphisme")
        definition.text("Gramisme")
    })
    $('#evenements').click(function (event) {
        titre.text("Evenements")
        definition.text("Mariage ?")
    })
    $('#private').click(function (event) {
        titre.text("Boudoire")
        definition.text("Non")

    })
    $('#animo, #saison, #fetes, #nature, #urbain, #sport, #nuit').click(function (event) {
        if (album.hide()) {
            album.show()
            pimg.hide()
        }
        if (coms.show()) {
            coms.hide()
        }
        if (contact.show()) {
            contact.hide()
        }
    })
    $('#thdr, #hklk, #hs, #studio, #pl, #ts, #lp, #nb, #portrait, #paysage, #architecture, #graphisme, #evenements, #private').click(function (event) {
        if (album.show()) {
            album.hide()
            pimg.show()
        }
        if (coms.hide()) {
            coms.show()
        }
        if (bio.show()) {
            bio.hide()
            $('#contain').show()
            $('#footer').show()
        }
        if (contact.show()) {
            contact.hide()
        }
        coms.addClass("rightcolumn")
    })
    $('#animo').click(function (event) {
        titre1.text("")
        th2.text('Animaux')
        definition1.text("Quel belle animal")
    })
    $('#saison').click(function (event) {
        titre1.text("")
        th2.text('Saison')
        definition1.text("Automne / Eté / Hiver / Printemps")
    })
    $('#fetes').click(function (event) {
        titre1.text("")
        th2.text('Fêtes')
        definition1.text("Bar-mitzvah ?")
    })
    $('#nature').click(function (event) {
        titre1.text("")
        th2.text('Nature')
        definition1.text("La nature dans toute sa splendeur")
    })
    $('#urbain').click(function (event) {
        titre1.text("")
        th2.text('Urbain')
        definition1.text("Street Art")
    })
    $('#sport').click(function (event) {
        titre1.text("")
        th2.text('Sport')
        definition1.text("Shaq'in fool")
    })
    $('#nuit').click(function (event) {
        titre1.text("")
        th2.text('Nuit')
        definition1.text("C'est joli même de nuit")
    })

    //Connexion
    var userObj

    if (!localStorage.getItem('accounts')) {
        userObj = {
            "users": [{
                    pseudo: "machin",
                    mdp: "mdp"
                },
                {
                    pseudo: "machine",
                    mdp: "mdp2"
                }
            ]
        }
    }

    $('#connecting').submit(login)

    function login(event) {
        event.preventDefault()

        var pseudo = $('#identifiant').val()
        var mdp = $('#mdp').val()

        if (pseudo == "" || mdp == "") {
            alert('Les champs sont obligatoires')
        } else {
            let isConnected = false
            let x
            for (x in userObj.users) {
                var actualUser = userObj.users[x]
                if (actualUser.pseudo == pseudo) {
                    if (actualUser.mdp == mdp) {
                        isConnected = true
                        sessionStorage.setItem("session", JSON.stringify(actualUser))
                        break;
                    }
                }
            }
            if (isConnected) {
                alert("Content de te revoir")
                $('#connect').html("Vous êtes connecté sous le nom de " + pseudo)
            } else {
                alert("Il faut demander des identifiants")
                $('#contain').hide()
                $('#form').show()
            }
            $('#identifiant').val("")
            $('#mdp').val("")
        }
    }
})
// Changement de théme
$('.Tsombre').click((event) => {
    $('body').css('background', 'black')
    $('body').css('color', 'white')
    $('.navbar').css('background', '#939598')
    $('footer').css('background', '#939598')
    $('#form').css('background', '#939598')
    $('.i18').css('box-shadow', '20px 20px 20px dimgrey')
})

$('.Tsemi').click((event) => {
    $('body').css('background', '#939598')
    $('body').css('color', 'black')
    $('.navbar').css('background', '#F5F6F6')
    $('footer').css('background', '#F5F6F6')
    $('#form').css('background', '#F5F6F6')
})

$('.Tclair').click((event) => {
    $('body').css('background', 'white')
    $('body').css('color', 'black')
    $('.navbar').css('background', '#F5F6F6')
    $('footer').css('background', '#F5F6F6')
    $('#form').css('background', '#939598')
    $('#form').css('color', 'black')
})

//Commentaire
var pseudo = $('#pseudo01').val()

var comment = $('#comment01').val()

$('#form01').submit(function (event) {
    event.preventDefault()

    if ($('#pseudo01').val().length < 3 || $('#comment01').val().length < 8) {
        alert("Champs incomplet")
    } else {

        var newcomment = ` <h4>%pseudo%</h4> 
                            <p>%comment%</p>
                          `
        newcomment = newcomment.replace(/%pseudo%/g, $('#pseudo01').val())

        newcomment = newcomment.replace(/%comment%/g, $('#comment01').val())

        $('#defil01').append(newcomment)

    }
})

var pseudo = $('#pseudo02').val()

var comment = $('#comment02').val()

$('#form02').submit(function (event) {
    event.preventDefault()

    if ($('#pseudo02').val().length < 3 || $('#comment02').val().length < 8) {
        alert("Champs incomplet")
    } else {

        var newcomment = ` <h4>%pseudo%</h4> 
                             <p>%comment%</p>
                           `
        newcomment = newcomment.replace(/%pseudo%/g, $('#pseudo02').val())

        newcomment = newcomment.replace(/%comment%/g, $('#comment02').val())

        $('#defil02').append(newcomment)

    }
})

//formContact
$('#btnContact').click(() => {
    $('#contain').hide()
    $('#footer').hide()
    $('#biographie').hide()
    $('#form').show()
})

$('#formContact').submit(submitForm)

function submitForm(event) {
    event.preventDefault()

    //récupération données
    var prenom = $('#prenom').val()
    var nom = $('#nom').val()
    var adresseMail = $('#adresseMail').val()
    var msg = $('#msg').val()
    var checkAge = $('input[name=confirmAge]').is(':checked')

    //vérifications données
    if (prenom == "" || nom == "" || adresseMail == "" || msg == "" || checkAge == false) {
        alert('Tous les champs sont obligatoires')
    }
}

//Profil
$('#btnProfil').click(() => {
    $('#contain').hide()
    $('#footer').hide()
    $('#form').hide()
    $('#biographie').show()
})
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}