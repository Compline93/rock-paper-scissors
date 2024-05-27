function game() {
    // Sets scores to 0 for each round
    let playerWin = 0;
    let computerWin = 0;

    // Game loop - runs until one player gets three points
    do {

        // Computer chooses randomly
        const choices = ["rock", "paper", "scissors"];
        function getComputerChoice() {
        let computerSelection = choices.at(Math.floor(Math.random() * 3));
            return computerSelection;
        }
        const computerSelection = getComputerChoice();

        // Asks and regularizes player input
        const playerInput = prompt("Rock, Paper, or Scissors?");
        const playerSelection = playerInput.toLowerCase();

        // Plays a round of RPS, reports back win or loss and increments score
        function playRound(playerSelection, computerSelection) {
            if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
                return [++computerWin, alert(`You lose: ${computerSelection} beats ${playerSelection}! Current score: player-${playerWin}, computer-${computerWin}`)];
            } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
                return [++playerWin, alert(`You win: ${playerSelection} beats ${computerSelection}! Current score: player-${playerWin}, computer-${computerWin}`)];
            } else {
                return alert(`Tie: both picked ${playerSelection}.`);
            }
        }

        console.log(playRound(playerSelection, computerSelection));
    } 
    while (playerWin < 3 && computerWin < 3);

    // Declares winner of game round
    if (playerWin == 3) {
        alert(`You win! Final score: player-${playerWin}, computer-${computerWin}`);
    } else if (computerWin == 3) {
        alert(`You lose! Final score: player-${playerWin}, computer-${computerWin}`);
    }
}