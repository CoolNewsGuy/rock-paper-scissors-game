function main() {
  const computerChoice = getComputerChoice();
}

function getComputerChoice() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let choice = choices[Math.floor(Math.random() * 3)];

  return choice;
}

main();
