function main() {
  const computerChoice = getComputerChoice();
  const playerChoice = prompt("What's your choice: ", "ROCK").toLowerCase();
  console.log(playerChoice);
}

// ! computer choice
function getComputerChoice() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let choice = choices[Math.floor(Math.random() * 3)];

  return choice;
}

main();
