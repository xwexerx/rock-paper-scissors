//This function takes two choices and based on these choices, returns a winner.
function playRound(playerSelection, computerSelection) {

    // Get a new computer choice each time the function is executed.
    computerSelection = computerPlay();

    //Transform the choices into lower case for ease of use in the code.
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    //This part of the code resolves who is the winner and grants the winner a point,
    //while also returning a message.
    if (playerChoice == computerChoice) {
        computerPoints++;
        playerPoints++;
        updateScore();
        checkForWinner();
        return "Draw"
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        computerPoints++;
        updateScore();
        checkForWinner();
        return "You have lost! Rock gets beaten by paper."
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        playerPoints++;
        updateScore();
        checkForWinner();
        return "You have won! Rock beats paper."
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        playerPoints++;
        updateScore();
        checkForWinner();
        return "You have won! Paper beats rock."
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        computerPoints++;
        updateScore();
        checkForWinner();
        return "You have lost! Paper gets beaten by scissors."
    }
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        computerPoints++;
        updateScore();
        checkForWinner();
        return "You have lost! Scissors get beaten by rock."
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        playerPoints++;
        updateScore();
        checkForWinner();
        return "You have won! Scissors beat paper."
    }
}

//This function generates a random number between 1-3 and turns that number into a string
//containing the computer's choice.
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

// This function updates the score in the text element on the page
function updateScore() {
    resultsElement.innerText = `${playerPoints} - ${computerPoints}`;
}

function checkForWinner() {
    if ((playerPoints || computerPoints) == 5 && playerPoints > computerPoints) {
        resultsElement.innerText = `${playerPoints} - ${computerPoints} You have won the 5 round game!`;
        replayElement.innerText = "Reload the page to play again.";
    }
    else if ((computerPoints || playerPoints) == 5 && playerPoints < computerPoints) {
        resultsElement.innerText = `${playerPoints} - ${computerPoints} You have lost the 5 round game!`;
        replayElement.innerText = "Reload the page to play again.";
    }
    else if (playerPoints == 5 && computerPoints == 5){
        resultsElement.innerText = `${playerPoints} - ${computerPoints} It's a draw!`;
        replayElement.innerText = "Reload the page to play again.";
    }
}

// Add three buttons to the HTMl
const rockElement = document.createElement("button");
rockElement.style.cssText = 'width: 100px;height:30px;';
rockElement.innerText = "Rock";
rockElement.addEventListener("click", () => console.log(playRound("rock", computerSelection)));
document.body.appendChild(rockElement);

const paperElement = document.createElement("button");
paperElement.style.cssText = 'width: 100px;height:30px;';
paperElement.innerText = "Paper";
paperElement.addEventListener("click", () => console.log(playRound("paper", computerSelection)));
document.body.appendChild(paperElement);

const scissorsElement = document.createElement("button");
scissorsElement.style.cssText = 'width: 100px;height:30px;';
scissorsElement.innerText = "Scissors";
scissorsElement.addEventListener("click", () => console.log(playRound("scissors", computerSelection)));
document.body.appendChild(scissorsElement);

// Add a div for displaying results
const resultsElement = document.createElement("div");
resultsElement.innerText = `${playerPoints} - ${computerPoints}`;
document.body.appendChild(resultsElement);


// Add a text element that get it's text updated after the game has ended

const replayElement = document.createElement("p");
replayElement.innerText = "";
document.body.appendChild(replayElement);




