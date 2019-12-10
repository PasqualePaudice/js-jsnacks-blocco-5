// JSnack 1 (blocco 5):
// Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


$(document).ready(function(){

 var array = [
     {
         'varieta' : 'bla',
         'peso' : 2,
         'lunghezza' : 12

     },
     {
         'varieta' : 'bla',
         'peso' : 0.8,
         'lunghezza' : 12

     },
     {
         'varieta' : 'bla',
         'peso' : 1.1,
         'lunghezza' : 12

     },
     {
         'varieta' : 'bla',
         'peso' : 3,
         'lunghezza' : 12

     },
     {
         'varieta' : 'bla',
         'peso' : 2.2,
         'lunghezza' : 12

     },
     {
         'varieta' : 'bla',
         'peso' : 1,
         'lunghezza' : 12

     },
     {
         'varieta' : 'bla',
         'peso' : 1.6,
         'lunghezza' : 12

     },
     {
         'varieta' : 'bla',
         'peso' : 1,
         'lunghezza' : 12

     },
     {
         'varieta' : 'bla',
         'peso' : 2.65,
         'lunghezza' : 12.

     },
     {
         'varieta' : 'bla',
         'peso' : 0.58,
         'lunghezza' : 12

     }
 ]

var somma_peso = 0;

for (var i = 0; i < array.length; i++) {
    console.log('peso zucchina n°: ' + (i + 1));
    somma_peso += array[i].peso;

}

console.log('peso complessivo: ' + Math.round(somma_peso*100)/100);


})
