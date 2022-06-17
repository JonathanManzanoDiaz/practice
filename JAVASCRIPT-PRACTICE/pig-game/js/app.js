'use strict'

let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.new');
let btnRoll = document.querySelector('.btn_roll');
let btnHold = document.querySelector('.btn_hold');
let playerOne = document.querySelector('.player_one');
let playerTwo = document.querySelector('.player_two');
let current = document.querySelector('current');
let scoreOne = document.querySelector('.score1')
let scoreTwo = document.querySelector('.score2')
let cScoreOne = document.querySelector('.c_score1');
let cScoreTwo = document.querySelector('.c_score2');
let resetH = document.querySelector('.reset')
let left = document.querySelector('.left')
let right = document.querySelector('.right')
let win = document.querySelector('.win')

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;

let players = [0, 1]

btnNew.addEventListener('click', function () {
    resetH.style.display = 'block'
    resetH.innerHTML = 'You reset the game!'
    function resetPage() {
        location.reload()
    }
    setTimeout(resetPage, 800);
})

btnRoll.addEventListener('click', function () {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `images/dice-${dice}.png`


    if (dice !== 1) {
        currentScore += dice
        if (activePlayer === 0) {
            cScoreOne.innerHTML = currentScore
        }
        else if (activePlayer === 1) {
            cScoreTwo.innerHTML = currentScore
        }
    }

})



btnHold.addEventListener('click', function () {
    if (activePlayer === 0) {
        changeP2()
        scoreOne.innerHTML = currentScore
        scoreOne = currentScore
        currentScore = 0
        cScoreOne.innerHTML = '0'


    } else if (activePlayer = 1) {
        changeP1()
        scoreTwo.innerHTML = currentScore
        scoreTwo = currentScore
        currentScore = 0
        cScoreTwo.innerHTML = '0'


        if (scoreOne > scoreTwo) {
            win.style.display = 'block'
            win.innerHTML = 'PLAYER 1 <br> WIN THE GAME. <br> CLICK NEW GAME'
            win.style.position = 'absolute'
            win.style.bottom = '30px'
            win.style.left = '30px'

        }

        else if (scoreOne < scoreTwo) {
            win.style.display = 'block'
            win.innerHTML = 'PLAYER 2  <br> WIN THE GAME. <br> Click NEW GAME'
            win.style.position = 'absolute'
            win.style.bottom = '30px'
            win.style.left = '40px'

        }

    }

})

function changeP1() {
    activePlayer = 0
    right.classList.remove('active')
    right.classList.add('inactive')
    left.classList.remove('inactive')
    left.classList.add('active')
}

function changeP2() {
    activePlayer = 1
    left.classList.remove('active')
    left.classList.add('inactive')
    right.classList.remove('inactive')
    right.classList.add('active')
}

