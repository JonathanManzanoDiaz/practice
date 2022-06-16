'use strict'

let typed = document.querySelector('.message')
let check = document.querySelector('.check')
let again = document.querySelector('.again')
let numI = document.querySelector('.interro')
let score = document.querySelector('.score')
let inputN = document.querySelector('input')
let scoreP = 20

const sNumber = Math.trunc(Math.random() * 20) + 1

inputN.addEventListener("change", function () {
    let v = parseInt(this.value);
    if (v < 1) this.value = 1;
    if (v > 20) this.value = 20;
});
check.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (guess > 0) {
        typed.innerHTML = guess
    }
    // WHEN THERE IS NOT INPUT
    if (!guess) {
        typed.innerHTML = '🤦‍♂️ A number please!'
    } else if (guess === sNumber) {
        typed.innerHTML = 'YOU GET THE NUMBER!!!'
        document.querySelector('body').style.backgroundColor = '#60b347';
        typed.style.fontSize = '50px'
        typed.style.fontWeight = 'bold'
        check.style.display = 'none'
        again.style.fontSize = '40px'
        numI.textContent = sNumber
    }
    else if (guess > sNumber) {
        if (scoreP > 1) {

            typed.textContent = 'Too High!'
            scoreP--
            const guess = document.querySelector('.guess').value = '';
            score.textContent = scoreP
        }
        else {
            typed.innerHTML = 'YOU LOST THE GAME!'
            score.textContent = 0
        }
    }
    else if (guess < sNumber) {
        if (scoreP > 1) {

            typed.textContent = 'Too Low!'
            const guess = document.querySelector('.guess').value = '';
            scoreP--
            score.textContent = scoreP
        }
        else {
            typed.innerHTML = 'YOU LOST THE GAME!'
            score.textContent = 0
        }
    }

})


again.addEventListener('click', function () {
    location.reload();

})
