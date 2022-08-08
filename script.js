const scoreOfPlayer = document.querySelector(".player");
const scoreOfCpu = document.querySelector(".opponent");

// Variables //
let playerScore = 0;
// Variable to Hold Player Score
let computerScore = 0;
// Variable to Hold Computer Score
let playerSelection;
// Empty container to hold Player Move
let computerSelection;
// Emply container to hold Computer Move
const buttons = document.querySelectorAll('button');
// Variable to hold button inputs


// Function to disable any button presses after the game has finished
function disableButtons () {
    buttons.forEach (elem => {
        elem.disabled = true;
    })
}

// Function to fire a random choice of Rock, Paper, or Scissors
function computerPlay() {
    // 'Math.floor' returns the largest integer less than or equal to a given number 
    // This function is meant to return a random choice of Rock, Paper or Scissors
    let computer = ["Rock","Paper","Scissors"];
    let move = computer[Math.floor(Math.random()*computer.length)];
    return move;
}

// Main function that will fire the user input and random computer choice and decide the winner of
// a round until a score is equal to 5
function playRound(playerSelection) {
    let result = "";
    // ComputerSelection pulls from existing random function 
    computerSelection = computerPlay();
    // Player Selection is pulled from our Button clicks, then capitalized to satisfy 
    // winning requirements
    playerSelection = capitalize(playerSelection);
    console.log(playerSelection);
    console.log(computerSelection);
    // playRound plays one round of Rock, Paper Scissors with the usual rules
    // if there is a draw the game the round will start over
    if(playerSelection === computerSelection) {
        result = "Draw! Try Again!";
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        result = ("You Win! <br><br> Player Score: " + playerScore + "<br><br> Computer Score: " + computerScore);

    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        result = ("You Lose!! <br><br> Player Score: " + playerScore + "<br><br> Computer Score: " + computerScore);  
    }
    else if(playerSelection === "Scissor" && computerSelection ==="Paper") {
        playerScore++;
        result = ("You Win! <br><br> Player Score: " + playerScore + "<br><br> Computer Score: " + computerScore);
    }
    else if(playerSelection === "Paper" && computerSelection ==="Scissors") {
        computerScore++;
        result = ("You Lose! <br><br> Player Score: " + playerScore + "<br><br> Computer Score: " + computerScore);
    }
    else if(playerSelection === "Paper" && computerSelection ==="Rock") {
        playerScore++;
        result = ("You Win! <br><br> Player Score: " + playerScore + "<br><br> Computer Score: " + computerScore);
    }
    else if(playerSelection === "Rock" && computerSelection ==="Paper") {
        computerScore++;
        result = ("You Lose!! <br><br> Player Score: " + playerScore + "<br><br> Computer Score: " + computerScore);
    }
    // If Player Score reaches 5 the game will end, you win
    if(playerScore === 5) {
        alert("You Win!");
        disableButtons();
    }
    // If the CPU reaches 5 the game will end, you lose
    else if(computerScore === 5) {
        alert("You Lose! Game Over!");
        disableButtons();
    }
    // Prints result to HTML
    document.getElementById('result').innerHTML = result;
}

// Allows buttons to be clicked and for each round to begin
buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.id);
        playerSelection = (button.id);
        console.log(playerScore, computerScore);
    });
});

// Function to capitalize Player Choices if they are not already
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


// function winGame() {
//     // Run this function to find out if you one or lost OR tied
//     if (playerScore === 5) {
//         return "You Win!";
//     }
//     else if (computerScore === 5) {
//         return "Computer Wins!";
//     }
//     else {
//         return "Draw!";
//     }
// }

// function game () {
//     let i = 0;
//     while (i <= 5) {
//         // Game will run 5 times, keeping track of score
//         let playerChoice = playerMove();
//         let computerChoice = computerPlay();
//         playRound(playerChoice, computerChoice);
//         i++;
//         console.log(playerChoice);
//         console.log(computerChoice);
//     }
// }

// function playerMove() {
//     // Writing a function that accept user input, then pushes it to lower-case in order to make user input
//     // case-insensitive. 
//     let user = prompt("What is your choice? Rock, Paper, or Scissors?");
//     let lowerCase = user.toLowerCase();
//     if(lowerCase === "rock") {
//         return "Rock";
//     }
//     else if(lowerCase === "paper") {
//         return "Paper";
//     }
//     else if(lowerCase === "scissors") {
//         return "Scissors";
//     }
// }
// game();