function getComputerChoice() {
    choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    switch(choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    return prompt("What's your choice?").toLowerCase();
    
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("Draw!")
        } else if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock.")
                computerScore++;
            } else {
                console.log("You win! Rock beats Scissors.")
                humanScore++;
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper.")
                computerScore++;
            } else {
                console.log("You win! Paper beats Rock.")
                humanScore++;
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors.")
                computerScore++;
            } else {
                console.log("You win! Scissors beats Paper.")
                humanScore++;
            }
        }
    }

    for (let i=0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        if (i==4) {
            if(computerScore > humanScore) {
                console.log(`The computer wins! ${computerScore}-${humanScore}`);
            } else if (computerScore < humanScore) {
                console.log(`The player wins! ${humanScore}-${computerScore}`);
            } else {
                console.log("It's a draw!");
            }
        }
    }
}

playGame();