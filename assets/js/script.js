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
    starWarsGen.next()
    if (mainCardsStat) {
        mainCardsStat = hideCards(mainCards, mainCardsStat);
    } else {
        mainCardsStat = showCards(mainCards, mainCardsStat);
    }
})

sideCharBtn.addEventListener("click", function() {
    starWarsGen.next()
    starWarsGen.next()
    if (sideCardsStat) {
        sideCardsStat = hideCards(sideCards, sideCardsStat);
    } else {
        sideCardsStat = showCards(sideCards, sideCardsStat);
    }
})

moreCharBtn.addEventListener("click", function() {
    starWarsGen.next()
    starWarsGen.next()
    starWarsGen.next()
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

async function* apiGenerator() {
    const response = await fetch("https://swapi.dev/api/people/")
    const data = await response.json()
    const response2 = await fetch("https://swapi.dev/api/people/?page=2")
    const data2 = await response2.json()
    console.log(data)
    console.log(data2)
    contentFillerMain("#firstMain", data, 0)
    contentFillerMain("#secondMain", data, 1)
    contentFillerMain("#thirdMain", data, 2)
    contentFillerMain("#fourthMain", data, 3)
    contentFillerMain("#fifthMain", data, 4)
    yield 1
    contentFillerSide("#firstSide", data, 5)
    contentFillerSide("#secondSide", data, 6)
    contentFillerSide("#thirdSide", data, 7)
    contentFillerSide("#fourthSide", data, 8)
    contentFillerSide("#fifthSide", data, 9)
    yield 2
    contentFillerMore("#firstMore", data2, 0)
    contentFillerMore("#secondMore", data2, 1)
    contentFillerMore("#thirdMore", data2, 2)
    contentFillerMore("#fourthMore", data2, 3)
    contentFillerMore("#fifthMore", data2, 4)
    yield 3
}

function contentFillerMain(cardId, data, num) {
    card = document.querySelector(cardId)
    card.innerHTML = `<div class="text-center pb-1"><a disabled class="btn btn-danger w-50 opacity-75"></a></div>
    <h5 class="card-title mt-2">${data.results[num].name}</h5>
    <p class="card-text">Estatura: ${data.results[num].height} peso: ${data.results[num].mass}</p>`
}

function contentFillerSide(cardId, data, num) {
    card = document.querySelector(cardId)
    card.innerHTML = `<div class="text-center pb-1"><a disabled class="btn btn-warning w-50 opacity-75"></a></div>
    <h5 class="card-title mt-2">${data.results[num].name}</h5>
    <p class="card-text">Estatura: ${data.results[num].height} peso: ${data.results[num].mass}</p>`
}

function contentFillerMore(cardId, data, num) {
    card = document.querySelector(cardId)
    card.innerHTML = `<div class="text-center pb-1"><a disabled class="btn btn-primary w-50 opacity-75"></a></div>
    <h5 class="card-title mt-2">${data.results[num].name}</h5>
    <p class="card-text">Estatura: ${data.results[num].height} peso: ${data.results[num].mass}</p>`
}

const starWarsGen = apiGenerator()