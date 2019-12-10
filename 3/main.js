// Crea 10 oggetti che rappresentano una zucchina.

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.

// Infine stampa separatamente quanto pesano i due gruppi di zucchine

$(document).ready(function(){

    var zucchine_corte=[];

    var zucchine_lunghe=[];

    for (var i = 0; i < 10; i++) {

        var object = {
            'peso': generaRandom(1,1000),
            'lunghezza': generaRandom(1,30)
        }

        if (object.lunghezza < 15) {
            zucchine_corte.push(object);
        }else{
            zucchine_lunghe.push(object);
        }

    }

    var pesoZucchineCorte = 0;

    for (var i = 0; i < zucchine_corte.length; i++) {
        pesoZucchineCorte += zucchine_corte[i].peso;
    }

    var pesoZucchineLunghe = 0;

    for (var i = 0; i < zucchine_lunghe.length; i++) {
        pesoZucchineLunghe += zucchine_lunghe[i].peso;
    }



    console.log('Zucchine_corte: ');
    console.log(zucchine_corte);

    console.log('Peso zucchine corte: ' + pesoZucchineCorte);

    console.log('zucchine_lunghe: ');
    console.log( zucchine_lunghe);

    console.log('Peso zucchine lunghe: ' + pesoZucchineLunghe);



});



function generaRandom(min,max){
    return Math.floor(Math.random()*(max - min + 1)+min);
}
