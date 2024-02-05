let resultDiv = document.querySelector("#result");
let scoreDiv = document.querySelector("#score");

let buttons = document.querySelectorAll("button")

let Resetbtn = document.querySelector("#reset");

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
     let round = 1;
 
    buttons.forEach(button => {
      button.addEventListener('click', function(){
        if (round <=5) {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        resultDiv.textContent = `Round ${round}: ${result}`;
        round++;

        if(result.includes("Win")){
          playerScore++;
        } else if (result.includes("Lose")){
          computerScore++;
        }

        scoreDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
        if(round > 5){
          if(playerScore === 5){
            resultDiv.textContent = 'Congratulations! You win the game!';
          } else if (computerScore === 5){
            resultDiv.textContent = 'Sorry, You Lose! the game. Better luck next time'
          } 
          Resetbtn.style.display = 'block';
        }
      }
      })

    })
  }

  Resetbtn.addEventListener('click', function(){
    round =1;
    playerScore =0;
    computerScore =0;
    resultDiv.textContent = "";
    scoreDiv.textContent = "player: 0, computer: 0";
    Resetbtn.style.display = 'none';
    playGame();
  })
 
 playGame();
 