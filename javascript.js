let choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function getHumanChoice(choices) {
  let humanChoose = prompt("What do you choose?", "");

  if (humanChoose == "rock") {
    return "rock";
  } else if (humanChoose == "paper") {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice == computerChoice) {
    console.log("It's a tie!");
    return [0, 0];
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    console.log(`You lose...${computerChoice} beats ${humanChoice}!`);
    return [0, 1];
  } else {
    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    return [1, 0];
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 0; round < 5; round++) {
    const humanSelection = getHumanChoice(choices);
    const computerSelection = getComputerChoice(choices);

    let [humanRoundScore, computerRoundScore] = playRound(
      humanSelection,
      computerSelection,
    );
    humanScore += humanRoundScore;
    computerScore += computerRoundScore;
  }

  if (humanScore == computerScore) {
    console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
    return "It's a draw... Let's do another game!";
  } else if (humanScore < computerScore) {
    console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
    return "You lose... maybe next time ?";
  } else {
    console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
    return "You win! What a champ!";
  }
}

console.log(playGame());
