
const btnPalindroma = document.getElementById('palindroma');
const btnPariDispari = document.getElementById('pari_dispari');

btnPalindroma.addEventListener('click', function(){
    const word = "ingegni";


    //richiamo funzione che mi dice se una parola è palindorma o  no
    isPalidroma(word);

});






btnPariDispari.addEventListener('click', function(){
    
})




//dichiarazione e definizione funzioni
function isPalidroma(parola){
    const arrOfLetters = parola.split("");
    console.log(arrOfLetters);

    
}
