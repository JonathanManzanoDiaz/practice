'use strict';

let btn = document.querySelectorAll('.btn')
let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')
let closeModal = document.querySelector('.close-modal')

for (let i = 0; btn.length; i++) {
    btn[i].addEventListener('click', () => {
        modal.classList.remove('hidden');
    })
    closeModal.addEventListener('click', function () {
        modal.classList.add('hidden')
    })
}