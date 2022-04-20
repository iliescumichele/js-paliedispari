
const btnPalindroma = document.getElementById('palindroma');
const btnPariDispari = document.getElementById('pari_dispari');





btnPalindroma.addEventListener('click', function(){
    const word = prompt("Inserire una parola");


    //richiamo funzione che mi dice se una parola è palindorma o  no
    isPalidroma(word);

});








btnPariDispari.addEventListener('click', function(){
    
})




//dichiarazione e definizione funzioni
function isPalidroma(parola){
    const arrOfLetters = parola.split("");
    console.log(arrOfLetters);

    const arrOfLettersReversed = reverseWord(parola);
    console.log(arrOfLettersReversed);

    let flag = true;

    for(let i=0; i<arrOfLetters.lenght ; i++){
        if(arrOfLetters[i] !== arrOfLettersReversed[i]){
            flag = false;
            break;
        } 
    }

    if(flag == true){
        console.log("la parola è palindroma");
    }  else{
        console.log("la parola NON è palindroma");
    }


}


//funzione che ritorna un array in ordine contrario
function reverseWord(parola){
    return parola.split("").reverse();
};