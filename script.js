function computerPlay() {
    let computer = ["Rock","Paper","Scissors"];
    // 'Math.floor' returns the largest integer less than or equal to a given number 
    let move = computer[Math.floor(Math.random()*computer.length)];
    return move;
}

function playRound( playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        console.log("Draw! Try Again!");
    }
    if(playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You Win!");
        if(playerSelection === "Scissors" && computerSelection === "Rock") {
            console.log("Computer Wins");
        }
    }
    if(playerSelection === "Scissor" && computerSelection ==="Paper") {
        console.log("You Win!");
        if(playerSelection === "Paper" && computerrSelection ==="Scissors") {
            console.log("Computer Wins");
        }
    }
    if(playerSelection === "Paper" && computerSelection ==="Rock") {
        console.log("You Win!");
        if(playerSelection === "Rock" && computerSelection ==="Paper") {
            console.log("Computer Wins");
        }
    }

}

let playerMove = prompt("What is your choice? Rock, Paper, or Scissors?") 
console.log(playerMove);

let computerMove = computerPlay();
console.log(computerMove);

console.log(playRound(playerMove, computerMove));
let playerScore = 0;
let computerScore = 0;