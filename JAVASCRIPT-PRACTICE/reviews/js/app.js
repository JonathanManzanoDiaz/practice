//REVIEWS

const reviews = [
    {
        id: 1,
        name: "David Gomes",
        job: "MODEL",
        img: "/img/1.jpg",
    },
    
    {
        id: 2,
        name: "David Gomes",
        job: "MODEL",
        img: "/img/2.jpg"
    },

    {
        id: 3,
        name: "J. Cruz",
        job: "MODEL",
        img: "/img/3.jpg"
    },

    {
        id: 4,
        name: "Emre Keshavarz",
        job: "MODEL",
        img: "/img/4.jpg"
    },

    {
        id: 5,
        name: "Rameez Kottol",
        job: "MODEL",
        img: "/img/5.jpg"
    }

]


// SELECTORS

const img = document.getElementById("profile")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const leftBtn = document.querySelector(".btn-left")
const rightBtn = document.querySelector(".btn-right")
const randomBtn = document.querySelector(".btn-surprise")

// STARTING

let currentItem = 0;

// load start item

window.addEventListener("DOMContentLoaded", function() {
 showModel(currentItem);
})

function showModel(person) {
    const item= reviews[person]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
}

// show next

rightBtn.addEventListener("click", function() {
    currentItem++;
    showModel(currentItem)
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
})

leftBtn.addEventListener("click", function() {
    currentItem--;
    showModel(currentItem)
    if (currentItem < reviews.length - 1) {
        currentItem = 0
    }
})

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem)
    showModel();
})