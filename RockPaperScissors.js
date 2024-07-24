let num;
let CGuess;
let UGuess;

//invoke score variables for CPU and User.
let CScore = 0;
let UScore = 0;


function getComputerChoice() {
  CGuess = "";
  num = Math.random();
  if (num >= 0.66) {
    CGuess = "rock";
  } else if (num >= 0.33) {
    CGuess = "paper";
  } else {
    CGuess = "scissors";
  }
  return CGuess;
}

function getUserChoice() {
  let UChoice = prompt("Enter your choice. Rock, Paper or Scissors");
  UChoice = UChoice.toLowerCase()
  return UChoice
}

function playRound(userChoice, computerChoice) {
  
  if (userChoice == computerChoice){
    console.log("It's a draw, try again")
    return "draw";
  }
  else if (userChoice == 'rock' && computerChoice == 'scissors' || userChoice == 'scissors' && computerChoice == 'paper' || userChoice == 'paper' && computerChoice == 'rock'){
    UScore++;
    console.log("You win " + userChoice + " beats " + computerChoice)
  }
  else {
    CScore++;
    console.log("You lose " + computerChoice + " beats " + userChoice)
  }
}


function playGame(){
  for (let i = 0; i < 5; i++) {
    let userSelection = getUserChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(userSelection, computerSelection);
    if (result == "draw"){
      i = i - 1;
    }
  }
  if (UScore > CScore) {
    console.log("Congratulations, you win!")
  }
  else {
    console.log("Bad luck, you lost. Better luck next time.")
  }
}

playGame()