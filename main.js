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

function playRound(humanChoice,computerChoice){
    if (humanChoice == "Rock") {
        if (computerChoice == "Rock") {
            whoWon = 2
        } if (computerChoice == "Paper") {
            whoWon = 0
            computerScore += 1
        } if (computerChoice == "Scissors") {
            whoWon = 1
            humanScore += 1
        } 
    } if (humanChoice == "Paper") {
        if (computerChoice == "Rock") {
            whoWon = 1
            humanScore += 1
        } if (computerChoice == "Paper") {
            whoWon = 2
        } if (computerChoice == "Scissors") {
            whoWon = 0
            computerScore += 1
        } 
    } if (humanChoice == "Scissors") {
        if (computerChoice == "Rock") {
            whoWon = 0
            computerScore += 1
        } if (computerChoice == "Paper") {
            whoWon = 1
            humanScore += 1
        } if (computerChoice == "Scissors") {
            whoWon = 2
        } 
    }
    return [whoWon,computerChoice,humanChoice]
}

function addPlayAndUpdateScore(play){
    let whoWon = play[0]
    let computerPick = play[1]
    let humanPick = play[2]

    const gamePlay = document.querySelector("#gamePlay");
    const gamePlayDiv = document.createElement("div");

    const scoreBoard = document.querySelector("#scoreBoard");

    if (whoWon === 0){
        gamePlayDiv.textContent = "Computer-" + computerPick + " beats Human-" + humanPick
    } else if (whoWon === 1){
        gamePlayDiv.textContent = "Human-" + humanPick + " beats Computer-" + computerPick
    }else if (whoWon === 2){
        gamePlayDiv.textContent = "Human-" + humanPick + " Ties Computer-" + computerPick
    }
    scoreBoard.textContent = "Human Score: " + humanScore + " | Computer Score: " + computerScore;
    gamePlay.appendChild(gamePlayDiv);

    if (humanScore === 5|| computerScore === 5){

        const winnerBoardDiv = document.querySelector("#winnerBoard");
        const winnerDiv = document.createElement("div");

        if (humanScore === 5){
            winnerDiv.textContent = "Human Wins!!!!!!!!!"
        } else if (computerScore === 5){
            winnerDiv.textContent = "Computer Wins!!!!!!!!!"
        }

        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart Game"
        restartButton.addEventListener("click", function (e) {
            resetGame()
        });
        
        winnerBoardDiv.appendChild(winnerDiv);
        winnerBoardDiv.appendChild(restartButton);
    }

    
}

function resetGame(){
    const body = document.querySelector("body");
    gamePlay = document.querySelector("#gamePlay");
    scoreBoard = document.querySelector("#scoreBoard");
    winnerBoard = document.querySelector("#winnerBoard");

    body.removeChild(gamePlay)
    body.removeChild(scoreBoard)
    body.removeChild(winnerBoard)

    winnerBoard = document.createElement("div");
    winnerBoard.setAttribute("id", "winnerBoard");
    body.appendChild(winnerBoard)

    scoreBoard = document.createElement("div");
    scoreBoard.setAttribute("id","scoreBoard")
    scoreBoard.textContent = "Human Score: 0| Computer Score: 0"
    body.appendChild(scoreBoard)

    gamePlay = document.createElement("div");
    gamePlay.setAttribute("id","gamePlay")
    body.appendChild(gamePlay)

    humanScore = 0
    computerScore = 0
}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (humanScore !== 5 && computerScore !== 5){
        let play = playRound(e.target.innerText,getComputerChoice())
        addPlayAndUpdateScore(play)
    }
  });
});
