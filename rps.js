// Sets scores to 0 on page load
let playerWins = 0;
let computerWins = 0;

// Generates random choice for computer player
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3 )];
}

const choices = ["rock", "paper", "scissors"];

console.log(getComputerChoice(choices));

// Enables buttons for player selection
// Linkes to buttonPress to use IDs of buttons for player input
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", buttonPress);
})

// Plays a round of RPS
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")) {
        return "Loss";
    } else if (playerSelection == computerSelection) {
        return "Draw";
    } else {
        return "Win";
    }
}

// Initiates game when player selection is made
// Updates score in HTML
// Announces winner in HTML
function buttonPress(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    if (result == "Loss") {
        computerWins++;
    } else if (result == "Draw") {
        console.log("Draw");
    } else {
        playerWins++;
    }

    document.getElementById("playerchoice").textContent = `${playerSelection}`;
    document.getElementById("computerchoice").textContent = `${computerSelection}`;

    document.getElementById("narrative").textContent = result;
    document.getElementById("playerscore").textContent = playerWins;
    document.getElementById("computerscore").textContent = computerWins;

    if (playerWins == 3) {
        document.getElementById("narrative").textContent = "Player has won! Refresh the page to play again.";
    } else if (computerWins == 3) {
        document.getElementById("narrative").textContent = "Computer has Won! Refresh the page to play again.";
    }
}