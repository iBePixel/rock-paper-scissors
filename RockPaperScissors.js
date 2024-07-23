let num;
let CGuess;
let UGuess;

function getComputerChoice() {
  CGuess = "";
  num = Math.random();
  if (num >= 0.66) {
    CGuess = "Rock";
  } else if (num >= 0.33) {
    CGuess = "Paper";
  } else {
    CGuess = "Scissors";
  }
  return CGuess;
}

function getUserChoice() {
  let UChoice = prompt("Enter your choice. Rock, Paper or Scissors");
  if ((UChoice != "Rock") | "Paper" | "Scissors") {
    return "please enter Rock, Paper or Scissors";
    
  }
  return UChoice
}

console.log(getComputerChoice());
console.log(getUserChoice());
