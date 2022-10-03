let playBtn = document.getElementById("play"),
    container1 = document.getElementById("container-1"),
    container2 = document.getElementById("container-2"),
    playerButtons = document.querySelectorAll(".player-btn"),
    computerButtons = document.querySelectorAll(".computer-btn"),
    playerScore = document.getElementById('player-score'),
    computerScore = document.getElementById('computer-score'),
    playerScoreValue = +playerScore.textContent,
    computerScoreValue = +computerScore.textContent,
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
    let choices = ["rock", "paper", "scissors"],
        computerChoice = choices[Math.floor(Math.random() * 3)],
        playerChoice = buttonText.toLowerCase();

    function enlightComputerButton(button) {
        if (computerChoice === button.textContent.toLowerCase()) {
            button.classList.add(`computer-choice-${button.textContent.toLowerCase()}`);
            setTimeout(() => button.classList.remove(`computer-choice-${button.textContent.toLowerCase()}`), 500)
        }
    }

    function increaseScore() {
        if (playerChoice === 'rock') {
            if (computerChoice === 'paper') {
                computerScoreValue++;
                computerScore.textContent = computerScoreValue;
            } else if (computerChoice === 'scissors') {
                playerScoreValue++;
                playerScore.textContent = playerScoreValue;
            }
        } else if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                playerScoreValue++;
                playerScore.textContent = playerScoreValue;
            } else if (computerChoice === 'scissors') {
                computerScoreValue++;
                computerScore.textContent = computerScoreValue;
            }
        } else {
            if (computerChoice === 'rock') {
                computerScoreValue++;
                computerScore.textContent = computerScoreValue;
            } else if (computerChoice === 'paper') {
                playerScoreValue++;
                playerScore.textContent = playerScoreValue;
            }
        }
    }

    increaseScore()
    computerButtons.forEach(enlightComputerButton);
    checkTheWinner();
}

function checkTheWinner() {
    if (computerScore.textContent === '10') {
        alert('Oh no! Better luck next time ;)')
        computerScore.textContent = '0'
        computerScoreValue = +computerScore.textContent
        playerScore.textContent = '0'
        playerScoreValue = +playerScore.textContent
    } else if (playerScore.textContent === '10') {
        alert('Yeah! You won :D')
        computerScore.textContent = '0'
        computerScoreValue = +computerScore.textContent
        playerScore.textContent = '0'
        playerScoreValue = +playerScore.textContent
    }
}