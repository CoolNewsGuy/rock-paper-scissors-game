// computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * 3)];

    return choice;
}

// play a round
function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "Oh no, you lost this round :(";
        } else if (computerChoice === "rock") {
            return "tie!";
        } else {
            return "Hooray!!! you won this round!";
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "paper") {
            return "tie!";
        } else if (computerChoice === "rock") {
            return "Hooray!!! you won this round";
        } else {
            return "Oh no, you lost this round :(";
        }
    } else {
        if (computerChoice === "paper") {
            return "Hooray!!! you won this round!";
        } else if (computerChoice === "rock") {
            return "Oh no, you lost this round :(";
        } else {
            return "tie!";
        }
    }
}
