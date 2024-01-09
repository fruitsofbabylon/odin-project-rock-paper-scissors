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

let computerCount = 0;
let userCount = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let winMessage = "You win! " + playerSelection + " beats " + computerSelection;
    let loseMessage = "You lose! " + computerSelection + " beats " + playerSelection;
    if (playerSelection == computerSelection) {
        let userPrompt = prompt("That was a tie! Let's replay the round");
        return playRound(userPrompt, getComputerChoice());
    } else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            ++computerCount;
            return loseMessage;
        } else if (computerSelection == "Scissors") {
            ++userCount;
            return winMessage;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            ++computerCount;
            return loseMessage;
        } else if (computerSelection == "Rock") {
            ++userCount;
            return winMessage;
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            ++computerCount;
            return loseMessage;
        } else if (computerSelection == "Paper") {
            ++userCount;
            return winMessage;
        }
    } else {
        let userPrompt = prompt("Something went wrong, please rewrite the prompt");
        return playRound(userPrompt, getComputerChoice());
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let userPrompt = prompt("Let's play Rock Paper Scissors game! Please write down your choice for this round.");
        console.log(playRound(userPrompt, computerSelection));
    }
    if (userCount > computerCount) {
        console.log("You are the winner! You won " + userCount + " times out of 5.");
    } else {
        console.log("Computer is the winner! You lost " + computerCount + " times out of 5.");
    }
}

game();