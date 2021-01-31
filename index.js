let userSelection = prompt("Welcome to Rock, Paper, Scissors game. \n Please enter your R, P or S.");
let computerSelection = null;
let numericalComputerSelection = Math.floor(Math.random() * 3);
let numericalUserSelection = null;

switch(userSelection) {
    case "R":
    case "r":
        numericalUserSelection = 0;
        break;
    case "P":
    case "p":
        numericalUserSelection = 1;
        break;
    case "S":
    case "s":
        numericalUserSelection = 2;
        break;
    default:
        numericalUserSelection = 3;
}

switch(numericalComputerSelection) {
    case 0:
        computerSelection = "Rock";
        break;
    case 1:
        computerSelection = "Paper";
        break;
    default:
        computerSelection = "Scissors";
}

if(numericalUserSelection == numericalComputerSelection) {
    alert("Computer chose: " + computerSelection + "\nIt's a tie!")
} else if (numericalUserSelection == 0 && numericalComputerSelection == 1 || numericalUserSelection == 1 && numericalComputerSelection == 2 || numericalUserSelection == 2 && numericalComputerSelection == 0) {
    alert("Computer chose: " + computerSelection + "\nComputer wins!")
} else if (numericalUserSelection == 0 && numericalComputerSelection == 2 || numericalUserSelection == 1 && numericalComputerSelection == 0 || numericalUserSelection == 2 && numericalComputerSelection == 1) {
    alert("Computer chose: " + computerSelection + "\nYou win!")
} else {
    alert("Invalid selection. Please leave.")
}