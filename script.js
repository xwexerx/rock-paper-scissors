function getComputerChoice() {
    choice = Math.ceil((Math.random()*100));

    console.log(choice);

    if (choice <= 33) {
        return "rock"
    } else if (choice <= 66 && choice > 33) {
        return "paper"
    } else {
        return "scissors"
    }
}


console.log(getComputerChoice());