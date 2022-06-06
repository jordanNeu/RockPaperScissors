let playerScore = 0;
let computerScore = 0;
let playerSelection = playerMove();
let computerSelection = computerPlay();


function computerPlay() {
    let computer = ["Rock","Paper","Scissors"];
    // 'Math.floor' returns the largest integer less than or equal to a given number 
    // This function is meant to return a random choice of Rock, Paper or Scissors
    let move = computer[Math.floor(Math.random()*computer.length)];
    return move;
}

function playerMove() {
    // Writing a function that accept user input, then pushes it to lower-case in order to make user input
    // case-insensitive. 
    let user = prompt("What is your choice? Rock, Paper, or Scissors?");
    let lowerCase = user.toLowerCase();
    if(lowerCase === "rock") {
        return "Rock";
    }
    else if(lowerCase === "paper") {
        return "Paper";
    }
    else if(lowerCase === "scissors") {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // playRound plays one round of Rock, Paper Scissors with the usual rules
    // if there is a draw the game the round will start over
    if(playerSelection === computerSelection) {
        return "Draw! Try Again!";
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        return "You Win!";
        
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        return "Computer Wins :(";
        
    }
    else if(playerSelection === "Scissor" && computerSelection ==="Paper") {
        playerScore++;
        return "You Win!";
        
    }
    else if(playerSelection === "Paper" && computerSelection ==="Scissors") {
        computerScore++;
        return "Computer Wins :(";
        
    }
    else if(playerSelection === "Paper" && computerSelection ==="Rock") {
        playerScore++;
        return "You Win!";
        
    }
    else if(playerSelection === "Rock" && computerSelection ==="Paper") {
        computerScore++;
        return "Computer Wins :(";
        
    }
}

function game () {
    let i = 0;
    while (i <= 5) {
        let playerChoice = playerMove();
        let computerChoice = computerPlay();
        playRound(playerChoice, computerChoice);
        i++;
        console.log(playerChoice);
        console.log(computerChoice);
    }
}

function winGame() {
    if (playerScore > computerScore) {
        alert("You Win the Game!");
    }
    else if (playerScore = computerScore) {
        alert("Draw!");
    }
    else {
        alert("You Lost!");
    }
}
game();
winGame();