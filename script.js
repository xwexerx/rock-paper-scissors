function getComputerChoice() {
    choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    console.log(choice);

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


console.log(getComputerChoice());