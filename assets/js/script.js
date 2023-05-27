const mainCharBtn = document.querySelector("#mainCharBtn");
const sideCharBtn = document.querySelector("#sideCharBtn");
const moreCharBtn = document.querySelector("#moreCharBtn");

const mainCards = ".mainCard"
let mainCardsStat = false
const sideCards = ".sideCard"
let sideCardsStat = false
const moreCards = ".moreCard"
let moreCardsStat = false

mainCharBtn.addEventListener("click", function() {
    if (mainCardsStat) {
        mainCardsStat = hideCards(mainCards, mainCardsStat);
    } else {
        mainCardsStat = showCards(mainCards, mainCardsStat);
    }
})

sideCharBtn.addEventListener("click", function() {
    if (sideCardsStat) {
        sideCardsStat = hideCards(sideCards, sideCardsStat);
    } else {
        sideCardsStat = showCards(sideCards, sideCardsStat);
    }
})

moreCharBtn.addEventListener("click", function() {
    if (moreCardsStat) {
        moreCardsStat = hideCards(moreCards, moreCardsStat);
    } else {
        moreCardsStat = showCards(moreCards, moreCardsStat);
    }
})
    
function showCards(cardsClass, isShown) {
    const cards = document.querySelectorAll(cardsClass);
    if(!isShown){
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove("d-none");
        }
        isShown = true
        console.log(isShown)
    }
    return isShown
}

function hideCards(cardsClass, isShown) {
    const cards = document.querySelectorAll(cardsClass);
    if(isShown) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add("d-none");
        }
        isShown = false
        console.log(isShown)
    }
    return isShown
}
        
        
        
// function showCards() {
//     const cards = document.querySelectorAll(".mainCard");
//     for (let i = 0; i < cards.length; i++) {
//         cards[i].setAttribute("class", "m-3 d-inline mainCard");
//     }
// }
        
        
        


