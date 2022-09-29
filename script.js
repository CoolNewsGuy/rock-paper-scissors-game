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

// play a game of 5 rounds
function game() {
    let loseCounter = 0;
    let winCounter = 0;
    let i = 0;

    while (i < 5) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt(
            "What's your choice (Note that a tie adds a point to computer): ",
            "ROCK"
        ).toLowerCase();
        let round = playRound(playerChoice, computerChoice);

        if (round === "tie!") {
            alert("tie");
            continue;
        } else if (round === "Oh no, you lost this round :(") {
            loseCounter++;
            alert(
                `computer choice: ${computerChoice} \ncomputer's score: ${loseCounter} \nyour score: ${winCounter}`
            );
        } else {
            winCounter++;
            alert(
                `computer choice: ${computerChoice} \ncomputer's score: ${loseCounter} \nyour score: ${winCounter}`
            );
        }
        i++;
    }

    console.log(winCounter, loseCounter);
    if (winCounter > loseCounter) {
        console.log("Yayyyyy!! You won the game!");
    } else {
        console.log("Ah better luck next time :(");
    }
}

// run the game
game();
