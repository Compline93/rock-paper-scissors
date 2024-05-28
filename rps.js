let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3 )];
}

const choices = ["rock", "paper", "scissors"];

console.log(getComputerChoice(choices));

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", buttonPress);
})

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

    document.getElementById("narrative").textContent = result;
    document.getElementById("playerscore").textContent = playerWins;
    document.getElementById("computerscore").textContent = computerWins;

    if (playerWins == 3) {
        document.getElementById("narrative").textContent = "Player has won!";
    } else if (computerWins == 3) {
        document.getElementById("narrative").textContent = "Computer has Won!";
    }
}