// console.log("Hello World");

const playSelection = "rock";

function getComputerChoice() {
  const arr = ["Rock", "Scissors", "Paper"];
  choice = arr[Math.floor(Math.random() * arr.length)];
  return choice;
}
const computerSelection = getComputerChoice();
function playRound(playSelection,computerSelection) {
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


// defining game function.
function game() {
  let winCount = 0;
  let drawCount = 0;
  let loseCount = 0;
  let numRounds = prompt("Enter number of rounds.");
  for (let i = 0; i < numRounds; i++) {
    const computerSelection = getComputerChoice();
    console.log(playRound(playSelection, computerSelection));
    if (playSelection.toLowerCase() == computerSelection.toLowerCase()) {
      drawCount += 1;
    } else if (
      playSelection.toLowerCase() == "rock" &&
      computerSelection.toLowerCase() == "scissors"
    ) {
      winCount += 1;
    } else if (
      playSelection.toLowerCase() == "scissors" &&
      computerSelection.toLowerCase() == "paper"
    ) {
      winCount += 1;
    } else if (
      playSelection.toLowerCase() == "paper" &&
      computerSelection.toLowerCase() == "stone"
    ) {
      winCount += 1;
    } else {
      loseCount += 1;
    }
  }
  return `User Win:${winCount} User lose:${loseCount} draw:${drawCount}`;
}
console.log(game());
