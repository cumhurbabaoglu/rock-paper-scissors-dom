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
