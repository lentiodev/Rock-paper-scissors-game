let myGame =['rock', 'papper', 'scissors'];

let userChoice = prompt("What is your choice?");

let randomChoice = Math.floor(Math.random() * myGame.length);
let computerChoice = myGame[randomChoice];

console.log(`user :${userChoice}`, `computer: ${computerChoice}`);

if ((userChoice = "rock") && (computerChoice = "rock")) {
  console.log("its a tie");
} else if ((userChoice = "rock") && (computerChoice = "papper")) {
  console.log("you loose");
} else if ((userChoice = "rock") && (computerChoice = "scissors")) {
  console.log("you win");
} 



