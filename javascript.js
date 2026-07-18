let choices = ["rock", "paper", "scissors"];

//get computer choice
function getComputerChoice(choices) {
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

//play 1 round and return the winner of the round
function playRound(humanChoice, computerChoice) {
  const displayResult = document.createElement("div");
  displayResult.textContent = "";
  document.body.appendChild(displayResult);

  if (humanChoice == computerChoice) {
    displayResult.textContent = "It's a tie!";
    return [0, 0];
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    displayResult.textContent = `You lose...${computerChoice} beats ${humanChoice}!`;
    return [0, 1];
  } else {
    displayResult.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
    return [1, 0];
  }
}

//Call the final winner
function displayWinner(humanScore, computerScore) {
  const displayScore = document.createElement("div");
  displayScore.textContent = "";
  document.body.appendChild(displayScore);

  if (humanScore == computerScore) {
    displayScore.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
    return "It's a draw... Let's do another game!";
  } else if (humanScore < computerScore) {
    displayScore.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
    return "You lose... maybe next time ?";
  } else {
    displayScore.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
    return "You win! What a champ!";
  }
}

// play the round 5x and increment the score
function playGame() {
  const btnRock = document.createElement("button");
  const btnPaper = document.createElement("button");
  const btnScissors = document.createElement("button");
  document.body.appendChild(btnRock);
  document.body.appendChild(btnPaper);
  document.body.appendChild(btnScissors);

  round = 0;
  humanScore = 0;
  computerScore = 0;

  btnRock.addEventListener("click", () => {
    let [humanRoundScore, computerRoundScore] = playRound(
      "rock",
      getComputerChoice(choices),
    );
    humanScore += humanRoundScore;
    computerScore += computerRoundScore;
    round += 1;
    if (round == 5) return displayWinner(humanScore, computerScore);
  });

  btnPaper.addEventListener("click", () => {
    let [humanRoundScore, computerRoundScore] = playRound(
      "paper",
      getComputerChoice(choices),
    );
    humanScore += humanRoundScore;
    computerScore += computerRoundScore;
    round += 1;
    if (round == 5) return displayWinner(humanScore, computerScore);
  });

  btnScissors.addEventListener("click", () => {
    let [humanRoundScore, computerRoundScore] = playRound(
      "scissors",
      getComputerChoice(choices),
    );
    humanScore += humanRoundScore;
    computerScore += computerRoundScore;
    round += 1;
    if (round == 5) return displayWinner(humanScore, computerScore);
  });
}

playGame();
