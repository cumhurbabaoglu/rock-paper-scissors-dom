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