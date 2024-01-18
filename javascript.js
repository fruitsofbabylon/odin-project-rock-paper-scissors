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

function getPlayerChoice(e) {
    const btnClickedId = e.target.id;
    if (btnClickedId == "paperBtn") {
        return "Paper";
    } else if (btnClickedId == "scissorsBtn") {
        return "Scissors";
    } else if (btnClickedId == "rockBtn") {
        return "Rock";
    }
}

let computerCount = 0;
let userCount = 0;
let roundCount = 0;

function playRound(playerSelection, computerSelection) {
    let winMessage = "You win! " + playerSelection + " beats " + computerSelection;
    let loseMessage = "You lose! " + computerSelection + " beats " + playerSelection;
    if (playerSelection == computerSelection) {
        result.textContent = "That was a tie! Let's replay the round";
        roundCount--;
    } else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            ++computerCount;
            result.textContent = loseMessage;
        } else if (computerSelection == "Scissors") {
            ++userCount;
            result.textContent = winMessage;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            ++computerCount;
            result.textContent = loseMessage;
        } else if (computerSelection == "Rock") {
            ++userCount;
            result.textContent = winMessage;
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            ++computerCount;
            result.textContent = loseMessage;
        } else if (computerSelection == "Paper") {
            ++userCount;
            result.textContent = winMessage;
        }
    } else {
        result.textContent = "Something went wrong, please rewrite the prompt";
    }
}

const buttons = document.querySelectorAll('button');
const result = document.createElement('div');
const finalResult = document.createElement('div');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playRound(getPlayerChoice(e), getComputerChoice());
    roundCount++;
    if (roundCount == 5) {
        if (userCount > computerCount) {
            finalResult.textContent = "You are the winner! You won " + userCount + " times out of 5.";
        } else {
            finalResult.textContent = "Computer is the winner! You lost " + computerCount + " times out of 5.";
        }
    }
  });
});

document.body.appendChild(result);
document.body.appendChild(finalResult);
