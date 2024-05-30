


const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;




function playGame(playerChoice){
    //computer will choose randomly from the array choices between 0-2 indexes 
    const computerChoice = choices[Math.floor(Math.random()*3)]
    let result = "";

    if (playerChoice === computerChoice){   
        result = "ITS A TIE!";
    }
    
    else{
        //if case (playerchoice) == rock, 
        // then if computerChoice === scissors then you win 
        // otherwise you lose
        switch(playerChoice){
            case "rock":
                result = (computerChoice==="scissors") ? "YOU WIN" :"YOU LOSE";
                break;
            case "paper":
                result = (computerChoice==="rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerChoice==="paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");
    switch(result){
        case "YOU WIN":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent=playerScore;
            break;
        case "YOU LOSE":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent=computerScore;
            break;
    }   
}
