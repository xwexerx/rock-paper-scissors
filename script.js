function playRound(playerSelection, computerSelection) {

    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    if (playerChoice == computerChoice) {
        computerPoints++;
        playerPoints++;
        return "Draw"
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        computerPoints++;
        return "You have lost! Rock gets beaten by paper."
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        playerPoints++;
        return "You have won! Rock beats paper."
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        playerPoints++;
        return "You have won! Paper beats rock."
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        computerPoints++;
        return "You have lost! Paper gets beaten by scissors."
    }
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        computerPoints++;
        return "You have lost! Scissors get beaten by rock."
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        playerPoints++;
        return "You have won! Scissors beat paper."
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
        playerSelection = prompt("What's your choice?");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`Your score = ${playerPoints}
The Computer's score = ${computerPoints}`)
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