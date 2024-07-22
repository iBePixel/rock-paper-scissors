let num
let CGuess 

function CPUGuess() {
    CGuess = ''
    num = Math.random()
    if (num >= 0.66){
        CGuess= 'Rock';
    }
    else if (num >= 0.33){
        CGuess= 'Paper';
    }
    else {
        CGuess= 'Scissors';
    }
    return CGuess 
}

console.log(CPUGuess())