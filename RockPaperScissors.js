let num;
let CGuess;
let UGuess;

//invoke score variables for CPU and User.
let CScore = 0;
let UScore = 0;


const scores = document.createElement('div');

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
};

function playRound(userChoice, computerChoice) {
  
  if (userChoice == computerChoice){
    return "draw";
  }
  else if (userChoice == 'rock' && computerChoice == 'scissors' || userChoice == 'scissors' && computerChoice == 'paper' || userChoice == 'paper' && computerChoice == 'rock'){
    UScore++;
    if (UScore == 5){
      alert('Congratulations, you win!')
    }
  }
  else {
    CScore++;
    if (CScore == 5){
      alert('Commiserations, you lose!')
    }
  }
};


function playGame(){
    let userSelection = UGuess;
    let computerSelection = getComputerChoice();
    let result = playRound(userSelection, computerSelection);
    scores.textContent = "Your score is " + UScore + " Computer score is " + CScore;
    buttons.appendChild(scores);
};

let rock = document.querySelector('#rock');

rock.addEventListener('click', () => {
  UGuess = 'rock';
  playGame(UGuess, CGuess);
});

let paper = document.querySelector('#paper');

paper.addEventListener('click', () => {
  UGuess = 'paper';
  playGame(UGuess, CGuess);
});

let scissors = document.querySelector('#scissors');

scissors.addEventListener('click', () => {
  UGuess = 'scissors';
  playGame(UGuess, CGuess);
});


scores.textContent = "Your score is " + UScore + " Computer score is " + CScore;
buttons.appendChild(scores);