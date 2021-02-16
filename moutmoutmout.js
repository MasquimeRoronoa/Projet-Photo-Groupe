$(window).ready(function () {
    /*localStorage.getItem('Utilisateurs')
    var MyJson;
    var userlogin = $('#login').val()
    var usermdp = $('#mdp').val()
    var private = $('#private')
    var userObj
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    if (!localStorage.getitem('accounts')) {
        userObj = {
            "users": []
        }
    } else {
        userObj = JSON.parse(localStorage.getItem('accounts'))
    }
    private.hide()
    $("#connecting").submit(function (event) {
        event.preventDefault()
        if (usermdp.length < 6) {
            alert("Identifiant incorrect")

        } else if (userlogin.length < 4) {
            alert("Identifiant incorrect")
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
                let actualUser  = userObj.users[x]
                if (actualUser.pseudo == pseudo) {
                    pseudoExist = true
                    break;
                }
            }
            if (pseudoExist) {
                alert(Pseudo déjà existant)
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
    })*/

    // Changement de théme 
    $('.Tsombre').click((event) => {
        event.preventDefault()
        $('body').css('background', 'black')
        $('body').css('color', 'white')
        $('.navbar').css('background', '#939598')
        $('footer').css('background', '#939598')
    })
    
    $('.Tsemi').click((event) => {
        event.preventDefault()
        $('body').css('background', '#939598')
        $('body').css('color', 'black')
        $('.navbar').css('background', '#F5F6F6')
        $('footer').css('background', '#F5F6F6')
    })

    $('.Tclair').click((event) => {
        event.preventDefault()
        $('body').css('background', 'white')
        $('body').css('color', 'black')
        $('.navbar').css('background', '#F5F6F6')
        $('footer').css('background', '#F5F6F6')
    })
})