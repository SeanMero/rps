let wins = 0;
let losses = 0;
let ties = 0;

function getComputerChoice() {
    const rpsArray = ['rock', 'paper', 'scissors'];
    let choice = rpsArray[Math.floor(Math.random()*rpsArray.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            wins += 1;
            console.log("You win! Rock beats scissors");
        }
        else if (computerSelection == "paper") {
            losses += 1;
            console.log("You lose! Paper beats rock");
        }
        else { 
            ties +=1;
            console.log("Tie!");}
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            wins += 1;
            console.log("You win! Paper beats rock");
            }
            else if (computerSelection == "scissors") {
                losses += 1;
                console.log("You lose! Scissors beats paper");
            }
            else { 
               ties +=1;
                console.log("Tie!");}  
        }
    else {
        if (computerSelection == "paper") {
            wins += 1;
            console.log("You win! Scissors beats paper"); 
            }
            else if (computerSelection == "rock") {
                losses += 1;
                console.log("You lose! Rock beats scissors");
            }
            else { 
                ties +=1;
                console.log("Tie!");}   
        }
}

function playGame() {
    let playerSelection = prompt("Choose Rock, Paper, or Scissors");
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
    playerSelection = prompt("Choose Rock, Paper, or Scissors");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
    playerSelection = prompt("Choose Rock, Paper, or Scissors");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
    playerSelection = prompt("Choose Rock, Paper, or Scissors");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
    playerSelection = prompt("Choose Rock, Paper, or Scissors");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
    console.log("The score is (wins-losses-ties):", wins, losses, ties)
}
