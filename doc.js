// Déclarations des variables 

var userDeviceType;
var userDeviceOrientation;

// Fonction qui controle le type d'appareil utilisé pour afficher le site web
function checkDeviceType() {
    // instance d'un objet permettant d'avoir les information du navigateur et de l'appareil sur le quel il est utilisé
    var deviceTypeDetect = new MobileDetect(window.navigator.userAgent);
    // premier controle si on est sur mobile. si la reponse est null alors on est soit sur pc sinon sur tablette ou mobile
    if (deviceTypeDetect.mobile() === null) {
        return "PC";
    } else {
        // deuxieme controle si on est sur tablette ou sur mobile. si la reponse est null alors on est sur mobile sinon sur tablette
        if (deviceTypeDetect.tablet() === null) {
            return "MO";
        } else {
            return "TA";
        }
    }
}
// Fonction qui controle l'orientation de l'appareil utilisé pour afficher le site web
function checkDeviceOrientation() {
    // controle si on est en mode paysage sur l'orientation si la reponse est positive on est en paysage sinon on est en portrait
    if (window.matchMedia("(orientation: landscape)").matches) {
        return "LA";
    } else {
        return "PO"
    }
}

// fonction qui va effectuer des taches spécifiques en fonction du cas dans lequel on se trouve, on a besoin de 2 parametres : le type d'appareil et son orientation
function loadActualizedWebsite(deviceType, orientation) {

    var useCase = deviceType + orientation;

    switch (useCase) {
        // PC Portrait
        case 'PCPO':
            // DO stuff
            console.log(" vous etes sur un pc en mode portrait !")
            $("div").removeClass("leftcolumn rightcolumn col-6 col-4 col-2")
            break;
            // PC Paysage
        case 'PCLA':
            // DO stuff
            console.log(" vous etes sur un pc en mode paysage !")
            break;
            // Mobile Portrait
        case 'MOPO':
            // DO stuff
            console.log(" vous etes sur un smartphone en mode portrait !")
            $("div").removeClass("leftcolumn rightcolumn col-6 col-4 col-2")
            break;
            // Mobile Paysage
        case 'MOLA':
            // DO stuff

            console.log(" vous etes sur un smartphone en mode paysage !")
            $(".navbar").hide()
            $(".accordion").show()
            $(".accordion").click(function (event) {
                event.preventDefault()
                $(".accordion").hide()
                $(".sidenavtab").show()
                $(".btnclose").show()
                $("#footer").hide()
                $(".btnclose").click(function (event) {
                    event.preventDefault()
                    $(".sidenavtab").hide()
                    $(".accordion").show()
                })
            })

            $("div").removeClass("leftcolumn rightcolumn col-6 col-4 col-2")
            break;
            // Tablet Portrait
        case 'TAPO':
            // DO stuff
            console.log(" vous etes sur une tablette en mode portrait !")
            $("div").removeClass("leftcolumn rightcolumn col-6 col-4 col-2")
            break;
            // Tablet Paysage
        case 'TALA':
            // DO stuff
            console.log(" vous etes sur une tablette en mode paysage !")
            $(".navbar").hide()
            $(".sidenavtab").show()
            $("div").removeClass("leftcolumn rightcolumn col-6 col-4 col-2")
            break;
        default:
            alert("Ho dude, You're the matrix");
    }
}
// Au load de la page
$(document).ready(function () {
    // on récupere le type et l'orientation puis on configure le site en fonction 
    userDeviceType = checkDeviceType();
    userDeviceOrientation = checkDeviceOrientation();
    loadActualizedWebsite(userDeviceType, userDeviceOrientation);

    
    // si on est sur pc on va ecouté l'evenement resize pour recalculer l'orientation avec un delai de 2 secondes avant d'agir pour laisser le temps à l'utilisateur de finir son redimentionnement
    if (userDeviceType === "PC") {
        $(window).on("resize", function () {
            //timeout pour attendre la fin du redimentionnment
            clearTimeout(window.resizeEventFinished);
            window.resizeEventFinished = setTimeout(function () {
                // on recalcule l'orientation et on recharge la config adaptée
                userDeviceOrientation = checkDeviceOrientation();
                loadActualizedWebsite(userDeviceType, userDeviceOrientation);
            }, 2000);
        });

    } 
    // Sinon on est sur support mobile donc on ecoute l'evenement orientationchange qui se declanche quand on fait pivoter son smartphone ou sa tablette avec le meme delai
    else {
        $(window).on("orientationchange", function () {
            //timeout pour attendre la fin du redimentionnment
            clearTimeout(window.orientationEventFinished);
            window.orientationEventFinished = setTimeout(function () {
                // on recalcule l'orientation et on recharge la config
                userDeviceOrientation = checkDeviceOrientation();
                loadActualizedWebsite(userDeviceType, userDeviceOrientation);
            }, 2000);
        });
    }

});