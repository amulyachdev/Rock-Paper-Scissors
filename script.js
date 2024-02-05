

// Functions declaration

function getComputerChoice(){
    let choice = ["rock", "paper", "scissor"];
    let getRandomNumber = Math.floor(Math.random()*choice.length);
    return choice[getRandomNumber];
  }
 
 
 function playRound(playerSelection, computerSelection){
     playerSelection = playerSelection.toLowerCase();
     computerSelection = getComputerChoice();
 
     if(
       (playerSelection==="rock" && computerSelection==="paper") ||
       (playerSelection==="paper" && computerSelection==="scissor") ||
       (playerSelection==="scissor" && computerSelection==="rock")
     ){
         return `You Win! ${playerSelection} beats ${computerSelection}`;
     }
     else if (
         (computerSelection==="rock" && playerSelection==="paper") ||
         (computerSelection==="paper" && playerSelection==="scissor") ||
         (computerSelection==="scissor" && playerSelection==="rock")
     ) {
         return `You Lose! ${computerSelection} beats ${playerSelection}`;
     } 
     else {
         return "It's a Tie!";
     }
     }
 
 function playGame() {
     let playerScore = 0;
     let computerScore = 0;
 
     for(i=1; i<=5; i++){
       let  readlineSync = require("readline-sync");
       const playerSelection = readlineSync.question("Enter your choice(rock, paper or scissor)").toLowerCase();
       const computerSelection = getComputerChoice();
 
       console.log(`round: ${i}`);
       console.log(`player chose ${playerSelection}`);
       console.log(`computer chose ${computerSelection}`);
 
       let result = playRound(playerSelection, computerSelection);
       console.log(result);
 
       if(result.includes("Win")){
         playerScore++;
       } else if (result.includes("Lose")){
         computerScore++;
       }
     }
 
 
         console.log("\nGame Over!");
         console.log(`playerscore is: ${playerScore}`);
         console.log(`computerscore is: ${computerScore}`);
 
         if(playerScore > computerScore) {
             console.log("Congratulations! You win the game!");
         } else if (computerScore > playerScore){
             console.log("Sorry, You Lose! the game. Better luck next time!");
         } else {
             console.log("The game is a tie!");
 }
 }
 
 
 playGame();
 
 
 