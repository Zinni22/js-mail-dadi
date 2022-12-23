/*
1. Generare un numero random per l'utente
2. Generare un numero random per il pc
3. Confrontare i punteggi:
    - se il numero dell'utente è più alto ha vinto lui
    - se il numero del pc è più alto ha vinto lui
    - altrimenti c'è un pareggio
*/


// Genero numero utente
const numeroUtente = Math.floor(Math.random() * 6 + 1); // Math.floor arrotonda per difetto togliendo la virgola
console.log("Il numero random dell'utente è", numeroUtente);

// Genero numero computer
const numeroComputer = Math.floor(Math.random() * 6 + 1);
console.log("Il numero random del computer è", numeroComputer);

// Condizione
if(numeroUtente > numeroComputer){
    alert("Ha vinto l'utente!");
}
else if(numeroUtente < numeroComputer){
    alert("Ha vinto il computer!");
}
else{
    alert("Pareggio!");
}