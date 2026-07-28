const playBtn = document.getElementById("playBtn");
const rulesBtn = document.getElementById("rulesBtn");
const backRulesBtn = document.getElementById("backRulesBtn");
const startBtn = document.getElementById("startBtn");
const backGameBtn = document.getElementById("backGameBtn");
const displayResult = document.getElementById("displayResult");
const displayRoundScore = document.getElementById("displayRoundScore");
const humanChoiceImg = document.getElementById("humanSlot");
const computerChoiceImg = document.getElementById("computerSlot");

const rulesScreen = document.getElementById("rules");
const titleScreen = document.getElementById("title");
const gameScreen = document.getElementById("game");
const winnerScreen = document.getElementById("winner");

rulesBtn.addEventListener("click", function () {
  titleScreen.classList.remove("active");
  rulesScreen.classList.add("active");
});

playBtn.addEventListener("click", function () {
  titleScreen.classList.remove("active");
  gameScreen.classList.add("active");
  humanScore = 0;
  computerScore = 0;
  displayResult.textContent = "Make your move";
  displayRoundScore.textContent = `${humanScore} - ${computerScore}`;
  humanChoiceImg.src = "images/placeholder.png";
  computerChoiceImg.src = "images/placeholder.png";
});

backRulesBtn.addEventListener("click", function () {
  rulesScreen.classList.remove("active");
  titleScreen.classList.add("active");
});

startBtn.addEventListener("click", function () {
  rulesScreen.classList.remove("active");
  gameScreen.classList.add("active");
  humanScore = 0;
  computerScore = 0;
  displayResult.textContent = "Make your move";
  displayRoundScore.textContent = `${humanScore} - ${computerScore}`;
  humanChoiceImg.src = "images/placeholder.png";
  computerChoiceImg.src = "images/placeholder.png";
});

backGameBtn.addEventListener("click", function () {
  gameScreen.classList.remove("active");
  titleScreen.classList.add("active");
});

//get computer choice
let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

//play 1 round and return the winner of the round
function playRound(humanChoice, computerChoice) {
  humanChoiceImg.src = `images/${humanChoice}.png`;
  computerChoiceImg.src = `images/${computerChoice}.png`;

  if (humanChoice == computerChoice) {
    displayResult.textContent = "It's a tie! Let's replay this round";
    return [0, 0];
  } else if (
    (humanChoice == "Rock" && computerChoice == "Paper") ||
    (humanChoice == "Paper" && computerChoice == "Scissors") ||
    (humanChoice == "Scissors" && computerChoice == "Rock")
  ) {
    displayResult.textContent = `You lose...${computerChoice} beats ${humanChoice}!`;
    return [0, 1];
  } else {
    displayResult.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
    return [1, 0];
  }
}

// play the round 5x and increment the score
let humanScore = 0;
let computerScore = 0;

function playGame() {
  const btnRock = document.querySelector("#btnRock");
  const btnPaper = document.querySelector("#btnPaper");
  const btnScissors = document.querySelector("#btnScissors");

  btnRock.addEventListener("click", () => {
    let [humanRoundScore, computerRoundScore] = playRound(
      "Rock",
      getComputerChoice(),
    );

    if (humanRoundScore == 0 && computerRoundScore == 0) return;
    humanScore += humanRoundScore;
    computerScore += computerRoundScore;
    displayRoundScore.textContent = "";
    displayRoundScore.textContent = `${humanScore} - ${computerScore}`;
    if (humanScore == 5 || computerScore == 5) return displayWinner();
  });

  btnPaper.addEventListener("click", () => {
    let [humanRoundScore, computerRoundScore] = playRound(
      "Paper",
      getComputerChoice(),
    );

    if (humanRoundScore == 0 && computerRoundScore == 0) return;
    humanScore += humanRoundScore;
    computerScore += computerRoundScore;
    displayRoundScore.textContent = `${humanScore} - ${computerScore}`;
    if (humanScore == 5 || computerScore == 5) return displayWinner();
  });

  btnScissors.addEventListener("click", () => {
    let [humanRoundScore, computerRoundScore] = playRound(
      "Scissors",
      getComputerChoice(),
    );

    if (humanRoundScore == 0 && computerRoundScore == 0) return;
    humanScore += humanRoundScore;
    computerScore += computerRoundScore;
    displayRoundScore.textContent = `${humanScore} - ${computerScore}`;
    if (humanScore == 5 || computerScore == 5) return displayWinner();
  });
}

//Call the final winner
function displayWinner() {
  const displayScore = document.getElementById("displayScore");
  const displayText = document.getElementById("displayText");
  const winnerText = document.getElementById("winnerText");
  const playAgainBtn = document.getElementById("playAgainBtn");
  const backTitleBtn = document.getElementById("backTitleBtn");

  winnerScreen.classList.add("active");
  gameScreen.classList.remove("active");

  playAgainBtn.addEventListener("click", function () {
    winnerScreen.classList.remove("active");
    gameScreen.classList.add("active");

    humanScore = 0;
    computerScore = 0;
    displayResult.textContent = "Make your move";
    displayRoundScore.textContent = `${humanScore} - ${computerScore}`;
    humanChoiceImg.src = "images/placeholder.png";
    computerChoiceImg.src = "images/placeholder.png";
  });

  backTitleBtn.addEventListener("click", function () {
    winnerScreen.classList.remove("active");
    titleScreen.classList.add("active");
  });

  displayScore.textContent = `${humanScore} - ${computerScore}`;
  if (humanScore == computerScore) {
    displayText.textContent = "It's a draw... Let's do another game!";
  } else if (humanScore < computerScore) {
    winnerText.textContent = "Computer won the match...";
    displayText.textContent = "You lose... maybe next time ?";
  } else {
    confetti({
      origin: { x: 0.2, y: 0.6 },
      angle: 60,
    });

    confetti({
      origin: { x: 0.8, y: 0.6 },
      angle: 120,
    });

    winnerText.textContent = "You won the match!";
    displayText.textContent = "The  champion title looks good on you!";
  }
}

playGame();
