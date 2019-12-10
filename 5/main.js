// Scrivi una funzione che accetti tre argomenti:

// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
$(document).ready(function(){

    var hello = ['c','i','a','o'];

    console.log('la lunghezza dell\'array è ' + hello.length);

    var min = parseInt(prompt('scegli da che posizione partire a leggere l\'array'));



    do {

        var max = parseInt(prompt('scegli fino a quale posizione leggere l\'array'));

        if (max > hello.length) {
            alert('Il numero selezionato è superiore alla lunghezza dell\'array, riprova con un numero tra ' + min + ' e ' + hello.length);
        }

    } while (max > hello.length);


    hello_tagliato = rangeArray(hello,min,max);

    console.log('hello: ' + hello);

    console.log('hello_tagliato: ' + hello_tagliato);


});


function rangeArray(array,partenza_lettura,fine_lettura){

    var arrayb = [];

    for (var i = partenza_lettura; i <= fine_lettura; i++) {
        arrayb.push(array[i]);
    }

    return arrayb;




}
