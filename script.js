let playBtn = document.getElementById("play");
let container1 = document.getElementById("container-1");
let container2 = document.getElementById("container-2");

playBtn.addEventListener("click", hideContainer1, { once: true });

function hideContainer1() {
    playBtn.style.cursor = "wait";
    container1.classList.add("fade-out");
    setTimeout(() => {
        container1.style.display = "none";
        showContainer2();
    }, 2000);
}

function showContainer2() {
    container2.style.display = "none";
    container2.classList.add("fade-in");
}
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
    } else if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            return "Hooray!!! you won this round!";
        } else if (computerChoice === "rock") {
            return "Oh no, you lost this round :(";
        } else {
            return "tie!";
        }
    } else {
        alert("Wrong input!");
    }
}
