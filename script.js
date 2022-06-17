function playRound(playerSelection, computerSelection) {

    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    if (playerChoice == computerChoice) {
        return "Draw"
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        return "You have lost!"
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        return "You have won!"
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        return "You have won!"
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        return "You have lost!"
    }
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        return "You have lost!"
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
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


console.log(playRound(playerSelection, computerSelection));
