
// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

$(document).ready(function(){

    var numeri = [12,11,9,8,3];

    var lettere = ['b','c','e','w','o'];

    var alfanumerico = arrayAlternato(numeri,lettere);

    console.log(alfanumerico);




});

function arrayAlternato(array1,array2){

    var arrayAlternato = [];

    for (var i = 0; i < array1.length; i++) {

        arrayAlternato.push(array1[i]);
        arrayAlternato.push(array2[i]);

    }

    return arrayAlternato;

}
