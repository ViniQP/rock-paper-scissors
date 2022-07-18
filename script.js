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

    let = computerChoice = computerPlay()
    let choices = document.querySelector('.choices')
    if (playerChoice === 'rock') {    
        if (computerChoice === "ROCK") {
            choices.textContent = 'You chose Rock and the Computer chose Rock!'
            return "Draw!";
        }
        else if (computerChoice === "PAPER") {
            choices.textContent = 'You chose Rock and the Computer chose Paper!'
            return "You Lose!";
        }
        else if (computerChoice === "SCISSORS") {
            choices.textContent = 'You chose Rock and the Computer chose Scissors!'
            return "You Win!";
        }
    }
    if (playerChoice === 'paper') {
        if (computerChoice === "ROCK") {
            choices.textContent = 'You chose Paper and the Computer chose Rock!'
            return "You Win!";
        }
        else if (computerChoice === "PAPER") {
            choices.textContent = 'You chose Paper and the Computer chose Paper!'
            return "Draw!";
        }
        else {
            choices.textContent = 'You chose Paper and the Computer chose Scissors!'
            return "You Lose!"
        }
    }
   
    if (playerChoice === "scissors") {
        if (computerChoice === "ROCK") {
            choices.textContent = 'You chose Scissors and the Computer chose Rock!'
            return "You Lose!";
        }
        else if (computerChoice === "PAPER") {
            choices.textContent = 'You chose Scissors and the Computer chose Paper!'
            return "You Win!";
        }
        else {
            choices.textContent = 'You chose Scissors and the Computer chose Scissors!'
            return "Draw!"
        }
    }
}

let playerChoice
let playerScore = 0
let computerScore = 0
announcement = 0
playerButtons = document.querySelectorAll('.player-choice')
playerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id
        result = rpsRound()
        if (result === "You Win!") {
            playerScore++
        }
        else if (result === "You Lose!") {
            computerScore++
        }
        let content = document.querySelector('.results')
        content.textContent = result
        let score = document.querySelector('.score') 
        let winner = document.createElement('p')  
        if (playerScore < 5 && computerScore < 5) {       
            score.textContent = `Player ${playerScore} x ${computerScore} Computer `
        }
        else if (playerScore > computerScore) {
            if (announcement === 0) {
                score.textContent = `Player ${playerScore} x ${computerScore} Computer `
                winner.textContent = "Player Won!"
                score.appendChild(winner)
                const newGame = document.createElement('button')
                newGame.classList.add('new-game')
                newGame.textContent = 'Reload Page'
                score.append(newGame)
                newGame.addEventListener('click', () => {
                    window.location.reload()
                });
                announcement++
            }
        }
        else if (computerScore > playerScore) {
            if (announcement === 0) {
                score.textContent = `Player ${playerScore} x ${computerScore} Computer `
                winner.textContent = "Computer Won!"
                announcement++
            
                score.appendChild(winner)
                const newGame = document.createElement('button')
                newGame.classList.add('new-game')
                newGame.textContent = 'Reload Page'
                score.appendChild(newGame)
                newGame.addEventListener('click', () => {
                    window.location.reload()
                })
            }
        }
    
    })
})
