let countEl = document.getElementById('count-el')
// console.log(countEl)
let countBadge = document.getElementById("badge")


const mainImg = document.querySelector("#main-img")
console.log(mainImg)
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function decrease() {
    if (count >= 1) {
        count -= 1
    } else {
        count = 0
    }
    countEl.innerText = count

}

function add() {
    countBadge.textContent = count
    console.log(count)
}


const imagesrc1 = "./images/image-product-1.jpg"
const imagesrc2 = "./images/image-product-2.jpg"
const imagesrc3 = "./images/image-product-3.jpg"
const imagesrc4 = "./images/image-product-4.jpg"

function imgscr() {
    // if (number === 1) {
    //     mainImg = imagesrc1;
    // } else if (number === 2) {
    //     mainImg = imagesrc2
    // }
    // else if (number === 3) {
    //     mainImg = imagesrc3
    // } else (number === 4); {
    //     mainImg = imagesrc4
    // }
    count += 2
    console.log(count)
}