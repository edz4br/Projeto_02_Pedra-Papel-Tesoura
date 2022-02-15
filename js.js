//Variables
let container = document.querySelector('.container')
let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissor = document.querySelector('.scissor')
let pick = document.querySelector('.pick-text')
let playerScore = document.querySelector('.pScore')
let computerScore = document.querySelector('.cScore')
let i = 0
let x = 0
let playAgain = document.createElement('div')
playAgain.textContent = 'Play Again?'
playAgain.classList.add('again')
//Pick Events
let eventRock = function (e) {
    setTimeout(() => {
        paper.classList.remove('scale')
        scissor.classList.remove('scale')
    }, 10);
    rock.classList.add('scale')
    match('rock')
}
let eventPaper = function (e) {
    setTimeout(() => {
        rock.classList.remove('scale')
        scissor.classList.remove('scale')
    }, 10);
    paper.classList.add('scale')
    match('paper')
}

let eventScissor = function (e) {
    setTimeout(() => {
        rock.classList.remove('scale')
        paper.classList.remove('scale')
    }, 10);
    scissor.classList.add('scale')
    match('scissor')
}
let pageRefresh = () => {
    window.location.reload(true)
}
rock.addEventListener('click', eventRock)
paper.addEventListener('click', eventPaper)
scissor.addEventListener('click', eventScissor)

function match(input) {
    function computerplay() {
        let random = Math.floor(Math.random() * 3);
        if (random == 2)
            return 'rock'
        else if (random == 1)
            return 'paper'
        else if (random == 0)
            return 'scissor'
    }
    let enemy = computerplay();
    //If input picks rock
    if (input === 'rock' && enemy === 'scissor') {
        i++
        playerScore.textContent = i
        if (i == 5) {
            pick.classList.add('result')
            pick.textContent = 'Congratulations! You Won!'
            rock.removeEventListener('click', eventRock)
            paper.removeEventListener('click', eventPaper)
            scissor.removeEventListener('click', eventScissor)
            container.appendChild(playAgain)
            playAgain.addEventListener('click', pageRefresh)
        } else {
            pick.textContent = 'Good!\nRock beats scissor.'
        }
        return 'Won'
    }
    if (input === 'rock' && enemy === 'paper') {
        x++
        computerScore.textContent = x
        if (x == 5) {
            pick.classList.add('result')
            pick.textContent = 'Oh! You Lose!'
            rock.removeEventListener('click', eventRock)
            paper.removeEventListener('click', eventPaper)
            scissor.removeEventListener('click', eventScissor)
            container.appendChild(playAgain)
            playAgain.addEventListener('click', pageRefresh)
        } else {
            pick.textContent = 'Bad!\nRock loses to Paper.'
        }
        return 'Lose'
    }
    if (input === 'rock' && enemy === 'rock') {
        pick.textContent = 'Draw!'
        return 'Draw'
    }
    //If input picks paper
    if (input === 'paper' && enemy === 'rock') {
        i++
        playerScore.textContent = i
        if (i == 5) {
            pick.classList.add('result')
            pick.textContent = 'Congratulations! You Won!'
            rock.removeEventListener('click', eventRock)
            paper.removeEventListener('click', eventPaper)
            scissor.removeEventListener('click', eventScissor)
            container.appendChild(playAgain)
            playAgain.addEventListener('click', pageRefresh)
        } else {
            pick.textContent = 'Good!\nPaper beats Rock.'
        }
        return 'Won'
    }
    if (input === 'paper' && enemy === 'scissor') {
        x++
        computerScore.textContent = x
        if (x == 5) {
            pick.classList.add('result')
            pick.textContent = 'Oh! You Lose!'
            rock.removeEventListener('click', eventRock)
            paper.removeEventListener('click', eventPaper)
            scissor.removeEventListener('click', eventScissor)
            container.appendChild(playAgain)
            playAgain.addEventListener('click', pageRefresh)
        } else {
            pick.textContent = 'Bad!\nPaper loses to scissor.'

        }
        return 'Lose'
    }
    if (input === 'paper' && enemy === 'paper') {
        pick.textContent = 'Draw!'
        return 'Draw'
    }
    //If input picks scissor
    if (input === 'scissor' && enemy === 'paper') {
        i++
        playerScore.textContent = i
        if (i == 5) {
            pick.classList.add('result')
            pick.textContent = 'Congratulations! You Won!'
            rock.removeEventListener('click', eventRock)
            paper.removeEventListener('click', eventPaper)
            scissor.removeEventListener('click', eventScissor)
            container.appendChild(playAgain)
            playAgain.addEventListener('click', pageRefresh)
        } else {
            pick.textContent = 'Good!\nscissor beats Paper.'
        }
        return 'Won'
    }
    if (input === 'scissor' && enemy === 'rock') {
        x++
        computerScore.textContent = x
        if (x == 5) {
            pick.classList.add('result')
            pick.textContent = 'Oh! You Lose!'
            rock.removeEventListener('click', eventRock)
            paper.removeEventListener('click', eventPaper)
            scissor.removeEventListener('click', eventScissor)
            container.appendChild(playAgain)
            playAgain.addEventListener('click', pageRefresh)
        } else {
            pick.textContent = 'Bad!\nscissor loses to Rock.'
        }
        return 'Lose'
    }
    if (input === 'scissor' && enemy === 'scissor') {
        pick.textContent = 'Draw!'
        return 'Draw'
    }
}
