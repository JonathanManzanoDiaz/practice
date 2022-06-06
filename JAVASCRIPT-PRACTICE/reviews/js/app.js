//REVIEWS

const reviews = [
    {
        id: 1,
        name: "David Gomes",
        job: "MODEL",
        img: "https://images.pexels.com/photos/4048797/pexels-photo-4048797.jpeg?cs=srgb&dl=pexels-david-gomes-4048797.jpg&fm=jpg",
    },
    
    {
        id: 2,
        name: "David Gomes",
        job: "MODEL",
        img: "https://images.pexels.com/photos/4048800/pexels-photo-4048800.jpeg?cs=srgb&dl=pexels-david-gomes-4048800.jpg&fm=jpg"
    },

    {
        id: 3,
        name: "J. Cruz",
        job: "MODEL",
        img: "https://images.pexels.com/photos/2874118/pexels-photo-2874118.jpeg?cs=srgb&dl=pexels-j-cruz-2874118.jpg&fm=jpg"
    },

    {
        id: 4,
        name: "Emre Keshavarz",
        job: "MODEL",
        img: "https://images.pexels.com/photos/3919865/pexels-photo-3919865.jpeg?cs=srgb&dl=pexels-emre-keshavarz-3919865.jpg&fm=jpg"
    },

    {
        id: 5,
        name: "Rameez Kottol",
        job: "MODEL",
        img: "https://images.pexels.com/photos/4068664/pexels-photo-4068664.jpeg?cs=srgb&dl=pexels-rameez-kottol-4068664.jpg&fm=jpg"
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