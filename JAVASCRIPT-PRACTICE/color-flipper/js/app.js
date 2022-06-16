const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let boton = document.getElementById('button')
let color = document.getElementById('color')

boton.addEventListener('click', function () {
    let hexC = "#";
    for (let i = 0; i < 6; i++) {
        hexC += hex[getRandomNumber()]
    }
    color.textContent = hexC;
    document.body.style.backgroundColor = hexC;
})


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}
