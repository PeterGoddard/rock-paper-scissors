let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let intChoice = Math.floor(Math.random() * 3)
    if (intChoice == 0) {
        return "Rock"
    } if (intChoice == 1) {
        return "Paper"
    } if (intChoice == 2) {
        return "Scissors"
    } else {
        return intChoice
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors?")
    return choice
}

function playRound(humanChoice,computerChoice){
    if (humanChoice == "Rock") {
        if (computerChoice == "Rock") {
            console.log("Tied! Rock ties with Rock")
        } if (computerChoice == "Paper") {
            console.log("Computer Wins! Paper beats Rock")
            computerScore += 1
        } if (computerChoice == "Scissors") {
            console.log("Human Wins! Rock beats Scissors")
            humanScore += 1
        } 
    } if (humanChoice == "Paper") {
        if (computerChoice == "Rock") {
            console.log("Human Wins! Paper beats Rock")
            humanScore += 1
        } if (computerChoice == "Paper") {
            console.log("Tied! Paper ties with Paper")
        } if (computerChoice == "Scissors") {
            console.log("Computer Wins! Scissors beats Paper")
            computerScore += 1
        } 
    } if (humanChoice == "Scissors") {
        if (computerChoice == "Rock") {
            console.log("Computer Wins! Rock beats Scissors")
            computerScore += 1
        } if (computerChoice == "Paper") {
            console.log("Human Wins! Scissors beats Paper")
            humanScore += 1
        } if (computerChoice == "Scissors") {
            console.log("Tied! Scissors ties with Scissors")
        } 
    }
}

function playGame(){
    for (i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice())
        console.log("Human Score: " + humanScore + "| Computer Score: " + computerScore)
    } if (humanScore > computerScore){
        console.log("Human Wins the Game!")
    } else if (humanScore < computerScore){
        console.log("Computer Wins the Game!")
    } else {
        console.log("Tied Game!")
    }
}

playGame()