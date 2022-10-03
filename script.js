let playBtn = document.getElementById("play"),
    container1 = document.getElementById("container-1"),
    container2 = document.getElementById("container-2"),
    playerButtons = document.querySelectorAll(".player-btn"),
    computerButtons = document.querySelectorAll(".computer-btn"),
    buttonText;


playBtn.addEventListener("click", hideContainer1, {
    once: true
});

playerButtons.forEach((button) =>
    button.addEventListener("click", getPlayerChoice)
);


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


function getPlayerChoice() {
    buttonText = this.textContent;
    getComputerChoice();
}


function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    function enlightComputerButton(button) {
        if (computerChoice === button.textContent) {
            button.classList.add(`computer-choice-${button.textContent.toLowerCase()}`);
            setTimeout(() => button.classList.remove(`computer-choice-${button.textContent.toLowerCase()}`), 500)
        }
    }
    computerButtons.forEach(enlightComputerButton);
}
