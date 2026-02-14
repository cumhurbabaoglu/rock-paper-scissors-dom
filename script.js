const reset = document.querySelector("#reset");
const body = document.querySelector("body");
const submitButton = document.querySelector("#submit");
const changeTheme = document.querySelector("#changetheme");
const userInput = document.querySelector("#textbox");
const displayComputerChoice = document.querySelector("#information");
const displayGameInfo = document.querySelector("#round-info");
const displayHumanScore = document.querySelector("#human-score");
const displayComputerScore = document.querySelector("#computer-score");
const displayRound = document.querySelector("#round");
const displayWinner = document.querySelector("#winner");

changeTheme.addEventListener("click", (e) => {
  body.classList.toggle("green-theme");
})

reset.addEventListener("click", (e) => {
    counter = 0;
    humanScore = 0;
    computerScore = 0;
    displayRound.textContent = "";
    displayWinner.textContent = "";
    displayGameInfo.textContent = "";
    displayComputerScore.textContent = "";
    displayHumanScore.textContent = "";
    displayComputerChoice.textContent = "";
    submitButton.disabled = false;
    userInput.disabled = false;
    userInput.value = "";
    userInput.focus();
})

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitButton.click();
  }
})

function getComputerChoice() {
  let randomValue = Math.ceil(Math.random() * 30);
  if (randomValue <= 30 && randomValue > 20) {
    return "rock";
  } else if (randomValue <= 20 && randomValue > 10) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return userInput.value;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
   function playRound(humanChoice, computerChoice) {
  let humanChoiceNormalized = humanChoice.toLowerCase();
  if (humanChoiceNormalized === computerChoice){
    displayGameInfo.textContent = "It's a tie!";
    displayHumanScore.textContent = `Your score = ${humanScore}`;
    displayComputerScore.textContent = `Computer's score = ${computerScore}`;
  } else if (humanChoiceNormalized === "rock" && computerChoice === "scissors") {
    humanScore += 10;
    displayGameInfo.textContent = "You win! Rock beats Scissors!";
    displayHumanScore.textContent = `Your score = ${humanScore}`;
    displayComputerScore.textContent = `Computer's score = ${computerScore}`;                                                           
  } else if (humanChoiceNormalized === "scissors" && computerChoice === "rock") {
    computerScore += 10;
    displayGameInfo.textContent = "You lose! Rock beats Scissors!";
    displayHumanScore.textContent = `Your score = ${humanScore}`;
    displayComputerScore.textContent = `Computer's score = ${computerScore}`;
  } else if (humanChoiceNormalized === "paper" && computerChoice === "rock") {
    humanScore += 10;
    displayGameInfo.textContent = "You win! Paper beats Rock!";
    displayHumanScore.textContent = `Your score = ${humanScore}`;
    displayComputerScore.textContent = `Computer's score = ${computerScore}`;
  } else if (humanChoiceNormalized === "rock" && computerChoice === "paper") {
    computerScore += 10;
    displayGameInfo.textContent = "You lose! Paper beats Rock!";
    displayHumanScore.textContent = `Your score = ${humanScore}`;
    displayComputerScore.textContent = `Computer's score = ${computerScore}`;
  } else if (humanChoiceNormalized === "paper" && computerChoice === "scissors") {
    computerScore += 10;
    displayGameInfo.textContent = "You lose! Scissors beats Paper!";
    displayHumanScore.textContent = `Your score = ${humanScore}`;
    displayComputerScore.textContent = `Computer's score = ${computerScore}`;
  } else if (humanChoiceNormalized === "scissors" && computerChoice === "paper"){
    humanScore += 10;
    displayGameInfo.textContent = "You win! Scissors beats Paper!";
    displayHumanScore.textContent = `Your score = ${humanScore}`;
    displayComputerScore.textContent = `Computer's score = ${computerScore}`;
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
displayComputerChoice.textContent = `Computer's Choice: ${computerSelection.toUpperCase()}`;
}

let counter = 0;
