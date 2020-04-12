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

function game() {
    playerScore = 0
    computerScore = 0
    count = 0

    // Run the game loop 5 times
    while (count < 5) {
        let playerChoice = prompt('Choose either rock, paper, or scissors...')
        let computerChoice = computerPlay()
        result = getWinner(playerChoice, computerChoice)

        // Get the winner for the round
        if (result === -1) {
            computerScore++
        }

        if (result === 1) {
            playerScore++
        }

        const roundResult = playRound(playerChoice, computerChoice)
        console.log(roundResult)
        count++
    }

    if (playerScore > computerScore) {
        console.log('You win!')
    } else {
        console.log('You lose!')
    }
    console.log('Player Score', playerScore)
    console.log('Computer Score', computerScore)
}

game()
