$(document).ready(function(){


    var stringa = prompt('Scrivi qualcosa');

    var stri = stringa.charAt(stringa.length) ;

    for (var i = (stringa.length - 1); i >= 0; i--) {

        stri += stringa.charAt(i) ;
    }

    console.log(stri);


})
