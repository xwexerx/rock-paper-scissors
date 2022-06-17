function playRound(playerSelection, computerSelection) {

    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    if (playerChoice == computerChoice) {
        return "Draw"
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        computerPoints++;
        return "You have lost!"
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        playerPoints++;
        return "You have won!"
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        playerPoints++;
        return "You have won!"
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        computerPoints++;
        return "You have lost!"
    }
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        computerPoints++;
        return "You have lost!"
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        playerPoints++;
        return "You have won!"
    }
}

function computerPlay() {

    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (computerChoice == 1) {
        return "Paper"
    } 
    else if (computerChoice == 2) {
        return "Rock"
    }
    else if (computerChoice == 3) {
        return "Scissors"
    }
    else {
        return "Computer choice not found"
    }
}

let playerSelection = "rock";
let computerSelection = computerPlay();
let playerPoints = 0;
let computerPoints = 0;


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerPoints > computerPoints) {
        return "You have won the 5 round game!"
    }
    else if (playerPoints < computerPoints){
        return "You have lost the 5 round game!"
    }
    else {
        return "It's a draw!"
    }
}

console.log(game());