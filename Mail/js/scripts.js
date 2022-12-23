/*
1. Creo un prompt per chiedere l'email all'utente:
    - Valido l'email
2. creo un array nel quale è presente la lista di mail
3. Controllo se la mail inserita dall'utente è uguale a una della lista:
    - Se è presente l'utente può entrare
    - Altrimenti l'utente non può entrare
*/


// 1. Richiedo la mail all'utente
const mailInserita = prompt('Inserisci qui la tua mail');
console.log ('La mail inserita è', mailInserita);

// 2. Creo un array nel quale è presente la lista
const utenti = [
    "pincopallo_0@gmail.com",
    "pincopallo_1@gmail.com",
    "pincopallo_2@gmail.com",
    "pincopallo_3@gmail.com",
    "pincopallo_4@gmail.com",
    "pincopallo_5@gmail.com",
    "pincopallo_6@gmail.com",
    "pincopallo_7@gmail.com",
    "pincopallo_8@gmail.com",
    "pincopallo_9@gmail.com",
    "pincopallo_10@gmail.com",
    "pincopallo_11@gmail.com",
    "pincopallo_12@gmail.com",
    "pincopallo_13@gmail.com",
    "pincopallo_14@gmail.com",
]


// --- Valido email 
let validaEmail = true;
if(validaEmail == true){
    // controllo da qui se la mail è presente

    let message = 'Non puoi entrare!';

        // contatore; condizione di permanenza; metodo di avanzamento
    for ( let i = 0; i < utenti.length; i++ ){
        console.log('Utente in posizione', i , utenti [i]);

        if (utenti[i] == mailInserita) {
            message = 'Puoi entrare!';
        }

    }

    alert(message);

}
else{
    alert('Email non valida!!')
}