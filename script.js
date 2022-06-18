// write a r, p, s game
// make the player choose between r, p, s
// make a function for the computer to auto select rps randomly
// make a function that plays a round of rps

function computerPlay() {
   let computerRandom = Math.floor(Math.random() * 3 + 1);
   if (computerRandom === 1) {
       return "ROCK";
   }
   else if (computerRandom === 2) {
       return "PAPER";
   }
   else {
       return "SCISSORS";
   }
}



function rpsRound() {
    let playerSelection = prompt("Choose Rock, Paper or Scissors", "")
    playerSelection = playerSelection.toUpperCase()
    console.log(playerSelection)
    let = computerChoice = computerPlay()
    console.log(computerChoice)

    if(playerSelection === "ROCK") {
        if (computerChoice === "ROCK") {
            return "Draw!";
        }
        else if (computerChoice === "PAPER") {
            return "You Lose! Paper beats Rock";
        }
        else if (computerChoice === "SCISSORS") {
            return "You Win! Rock beats Scissors";
        }
    }
    else if(playerSelection === "PAPER") {
        if (computerChoice === "ROCK") {
            return "You Win! Paper beats Rock";
        }
        else if (computerChoice === "PAPER") {
            return "Draw!";
        }
        else {
            return "You Lose! Scissors beats Paper"
        }
    }
    else if(playerSelection === "SCISSORS") {
        if (computerChoice === "ROCK") {
            return "You Lose! Rock beats Scissors";
        }
        else if (computerChoice === "PAPER") {
            return "You Win! Scissors beats Paper";
        }
        else {
            return "Draw!"
        }
    }


}


console.log(rpsRound())