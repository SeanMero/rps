let wins = 0;
let losses = 0;
let ties = 0;
const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
const score = document.querySelector("#score")

function getComputerChoice() {
    const rpsArray = ['rock', 'paper', 'scissors'];
    let choice = rpsArray[Math.floor(Math.random()*rpsArray.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "scissors") {
            wins += 1;
            results.textContent = "You win! Rock beats scissors";
        }
        else if (computerSelection == "paper") {
            losses += 1;
            results.textContent = "You lose! Paper beats rock";
        }
        else { 
            ties +=1;
            results.textContent = "Tie!";}
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "rock") {
            wins += 1;
            results.textContent = "You win! Paper beats rock";
            }
            else if (computerSelection == "scissors") {
                losses += 1;
                results.textContent = "You lose! Scissors beats paper";
            }
            else { 
               ties +=1;
               results.textContent = "Tie!";}  
        }
    else {
        if (computerSelection == "paper") {
            wins += 1;
            results.textContent = "You win! Scissors beats paper"; 
            }
            else if (computerSelection == "rock") {
                losses += 1;
                results.textContent = "You lose! Rock beats scissors";
            }
            else { 
                ties +=1;
                results.textContent = "Tie!";}   
        }
    score.textContent = `The score is ${wins} wins, ${losses} losses, and ${ties} ties`
}

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        playRound(button.textContent, getComputerChoice())
    });
});