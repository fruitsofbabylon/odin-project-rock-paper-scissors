function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "Rock";
    } else if (computerChoice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let winMessage = "You win! " + playerSelection + " beats " + computerSelection;
    let loseMessage = "You lose! " + computerSelection + " beats " + playerSelection;
    if (playerSelection == computerSelection) {
        let userPrompt = prompt("That was a tie! Let's replay the round");
        return playRound(userPrompt, getComputerChoice());
    } else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return loseMessage;
        } else if (computerSelection == "Scissors") {
            return winMessage;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            return loseMessage;
        } else if (computerSelection == "Rock") {
            return winMessage;
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return loseMessage;
        } else if (computerSelection == "Paper") {
            return winMessage;
        }
    } else {
        return "Something went wrong, please rewrite the prompt";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let userPrompt = prompt("Let's play Rock Paper Scissors game! Please write down your choice for this round.");
        console.log(playRound(userPrompt, computerSelection));
    }
}

game();