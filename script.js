function computerPlay() {
    let computer = ["Rock","Paper","Scissors"];
    // 'Math.floor' returns the largest integer less than or equal to a given number
    let computerMove = computer[Math.floor(Math.random()*computer.length)];
    console.log(computerMove);
}

function playRound( playerSelection, computerSelection) {
    playerSelection = prompt("What is your choice? Rock Paper or Scissors?");
    computeSelection = computerPlay();
    if(playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("Rock Wins");
    }
    if(playerSelection === "Scissor" && computerSelection ==="Paper") {
        console.log("Scissors Wins");
    }
    if(playerSelection === "Paper" && computerSelection ==="Rock") {
        console.log("Paper Wins");
    }

}


