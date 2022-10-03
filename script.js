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
    }, 1500);
    setTimeout(() => {
        container2.firstElementChild.style.display = "block";
        container2.firstElementChild.classList.add("fade-in");
    }, 2500);
}

function showContainer2() {
    container2.style.display = "none";
    container2.classList.add("fade-in");
}

let playerButtons = document.querySelectorAll(".player-btn");
let buttonText;

function getPlayerChoice() {
    buttonText = this.textContent;
    getComputerChoice();
}

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(computerChoice);
}

playerButtons.forEach((button) =>
    button.addEventListener("click", getPlayerChoice)
);
