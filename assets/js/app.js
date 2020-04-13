const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container');
const plScoreNode = document.querySelector('#player-score');
const compScoreNode = document.querySelector('#computer-score');
const roundResult = document.querySelector('#round-result');
const whoWon = document.querySelector('#who-won');
const winnerNode = document.querySelector('#winner');
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3)

    switch (randomNum) {
        case 0:
            return 'rock'
            break
        case 1:
            return 'paper'
            break
        case 2: 
            return 'scissors'
    }
}

function playRound(playerSel, computerSelection) {

    const playerSelection = playerSel.toLowerCase()

    // If Player chooses rock
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Tie! Rock and rock.'
    }

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats rock.'
    }

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats scissors.'
    }

    // If Player chooses paper
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock.'
    }

    if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Tie! Paper and paper.'
    }

    if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats paper.'
    }

    // If Player chooses scissors
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats scissors.'
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper.'
    }

    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Tie! Scissors and scissors.'
    }
}

function getWinner(playerSelection, computerSelection) {

    let playerWon = 0

    // If Player chooses rock
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        playerWon = 0
    }

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        playerWon = -1
    }

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWon = 1
    }

    // If Player chooses paper
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWon = 1
    }

    if (playerSelection === 'paper' && computerSelection === 'paper') {
        playerWon = 0
    }

    if (playerSelection === 'paper' && computerSelection === 'scissors') {
        playerWon = -1
    }

    // If Player chooses scissors
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        playerWon = -1
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWon = 1
    }

    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        playerWon = 0
    }

    return playerWon
}

function game(e) {
    
    let playerChoice = e.target.name;

    // Get the computer's selection
    let computerChoice = computerPlay();

    let message = playRound(playerChoice, computerChoice);
    // Display the message to the user
    roundResult.textContent = message;

    // Get the winner
    let winner = getWinner(playerChoice, computerChoice);

    if(winner === 1) {
        playerScore++;
    } 

    if(winner === -1) {
        computerScore++
    }

    // Update scoreboard
    plScoreNode.textContent = playerScore;
    compScoreNode.textContent = computerScore;

    if(playerScore === 5) {
        whoWon.textContent = 'Congratulations! You won!';
        winnerNode.style.display = 'block';
        playerScore = 0;
        computerScore = 0;
        setTimeout(() => {
            reset();
        }, 2000);
    }

    if(computerScore === 5) {
        whoWon.textContent = 'Sorry. You lost';
        winnerNode.style.display = 'block';
        playerScore = 0;
        computerScore = 0;
        setTimeout(() => {
            reset();
        }, 2000);
    }
}

function reset() {
    winnerNode.style.display = 'none';
}

// Event Listeners
buttons.forEach((button) => {
    button.addEventListener('click', game);
});

// Run the game
game()
