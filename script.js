// console.log("Hello World");

function playRound(playSelection, computerSelection) {
  if (playSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return "Both choices are same";
  } else if (
    playSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
     return `You Win! ${playSelection} beats ${computerSelection}.`;
  } else if (
    playSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    return `You Win! ${playSelection} beats ${computerSelection} `;
  } else if (
    playSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "stone"
  ) {
    return `You Win! ${playSelection}  beats ${computerSelection}.`;
  } else {
    return `You Lose! ${computerSelection}  beats  ${playSelection}.`;
  }
}
const playSelection = "rock";
const computerSelection = getComputerChoice();
function getComputerChoice() {
  let arr = ["Rock", "Scissors", "Paper"];
  choice = arr[Math.floor(Math.random() * arr.length)];
  return choice;
}
console.log(playRound(playSelection,computerSelection));
